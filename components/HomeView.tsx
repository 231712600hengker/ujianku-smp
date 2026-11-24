'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckSquare,
  Clock,
  Code2,
  Cpu,
  FileSpreadsheet,
  FileText,
  FlaskConical,
  Gauge,
  GitBranch,
  Ruler,
  Thermometer,
  TrendingUp,
} from 'lucide-react';
import { SUBJECTS, SUBJECT_LIST } from '@/data/subjects';
import ScientificDiagram from '@/components/diagrams/ScientificDiagrams';
import ExcelMiniTable from '@/components/diagrams/ExcelMiniTable';
import { DiagramType, ExcelTableSpec, SubjectId } from '@/types/exam';

interface HomeViewProps {
  initialName: string;
  initialSubjectId: SubjectId | null;
  onStartExam: (studentName: string, subjectId: SubjectId) => void;
}

type PreviewItem =
  | {
      kind: 'diagram';
      id: DiagramType;
      subjectId: SubjectId;
      label: string;
      caption: string;
    }
  | {
      kind: 'excel';
      id: 'excel_preview';
      subjectId: SubjectId;
      label: string;
      caption: string;
    };

const PREVIEW_ITEMS: PreviewItem[] = [
  {
    kind: 'diagram',
    id: 'jangka_sorong',
    subjectId: 'ipa',
    label: 'Jangka Sorong',
    caption: 'Ilustrasi skala utama dan skala nonius ketelitian 0,01 cm (IPA)',
  },
  {
    kind: 'diagram',
    id: 'mikrometer_sekrup',
    subjectId: 'ipa',
    label: 'Mikrometer',
    caption: 'Selubung utama dan skala putar ketelitian 0,01 mm (IPA)',
  },
  {
    kind: 'diagram',
    id: 'termometer',
    subjectId: 'ipa',
    label: 'Termometer',
    caption: 'Skala suhu Celcius lengkap dengan pembesaran meniskus (IPA)',
  },
  {
    kind: 'diagram',
    id: 'grafik_kalor',
    subjectId: 'ipa',
    label: 'Grafik Kalor',
    caption: 'Kurva pemanasan es menjadi uap untuk kalor laten (IPA)',
  },
  {
    kind: 'diagram',
    id: 'flowchart_symbols',
    subjectId: 'informatika',
    label: 'Simbol Flowchart',
    caption: 'Pengenalan simbol Terminator, Input/Output, Proses, dan Decision (TIK)',
  },
  {
    kind: 'diagram',
    id: 'flowchart_max3',
    subjectId: 'informatika',
    label: 'Diagram Alir',
    caption: 'Flowchart logika mencari nilai terbesar dari 3 bilangan (TIK)',
  },
  {
    kind: 'excel',
    id: 'excel_preview',
    subjectId: 'informatika',
    label: 'Tabel Excel',
    caption: 'Simulasi spreadsheet dengan baris, kolom, dan formula bar (TIK)',
  },
];

const SAMPLE_EXCEL_SPEC: ExcelTableSpec = {
  caption: 'Contoh Tabel Spreadsheet — Nilai Praktikum Informatika',
  formulaBar: '=AVERAGE(B2:B5)',
  columns: ['A', 'B', 'C'],
  rows: [
    { rowNumber: 1, cells: ['Nama Siswa', 'Nilai', 'Keterangan'] },
    { rowNumber: 2, cells: ['Andi', 85, 'Tuntas'] },
    { rowNumber: 3, cells: ['Bima', 92, 'Tuntas'] },
    { rowNumber: 4, cells: ['Citra', 76, 'Remidi'] },
    { rowNumber: 5, cells: ['Dewi', 88, 'Tuntas'] },
  ],
};

