import React, { useState, useEffect } from 'react';
import { TopNavbar, ActiveTab } from './components/TopNavbar';
import { DigestiveTractSVG } from './components/DigestiveTractSVG';
import { OrganDetailsCard } from './components/OrganDetailsCard';
import { JourneyControls } from './components/JourneyControls';
import { TeethLab } from './components/TeethLab';
import { PeristalsisLab } from './components/PeristalsisLab';
import { VillusLab } from './components/VillusLab';
import { EnzymeSandbox } from './components/EnzymeSandbox';
import { IgcseQuiz } from './components/IgcseQuiz';
import { RevisionSummaryModal } from './components/RevisionSummaryModal';
import { ORGANS, STAGES } from './data/digestiveData';
import { OrganId, StageId, FoodType } from './types/digestive';
import { Activity, BookOpen, Layers, Sparkles, HelpCircle, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('tour');
  const [selectedOrganId, setSelectedOrganId] = useState<OrganId>('mouth');
  const [selectedFoodType, setSelectedFoodType] = useState<FoodType>('carbohydrates');
  const [bolusProgress, setBolusProgress] = useState(0.02); // 0 to 1
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  // Map progress (0 to 1) to main path organ
  const getOrganFromProgress = (prog: number): OrganId => {
    if (prog < 0.10) return 'mouth';
    if (prog < 0.25) return 'oesophagus';
    if (prog < 0.42) return 'stomach';
    if (prog < 0.52) return 'duodenum';
    if (prog < 0.72) return 'ileum';
    if (prog < 0.88) return 'colon';
    if (prog < 0.96) return 'rectum';
    return 'anus';
  };

  // Map main path organ to default progress
  const getProgressFromOrgan = (id: OrganId): number => {
    switch (id) {
      case 'mouth':
      case 'salivary_glands':
        return 0.02;
      case 'oesophagus':
        return 0.16;
      case 'stomach':
        return 0.32;
      case 'liver':
      case 'gall_bladder':
      case 'pancreas':
      case 'duodenum':
        return 0.46;
      case 'ileum':
        return 0.62;
      case 'colon':
        return 0.78;
      case 'rectum':
        return 0.92;
      case 'anus':
        return 0.98;
      default:
        return 0.02;
    }
  };

  // Main pathway ordered array for Next/Prev navigation
  const mainPathwayOrgans: OrganId[] = [
    'mouth',
    'oesophagus',
    'stomach',
    'duodenum',
    'ileum',
    'colon',
    'rectum',
    'anus',
  ];

  // Continuous food bolus journey animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBolusProgress((prev) => {
        const next = prev + 0.003 * playbackSpeed;
        if (next >= 1.0) {
          setIsPlaying(false);
          return 1.0;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  // Synchronize selected organ card with bolus position when playing
  useEffect(() => {
    if (isPlaying) {
      const activeOrgan = getOrganFromProgress(bolusProgress);
      setSelectedOrganId(activeOrgan);
    }
  }, [bolusProgress, isPlaying]);

  const handleSelectOrgan = (id: OrganId) => {
    setSelectedOrganId(id);
    const newProg = getProgressFromOrgan(id);
    setBolusProgress(newProg);
  };

  const handleTogglePlay = () => {
    if (bolusProgress >= 0.98) {
      setBolusProgress(0.02);
      setSelectedOrganId('mouth');
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setBolusProgress(0.02);
    setSelectedOrganId('mouth');
  };

  const handleStepForward = () => {
    const currentIndex = mainPathwayOrgans.indexOf(selectedOrganId);
    if (currentIndex >= 0 && currentIndex < mainPathwayOrgans.length - 1) {
      const nextOrgan = mainPathwayOrgans[currentIndex + 1];
      handleSelectOrgan(nextOrgan);
    } else {
      handleSelectOrgan(mainPathwayOrgans[0]);
    }
  };

  const handleStepBackward = () => {
    const currentIndex = mainPathwayOrgans.indexOf(selectedOrganId);
    if (currentIndex > 0) {
      const prevOrgan = mainPathwayOrgans[currentIndex - 1];
      handleSelectOrgan(prevOrgan);
    } else {
      handleSelectOrgan(mainPathwayOrgans[mainPathwayOrgans.length - 1]);
    }
  };

  const currentOrganInfo =
    ORGANS.find((o) => o.id === selectedOrganId) || ORGANS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* Top Bar Navigation */}
      <TopNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSummary={() => setIsSummaryOpen(true)}
      />

      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex items-center justify-around bg-white border-b border-slate-200 px-2 py-2 overflow-x-auto text-xs font-semibold">
        <button
          onClick={() => setActiveTab('tour')}
          className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap cursor-pointer ${
            activeTab === 'tour' ? 'bg-blue-600 text-white' : 'text-slate-600'
          }`}
        >
          GI Tour
        </button>
        <button
          onClick={() => setActiveTab('teeth')}
          className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap cursor-pointer ${
            activeTab === 'teeth' ? 'bg-blue-600 text-white' : 'text-slate-600'
          }`}
        >
          Teeth
        </button>
        <button
          onClick={() => setActiveTab('peristalsis')}
          className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap cursor-pointer ${
            activeTab === 'peristalsis' ? 'bg-blue-600 text-white' : 'text-slate-600'
          }`}
        >
          Peristalsis
        </button>
        <button
          onClick={() => setActiveTab('villus')}
          className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap cursor-pointer ${
            activeTab === 'villus' ? 'bg-blue-600 text-white' : 'text-slate-600'
          }`}
        >
          Villus
        </button>
        <button
          onClick={() => setActiveTab('enzymes')}
          className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap cursor-pointer ${
            activeTab === 'enzymes' ? 'bg-blue-600 text-white' : 'text-slate-600'
          }`}
        >
          Enzymes
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap cursor-pointer ${
            activeTab === 'quiz' ? 'bg-blue-600 text-white' : 'text-slate-600'
          }`}
        >
          Quiz
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'tour' && (
          <div className="flex flex-col gap-6">
            {/* Quick Organ Jump Chips */}
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
                <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 pl-1">
                  Organs:
                </span>
                {ORGANS.map((org) => {
                  const isSelected = selectedOrganId === org.id;
                  return (
                    <button
                      key={org.id}
                      onClick={() => handleSelectOrgan(org.id)}
                      className={`px-2.5 py-1 rounded-lg border transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : org.isAccessory
                          ? 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {org.isAccessory && '⭐ '}
                      {org.name.split(' (')[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two-Zone Interactive Sandbox Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Zone: Interactive SVG Anatomy Diagram (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <DigestiveTractSVG
                  selectedOrganId={selectedOrganId}
                  onSelectOrgan={handleSelectOrgan}
                  bolusProgress={bolusProgress}
                  isPlaying={isPlaying}
                  selectedFoodType={selectedFoodType}
                />
              </div>

              {/* Right Zone: Synchronized Organ Details Deck (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <OrganDetailsCard
                  organ={currentOrganInfo}
                  onSelectConnectedOrgan={handleSelectOrgan}
                  selectedFoodType={selectedFoodType}
                />
              </div>
            </div>

            {/* Bottom Full-Width Controls Deck */}
            <JourneyControls
              isPlaying={isPlaying}
              onTogglePlay={handleTogglePlay}
              onReset={handleReset}
              onStepForward={handleStepForward}
              onStepBackward={handleStepBackward}
              playbackSpeed={playbackSpeed}
              onChangeSpeed={setPlaybackSpeed}
              bolusProgress={bolusProgress}
              onSeek={(val) => {
                setBolusProgress(val);
                setSelectedOrganId(getOrganFromProgress(val));
              }}
              activeStageId={currentOrganInfo.stage}
              selectedFoodType={selectedFoodType}
              onSelectFoodType={setSelectedFoodType}
              selectedOrganId={selectedOrganId}
            />
          </div>
        )}

        {/* Tab: Teeth & Types */}
        {activeTab === 'teeth' && <TeethLab />}

        {/* Tab 2: Peristalsis Lab */}
        {activeTab === 'peristalsis' && <PeristalsisLab />}

        {/* Tab 3: Villus Absorption Lab */}
        {activeTab === 'villus' && <VillusLab />}

        {/* Tab 4: Enzyme Sandbox */}
        {activeTab === 'enzymes' && <EnzymeSandbox />}

        {/* Tab 5: IGCSE Exam Quiz */}
        {activeTab === 'quiz' && <IgcseQuiz />}
      </main>

      {/* Revision Summary Sheet Modal */}
      <RevisionSummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-6 text-center text-xs text-slate-500">
        <p>
          Cambridge IGCSE™ Biology (0610) · Topic 7: Human Nutrition & Digestive System · Suitable for Secondary & Grade Students
        </p>
      </footer>
    </div>
  );
}
