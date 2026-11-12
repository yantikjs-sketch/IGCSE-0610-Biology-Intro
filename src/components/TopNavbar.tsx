import React from 'react';
import { BookOpen } from 'lucide-react';

interface TopNavbarProps {
  activeChapter?: string;
  onSelectChapter?: (chapter: string) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeChapter = 'characteristics',
  onSelectChapter,
}) => {
  const chapters = [
    { id: 'characteristics', num: '1', title: 'Classification' },
    { id: 'cells', num: '2', title: 'Cells' },
    { id: 'movement', num: '3', title: 'Movement' },
    { id: 'molecules', num: '4', title: 'Molecules' },
    { id: 'enzymes', num: '5', title: 'Enzymes' },
    { id: 'digestion', num: '6', title: 'Digestive System' },
  ];

  return (
    <header className="flex items-center justify-between gap-4 px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Zone 1: Wordmark & Title */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-base shadow-sm">
          0610
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
              IGCSE Biology - 0610
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 whitespace-nowrap">
              Year 9 Semester 1
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs text-slate-500 font-semibold">
            Complete Semester 1 Revision Suite (Chapters 1–6)
          </span>
        </div>
      </div>

      {/* Zone 2: Clean Chapter Quick-Jump Links */}
      {onSelectChapter && (
        <nav className="hidden md:flex items-center gap-1.5 text-xs xl:text-sm font-semibold">
          {chapters.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(ch.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {ch.num}
                </span>
                <span>{ch.title}</span>
              </button>
            );
          })}
        </nav>
      )}

      {/* Zone 3: Badge indicator */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>Cambridge 0610</span>
        </div>
      </div>
    </header>
  );
};
