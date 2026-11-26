import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  RotateCcw,
  ClipboardCheck,
  BookOpen,
  Image as ImageIcon,
  Award,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  FileText,
  Sparkles,
} from 'lucide-react';
import { MYE_REVISION_1_MCQS } from '../data/myeRevision1Data';
import { MYE_REVISION_2_MCQS } from '../data/myeRevision2Data';
import { MYE_REVISION_3_SQ } from '../data/myeRevision3Data';
import { MYE_REVISION_4_SQ } from '../data/myeRevision4Data';
import { MyeMcqQuestion, MyeSqQuestion, MyeTopicId } from '../types/mye';
import { MyeStimulusVisual } from './MyeStimulusVisual';

type PaperTab = 'rev1' | 'rev2' | 'rev3' | 'rev4';
type McqMode = 'study' | 'exam';

const TOPIC_NAMES: Record<MyeTopicId, string> = {
  1: '1. Classification',
  2: '2. Cells',
  3: '3. Movement',
  4: '4. Molecules',
  5: '5. Enzymes',
  6: '6. Digestive System',
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export const MyeRevisionHub: React.FC = () => {
  const [activePaper, setActivePaper] = useState<PaperTab>('rev1');

  // --- MCQ State (separate state per Revision 1 and Revision 2) ---
  const [mcqMode, setMcqMode] = useState<Record<'rev1' | 'rev2', McqMode>>({
    rev1: 'study',
    rev2: 'study',
  });
  const [mcqAnswers, setMcqAnswers] = useState<
    Record<'rev1' | 'rev2', Record<string, number>>
  >({
    rev1: {},
    rev2: {},
  });
  const [mcqSubmitted, setMcqSubmitted] = useState<Record<'rev1' | 'rev2', boolean>>({
    rev1: false,
    rev2: false,
  });
  const [mcqCurrentIndex, setMcqCurrentIndex] = useState<Record<'rev1' | 'rev2', number>>({
    rev1: 0,
    rev2: 0,
  });
  const [mcqTopicFilter, setMcqTopicFilter] = useState<'all' | MyeTopicId>('all');
  const [mcqVisibleTips, setMcqVisibleTips] = useState<Record<string, boolean>>({});

  // --- SQ Papers 3 & 4 State (60 marks each) ---
  const [sqStudentText, setSqStudentText] = useState<Record<string, string>>({});
  const [sqVisibleTips, setSqVisibleTips] = useState<Record<string, boolean>>({});
  const [sqVisibleMarkScheme, setSqVisibleMarkScheme] = useState<Record<string, boolean>>({});
  const [sqSelfMarks, setSqSelfMarks] = useState<Record<string, number>>({});
  const [sqActiveQ, setSqActiveQ] = useState<Record<'rev3' | 'rev4', 'all' | number>>({
    rev3: 'all',
    rev4: 'all',
  });

  // Counts for badges
  const rev1ImageCount = useMemo(
    () => MYE_REVISION_1_MCQS.filter((q) => Boolean(q.stimulus)).length,
    []
  );
  const rev2ImageCount = useMemo(
    () => MYE_REVISION_2_MCQS.filter((q) => Boolean(q.stimulus)).length,
    []
  );
  const rev3TotalMarks = useMemo(
    () =>
      MYE_REVISION_3_SQ.reduce(
        (sum, q) => sum + q.subParts.reduce((s, p) => s + p.marks, 0),
        0
      ),
    []
  );
  const rev4TotalMarks = useMemo(
    () =>
      MYE_REVISION_4_SQ.reduce(
        (sum, q) => sum + q.subParts.reduce((s, p) => s + p.marks, 0),
        0
      ),
    []
  );

  const activeSqPaper: 'rev3' | 'rev4' = activePaper === 'rev4' ? 'rev4' : 'rev3';
  const activeSqQuestions: MyeSqQuestion[] =
    activeSqPaper === 'rev4' ? MYE_REVISION_4_SQ : MYE_REVISION_3_SQ;
  const activeSqTotalMarks =
    activeSqPaper === 'rev4' ? rev4TotalMarks : rev3TotalMarks;
  const activeSqFilter = sqActiveQ[activeSqPaper];

  const sqEarnedMarks = useMemo(
    () =>
      activeSqQuestions.reduce(
        (sum, q) =>
          sum + q.subParts.reduce((s, p) => s + (sqSelfMarks[p.id] || 0), 0),
        0
      ),
    [activeSqQuestions, sqSelfMarks]
  );

  // Active MCQ paper helpers
  const activeMcqPaper: 'rev1' | 'rev2' = activePaper === 'rev2' ? 'rev2' : 'rev1';
  const activeQuestions: MyeMcqQuestion[] =
    activeMcqPaper === 'rev1' ? MYE_REVISION_1_MCQS : MYE_REVISION_2_MCQS;

  const filteredQuestions = useMemo(() => {
    if (mcqTopicFilter === 'all') return activeQuestions;
    return activeQuestions.filter((q) => q.topic === mcqTopicFilter);
  }, [activeQuestions, mcqTopicFilter]);

  const currentAnswers = mcqAnswers[activeMcqPaper];
  const currentMode = mcqMode[activeMcqPaper];
  const isExamSubmitted = mcqSubmitted[activeMcqPaper];
  const safeIndex = Math.min(
    mcqCurrentIndex[activeMcqPaper],
    Math.max(0, filteredQuestions.length - 1)
  );
  const activeMcq = filteredQuestions[safeIndex] || activeQuestions[0];

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (currentMode === 'exam' && isExamSubmitted) return;
    if (currentMode === 'study' && currentAnswers[questionId] !== undefined) return;

    setMcqAnswers((prev) => ({
      ...prev,
      [activeMcqPaper]: {
        ...prev[activeMcqPaper],
        [questionId]: optionIdx,
      },
    }));
  };

  const handleResetMcqPaper = (paper: 'rev1' | 'rev2') => {
    setMcqAnswers((prev) => ({ ...prev, [paper]: {} }));
    setMcqSubmitted((prev) => ({ ...prev, [paper]: false }));
    setMcqCurrentIndex((prev) => ({ ...prev, [paper]: 0 }));
  };

  const handleSubmitExam = () => {
    setMcqSubmitted((prev) => ({ ...prev, [activeMcqPaper]: true }));
  };

  const toggleMcqTip = (questionId: string) => {
    setMcqVisibleTips((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  // Compute MCQ Stats
  const mcqStats = useMemo(() => {
    let answeredCount = 0;
    let correctCount = 0;
    const byTopic: Record<MyeTopicId, { total: number; answered: number; correct: number }> = {
      1: { total: 0, answered: 0, correct: 0 },
      2: { total: 0, answered: 0, correct: 0 },
      3: { total: 0, answered: 0, correct: 0 },
      4: { total: 0, answered: 0, correct: 0 },
      5: { total: 0, answered: 0, correct: 0 },
      6: { total: 0, answered: 0, correct: 0 },
    };

    for (const q of activeQuestions) {
      byTopic[q.topic].total += 1;
      const chosen = currentAnswers[q.id];
      if (chosen !== undefined) {
        answeredCount += 1;
        byTopic[q.topic].answered += 1;
        if (chosen === q.correctIndex) {
          correctCount += 1;
          byTopic[q.topic].correct += 1;
        }
      }
    }

    return {
      total: activeQuestions.length,
      answeredCount,
      correctCount,
      byTopic,
    };
  }, [activeQuestions, currentAnswers]);

  const showMcqFeedback =
    activeMcq &&
    ((currentMode === 'study' && currentAnswers[activeMcq.id] !== undefined) ||
      (currentMode === 'exam' && isExamSubmitted));

  // Reset Active SQ Paper (Rev 3 or Rev 4)
  const handleResetActiveSq = () => {
    const partIds = new Set(
      activeSqQuestions.flatMap((q) => q.subParts.map((p) => p.id))
    );
    const omitActive = <T,>(prev: Record<string, T>) => {
      const next: Record<string, T> = {};
      for (const [k, v] of Object.entries(prev)) {
        if (!partIds.has(k)) next[k] = v;
      }
      return next;
    };
    setSqStudentText(omitActive);
    setSqVisibleTips(omitActive);
    setSqVisibleMarkScheme(omitActive);
    setSqSelfMarks(omitActive);
    setSqActiveQ((prev) => ({ ...prev, [activeSqPaper]: 'all' }));
  };

  const toggleAllActiveSqSchemes = (show: boolean) => {
    setSqVisibleMarkScheme((prev) => {
      const next = { ...prev };
      activeSqQuestions.forEach((q) =>
        q.subParts.forEach((p) => {
          next[p.id] = show;
        })
      );
      return next;
    });
  };

  const getGradeEstimate = (pct: number) => {
    if (pct >= 80) return 'A*';
    if (pct >= 70) return 'A';
    if (pct >= 60) return 'B';
    if (pct >= 50) return 'C';
    if (pct >= 40) return 'D';
    return 'Developing';
  };

  const sqPercent =
    activeSqTotalMarks > 0
      ? Math.round((sqEarnedMarks / activeSqTotalMarks) * 100)
      : 0;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-150">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white border border-teal-700/50 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Cambridge IGCSE Biology (0610) · Mid-Year Exam Practice</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              MYE Revision Hub — Papers 1, 2, 3 &amp; 4
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Full Semester 1 assessment covering Topics 1–6. Practise two 40-question MCQ papers with diagram stimuli and two complete 60-mark Structured Question papers, each with step-by-step solving tips.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-emerald-300">
              Rev 1: {rev1ImageCount}/40 Image MCQs ({Math.round((rev1ImageCount / 40) * 100)}%)
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-cyan-300">
              Rev 2: {rev2ImageCount}/40 Image MCQs ({Math.round((rev2ImageCount / 40) * 100)}%)
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-amber-400/15 border border-amber-400/30 text-xs font-bold text-amber-300">
              Rev 3: {rev3TotalMarks} Marks SQ
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-purple-400/15 border border-purple-400/30 text-xs font-bold text-purple-200">
              Rev 4: {rev4TotalMarks} Marks SQ
            </span>
          </div>
        </div>
      </div>

      {/* Paper Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActivePaper('rev1')}
          className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
            activePaper === 'rev1'
              ? 'bg-white border-teal-300 shadow-sm ring-2 ring-teal-500/20'
              : 'bg-transparent border-transparent hover:bg-slate-200/70'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm sm:text-base font-extrabold text-slate-900">
              MYE Revision 1
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              40 MCQs
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Paper 2 Style · {rev1ImageCount}/40 Visuals (65%)
          </p>
        </button>

        <button
          onClick={() => setActivePaper('rev2')}
          className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
            activePaper === 'rev2'
              ? 'bg-white border-teal-300 shadow-sm ring-2 ring-teal-500/20'
              : 'bg-transparent border-transparent hover:bg-slate-200/70'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm sm:text-base font-extrabold text-slate-900">
              MYE Revision 2
            </span>
            <span className="px-2 py-0.5 rounded-md bg-cyan-100 text-cyan-800 text-xs font-bold">
              40 MCQs
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Fresh MCQ Set · {rev2ImageCount}/40 Visuals (60%)
          </p>
        </button>

        <button
          onClick={() => setActivePaper('rev3')}
          className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
            activePaper === 'rev3'
              ? 'bg-white border-amber-300 shadow-sm ring-2 ring-amber-500/20'
              : 'bg-transparent border-transparent hover:bg-slate-200/70'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm sm:text-base font-extrabold text-slate-900">
              MYE Revision 3
            </span>
            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-xs font-bold">
              60 Marks SQ
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Paper 4 Set A · Self-Marking &amp; Tips
          </p>
        </button>

        <button
          onClick={() => setActivePaper('rev4')}
          className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
            activePaper === 'rev4'
              ? 'bg-white border-purple-300 shadow-sm ring-2 ring-purple-500/20'
              : 'bg-transparent border-transparent hover:bg-slate-200/70'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm sm:text-base font-extrabold text-slate-900">
              MYE Revision 4
            </span>
            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-xs font-bold">
              60 Marks SQ
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Paper 4 Set B · Self-Marking &amp; Tips
          </p>
        </button>
      </div>

      {/* ================================================================= */}
      {/* MCQ PAPERS: MYE REVISION 1 & MYE REVISION 2                       */}
      {/* ================================================================= */}
      {(activePaper === 'rev1' || activePaper === 'rev2') && activeMcq && (
        <div className="flex flex-col gap-6">
          {/* Controls & Live Score Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            {/* Mode Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">
                Practice Mode:
              </span>
              <button
                onClick={() =>
                  setMcqMode((prev) => ({ ...prev, [activeMcqPaper]: 'study' }))
                }
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                  currentMode === 'study'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Study Mode (Instant Check)</span>
              </button>
              <button
                onClick={() =>
                  setMcqMode((prev) => ({ ...prev, [activeMcqPaper]: 'exam' }))
                }
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                  currentMode === 'exam'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>Exam Mode (Submit All 40)</span>
              </button>
            </div>

            {/* Progress & Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-800">
                Answered:{' '}
                <span className="text-teal-700">
                  {mcqStats.answeredCount}/{mcqStats.total}
                </span>
                {(currentMode === 'study' || isExamSubmitted) && (
                  <span className="ml-2 pl-2 border-l border-slate-200 text-emerald-700">
                    Score: {mcqStats.correctCount}/{mcqStats.total} (
                    {Math.round((mcqStats.correctCount / mcqStats.total) * 100)}%)
                  </span>
                )}
              </div>

              {currentMode === 'exam' && !isExamSubmitted && (
                <button
                  onClick={handleSubmitExam}
                  className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold cursor-pointer shadow-xs transition-all"
                >
                  Submit Paper ({mcqStats.answeredCount}/40)
                </button>
              )}

              <button
                onClick={() => handleResetMcqPaper(activeMcqPaper)}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-200 text-xs sm:text-sm font-bold cursor-pointer flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Topic Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => {
                setMcqTopicFilter('all');
                setMcqCurrentIndex((p) => ({ ...p, [activeMcqPaper]: 0 }));
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                mcqTopicFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Topics (40)
            </button>
            {([1, 2, 3, 4, 5, 6] as MyeTopicId[]).map((tid) => (
              <button
                key={tid}
                onClick={() => {
                  setMcqTopicFilter(tid);
                  setMcqCurrentIndex((p) => ({ ...p, [activeMcqPaper]: 0 }));
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                  mcqTopicFilter === tid
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {TOPIC_NAMES[tid]} ({mcqStats.byTopic[tid].total})
              </button>
            ))}
          </div>

          {/* Main Grid: Question Navigator + Active Question */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left/Top Question Navigator (4 cols on lg) */}
            <div className="lg:col-span-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-slate-900">
                  Question Navigator ({filteredQuestions.length})
                </h4>
                <span className="text-xs font-semibold text-slate-500">
                  🖼️ = Visual Stimulus
                </span>
              </div>

              <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-5 gap-1.5">
                {filteredQuestions.map((q, idx) => {
                  const chosen = currentAnswers[q.id];
                  const isCurrent = idx === safeIndex;
                  const canReveal =
                    (currentMode === 'study' && chosen !== undefined) ||
                    (currentMode === 'exam' && isExamSubmitted);

                  let btnColor = 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100';
                  if (canReveal && chosen !== undefined) {
                    btnColor =
                      chosen === q.correctIndex
                        ? 'bg-emerald-500 text-white border-emerald-600'
                        : 'bg-rose-500 text-white border-rose-600';
                  } else if (chosen !== undefined) {
                    btnColor = 'bg-blue-600 text-white border-blue-700';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() =>
                        setMcqCurrentIndex((prev) => ({
                          ...prev,
                          [activeMcqPaper]: idx,
                        }))
                      }
                      title={`Q${q.number} — ${q.topicName}`}
                      className={`relative h-9 rounded-lg border text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${btnColor} ${
                        isCurrent ? 'ring-2 ring-amber-500 ring-offset-1 scale-105 z-10' : ''
                      }`}
                    >
                      <span>{q.number}</span>
                      {q.stimulus && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 border border-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Topic Breakdown Card */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Topic Score Breakdown</span>
                  <span>
                    {mcqStats.correctCount}/{mcqStats.total}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {([1, 2, 3, 4, 5, 6] as MyeTopicId[]).map((tid) => {
                    const row = mcqStats.byTopic[tid];
                    const showScore = currentMode === 'study' || isExamSubmitted;
                    return (
                      <div key={tid} className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium truncate pr-2">
                          {TOPIC_NAMES[tid]}
                        </span>
                        <span className="font-mono font-bold text-slate-800 shrink-0">
                          {showScore
                            ? `${row.correct}/${row.total}`
                            : `${row.answered}/${row.total} done`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Active Question Card (8 cols on lg) */}
            <div className="lg:col-span-8 p-5 sm:p-6 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-5">
              {/* Top Question Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-extrabold">
                    Question {activeMcq.number} of 40
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
                    {activeMcq.topicName}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-mono font-semibold">
                    {activeMcq.syllabusRef}
                  </span>
                </div>

                {activeMcq.stimulus && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Image Question</span>
                  </span>
                )}
              </div>

              {/* Stimulus Image / SVG if present */}
              {activeMcq.stimulus && (
                <MyeStimulusVisual
                  id={activeMcq.stimulus.id}
                  caption={activeMcq.stimulus.caption}
                />
              )}

              {/* Question Stem */}
              <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed whitespace-pre-line">
                {activeMcq.question}
              </div>

              {/* Pre-Answer Solving Tip Toggle */}
              <div>
                <button
                  onClick={() => toggleMcqTip(activeMcq.id)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs sm:text-sm font-bold cursor-pointer transition-all"
                >
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>
                    {mcqVisibleTips[activeMcq.id]
                      ? 'Hide How-to-Solve Tip'
                      : 'Show How-to-Solve Tip'}
                  </span>
                </button>

                {mcqVisibleTips[activeMcq.id] && !showMcqFeedback && (
                  <div className="mt-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                    <strong className="block font-extrabold text-amber-900 mb-1">
                      💡 How to Solve This Question:
                    </strong>
                    {activeMcq.solvingTip}
                  </div>
                )}
              </div>

              {/* 4 MCQ Options */}
              <div className="space-y-2.5">
                {activeMcq.options.map((optText, optIdx) => {
                  const chosen = currentAnswers[activeMcq.id];
                  const isChosen = chosen === optIdx;
                  const isCorrectOpt = activeMcq.correctIndex === optIdx;

                  let cardStyle =
                    'bg-slate-50 border-slate-200 hover:bg-teal-50/60 hover:border-teal-300 text-slate-800';
                  let badgeStyle = 'bg-white border-slate-300 text-slate-700';

                  if (showMcqFeedback) {
                    if (isCorrectOpt) {
                      cardStyle =
                        'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500';
                      badgeStyle = 'bg-emerald-600 border-emerald-600 text-white';
                    } else if (isChosen && !isCorrectOpt) {
                      cardStyle =
                        'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
                      badgeStyle = 'bg-rose-600 border-rose-600 text-white';
                    } else {
                      cardStyle = 'bg-slate-50 border-slate-200 text-slate-500 opacity-75';
                    }
                  } else if (isChosen) {
                    cardStyle =
                      'bg-blue-50 border-blue-500 text-blue-950 ring-2 ring-blue-500/20';
                    badgeStyle = 'bg-blue-600 border-blue-600 text-white';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(activeMcq.id, optIdx)}
                      disabled={
                        (currentMode === 'study' && chosen !== undefined) ||
                        (currentMode === 'exam' && isExamSubmitted)
                      }
                      className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer disabled:cursor-default ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-xl border font-extrabold text-sm flex items-center justify-center shrink-0 ${badgeStyle}`}
                        >
                          {OPTION_LETTERS[optIdx]}
                        </span>
                        <span className="text-sm sm:text-base font-semibold leading-snug">
                          {optText}
                        </span>
                      </div>

                      {showMcqFeedback && isCorrectOpt && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {showMcqFeedback && isChosen && !isCorrectOpt && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Post-Answer Explanation & Tip */}
              {showMcqFeedback && (
                <div className="space-y-3 pt-2 animate-in fade-in duration-150">
                  <div
                    className={`p-4 rounded-2xl border text-sm sm:text-base leading-relaxed ${
                      currentAnswers[activeMcq.id] === activeMcq.correctIndex
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="font-extrabold mb-1 flex items-center gap-2">
                      {currentAnswers[activeMcq.id] === activeMcq.correctIndex ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span>
                            Correct! Answer: {OPTION_LETTERS[activeMcq.correctIndex]}
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-600" />
                          <span>
                            Correct Answer is {OPTION_LETTERS[activeMcq.correctIndex]}
                          </span>
                        </>
                      )}
                    </div>
                    <p>{activeMcq.explanation}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                    <strong className="font-extrabold text-amber-900 block mb-1">
                      💡 Exam Solving Tip:
                    </strong>
                    {activeMcq.solvingTip}
                  </div>
                </div>
              )}

              {/* Bottom Prev / Next Controls */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  onClick={() =>
                    setMcqCurrentIndex((prev) => ({
                      ...prev,
                      [activeMcqPaper]: Math.max(0, safeIndex - 1),
                    }))
                  }
                  disabled={safeIndex === 0}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="text-xs font-bold text-slate-500">
                  Viewing {safeIndex + 1} / {filteredQuestions.length}
                </span>

                <button
                  onClick={() =>
                    setMcqCurrentIndex((prev) => ({
                      ...prev,
                      [activeMcqPaper]: Math.min(
                        filteredQuestions.length - 1,
                        safeIndex + 1
                      ),
                    }))
                  }
                  disabled={safeIndex >= filteredQuestions.length - 1}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Exam Mode Final Summary Card */}
          {currentMode === 'exam' && isExamSubmitted && (
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white border border-emerald-700 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Award className="w-9 h-9 text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-xl sm:text-2xl font-extrabold">
                      Exam Complete: {mcqStats.correctCount} / {mcqStats.total} Marks (
                      {Math.round((mcqStats.correctCount / mcqStats.total) * 100)}%)
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-200">
                      Estimated Grade Band:{' '}
                      <strong>
                        {getGradeEstimate(
                          Math.round((mcqStats.correctCount / mcqStats.total) * 100)
                        )}
                      </strong>{' '}
                      · Click any question in the navigator above to review explanations &amp; solving tips.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleResetMcqPaper(activeMcqPaper)}
                  className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-sm cursor-pointer hover:bg-emerald-50"
                >
                  Retake Paper
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* STRUCTURED QUESTIONS PAPERS: MYE REVISION 3 & 4 (60 TOTAL MARKS)  */}
      {/* ================================================================= */}
      {(activePaper === 'rev3' || activePaper === 'rev4') && (
        <div className="flex flex-col gap-6">
          {/* Score & Control Bar */}
          <div className="p-4 sm:p-5 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <FileText className="w-4 h-4" />
                <span>
                  {activeSqPaper === 'rev4'
                    ? 'MYE Revision 4 (Set B)'
                    : 'MYE Revision 3 (Set A)'}{' '}
                  · Paper 4 Structured Questions · {activeSqTotalMarks} Total Marks
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold">
                Self-Assessed Score:{' '}
                <span className="text-emerald-400 font-mono">
                  {sqEarnedMarks} / {activeSqTotalMarks}
                </span>{' '}
                <span className="text-sm font-bold text-slate-300">
                  ({sqPercent}% · Grade Band: {getGradeEstimate(sqPercent)})
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => toggleAllActiveSqSchemes(true)}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold cursor-pointer flex items-center gap-1.5"
              >
                <Eye className="w-4 h-4" />
                <span>Show All Mark Schemes</span>
              </button>
              <button
                onClick={() => toggleAllActiveSqSchemes(false)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold cursor-pointer flex items-center gap-1.5"
              >
                <EyeOff className="w-4 h-4" />
                <span>Hide Mark Schemes</span>
              </button>
              <button
                onClick={handleResetActiveSq}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-rose-900/70 text-slate-200 text-xs sm:text-sm font-bold cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Question Jump Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() =>
                setSqActiveQ((prev) => ({ ...prev, [activeSqPaper]: 'all' }))
              }
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                activeSqFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All 6 Questions ({activeSqTotalMarks} Marks)
            </button>
            {activeSqQuestions.map((q) => {
              const qEarned = q.subParts.reduce(
                (s, p) => s + (sqSelfMarks[p.id] || 0),
                0
              );
              return (
                <button
                  key={q.id}
                  onClick={() =>
                    setSqActiveQ((prev) => ({ ...prev, [activeSqPaper]: q.number }))
                  }
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                    activeSqFilter === q.number
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Q{q.number}: {TOPIC_NAMES[q.topic]} ({qEarned}/{q.totalMarks}m)
                </button>
              );
            })}
          </div>

          {/* Structured Question Cards */}
          <div className="space-y-6">
            {activeSqQuestions.filter(
              (q) => activeSqFilter === 'all' || q.number === activeSqFilter
            ).map((q) => {
              const qEarned = q.subParts.reduce(
                (s, p) => s + (sqSelfMarks[p.id] || 0),
                0
              );
              return (
                <section
                  key={q.id}
                  className="p-5 sm:p-7 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-5"
                >
                  {/* Question Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-extrabold">
                          Question {q.number}
                        </span>
                        <span className="px-2.5 py-1 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
                          {q.topicName}
                        </span>
                        <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-mono font-semibold">
                          {q.syllabusRef}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-1">
                        {q.title}
                      </h4>
                    </div>

                    <div className="px-3.5 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-extrabold shrink-0">
                      Score: {qEarned} / {q.totalMarks} marks
                    </div>
                  </div>

                  {/* Context Intro & Stimulus */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    {q.contextIntro}
                  </p>

                  {q.stimulus && (
                    <MyeStimulusVisual
                      id={q.stimulus.id}
                      caption={q.stimulus.caption}
                    />
                  )}

                  {/* Sub-parts */}
                  <div className="space-y-5 pt-2">
                    {q.subParts.map((part) => {
                      const tipOpen = Boolean(sqVisibleTips[part.id]);
                      const schemeOpen = Boolean(sqVisibleMarkScheme[part.id]);
                      const currentMark = sqSelfMarks[part.id];

                      return (
                        <div
                          key={part.id}
                          className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3.5"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-white text-xs sm:text-sm font-extrabold">
                                {part.label}
                              </span>
                              <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold">
                                Command: {part.commandWord}
                              </span>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-extrabold">
                              [{part.marks} {part.marks === 1 ? 'mark' : 'marks'}]
                            </span>
                          </div>

                          <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                            {part.prompt}
                          </p>

                          {/* Student Answer Box */}
                          <textarea
                            rows={3}
                            value={sqStudentText[part.id] || ''}
                            onChange={(e) =>
                              setSqStudentText((prev) => ({
                                ...prev,
                                [part.id]: e.target.value,
                              }))
                            }
                            placeholder="Write your working and final biological answer here before checking the mark scheme..."
                            className="w-full p-3.5 rounded-xl bg-white border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm sm:text-base text-slate-800 leading-relaxed"
                          />

                          {/* Action Buttons: Tip & Mark Scheme */}
                          <div className="flex flex-wrap items-center gap-2.5">
                            <button
                              onClick={() =>
                                setSqVisibleTips((prev) => ({
                                  ...prev,
                                  [part.id]: !prev[part.id],
                                }))
                              }
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs sm:text-sm font-bold cursor-pointer transition-all"
                            >
                              <Lightbulb className="w-4 h-4 text-amber-600" />
                              <span>
                                {tipOpen ? 'Hide Solving Tip' : 'How to Solve Tip'}
                              </span>
                            </button>

                            <button
                              onClick={() =>
                                setSqVisibleMarkScheme((prev) => ({
                                  ...prev,
                                  [part.id]: !prev[part.id],
                                }))
                              }
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold cursor-pointer transition-all"
                            >
                              <ClipboardCheck className="w-4 h-4" />
                              <span>
                                {schemeOpen
                                  ? 'Hide Mark Scheme'
                                  : 'Check Mark Scheme & Self-Mark'}
                              </span>
                            </button>
                          </div>

                          {/* Tip Panel */}
                          {tipOpen && (
                            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                              <strong className="block font-extrabold text-amber-900 mb-1">
                                💡 Examiner Solving Tip for {part.label}:
                              </strong>
                              {part.solvingTip}
                            </div>
                          )}

                          {/* Mark Scheme, Model Answer & Self-Mark Selector */}
                          {schemeOpen && (
                            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-4 animate-in fade-in duration-150">
                              <div className="space-y-1.5">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block">
                                  Cambridge 0610 Mark Scheme Points
                                </span>
                                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-emerald-950 font-medium">
                                  {part.markSchemePoints.map((pt, idx) => (
                                    <li key={idx}>{pt}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                                <strong className="text-emerald-800 block mb-1">
                                  Model Full-Mark Answer:
                                </strong>
                                {part.modelAnswer}
                              </div>

                              {/* Self-Mark Buttons */}
                              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-emerald-200">
                                <span className="text-xs sm:text-sm font-bold text-emerald-950">
                                  Award yourself marks for {part.label}:
                                </span>
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {Array.from(
                                    { length: part.marks + 1 },
                                    (_, m) => m
                                  ).map((m) => (
                                    <button
                                      key={m}
                                      onClick={() =>
                                        setSqSelfMarks((prev) => ({
                                          ...prev,
                                          [part.id]: m,
                                        }))
                                      }
                                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer border transition-all ${
                                        currentMark === m
                                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                                          : 'bg-white text-slate-700 border-slate-300 hover:bg-emerald-100'
                                      }`}
                                    >
                                      {m} / {part.marks}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
