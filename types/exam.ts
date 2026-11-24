export type SubjectId = 'ipa' | 'informatika';

export type QuestionType = 'pg' | 'bs';

export type DiagramType =
  | 'jangka_sorong'
  | 'mikrometer_sekrup'
  | 'termometer'
  | 'grafik_kalor'
  | 'flowchart_symbols'
  | 'flowchart_luas'
  | 'flowchart_max3';

export interface QuestionOption {
  key: string;
  label: string;
}

export interface StimulusTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ExcelTableRow {
  rowNumber: number;
  cells: (string | number | null)[];
}

export interface ExcelTableSpec {
  caption?: string;
  formulaBar?: string;
  columns: string[];
  rows: ExcelTableRow[];
}

export interface ExamQuestion {
  id: number;
  topicId: number;
  topicName: string;
  type: QuestionType;
  question: string;
  stimulusTable?: StimulusTable;
  excelTable?: ExcelTableSpec;
  diagram?: DiagramType;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
  formula?: string;
}

export interface TopicMeta {
  id: number;
  name: string;
  targetCount: string;
}

export interface SubjectConfig {
  id: SubjectId;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  durationSeconds: number;
  totalQuestions: number;
  compositionLabel: string;
  topics: TopicMeta[];
  questions: ExamQuestion[];
}

export type ExamPhase = 'home' | 'exam' | 'result';

export interface AnswerMap {
  [questionId: number]: string;
}

export interface DoubtMap {
  [questionId: number]: boolean;
}

export interface TopicResult {
  topicId: number;
  topicName: string;
  total: number;
  correct: number;
  incorrect: number;
  unanswered: number;
}
