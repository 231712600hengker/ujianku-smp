'use client';

import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import HomeView from '@/components/HomeView';
import ExamView from '@/components/ExamView';
import ResultView from '@/components/ResultView';
import { SUBJECTS } from '@/data/subjects';
import { AnswerMap, DoubtMap, ExamPhase, SubjectId } from '@/types/exam';

export default function HomePage() {
  const [phase, setPhase] = useState<ExamPhase>('home');
  const [studentName, setStudentName] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [doubts, setDoubts] = useState<DoubtMap>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const activeSubject = selectedSubjectId ? SUBJECTS[selectedSubjectId] : SUBJECTS.ipa;

  const handleStartExam = useCallback((name: string, subjectId: SubjectId) => {
    setStudentName(name);
    setSelectedSubjectId(subjectId);
    setAnswers({});
    setDoubts({});
    setElapsedSeconds(0);
    setPhase('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectAnswer = useCallback(
    (questionId: number, optionKey: string) => {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: optionKey,
      }));
    },
    []
  );

  const handleToggleDoubt = useCallback((questionId: number) => {
    setDoubts((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  }, []);

  const handleFinishExam = useCallback((elapsed: number) => {
    setElapsedSeconds(elapsed);
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRetakeExam = useCallback(() => {
    setAnswers({});
    setDoubts({});
    setElapsedSeconds(0);
    setPhase('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToMenu = useCallback(() => {
    setAnswers({});
    setDoubts({});
    setElapsedSeconds(0);
    setPhase('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {phase === 'home' && (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <HomeView
            initialName={studentName}
            initialSubjectId={selectedSubjectId}
            onStartExam={handleStartExam}
          />
        </motion.div>
      )}

      {phase === 'exam' && (
        <motion.div
          key={`exam-${activeSubject.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <ExamView
            subjectId={activeSubject.id}
            subjectTitle={activeSubject.shortTitle}
            studentName={studentName}
            questions={activeSubject.questions}
            durationSeconds={activeSubject.durationSeconds}
            answers={answers}
            doubts={doubts}
            onSelectAnswer={handleSelectAnswer}
            onToggleDoubt={handleToggleDoubt}
            onFinishExam={handleFinishExam}
          />
        </motion.div>
      )}

      {phase === 'result' && (
        <motion.div
          key={`result-${activeSubject.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <ResultView
            subject={activeSubject}
            studentName={studentName}
            answers={answers}
            elapsedSeconds={elapsedSeconds}
            onRetakeExam={handleRetakeExam}
            onBackToMenu={handleBackToMenu}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
