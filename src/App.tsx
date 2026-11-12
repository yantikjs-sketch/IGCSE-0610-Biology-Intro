import React, { useState } from 'react';
import { TopNavbar } from './components/TopNavbar';
import { Semester1Revision, Semester1Chapter } from './components/Semester1Revision';

export default function App() {
  const [activeChapter, setActiveChapter] = useState<Semester1Chapter>('characteristics');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* Sleek Top Bar Navigation without secondary clutter */}
      <TopNavbar
        activeChapter={activeChapter}
        onSelectChapter={(ch) => setActiveChapter(ch as Semester1Chapter)}
      />

      {/* Main Content Area: Complete Semester 1 Revision Suite */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Semester1Revision
          initialChapter={activeChapter}
          onChapterChange={(ch) => setActiveChapter(ch)}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-6 text-center text-sm text-slate-600 font-medium">
        <p>
          Cambridge IGCSE™ Biology (0610) · Year 9 Semester 1 Revision Suite & Digestive System Explorer · Suitable for Secondary 9 Students
        </p>
      </footer>
    </div>
  );
}
