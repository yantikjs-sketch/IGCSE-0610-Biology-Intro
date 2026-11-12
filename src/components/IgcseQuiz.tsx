import React, { useState, useEffect } from 'react';
import { TOPIC_QUIZZES } from '../data/topicQuizData';
import { QuizQuestion } from '../types/digestive';
import { CheckCircle2, XCircle, Award, RotateCcw, ChevronRight } from 'lucide-react';

export interface IgcseQuizProps {
  topicKey?: 'characteristics' | 'cells' | 'movement' | 'molecules' | 'enzymes' | 'digestion';
  customTitle?: string;
  customSubtitle?: string;
  onRestart?: () => void;
}

export const IgcseQuiz: React.FC<IgcseQuizProps> = ({
  topicKey = 'digestion',
  customTitle,
  customSubtitle,
}) => {
  const currentTopicData = TOPIC_QUIZZES[topicKey] || TOPIC_QUIZZES.digestion;
  const questions: QuizQuestion[] = currentTopicData.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Reset when topic changes
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  }, [topicKey]);

  const currentQ = questions[currentIndex] || questions[0];
  const selectedOption = currentQ ? selectedAnswers[currentQ.id] : undefined;
  const isAnswered = selectedOption !== undefined;

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered || !currentQ) return;

    const isCorrect = optIdx === currentQ.correctIndex;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optIdx }));
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  if (!currentQ) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-wider mb-1">
          <span>IGCSE 0610 Exam Preparation</span>
          <span aria-hidden="true">·</span>
          <span>{currentTopicData.syllabusRef} Practice Questions</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {customTitle || currentTopicData.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
          {customSubtitle ||
            'Test your knowledge with authentic Cambridge IGCSE 0610 exam questions, mark schemes, and examiner commentary.'}
        </p>
      </div>

      {!isFinished ? (
        <div className="flex flex-col gap-5">
          {/* Progress Bar & Header */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
            <span className="font-semibold text-slate-700">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="font-mono bg-slate-100 px-3 py-1 rounded-lg text-slate-800 font-bold">
              Score: {score} / {questions.length}
            </span>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 rounded-full"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Box */}
          <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-1.5">
              Syllabus Reference: {currentQ.syllabusRef}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h4>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let style =
                'bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/30';
              if (isAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                } else if (isSelected) {
                  style = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold';
                } else {
                  style = 'bg-white border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isAnswered}
                  className={`w-full p-4 sm:p-4.5 rounded-2xl border text-left text-sm sm:text-base transition-all flex items-center justify-between gap-3 cursor-pointer ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-800 font-mono text-sm font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-relaxed font-medium">{option}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next Step */}
          {isAnswered && (
            <div className="p-5 bg-blue-50/80 border border-blue-200 rounded-2xl space-y-3 animate-in fade-in duration-200">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-blue-950 space-y-1.5">
                  <p className="font-bold">Cambridge Mark Scheme Explanation:</p>
                  <p className="leading-relaxed text-blue-900">{currentQ.explanation}</p>
                  {currentQ.examTip && (
                    <p className="text-emerald-800 font-semibold pt-1">
                      💡 Exam Tip: {currentQ.examTip}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <span>
                    {currentIndex < questions.length - 1
                      ? 'Next Question'
                      : 'View Final Score'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Finished Screen */
        <div className="p-8 sm:p-10 text-center flex flex-col items-center gap-4 bg-slate-50 border border-slate-200 rounded-3xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-2xl shadow-md">
            {score === questions.length ? 'A*' : score >= Math.ceil(questions.length * 0.7) ? 'A' : 'B'}
          </div>
          <div>
            <h4 className="text-2xl font-bold text-slate-900">
              Topic Revision Quiz Complete!
            </h4>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              You scored <strong className="text-slate-900">{score}</strong> out of{' '}
              <strong className="text-slate-900">{questions.length}</strong> questions correctly ({Math.round((score / questions.length) * 100)}%).
            </p>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
            {score >= Math.ceil(questions.length * 0.7) ? (
              <p className="text-emerald-700 font-semibold">
                Outstanding work! You have strong mastery of this Cambridge 0610 syllabus topic and its marking points.
              </p>
            ) : (
              <p className="text-slate-700">
                Good effort! Review the visual diagrams, definitions, and experimental procedures in this topic to achieve full marks.
              </p>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer mt-2 shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake This Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
};
