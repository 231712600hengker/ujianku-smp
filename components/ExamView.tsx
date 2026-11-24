'use client';

import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Flag,
  FlaskConical,
  LayoutGrid,
  Send,
  X,
} from 'lucide-react';
import { AnswerMap, DoubtMap, ExamQuestion, SubjectId } from '@/types/exam';
import ScientificDiagram from '@/components/diagrams/ScientificDiagrams';
import ExcelMiniTable from '@/components/diagrams/ExcelMiniTable';

interface ExamViewProps {
  subjectId: SubjectId;
  subjectTitle: string;
  studentName: string;
  questions: ExamQuestion[];
  durationSeconds: number;
  answers: AnswerMap;
  doubts: DoubtMap;
  onSelectAnswer: (questionId: number, optionKey: string) => void;
  onToggleDoubt: (questionId: number) => void;
  onFinishExam: (elapsedSeconds: number) => void;
}

function formatTimer(seconds: number): string {
  const safe = Math.max(0, seconds);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default function ExamView({
  subjectId,
  subjectTitle,
  studentName,
  questions,
  durationSeconds,
  answers,
  doubts,
  onSelectAnswer,
  onToggleDoubt,
  onFinishExam,
}: ExamViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(durationSeconds);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingSeconds === 0) {
      onFinishExam(durationSeconds);
    }
  }, [remainingSeconds, durationSeconds, onFinishExam]);

  const answeredCount = questions.filter((q) => Boolean(answers[q.id])).length;
  const doubtCount = questions.filter((q) => Boolean(doubts[q.id])).length;
  const unansweredCount = totalQuestions - answeredCount;

  const isLowTime = remainingSeconds <= 300;
  const isWarningTime = remainingSeconds > 300 && remainingSeconds <= 600;

  const currentAnswer = answers[currentQuestion.id];
  const isCurrentDoubt = Boolean(doubts[currentQuestion.id]);
  const SubjectIcon = subjectId === 'ipa' ? FlaskConical : Cpu;

  const handleConfirmFinish = () => {
    const elapsed = durationSeconds - remainingSeconds;
    onFinishExam(elapsed);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Compact Sticky CBT Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
              Simulasi CBT
            </span>
            {/* Subject Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-sky-200 bg-sky-50 text-[#0369A1] text-xs font-semibold whitespace-nowrap shrink-0">
              <SubjectIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{subjectTitle}</span>
            </span>
            <span className="hidden md:inline text-slate-300" aria-hidden="true">
              ·
            </span>
            <span className="hidden md:inline text-sm font-medium text-slate-600 truncate max-w-[200px]">
              {studentName}
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Live Countdown Timer */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-mono font-semibold tabular-nums whitespace-nowrap shrink-0 ${
                isLowTime
                  ? 'border-red-300 bg-red-50 text-[#DC2626]'
                  : isWarningTime
                  ? 'border-amber-300 bg-amber-50 text-[#D97706]'
                  : 'border-slate-200 bg-[#F8FAFC] text-slate-900'
              }`}
              aria-live="polite"
            >
              <Clock className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline font-sans text-xs font-medium">
                Sisa Waktu:
              </span>
              <span>{formatTimer(remainingSeconds)}</span>
            </div>

            {/* Mobile Navigator Toggle */}
            <button
              type="button"
              onClick={() => setShowMobileNav(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4 text-[#0284C7]" />
              <span className="tabular-nums">
                {answeredCount}/{totalQuestions}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Selesai Ujian</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Two-Zone CBT Workspace */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Center Zone: Question Stage */}
        <section className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-5 sm:p-8 space-y-6">
          {/* Unboxed Question Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
              <span className="font-bold text-slate-900 tabular-nums">
                Soal {String(currentQuestion.id).padStart(2, '0')} dari {totalQuestions}
              </span>
              <span aria-hidden="true">·</span>
              <span>{currentQuestion.topicName}</span>
              <span aria-hidden="true">·</span>
              <span>
                {currentQuestion.type === 'pg' ? 'Pilihan Ganda' : 'Benar / Salah'}
              </span>
            </div>

            {isCurrentDoubt ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D97706]">
                <Flag className="w-3.5 h-3.5" />
                <span>Ditandai Ragu-ragu</span>
              </span>
            ) : currentAnswer ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#059669]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sudah Dijawab</span>
              </span>
            ) : (
              <span className="text-xs font-medium text-slate-400">Belum Dijawab</span>
            )}
          </div>

          {/* Question Text */}
          <div className="text-base sm:text-[17px] leading-[1.7] text-slate-900 whitespace-pre-line">
            {currentQuestion.question}
          </div>

          {/* Optional Data Table Stimulus */}
          {currentQuestion.stimulusTable && (
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left border-collapse text-sm">
                {currentQuestion.stimulusTable.caption && (
                  <caption className="px-4 py-2.5 text-left text-xs font-semibold text-slate-600 bg-[#F8FAFC] border-b border-slate-200">
                    {currentQuestion.stimulusTable.caption}
                  </caption>
                )}
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {currentQuestion.stimulusTable.headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-4 py-2.5 font-semibold text-slate-800 text-xs sm:text-sm"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentQuestion.stimulusTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="bg-white hover:bg-slate-50/70">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="px-4 py-2.5 text-slate-700 tabular-nums text-xs sm:text-sm"
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

          {/* Optional Excel Mini Spreadsheet Table */}
          {currentQuestion.excelTable && (
            <ExcelMiniTable spec={currentQuestion.excelTable} />
          )}

          {/* Optional Precision SVG Diagram */}
          {currentQuestion.diagram && (
            <ScientificDiagram type={currentQuestion.diagram} showHighlight={false} />
          )}

          {/* Interactive Answer Options */}
          <div className="pt-2">
            {currentQuestion.type === 'pg' ? (
              <div className="space-y-3" role="radiogroup" aria-label="Pilihan Jawaban">
                {currentQuestion.options.map((opt) => {
                  const isSelected = currentAnswer === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => onSelectAnswer(currentQuestion.id, opt.key)}
                      className={`w-full text-left min-h-[48px] px-4 py-3.5 rounded-lg border flex items-start gap-3.5 transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-[#0284C7] bg-[#0284C7]/[0.06] text-slate-900'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-md flex items-center justify-center text-sm font-mono font-bold shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#0284C7] text-white'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="text-sm sm:text-[15px] leading-relaxed pt-0.5">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                role="radiogroup"
                aria-label="Pilihan Benar atau Salah"
              >
                {currentQuestion.options.map((opt) => {
                  const isSelected = currentAnswer === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => onSelectAnswer(currentQuestion.id, opt.key)}
                      className={`min-h-[60px] px-5 py-4 rounded-lg border flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-[#0284C7] bg-[#0284C7]/[0.06] text-slate-900'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span className="text-base font-bold">{opt.label}</span>
                      <span
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-[#0284C7] bg-[#0284C7] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bottom Question Controls */}
          <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              className="min-h-[42px] inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleDoubt(currentQuestion.id)}
              className={`min-h-[42px] inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                isCurrentDoubt
                  ? 'border-[#D97706] bg-amber-50 text-[#B45309]'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Flag className="w-4 h-4" />
              <span>{isCurrentDoubt ? 'Batalkan Ragu-ragu' : 'Tandai Ragu-ragu'}</span>
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))
                }
                className="min-h-[42px] inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirmModal(true)}
                className="min-h-[42px] inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#059669] hover:bg-[#047857] text-white text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Selesai & Kumpulkan</span>
              </button>
            )}
          </div>
        </section>

        {/* Right Zone: Desktop Question Navigator Panel */}
        <aside className="hidden lg:block lg:col-span-4 bg-white rounded-xl border border-slate-200 p-5 space-y-5 sticky top-22">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-base font-bold text-slate-900">Navigasi Nomor Soal</h2>
            <span className="text-xs font-mono font-semibold text-slate-600 tabular-nums">
              {answeredCount} / {totalQuestions}
            </span>
          </div>

          {/* 30-Question Number Grid (5x6) */}
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const isActive = idx === currentIndex;
              const isAnswered = Boolean(answers[q.id]);
              const isDoubt = Boolean(doubts[q.id]);

              let btnStyle =
                'border-slate-200 bg-white text-slate-700 hover:border-slate-400';
              if (isDoubt) {
                btnStyle =
                  'border-[#D97706] bg-amber-50 text-[#B45309] hover:bg-amber-100';
              } else if (isAnswered) {
                btnStyle =
                  'border-[#059669] bg-emerald-50 text-[#047857] hover:bg-emerald-100';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Soal nomor ${q.id}${
                    isDoubt
                      ? ', ditandai ragu-ragu'
                      : isAnswered
                      ? ', sudah dijawab'
                      : ', belum dijawab'
                  }`}
                  className={`relative h-10 rounded-lg border font-mono text-sm font-semibold tabular-nums flex items-center justify-center transition-colors cursor-pointer ${btnStyle} ${
                    isActive ? 'ring-2 ring-[#0284C7] ring-offset-1' : ''
                  }`}
                >
                  <span>{q.id}</span>
                  {isDoubt && (
                    <Flag className="w-2.5 h-2.5 absolute top-1 right-1 text-[#D97706]" />
                  )}
                  {!isDoubt && isAnswered && (
                    <Check className="w-2.5 h-2.5 absolute top-1 right-1 text-[#059669]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Dual-Coded Legend */}
          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded border border-[#059669] bg-emerald-50 text-[#047857] inline-flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </span>
                <span>Sudah Dijawab</span>
              </div>
              <span className="font-mono font-semibold text-slate-900 tabular-nums">
                {answeredCount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded border border-[#D97706] bg-amber-50 text-[#B45309] inline-flex items-center justify-center">
                  <Flag className="w-3 h-3" />
                </span>
                <span>Ragu-ragu</span>
              </div>
              <span className="font-mono font-semibold text-slate-900 tabular-nums">
                {doubtCount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded border border-slate-200 bg-white inline-block" />
                <span>Belum Dijawab</span>
              </div>
              <span className="font-mono font-semibold text-slate-900 tabular-nums">
                {unansweredCount}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowConfirmModal(true)}
            className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Kumpulkan Jawaban</span>
          </button>
        </aside>
      </main>

      {/* Mobile Navigator Drawer */}
      {showMobileNav && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-slate-900/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Navigasi Nomor Soal"
        >
          <div className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-xl border border-slate-200 p-5 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h2 className="text-base font-bold text-slate-900">
                Navigasi Soal ({answeredCount}/{totalQuestions})
              </h2>
              <button
                type="button"
                onClick={() => setShowMobileNav(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                aria-label="Tutup navigasi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isActive = idx === currentIndex;
                const isAnswered = Boolean(answers[q.id]);
                const isDoubt = Boolean(doubts[q.id]);

                let btnStyle = 'border-slate-200 bg-white text-slate-700';
                if (isDoubt) {
                  btnStyle = 'border-[#D97706] bg-amber-50 text-[#B45309]';
                } else if (isAnswered) {
                  btnStyle = 'border-[#059669] bg-emerald-50 text-[#047857]';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowMobileNav(false);
                    }}
                    className={`relative h-11 rounded-lg border font-mono text-sm font-semibold tabular-nums flex items-center justify-center cursor-pointer ${btnStyle} ${
                      isActive ? 'ring-2 ring-[#0284C7] ring-offset-1' : ''
                    }`}
                  >
                    <span>{q.id}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200">
              <span>Dijawab: {answeredCount}</span>
              <span>Ragu: {doubtCount}</span>
              <span>Kosong: {unansweredCount}</span>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Konfirmasi Selesai Ujian"
        >
          <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-[#D97706]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Selesaikan & Kumpulkan Ujian?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Setelah dikumpulkan, jawaban ujian {subjectTitle} tidak dapat diubah lagi dan skor akan langsung dihitung.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Soal Sudah Dijawab</span>
                <span className="font-mono font-bold text-[#059669] tabular-nums">
                  {answeredCount} soal
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Ditandai Ragu-ragu</span>
                <span className="font-mono font-bold text-[#D97706] tabular-nums">
                  {doubtCount} soal
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Belum Dijawab</span>
                <span className="font-mono font-bold text-slate-900 tabular-nums">
                  {unansweredCount} soal
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="min-h-[42px] px-4 py-2 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Periksa Kembali
              </button>
              <button
                type="button"
                onClick={handleConfirmFinish}
                className="min-h-[42px] px-5 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold cursor-pointer"
              >
                Ya, Kumpulkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