export default function HomeView({
  initialName,
  initialSubjectId,
  onStartExam,
}: HomeViewProps) {
  const [name, setName] = useState(initialName);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | null>(
    initialSubjectId
  );
  const [error, setError] = useState('');
  const [previewId, setPreviewId] = useState<string>(
    initialSubjectId === 'informatika' ? 'flowchart_max3' : 'jangka_sorong'
  );

  const activeSubjectForInfo = selectedSubject
    ? SUBJECTS[selectedSubject]
    : SUBJECTS.ipa;

  const visiblePreviews = selectedSubject
    ? PREVIEW_ITEMS.filter((item) => item.subjectId === selectedSubject)
    : PREVIEW_ITEMS.slice(0, 4);

  const currentPreview =
    PREVIEW_ITEMS.find((p) => p.id === previewId) || visiblePreviews[0];

  const handleSelectSubject = (id: SubjectId) => {
    setSelectedSubject(id);
    if (error) setError('');
    setPreviewId(id === 'informatika' ? 'flowchart_max3' : 'jangka_sorong');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Silakan masukkan nama lengkap siswa terlebih dahulu.');
      return;
    }
    if (trimmed.length < 2) {
      setError('Nama minimal terdiri dari 2 karakter.');
      return;
    }
    if (!selectedSubject) {
      setError('Silakan pilih salah satu mata pelajaran (IPA atau Informatika / TIK).');
      return;
    }
    setError('');
    onStartExam(trimmed, selectedSubject);
  };

  const scrollToForm = () => {
    const input = document.getElementById('student-name-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => input.focus(), 300);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Top Bar Contract: 3 zones */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#beranda"
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            Portal CBT Kelas 7
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a
              href="#beranda"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Mata Pelajaran
            </a>
            <a
              href="#kisi-kisi"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Kisi-Kisi
            </a>
            <a
              href="#petunjuk"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Petunjuk
            </a>
            <a
              href="#pratinjau"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Ilustrasi
            </a>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={scrollToForm}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#0284C7] rounded-lg hover:bg-[#0369A1] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Mulai Ujian
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero, Subject Selection & Student Registration */}
        <section id="beranda" className="py-10 sm:py-14 border-b border-slate-200 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Title, Subject Picker & Registration Form */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                <span>Portal Latihan Ujian Kelas 7 SMP</span>
                <span aria-hidden="true">·</span>
                <span>Kurikulum Merdeka</span>
                <span aria-hidden="true">·</span>
                <span>IPA & Informatika</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2] text-balance">
                Simulasi Ujian Interaktif Multi-Mata Pelajaran
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Pilih mata pelajaran yang ingin kamu latih, lengkapi nama siswa, dan kerjakan 30 soal terstruktur lengkap dengan ilustrasi interaktif serta pembahasan Tutor AI.
              </p>

              {/* Registration & Subject Selection Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Step 1: Subject Cards */}
                <div className="space-y-2.5">
                  <div className="text-sm font-semibold text-slate-800">
                    1. Pilih Mata Pelajaran Ujian
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SUBJECT_LIST.map((subject) => {
                      const isSelected = selectedSubject === subject.id;
                      const Icon =
                        subject.id === 'ipa' ? FlaskConical : Cpu;
                      return (
                        <button
                          key={subject.id}
                          type="button"
                          onClick={() => handleSelectSubject(subject.id)}
                          aria-pressed={isSelected}
                          className={`text-left rounded-xl border p-4 transition-colors cursor-pointer flex flex-col justify-between gap-3 ${
                            isSelected
                              ? 'border-[#0284C7] bg-[#0284C7]/[0.05] ring-2 ring-[#0284C7]/20'
                              : 'border-slate-200 bg-[#F8FAFC] hover:border-slate-300 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 ${
                                isSelected
                                  ? 'bg-[#0284C7] border-[#0284C7] text-white'
                                  : 'bg-white border-slate-200 text-slate-700'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <span
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'border-[#0284C7] bg-[#0284C7] text-white'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <div className="font-bold text-slate-900 text-sm sm:text-[15px] leading-snug">
                              {subject.title}
                            </div>
                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {subject.description}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-600 tabular-nums">
                            <span className="inline-flex items-center gap-1">
                              <FileText className="w-3 h-3 text-[#0284C7]" />
                              30 Soal (25 PG, 5 B/S)
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#0284C7]" />
                              60 Menit
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Student Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="student-name-input"
                    className="block text-sm font-semibold text-slate-800"
                  >
                    2. Nama Lengkap Siswa
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="student-name-input"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Contoh: Nadia Putri Pratama"
                      className="flex-1 min-h-[44px] px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-[#0284C7] transition-colors"
                    />
                    <button
                      type="submit"
                      className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Mulai Ujian</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {error && (
                    <p className="text-xs font-medium text-[#DC2626]" role="alert">
                      {error}
                    </p>
                  )}
                </div>

                {/* Exam Spec Summary Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-0.5">
                      <FileText className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Jumlah Soal</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 tabular-nums">
                      30 Soal
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Durasi</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 tabular-nums">
                      60 Menit
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-0.5">
                      <CheckSquare className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Komposisi</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 tabular-nums leading-5">
                      25 PG · 5 B/S
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-0.5">
                      <Code2 className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Penilaian</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 tabular-nums">
                      Skala 0–100
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Dynamic Visual Preview */}
            <div id="pratinjau" className="lg:col-span-6">
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      {selectedSubject === 'informatika'
                        ? 'Pratinjau Visual Informatika / TIK'
                        : 'Pratinjau Ilustrasi Instrumen & Diagram'}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {currentPreview.caption}
                    </p>
                  </div>
                </div>

                {/* Interactive Segmented Tabs */}
                <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
                  {(selectedSubject ? visiblePreviews : PREVIEW_ITEMS).map((item) => {
                    const isActive = currentPreview.id === item.id;
                    const Icon =
                      item.id === 'jangka_sorong'
                        ? Ruler
                        : item.id === 'mikrometer_sekrup'
                        ? Gauge
                        : item.id === 'termometer'
                        ? Thermometer
                        : item.id === 'grafik_kalor'
                        ? TrendingUp
                        : item.id === 'excel_preview'
                        ? FileSpreadsheet
                        : GitBranch;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPreviewId(item.id)}
                        className={`flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                          isActive
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {currentPreview.kind === 'diagram' ? (
                  <ScientificDiagram type={currentPreview.id} showHighlight={false} />
                ) : (
                  <ExcelMiniTable spec={SAMPLE_EXCEL_SPEC} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Kisi-Kisi Materi (Switches dynamically based on selected subject, or shows tabs) */}
        <section id="kisi-kisi" className="py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Kisi-Kisi Materi: {activeSubjectForInfo.title}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {activeSubjectForInfo.id === 'ipa'
                    ? 'Seluruh 30 soal IPA disusun mengikuti 15 pokok materi Semester Ganjil Kurikulum Merdeka.'
                    : 'Seluruh 30 soal Informatika / TIK mencakup 3 bab utama Kelas 7 Kurikulum Merdeka.'}
                </p>
              </div>

              {/* Quick Kisi-Kisi Subject Switcher */}
              <div className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start md:self-auto">
                {SUBJECT_LIST.map((subj) => {
                  const active = activeSubjectForInfo.id === subj.id;
                  return (
                    <button
                      key={subj.id}
                      type="button"
                      onClick={() => handleSelectSubject(subj.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        active
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {subj.shortTitle}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`grid grid-cols-1 gap-3 ${
                activeSubjectForInfo.topics.length <= 3
                  ? 'md:grid-cols-3'
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {activeSubjectForInfo.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-md bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-700 font-mono tabular-nums shrink-0">
                      {String(topic.id).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-slate-800 truncate">
                      {topic.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0284C7] whitespace-nowrap shrink-0 tabular-nums">
                    {topic.targetCount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Petunjuk Pengerjaan */}
        <section id="petunjuk" className="pb-14">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Petunjuk Pengerjaan Simulasi CBT
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-600">
                <div className="space-y-1.5">
                  <div className="font-semibold text-slate-900">01. Pilih Mapel & Nama</div>
                  <p className="leading-relaxed">
                    Pilih mata pelajaran IPA atau Informatika / TIK lalu isi nama lengkap sebelum memulai ujian.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="font-semibold text-slate-900">02. Waktu 60 Menit</div>
                  <p className="leading-relaxed">
                    Timer hitung mundur berjalan otomatis selama ujian berlangsung dan otomatis mengumpulkan saat waktu habis.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="font-semibold text-slate-900">03. Navigasi & Ragu-Ragu</div>
                  <p className="leading-relaxed">
                    Gunakan panel nomor 1–30 untuk memantau soal yang sudah dijawab, ragu-ragu, atau belum dijawab.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="font-semibold text-slate-900">04. Pembahasan & Tutor AI</div>
                  <p className="leading-relaxed">
                    Lihat skor 0–100, analisis per bab/topik, pembahasan langkah demi langkah, serta Tanya Tutor AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>Portal Simulasi CBT Kelas 7 SMP · IPA & Informatika / TIK</span>
          <span>Kurikulum Merdeka · Skala Penilaian 0–100</span>
        </div>
      </footer>
    </div>
  );
}
