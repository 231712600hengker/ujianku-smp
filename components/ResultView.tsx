'use client';

import React, { useMemo, useState } from 'react';
import Markdown from 'react-markdown';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Cpu,
  FlaskConical,
  Loader2,
  MinusCircle,
  Printer,
  RotateCcw,
  Send,
  XCircle,
} from 'lucide-react';
import { AnswerMap, ExamQuestion, SubjectConfig, TopicResult } from '@/types/exam';
import ScientificDiagram from '@/components/diagrams/ScientificDiagrams';
import ExcelMiniTable from '@/components/diagrams/ExcelMiniTable';

interface ResultViewProps {
  subject: SubjectConfig;
  studentName: string;
  answers: AnswerMap;
  elapsedSeconds: number;
  onRetakeExam: () => void;
  onBackToMenu: () => void;
}

type ReviewFilter = 'all' | 'wrong' | 'correct' | 'pg' | 'bs';

interface TutorState {
  isOpen: boolean;
  loading: boolean;
  reply: string | null;
  error: string | null;
  customPrompt: string;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins} menit ${secs} detik`;
}

function getOptionLabel(q: ExamQuestion, key?: string): string {
  if (!key) return 'Tidak dijawab';
  const found = q.options.find((o) => o.key === key);
  if (!found) return key;
  return q.type === 'pg' ? `${found.key}. ${found.label}` : found.label;
}

export default function ResultView({
  subject,
  studentName,
  answers,
  elapsedSeconds,
  onRetakeExam,
  onBackToMenu,
}: ResultViewProps) {
  const [filter, setFilter] = useState<ReviewFilter>('all');
  const [tutorMap, setTutorMap] = useState<Record<number, TutorState>>({});

  const questions = subject.questions;
  const SubjectIcon = subject.id === 'ipa' ? FlaskConical : Cpu;

  const summary = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((q) => {
      const ans = answers[q.id];
      if (!ans) {
        unanswered += 1;
      } else if (ans === q.correctAnswer) {
        correct += 1;
      } else {
        incorrect += 1;
      }
    });

    const rawScore = (correct / questions.length) * 100;
    const score = Number.isInteger(rawScore) ? rawScore : Number(rawScore.toFixed(1));

    let predicate = 'Perlu Pendalaman Materi';
    let predicateTone = 'text-[#DC2626]';
    if (score >= 90) {
      predicate = 'Sangat Baik';
      predicateTone = 'text-[#059669]';
    } else if (score >= 75) {
      predicate = 'Baik';
      predicateTone = 'text-[#0284C7]';
    } else if (score >= 60) {
      predicate = 'Cukup';
      predicateTone = 'text-[#D97706]';
    }

    const topicBreakdown: TopicResult[] = subject.topics.map((topic) => {
      const topicQuestions = questions.filter((q) => q.topicId === topic.id);
      let tCorrect = 0;
      let tIncorrect = 0;
      let tUnanswered = 0;
      topicQuestions.forEach((q) => {
        const ans = answers[q.id];
        if (!ans) tUnanswered += 1;
        else if (ans === q.correctAnswer) tCorrect += 1;
        else tIncorrect += 1;
      });
      return {
        topicId: topic.id,
        topicName: topic.name,
        total: topicQuestions.length,
        correct: tCorrect,
        incorrect: tIncorrect,
        unanswered: tUnanswered,
      };
    });

    return {
      correct,
      incorrect,
      unanswered,
      score,
      predicate,
      predicateTone,
      topicBreakdown,
    };
  }, [questions, subject.topics, answers]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const ans = answers[q.id];
      const isCorrect = ans === q.correctAnswer;
      if (filter === 'wrong') return !isCorrect;
      if (filter === 'correct') return isCorrect;
      if (filter === 'pg') return q.type === 'pg';
      if (filter === 'bs') return q.type === 'bs';
      return true;
    });
  }, [questions, answers, filter]);

  const toggleTutor = (questionId: number) => {
    setTutorMap((prev) => {
      const current = prev[questionId] || {
        isOpen: false,
        loading: false,
        reply: null,
        error: null,
        customPrompt: '',
      };
      return {
        ...prev,
        [questionId]: { ...current, isOpen: !current.isOpen },
      };
    });
  };

  const updateCustomPrompt = (questionId: number, value: string) => {
    setTutorMap((prev) => {
      const current = prev[questionId] || {
        isOpen: true,
        loading: false,
        reply: null,
        error: null,
        customPrompt: '',
      };
      return {
        ...prev,
        [questionId]: { ...current, customPrompt: value },
      };
    });
  };

  const askTutor = async (
    q: ExamQuestion,
    mode: 'explain_simpler' | 'similar_example' | 'custom'
  ) => {
    const existing = tutorMap[q.id];
    const customPrompt = existing?.customPrompt?.trim() || '';

    if (mode === 'custom' && !customPrompt) {
      setTutorMap((prev) => ({
        ...prev,
        [q.id]: {
          ...(prev[q.id] || {
            isOpen: true,
            loading: false,
            reply: null,
            customPrompt: '',
          }),
          isOpen: true,
          error: 'Silakan ketik pertanyaanmu terlebih dahulu.',
        },
      }));
      return;
    }

    setTutorMap((prev) => ({
      ...prev,
      [q.id]: {
        isOpen: true,
        loading: true,
        reply: prev[q.id]?.reply ?? null,
        error: null,
        customPrompt: mode === 'custom' ? '' : prev[q.id]?.customPrompt ?? '',
      },
    }));

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: `${subject.title} Kelas 7 SMP`,
          question: q.question,
          topic: q.topicName,
          studentAnswer: getOptionLabel(q, answers[q.id]),
          correctAnswer: getOptionLabel(q, q.correctAnswer),
          explanation: q.explanation,
          mode,
          customPrompt,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Gagal mendapatkan respons dari Tutor AI.');
      }

      setTutorMap((prev) => ({
        ...prev,
        [q.id]: {
          ...prev[q.id],
          isOpen: true,
          loading: false,
          reply: data.reply,
          error: null,
        },
      }));
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Terjadi kesalahan jaringan saat menghubungi Tutor AI.';
      setTutorMap((prev) => ({
        ...prev,
        [q.id]: {
          ...prev[q.id],
          isOpen: true,
          loading: false,
          error: message,
        },
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 print:hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
              Hasil & Pembahasan
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-sky-200 bg-sky-50 text-[#0369A1] text-xs font-semibold whitespace-nowrap shrink-0">
              <SubjectIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{subject.shortTitle}</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a
              href="#ringkasan-skor"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Ringkasan Skor
            </a>
            <a
              href="#rincian-topik"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Rincian Topik
            </a>
            <a
              href="#pembahasan-soal"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Pembahasan
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-medium text-slate-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak</span>
            </button>
            <button
              type="button"
              onClick={onBackToMenu}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Menu Mapel</span>
              <span className="sm:hidden">Mapel</span>
            </button>
            <button
              type="button"
              onClick={onRetakeExam}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* 1. Score Summary Card */}
        <section
          id="ringkasan-skor"
          className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Score Hero */}
            <div className="lg:col-span-5 flex items-center gap-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col items-center justify-center shrink-0">
                <span className="text-xs font-medium text-slate-500">Skor Akhir</span>
                <span className="text-4xl sm:text-5xl font-bold text-slate-900 font-mono tabular-nums mt-0.5">
                  {summary.score}
                </span>
                <span className="text-[11px] text-slate-400 font-mono tabular-nums">
                  dari 100
                </span>
              </div>

              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-medium text-slate-500">
                  {subject.title} · {subject.subtitle}
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 truncate">
                  {studentName}
                </h1>
                <div className={`text-sm font-bold flex items-center gap-1.5 ${summary.predicateTone}`}>
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Predikat: {summary.predicate}</span>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-0.5 tabular-nums">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Waktu Pengerjaan: {formatDuration(elapsedSeconds)}</span>
                </div>
              </div>
            </div>

            {/* Summary KPI Strip */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#059669]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Jawaban Benar</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tabular-nums mt-2">
                  {summary.correct}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 tabular-nums">
                  dari {questions.length} soal
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#DC2626]">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Jawaban Salah</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tabular-nums mt-2">
                  {summary.incorrect}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 tabular-nums">
                  perlu ditinjau
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <MinusCircle className="w-4 h-4 shrink-0" />
                  <span>Tidak Dijawab</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tabular-nums mt-2">
                  {summary.unanswered}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 tabular-nums">
                  soal kosong
                </div>
              </div>
            </div>
          </div>

          {/* Quick Subject Switch & Retake Action Row */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-xs sm:text-sm text-slate-600">
              Ingin mencoba mata pelajaran lain atau mengulang simulasi {subject.shortTitle}?
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onBackToMenu}
                className="min-h-[40px] inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Menu Mata Pelajaran</span>
              </button>
              <button
                type="button"
                onClick={onRetakeExam}
                className="min-h-[40px] inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Ujian Ini</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. Dynamic Topic / Bab Breakdown Table */}
        <section
          id="rincian-topik"
          className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5"
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Rincian Penguasaan per Bab / Topik ({subject.shortTitle})
            </h2>
            <p className="text-sm text-slate-600 mt-0.5">
              Distribusi jawaban benar dan salah pada seluruh {subject.topics.length} topik materi ujian {subject.title}.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-slate-200 text-xs font-semibold text-slate-700">
                  <th className="px-4 py-3 w-12">No</th>
                  <th className="px-4 py-3">Topik / Bab Materi</th>
                  <th className="px-4 py-3 text-center">Jumlah Soal</th>
                  <th className="px-4 py-3 text-center">Benar</th>
                  <th className="px-4 py-3 text-center">Salah / Kosong</th>
                  <th className="px-4 py-3 w-44">Penguasaan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {summary.topicBreakdown.map((item) => {
                  const pct =
                    item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
                  const wrongOrEmpty = item.incorrect + item.unanswered;
                  return (
                    <tr key={item.topicId} className="hover:bg-slate-50/70">
                      <td className="px-4 py-3 font-mono text-xs text-slate-500 tabular-nums">
                        {String(item.topicId).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {item.topicName}
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-slate-700 tabular-nums">
                        {item.total}
                      </td>
                      <td className="px-4 py-3 text-center font-mono font-semibold text-[#059669] tabular-nums">
                        {item.correct}
                      </td>
                      <td className="px-4 py-3 text-center font-mono font-semibold text-[#DC2626] tabular-nums">
                        {wrongOrEmpty}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                pct === 100
                                  ? 'bg-[#059669]'
                                  : pct >= 50
                                  ? 'bg-[#0284C7]'
                                  : 'bg-[#DC2626]'
                              }`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="font-mono text-xs font-semibold text-slate-700 w-10 text-right tabular-nums">
                            {pct}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Full Discussion & Review Mode + Tanya Tutor AI */}
        <section id="pembahasan-soal" className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Mode Review Pembahasan Lengkap
              </h2>
              <p className="text-sm text-slate-600 mt-0.5">
                Periksa jawabanmu, pelajari langkah penyelesaian, atau gunakan Tutor AI untuk penjelasan tambahan.
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg print:hidden">
              {(
                [
                  { id: 'all', label: `Semua (${questions.length})` },
                  {
                    id: 'wrong',
                    label: `Salah / Kosong (${summary.incorrect + summary.unanswered})`,
                  },
                  { id: 'correct', label: `Benar (${summary.correct})` },
                  { id: 'pg', label: 'PG (25)' },
                  { id: 'bs', label: 'Benar/Salah (5)' },
                ] as { id: ReviewFilter; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    filter === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-10 text-center text-sm text-slate-500">
              Tidak ada soal pada kategori filter ini.
            </div>
          ) : (
            <div className="space-y-5">
              {filteredQuestions.map((q) => {
                const studentAns = answers[q.id];
                const isUnanswered = !studentAns;
                const isCorrect = studentAns === q.correctAnswer;
                const tutor = tutorMap[q.id];

                return (
                  <article
                    key={q.id}
                    className="bg-white rounded-xl border border-slate-200 p-5 sm:p-7 space-y-5"
                  >
                    {/* Header Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-slate-200">
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
                        <span className="font-bold text-slate-900 tabular-nums">
                          Soal {String(q.id).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{q.topicName}</span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {q.type === 'pg' ? 'Pilihan Ganda' : 'Benar / Salah'}
                        </span>
                      </div>

                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Benar</span>
                        </span>
                      ) : isUnanswered ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <MinusCircle className="w-4 h-4" />
                          <span>Tidak Dijawab</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626]">
                          <XCircle className="w-4 h-4" />
                          <span>Salah</span>
                        </span>
                      )}
                    </div>

                    {/* Question Body */}
                    <div className="text-[15px] leading-[1.7] text-slate-900 whitespace-pre-line">
                      {q.question}
                    </div>

                    {/* Stimulus Table */}
                    {q.stimulusTable && (
                      <div className="overflow-x-auto rounded-lg border border-slate-200">
                        <table className="w-full text-left border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                              {q.stimulusTable.headers.map((header, idx) => (
                                <th
                                  key={idx}
                                  className="px-4 py-2 font-semibold text-slate-800 text-xs sm:text-sm"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {q.stimulusTable.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="bg-white">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className="px-4 py-2 text-slate-700 tabular-nums text-xs sm:text-sm"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Excel Mini Spreadsheet Table */}
                    {q.excelTable && <ExcelMiniTable spec={q.excelTable} />}

                    {/* Precision Diagram with Highlight Annotations */}
                    {q.diagram && (
                      <ScientificDiagram type={q.diagram} showHighlight={true} />
                    )}

                    {/* Answer Comparison Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div
                        className={`rounded-lg border p-3.5 ${
                          isCorrect
                            ? 'border-emerald-200 bg-emerald-50/60'
                            : isUnanswered
                            ? 'border-slate-200 bg-slate-50'
                            : 'border-red-200 bg-red-50/60'
                        }`}
                      >
                        <div className="text-xs font-semibold text-slate-500 mb-1">
                          Jawaban Anda
                        </div>
                        <div
                          className={`font-medium ${
                            isCorrect
                              ? 'text-[#047857]'
                              : isUnanswered
                              ? 'text-slate-500'
                              : 'text-[#B91C1C]'
                          }`}
                        >
                          {getOptionLabel(q, studentAns)}
                        </div>
                      </div>

                      <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3.5">
                        <div className="text-xs font-semibold text-slate-500 mb-1">
                          Kunci Jawaban Benar
                        </div>
                        <div className="font-semibold text-[#047857]">
                          {getOptionLabel(q, q.correctAnswer)}
                        </div>
                      </div>
                    </div>

                    {/* Step-by-Step Explanation */}
                    <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5 space-y-2.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <BookOpen className="w-4 h-4 text-[#0284C7]" />
                        <span>Pembahasan & Langkah Penyelesaian</span>
                      </div>

                      {q.formula && (
                        <div className="inline-block rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-mono font-semibold text-[#0369A1]">
                          {q.formula}
                        </div>
                      )}

                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                        {q.explanation}
                      </p>
                    </div>

                    {/* Optional Gemini API: Tanya Tutor AI */}
                    <div className="pt-1 print:hidden">
                      <button
                        type="button"
                        onClick={() => toggleTutor(q.id)}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition-colors cursor-pointer"
                      >
                        <Bot className="w-4 h-4 text-[#0284C7]" />
                        <span>Tanya Tutor AI</span>
                        {tutor?.isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </button>

                      {tutor?.isOpen && (
                        <div className="mt-3 rounded-lg border border-slate-200 bg-white p-4 space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              disabled={tutor.loading}
                              onClick={() => askTutor(q, 'explain_simpler')}
                              className="px-3 py-1.5 rounded-md border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-medium text-slate-800 disabled:opacity-50 transition-colors cursor-pointer"
                            >
                              Jelaskan Lebih Sederhana
                            </button>
                            <button
                              type="button"
                              disabled={tutor.loading}
                              onClick={() => askTutor(q, 'similar_example')}
                              className="px-3 py-1.5 rounded-md border border-slate-200 bg-[#F8FAFC] hover:bg-slate-100 text-xs font-medium text-slate-800 disabled:opacity-50 transition-colors cursor-pointer"
                            >
                              Beri Contoh Soal Serupa
                            </button>
                          </div>

                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              askTutor(q, 'custom');
                            }}
                            className="flex gap-2"
                          >
                            <input
                              type="text"
                              value={tutor.customPrompt}
                              onChange={(e) =>
                                updateCustomPrompt(q.id, e.target.value)
                              }
                              placeholder="Tulis pertanyaan lanjutan tentang soal ini..."
                              className="flex-1 min-h-[38px] px-3 py-1.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                            />
                            <button
                              type="submit"
                              disabled={tutor.loading}
                              className="min-h-[38px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold disabled:opacity-50 transition-colors cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" />
                              <span>Tanya</span>
                            </button>
                          </form>

                          {tutor.loading && (
                            <div className="flex items-center gap-2 text-xs text-slate-500 py-2">
                              <Loader2 className="w-4 h-4 animate-spin text-[#0284C7]" />
                              <span>Tutor AI sedang menyusun penjelasan...</span>
                            </div>
                          )}

                          {tutor.error && (
                            <div
                              className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-[#DC2626]"
                              role="alert"
                            >
                              {tutor.error}
                            </div>
                          )}

                          {tutor.reply && !tutor.loading && (
                            <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-3.5 text-sm text-slate-800 leading-relaxed">
                              <div className="prose prose-sm max-w-none prose-slate">
                                <Markdown>{tutor.reply}</Markdown>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Bottom Action Bar */}
        <div className="pt-4 pb-8 flex flex-wrap items-center justify-center gap-3 print:hidden">
          <button
            type="button"
            onClick={onBackToMenu}
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Menu Mata Pelajaran</span>
          </button>
          <button
            type="button"
            onClick={onRetakeExam}
            className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Simulasi Ujian</span>
          </button>
        </div>
      </main>
    </div>
  );
}
