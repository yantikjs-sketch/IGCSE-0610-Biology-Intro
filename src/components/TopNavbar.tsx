import React from 'react';
import { BookOpen, Sparkles, Layers, Activity, HelpCircle, FileText } from 'lucide-react';

export type ActiveTab = 'tour' | 'teeth' | 'peristalsis' | 'villus' | 'enzymes' | 'quiz' | 'notes';

interface TopNavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenSummary: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSummary,
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
          0610
        </div>
        <div>
          <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
            Digestive System Explorer
          </span>
          <span className="hidden sm:inline-block ml-2 text-sm text-slate-500 font-semibold">
            IGCSE Biology
          </span>
        </div>
      </div>

      {/* Zone 2: 4-5 concise single-line text navigation links */}
      <nav className="hidden md:flex items-center gap-1.5 sm:gap-2.5 text-base font-medium">
        <button
          onClick={() => setActiveTab('tour')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'tour'
              ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Activity className="w-4 h-4 text-blue-600" />
          <span>GI Tour</span>
        </button>

        <button
          onClick={() => setActiveTab('teeth')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'teeth'
              ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-4 h-4 text-cyan-600" />
          <span>Teeth & Structure</span>
        </button>

        <button
          onClick={() => setActiveTab('peristalsis')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'peristalsis'
              ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4 text-emerald-600" />
          <span>Peristalsis</span>
        </button>

        <button
          onClick={() => setActiveTab('villus')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'villus'
              ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Villus Absorption</span>
        </button>

        <button
          onClick={() => setActiveTab('enzymes')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'enzymes'
              ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4 text-purple-600" />
          <span>Enzyme Sandbox</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'quiz'
              ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-rose-600" />
          <span>Exam Quiz</span>
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onOpenSummary}
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          title="Open IGCSE Syllabus Summary Sheet"
        >
          <FileText className="w-4 h-4 text-slate-600" />
          <span>0610 Notes</span>
        </button>
      </div>
    </header>
  );
};
