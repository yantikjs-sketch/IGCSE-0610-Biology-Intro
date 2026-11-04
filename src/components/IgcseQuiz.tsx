import React, { useState } from 'react';
import { IGCSE_QUIZ_QUESTIONS } from '../data/digestiveData';
import { QuizQuestion, OrganId } from '../types/digestive';
import { CheckCircle2, XCircle, Award, RotateCcw, ChevronRight, HelpCircle } from 'lucide-react';

export const IgcseQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = IGCSE_QUIZ_QUESTIONS[currentIndex];
  const selectedOption = selectedAnswers[currentQ.id];
  const isAnswered = selectedOption !== undefined;

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return; // already answered

    const isCorrect = optIdx === currentQ.correctIndex;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optIdx }));
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < IGCSE_QUIZ_QUESTIONS.length - 1) {
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

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">
          <span>IGCSE 0610 Exam Preparation</span>
          <span aria-hidden="true">·</span>
          <span>Topic 7 Revision Questions</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Exam Practice & Mark Scheme Mastery
        </h2>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
          Test your knowledge with authentic Cambridge IGCSE 0610 past paper questions. Review detailed mark schemes and examiner tips to secure top marks.
        </p>
      </div>

      {!isFinished ? (
        <div className="flex flex-col gap-5">
          {/* Progress Bar & Header */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-slate-700">
              Question {currentIndex + 1} of {IGCSE_QUIZ_QUESTIONS.length}
            </span>
            <span className="font-mono bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 font-semibold">
              Score: {score} / {IGCSE_QUIZ_QUESTIONS.length}
            </span>
          </div>

          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / IGCSE_QUIZ_QUESTIONS.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Box */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[11px] font-mono text-blue-600 font-semibold uppercase tracking-wider block mb-1">
              Syllabus Reference: {currentQ.syllabusRef}
            </span>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
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
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-mono text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
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
            <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl space-y-3">
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950 space-y-1">
                  <p className="font-bold text-sm">Cambridge Mark Scheme Explanation:</p>
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
                  className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <span>
                    {currentIndex < IGCSE_QUIZ_QUESTIONS.length - 1
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
        <div className="p-8 text-center flex flex-col items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
            {score === IGCSE_QUIZ_QUESTIONS.length ? 'A*' : score >= 6 ? 'A' : 'B'}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Revision Complete!
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              You scored <strong className="text-slate-900">{score}</strong> out of{' '}
              <strong className="text-slate-900">{IGCSE_QUIZ_QUESTIONS.length}</strong> ({Math.round((score / IGCSE_QUIZ_QUESTIONS.length) * 100)}%)
            </p>
          </div>

          <div className="max-w-md text-xs text-slate-600 leading-relaxed">
            {score >= 7 ? (
              <p className="text-emerald-700 font-semibold">
                Outstanding! You have mastered the Cambridge IGCSE 0610 Digestive System definitions, enzyme optimums, and villus adaptations.
              </p>
            ) : (
              <p className="text-slate-700">
                Good effort! Review the GI tour, enzyme pH curves, and difference between egestion and excretion to achieve full marks.
              </p>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer mt-2 shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
};
