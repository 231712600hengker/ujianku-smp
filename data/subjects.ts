import { SubjectConfig, SubjectId } from '@/types/exam';
import {
  EXAM_DURATION_SECONDS,
  EXAM_QUESTIONS,
  KISI_TOPICS,
} from '@/data/questions';
import {
  INFORMATIKA_QUESTIONS,
  INFORMATIKA_TOPICS,
} from '@/data/informatikaQuestions';

export const SUBJECTS: Record<SubjectId, SubjectConfig> = {
  ipa: {
    id: 'ipa',
    title: 'IPA (Ilmu Pengetahuan Alam)',
    shortTitle: 'IPA Kelas 7',
    subtitle: 'Semester Ganjil · Kurikulum Merdeka',
    description:
      'Hakikat Sains, Metode Ilmiah, Pengukuran (Jangka Sorong & Mikrometer), Zat dan Perubahannya, serta Suhu, Kalor, dan Pemuaian.',
    durationSeconds: EXAM_DURATION_SECONDS,
    totalQuestions: EXAM_QUESTIONS.length,
    compositionLabel: '25 PG · 5 Benar/Salah',
    topics: KISI_TOPICS,
    questions: EXAM_QUESTIONS,
  },
  informatika: {
    id: 'informatika',
    title: 'Informatika / TIK',
    shortTitle: 'Informatika / TIK',
    subtitle: 'Kelas 7 SMP · Kurikulum Merdeka',
    description:
      'Berpikir Komputasional (4 Pilar), Algoritma, Flowchart, Pseudocode & Scratch, serta Pengolahan Data & Rumus Microsoft Excel.',
    durationSeconds: 60 * 60,
    totalQuestions: INFORMATIKA_QUESTIONS.length,
    compositionLabel: '25 PG · 5 Benar/Salah',
    topics: INFORMATIKA_TOPICS,
    questions: INFORMATIKA_QUESTIONS,
  },
};

export const SUBJECT_LIST: SubjectConfig[] = [
  SUBJECTS.ipa,
  SUBJECTS.informatika,
];
