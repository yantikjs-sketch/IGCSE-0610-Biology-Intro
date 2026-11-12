import React, { useState, useEffect } from 'react';
import {
  MRS_GREN,
  FIVE_KINGDOMS,
  CELL_ORGANELLES,
  SPECIALIZED_CELLS,
  ARTHROPOD_GROUPS,
  OTHER_INVERTEBRATES,
  VERTEBRATE_CLASSES,
  MOVEMENT_CONCEPTS,
  BIOLOGICAL_MOLECULES,
  FOOD_TESTS,
  ENZYME_PRACTICALS,
  FoodTestInfo,
  SpecializedCellInfo,
  ArthropodGroup,
} from '../data/semester1Data';
import {
  BookOpen,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Beaker,
  Thermometer,
  Zap,
  Droplets,
  Search,
  Calculator,
  RefreshCw,
  Info,
  Activity,
  Bug,
  Fish,
  Binary,
  Microscope,
  Sliders,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { DigestiveTractSVG } from './DigestiveTractSVG';
import { OrganDetailsCard } from './OrganDetailsCard';
import { JourneyControls } from './JourneyControls';
import { TeethLab } from './TeethLab';
import { PeristalsisLab } from './PeristalsisLab';
import { VillusLab } from './VillusLab';
import { EnzymeSandbox } from './EnzymeSandbox';
import { IgcseQuiz } from './IgcseQuiz';
import { RevisionSummaryModal } from './RevisionSummaryModal';
import { SpecialisedCellDiagram, AnimalClassificationDiagram } from './BiologyDiagrams';
import { ORGANS, STAGES } from '../data/digestiveData';
import { OrganId, FoodType } from '../types/digestive';

export type Semester1Chapter =
  | 'characteristics'
  | 'cells'
  | 'movement'
  | 'molecules'
  | 'enzymes'
  | 'digestion';

interface Semester1RevisionProps {
  initialChapter?: Semester1Chapter;
  onChapterChange?: (chapter: Semester1Chapter) => void;
  onGoToEnzymes?: () => void;
  onGoToDigestion?: () => void;
}

export const Semester1Revision: React.FC<Semester1RevisionProps> = ({
  initialChapter,
  onChapterChange,
  onGoToEnzymes,
  onGoToDigestion,
}) => {
  const [activeChapter, setActiveChapter] = useState<Semester1Chapter>(
    initialChapter || 'characteristics'
  );

  useEffect(() => {
    if (initialChapter && initialChapter !== activeChapter) {
      setActiveChapter(initialChapter);
    }
  }, [initialChapter]);

  const handleSelectChapter = (ch: Semester1Chapter) => {
    setActiveChapter(ch);
    if (onChapterChange) {
      onChapterChange(ch);
    }
  };

  // Chapter 1 State: Active MRS GREN letter, Invertebrates Group & Quiz
  const [selectedMrsGren, setSelectedMrsGren] = useState<string>('M');
  const [classificationSubTab, setClassificationSubTab] = useState<'mrs_gren' | 'kingdoms' | 'arthropods' | 'invertebrates' | 'vertebrates' | 'keys' | 'quiz'>('mrs_gren');
  const [selectedArthropodId, setSelectedArthropodId] = useState<string>('insects');

  // Chapter 2 State: Plant vs Animal vs Bacteria, Magnification calculator, Specialized Cells & Quiz
  const [cellSubTab, setCellSubTab] = useState<'diagrams' | 'specialized' | 'magnification' | 'organisation' | 'quiz'>('diagrams');
  const [cellType, setCellType] = useState<'plant' | 'animal' | 'bacteria'>('plant');
  const [selectedOrganelle, setSelectedOrganelle] = useState<string>('Nucleus');
  const [specializedFilter, setSpecializedFilter] = useState<'All' | 'Plant' | 'Animal'>('All');
  const [selectedSpecializedCell, setSelectedSpecializedCell] = useState<string>('Ciliated Epithelial Cell');
  // Magnification Triangle: I = A x M
  const [imageSizeMm, setImageSizeMm] = useState<number>(24); // mm
  const [magnification, setMagnification] = useState<number>(400); // 400x
  // Calculated actual size in micrometers: A = I / M (in mm) * 1000 um
  const actualSizeUm = +( (imageSizeMm / Math.max(1, magnification)) * 1000 ).toFixed(1);

  // Chapter 3 State: Movement Mechanisms, Osmosis Solution Slider & Quiz
  const [movementSubTab, setMovementSubTab] = useState<'concepts' | 'osmosis_sim' | 'quiz'>('concepts');
  // solutionType: -1 (pure water / hypotonic), 0 (isotonic), 1 (concentrated sucrose / hypertonic)
  const [osmosisTonicity, setOsmosisTonicity] = useState<number>(-1);

  // Chapter 4 State: Interactive Virtual Food Test Lab & Quiz
  const [moleculesSubTab, setMoleculesSubTab] = useState<'nutrients' | 'food_tests' | 'quiz'>('nutrients');
  const [selectedFoodTestIndex, setSelectedFoodTestIndex] = useState<number>(0);
  const [testedReagents, setTestedReagents] = useState<Record<string, boolean>>({});
  const activeTest = FOOD_TESTS[selectedFoodTestIndex];

  // Chapter 5 State: Enzyme Temperature & pH Interactive Model, Substrate Kinetics & Quiz
  const [enzymeSubTab, setEnzymeSubTab] = useState<'simulation' | 'concentrations' | 'practicals' | 'lock_key' | 'quiz'>('simulation');
  const [tempC, setTempC] = useState<number>(37);
  const [enzymePh, setEnzymePh] = useState<number>(7.0);
  const [substrateConc, setSubstrateConc] = useState<number>(50); // 0 to 100%
  const [enzymeConc, setEnzymeConc] = useState<number>(50); // 0 to 100%
  const [selectedPracticalIndex, setSelectedPracticalIndex] = useState<number>(0);

  // Temperature rate calculation (bell curve peaking at 37°C, dropping sharply above 45°C)
  let tempRate = 0;
  if (tempC <= 37) {
    tempRate = Math.round((tempC / 37) * 95);
  } else if (tempC <= 42) {
    tempRate = Math.round(95 - (tempC - 37) * 12);
  } else if (tempC <= 55) {
    tempRate = Math.max(0, Math.round(35 - (tempC - 42) * 2.8));
  } else {
    tempRate = 0;
  }
  const isTempDenatured = tempC >= 48;

  // Substrate saturation curve: rate increases until active sites are occupied (plateau at Vmax)
  const substrateRate = Math.round(100 * (substrateConc / (substrateConc + 18)));
  // Enzyme concentration rate: proportional when substrate is in excess
  const enzymeRate = Math.round(enzymeConc * 0.95);

  // Chapter 6 State: Human Nutrition & Complete Digestive System Explorer
  const [digestiveSubTab, setDigestiveSubTab] = useState<'journey' | 'teeth' | 'peristalsis' | 'villus' | 'enzymes' | 'stages' | 'quiz' | 'notes'>('journey');
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedOrganId, setSelectedOrganId] = useState<OrganId>('mouth');
  const [selectedFoodType, setSelectedFoodType] = useState<FoodType>('carbohydrates');
  const [bolusProgress, setBolusProgress] = useState(0.02);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [pancreasLabel, setPancreasLabel] = useState('Pancreas (Accessory Gland)');

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
      handleSelectOrgan(mainPathwayOrgans[currentIndex + 1]);
    } else {
      handleSelectOrgan(mainPathwayOrgans[0]);
    }
  };

  const handleStepBackward = () => {
    const currentIndex = mainPathwayOrgans.indexOf(selectedOrganId);
    if (currentIndex > 0) {
      handleSelectOrgan(mainPathwayOrgans[currentIndex - 1]);
    } else {
      handleSelectOrgan(mainPathwayOrgans[mainPathwayOrgans.length - 1]);
    }
  };

  const currentOrganInfo =
    ORGANS.find((o) => o.id === selectedOrganId) || ORGANS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col gap-8">
      {/* Top Banner: Cambridge IGCSE 0610 Year 9 Semester 1 Revision */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
            <span>Cambridge IGCSE™ Biology (0610)</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Year 9 Semester 1 Revision Hub
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Semester 1 Revision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Master the core definitions, cell organelles, transport mechanisms, biological molecules, enzyme kinetics, and digestive system for Year 9 Cambridge 0610 examination success.
          </p>
        </div>

        {/* Quick Jump to Digestion / Stomach Labs */}
        <button
          onClick={() => {
            setActiveChapter('digestion');
            setDigestiveSubTab('journey');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-colors text-sm font-bold shrink-0 cursor-pointer shadow-2xs ${
            activeChapter === 'digestion'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200'
          }`}
        >
          <span>Explore Digestive System</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 6 Chapter Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        {[
          { id: 'characteristics', title: '1. Characteristics of Life', subtitle: 'MRS GREN & 5 Kingdoms' },
          { id: 'cells', title: '2. Cell Structure', subtitle: 'Organelles & I = A × M' },
          { id: 'movement', title: '3. Movement of Substances', subtitle: 'Diffusion, Osmosis, Active' },
          { id: 'molecules', title: '4. Biological Molecules', subtitle: 'Nutrients & 5 Food Tests' },
          { id: 'enzymes', title: '5. Enzymes', subtitle: 'Lock & Key, Temp & pH' },
          { id: 'digestion', title: '6. Digestive System', subtitle: 'Alimentary Canal & Villi' },
        ].map((tab) => {
          const isActive = activeChapter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveChapter(tab.id as Semester1Chapter)}
              className={`flex-1 min-w-[175px] py-3 px-4 rounded-xl text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-blue-800 shadow-sm border border-slate-200 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-semibold'
              }`}
            >
              <div className="text-sm sm:text-base">{tab.title}</div>
              <div className={`text-xs ${isActive ? 'text-blue-600' : 'text-slate-500'}`}>
                {tab.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* CHAPTER 1: CHARACTERISTICS OF LIVING THINGS & CLASSIFICATION */}
      {/* ======================================================== */}
      {activeChapter === 'characteristics' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-150">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
              <span>Cambridge 0610 Topic 1</span>
              <span>·</span>
              <span>Characteristics of Living Organisms, 5 Kingdoms, Invertebrates & Vertebrates</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-7 h-7 text-amber-500" />
              <span>Chapter 1: Characteristics & Animal Classification</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-4xl leading-relaxed">
              Master MRS GREN definitions, the 5 Kingdoms of life, classification of Arthropods and other invertebrates, vertebrate classes, and dichotomous identification keys.
            </p>
          </div>

          {/* Chapter 1 Sub-Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {[
              { id: 'mrs_gren', label: '✨ MRS GREN (7 Life Signs)', icon: Sparkles },
              { id: 'kingdoms', label: '👑 5 Kingdoms & Binomial System', icon: Layers },
              { id: 'arthropods', label: '🐜 Invertebrates: Arthropods (0610 Core)', icon: Bug },
              { id: 'invertebrates', label: '🪱 Annelids, Nematodes & Molluscs', icon: Binary },
              { id: 'vertebrates', label: '🦎 Vertebrates (5 Classes)', icon: Fish },
              { id: 'quiz', label: '🎯 Topic 1 Exam Quiz', icon: HelpCircle },
            ].map((sub) => {
              const isCurrent = classificationSubTab === sub.id;
              const Icon = sub.icon;
              return (
                <button
                  key={sub.id}
                  onClick={() => setClassificationSubTab(sub.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* View 1: MRS GREN Explorer */}
          {classificationSubTab === 'mrs_gren' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>The 7 Characteristics of Living Organisms (MRS GREN)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Click each letter below to inspect the syllabus definition, plant and animal examples, and examiner mark scheme advice.
                  </p>
                </div>
              </div>

              {/* Letter Bar */}
              <div className="grid grid-cols-7 gap-2 sm:gap-3">
                {MRS_GREN.map((item) => {
                  const isSelected = item.id === selectedMrsGren;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedMrsGren(item.id)}
                      className={`p-3 sm:p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-4 ring-blue-500/20 scale-102'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-2xl sm:text-3xl font-black">{item.letter}</div>
                      <div className="text-xs sm:text-sm font-bold truncate mt-1">{item.name}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected MRS GREN Card */}
              {(() => {
                const current = MRS_GREN.find((c) => c.id === selectedMrsGren) || MRS_GREN[0];
                return (
                  <div className="p-6 sm:p-7 bg-blue-50/70 border border-blue-200 rounded-3xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200 pb-3">
                      <span className="text-sm font-bold uppercase tracking-wider text-blue-800">
                        Characteristic & Syllabus Definition
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-blue-700 border border-blue-200">
                        Cambridge 0610 Standard
                      </span>
                    </div>

                    <div>
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {current.name} ({current.letter})
                      </h4>
                      <p className="text-base sm:text-lg text-blue-950 font-medium mt-1 leading-relaxed bg-white/90 p-4 rounded-2xl border border-blue-200">
                        &quot;{current.syllabusDefinition}&quot;
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-2xl border border-blue-100 space-y-1">
                        <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider block">
                          🌱 In Plants:
                        </span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {current.plantExample}
                        </p>
                      </div>

                      <div className="p-4 bg-white rounded-2xl border border-blue-100 space-y-1">
                        <span className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider block">
                          🐾 In Animals:
                        </span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {current.animalExample}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 space-y-1">
                      <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-amber-900">
                        <Award className="w-5 h-5 text-amber-600 shrink-0" />
                        <span>Cambridge Examiner Tip:</span>
                      </div>
                      <p className="text-sm sm:text-base text-amber-900 leading-relaxed font-medium">
                        {current.examTip}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* View 2: 5 Kingdoms & Binomial System */}
          {classificationSubTab === 'kingdoms' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FIVE_KINGDOMS.map((k) => (
                  <div key={k.name} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-slate-900">{k.name}</h4>
                        <span className="text-xs font-semibold px-2 py-0.5 bg-purple-100 text-purple-800 rounded-md">
                          Kingdom
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm space-y-1.5 text-slate-700 pt-1">
                        <p><strong>Cell Type:</strong> {k.cells}</p>
                        <p><strong>Cell Wall:</strong> {k.cellWall}</p>
                        <p><strong>Chloroplasts:</strong> {k.chloroplasts}</p>
                        <p><strong>Nutrition:</strong> {k.nutrition}</p>
                        <p><strong>Nucleus:</strong> {k.nucleus}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600">
                      <span className="font-bold text-slate-900 block mb-0.5">Key Exam Feature:</span>
                      {k.keyFeatures}
                    </div>
                  </div>
                ))}
              </div>

              {/* Binomial System High-Yield Box */}
              <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                  Syllabus Rule: The Binomial Nomenclature System
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold">
                  Two-Part Scientific Naming: <span className="italic font-serif text-amber-300">Genus</span> + <span className="italic font-serif text-cyan-300">species</span>
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Organisms are named globally using a two-word Latin name. The first word is the <strong>Genus</strong> (capitalized, e.g. <span className="font-serif italic text-amber-300">Panthera</span>), and the second word is the <strong>species</strong> (lowercase, e.g. <span className="font-serif italic text-cyan-300">leo</span>). When typed it must be in <em>italics</em>; when handwritten on exam papers it MUST be <u>underlined</u>!
                </p>
              </div>
            </div>
          )}

          {/* View 3: Invertebrates - Arthropods (0610 Core Syllabus) */}
          {classificationSubTab === 'arthropods' && (
            <div className="space-y-6">
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 space-y-1.5">
                <h4 className="font-bold text-base sm:text-lg flex items-center gap-2 text-amber-900">
                  <Bug className="w-5 h-5 text-amber-600" />
                  <span>The Phylum Arthropoda (Jointed-Leg Invertebrates)</span>
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
                  All arthropods share three diagnostic features: <strong>1. An exoskeleton made of chitin</strong> (waterproof armor); <strong>2. A segmented body</strong>; and <strong>3. Jointed appendages/legs</strong>. The 0610 syllabus divides them into four distinct classes:
                </p>
              </div>

              {/* Arthropod Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ARTHROPOD_GROUPS.map((grp) => {
                  const isSelected = selectedArthropodId === grp.id;
                  return (
                    <button
                      key={grp.id}
                      onClick={() => setSelectedArthropodId(grp.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-4 ring-blue-500/20'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-xs font-mono font-bold block ${isSelected ? 'text-blue-200' : 'text-blue-600'}`}>
                        {grp.scientificGroup}
                      </span>
                      <h4 className="text-xl font-black mt-0.5">{grp.name}</h4>
                      <div className={`text-xs mt-1 font-semibold ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                        {grp.pairsOfLegs.split(' (')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Arthropod Detailed Card */}
              {(() => {
                const current = ARTHROPOD_GROUPS.find((g) => g.id === selectedArthropodId) || ARTHROPOD_GROUPS[0];
                return (
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <div>
                        <h4 className="text-2xl font-black text-slate-900">{current.name} ({current.scientificGroup})</h4>
                        <span className="text-xs font-medium text-slate-500">Cambridge IGCSE 0610 Classification Spec</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                        {current.pairsOfLegs}
                      </span>
                    </div>

                    {/* Integrated Biological Diagram */}
                    <AnimalClassificationDiagram
                      animalGroup={current.id}
                      className="w-full h-44 sm:h-52 bg-white rounded-2xl border border-slate-200 p-2 shadow-2xs"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block mb-1">Body Regions:</strong>
                        <p className="text-slate-700">{current.bodyRegions}</p>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block mb-1">Legs & Wings:</strong>
                        <p className="text-slate-700"><strong>Legs:</strong> {current.pairsOfLegs}</p>
                        <p className="text-slate-700 mt-0.5"><strong>Wings:</strong> {current.wings}</p>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block mb-1">Antennae & Eyes:</strong>
                        <p className="text-slate-700"><strong>Antennae:</strong> {current.antennae}</p>
                        <p className="text-slate-700 mt-0.5"><strong>Sensory:</strong> {current.eyesAndSensory}</p>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block mb-1">Breathing Method:</strong>
                        <p className="text-slate-700">{current.breathing}</p>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 md:col-span-2">
                        <strong className="text-slate-900 block mb-1">Syllabus Examples:</strong>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {current.examples.map((ex) => (
                            <span key={ex} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-semibold">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 space-y-1">
                      <span className="font-bold text-sm text-amber-900 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-600" />
                        <span>Examiner Identification Rule:</span>
                      </span>
                      <p className="text-sm text-amber-900 font-medium leading-relaxed">
                        {current.examTip}
                      </p>
                    </div>
                  </div>
                );
              })()}

              {/* Master 4-Arthropod Comparison Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <th className="p-3">Class</th>
                      <th className="p-3">Body Regions</th>
                      <th className="p-3">Legs</th>
                      <th className="p-3">Wings</th>
                      <th className="p-3">Antennae</th>
                      <th className="p-3">Key Exam Identifier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {ARTHROPOD_GROUPS.map((a) => (
                      <tr key={a.id} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">{a.name}</td>
                        <td className="p-3">{a.bodyRegions.split(':')[1] || a.bodyRegions}</td>
                        <td className="p-3 font-semibold text-blue-700">{a.pairsOfLegs.split(' attached')[0]}</td>
                        <td className="p-3">{a.wings.includes('NO') ? '❌ None' : '✔️ Present'}</td>
                        <td className="p-3 font-medium">{a.antennae}</td>
                        <td className="p-3 text-slate-600">{a.examTip.split('!')[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* View 4: Other Invertebrate Phyla (Annelids, Nematodes, Molluscs) */}
          {classificationSubTab === 'invertebrates' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Non-Arthropod Invertebrate Groups</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  The Cambridge 0610 syllabus tests distinctions between worms (segmented Annelids vs unsegmented Nematodes) and Molluscs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {OTHER_INVERTEBRATES.map((phylum) => (
                  <div key={phylum.name} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-slate-900">{phylum.name}</h4>
                        <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-md">
                          {phylum.commonName}
                        </span>
                      </div>

                      {/* Biological Diagram for Phylum */}
                      <AnimalClassificationDiagram
                        animalGroup={phylum.name.toLowerCase()}
                        className="w-full h-36 bg-white rounded-xl border border-slate-200 p-2 shadow-2xs"
                      />

                      <div className="text-xs sm:text-sm space-y-1.5 text-slate-700 pt-1">
                        <p><strong>Body Plan:</strong> {phylum.bodyPlan}</p>
                        <p><strong>Segmentation:</strong> {phylum.segmentation}</p>
                        <p><strong>Limbs & Movement:</strong> {phylum.limbsAndLocomotion}</p>
                        <p><strong>Covering / Shell:</strong> {phylum.shellOrCuticle}</p>
                      </div>

                      <div className="pt-1">
                        <strong className="text-xs font-bold text-slate-900 block mb-1">Examples:</strong>
                        <div className="flex flex-wrap gap-1">
                          {phylum.examples.map((ex) => (
                            <span key={ex} className="text-xs px-2 py-0.5 bg-white border border-slate-200 rounded-md text-slate-700">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 font-medium">
                      <strong>💡 Exam Key:</strong> {phylum.examIdentifier}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View 5: Vertebrates (5 Classes) */}
          {classificationSubTab === 'vertebrates' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Vertebrate Animals (Phylum Chordata)</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Animals possessing an internal vertebral column (backbone). Compare the 5 major vertebrate classes:
                </p>
              </div>

              {/* Master Vertebrates Overview Diagram */}
              <AnimalClassificationDiagram
                animalGroup="vertebrates"
                className="w-full h-48 bg-white rounded-2xl border border-slate-200 p-2 shadow-2xs"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {VERTEBRATE_CLASSES.map((vert) => (
                  <div key={vert.name} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-slate-900">{vert.name}</h4>
                        <span className="text-xs font-semibold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">
                          Vertebrate
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm space-y-1.5 text-slate-700 pt-1">
                        <p><strong>Body Covering:</strong> {vert.bodyCovering}</p>
                        <p><strong>Temperature:</strong> {vert.thermoregulation}</p>
                        <p><strong>Breathing:</strong> {vert.breathing}</p>
                        <p><strong>Reproduction:</strong> {vert.reproduction}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                      <strong>📌 Cambridge Key Point:</strong> {vert.keyExamPoint}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View 6: Topic 1 Exam Quiz */}
          {classificationSubTab === 'quiz' && (
            <IgcseQuiz
              topicKey="characteristics"
              customTitle="Topic 1 Exam Quiz: Characteristics & Animal Classification"
              customSubtitle="Authentic Cambridge IGCSE 0610 practice on MRS GREN, Arthropods, Invertebrates, and Vertebrates."
            />
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* CHAPTER 2: CELL STRUCTURE & ORGANISATION */}
      {/* ======================================================== */}
      {activeChapter === 'cells' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-150">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
              <span>Cambridge 0610 Topic 2</span>
              <span>·</span>
              <span>Cell Structure, Organelles, Specialised Cells & Magnification</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Microscope className="w-7 h-7 text-emerald-600" />
              <span>Chapter 2: Cell Structure & Organisation</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-4xl leading-relaxed">
              Explore plant, animal, and bacterial ultrastructure, inspect 11 specialised cells and their evolutionary adaptations, master magnification calculations (M = I ÷ A), and trace the levels of biological organisation.
            </p>
          </div>

          {/* Chapter 2 Sub-Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {[
              { id: 'diagrams', label: '🔬 2D Cell Diagrams & Organelles', icon: Beaker },
              { id: 'specialized', label: '🧬 Specialised Cells Showcase (11 Cells)', icon: Sparkles },
              { id: 'magnification', label: '📐 Magnification Triangle (I = A × M)', icon: Calculator },
              { id: 'organisation', label: '🧱 Levels of Organisation', icon: Layers },
              { id: 'quiz', label: '🎯 Topic 2 Exam Quiz', icon: HelpCircle },
            ].map((sub) => {
              const isCurrent = cellSubTab === sub.id;
              const Icon = sub.icon;
              return (
                <button
                  key={sub.id}
                  onClick={() => setCellSubTab(sub.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sub-view 1: Cell Diagrams & Organelle Inspector */}
          {cellSubTab === 'diagrams' && (
            <div className="space-y-6">
              {/* Cell Type Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
                <button
                  onClick={() => setCellType('plant')}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    cellType === 'plant' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🌿 Plant Cell (Palisade / Leaf)
                </button>
                <button
                  onClick={() => setCellType('animal')}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    cellType === 'animal' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🐾 Animal Cell (Liver / Cheek)
                </button>
                <button
                  onClick={() => setCellType('bacteria')}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    cellType === 'bacteria' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🦠 Bacterial Cell (Prokaryote)
                </button>
              </div>

              {/* Interactive Cell Diagram + Organelle Inspector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Diagram (7 cols) */}
                <div className="lg:col-span-7 bg-slate-950 p-6 rounded-3xl border border-slate-800 text-white flex flex-col items-center select-none relative">
                  <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800 text-sm">
                    <span className="font-bold text-slate-200">
                      {cellType === 'plant' && '🌿 Typical Plant Cell Diagram'}
                      {cellType === 'animal' && '🐾 Typical Animal Cell Diagram'}
                      {cellType === 'bacteria' && '🦠 Bacterial Cell (Prokaryotic) Diagram'}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">Click organelle button below 🔬</span>
                  </div>

                  {/* 2D Vector Cell Diagram */}
                  <div className="w-full max-w-[440px] aspect-[440/320] my-4 relative">
                    <svg viewBox="0 0 440 320" className="w-full h-full">
                      {cellType === 'plant' && (
                        <g>
                          <rect x="20" y="20" width="400" height="280" rx="20" fill="#064e3b" stroke="#10b981" strokeWidth="8" />
                          <rect x="28" y="28" width="384" height="264" rx="14" fill="#065f46" stroke="#34d399" strokeWidth="3" />
                          <rect x="31" y="31" width="378" height="258" rx="12" fill="#022c22" />
                          <ellipse cx="220" cy="160" rx="120" ry="85" fill="#0369a1" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2.5" />
                          <text x="220" y="165" textAnchor="middle" fill="#bae6fd" fontSize="13" fontWeight="bold">
                            Permanent Vacuole (Cell Sap)
                          </text>
                          <circle cx="85" cy="90" r="40" fill="#7e22ce" stroke="#c084fc" strokeWidth="3" />
                          <circle cx="85" cy="90" r="14" fill="#581c87" />
                          <text x="85" y="145" textAnchor="middle" fill="#e9d5ff" fontSize="12" fontWeight="bold">
                            Nucleus (DNA)
                          </text>
                          <g fill="#22c55e" stroke="#15803d" strokeWidth="2">
                            <ellipse cx="340" cy="80" rx="28" ry="16" />
                            <ellipse cx="350" cy="230" rx="28" ry="16" />
                            <ellipse cx="100" cy="240" rx="28" ry="16" />
                          </g>
                          <text x="340" y="110" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="bold">
                            Chloroplast
                          </text>
                          <ellipse cx="230" cy="60" rx="20" ry="10" fill="#e11d48" stroke="#f43f5e" strokeWidth="1.5" />
                          <ellipse cx="230" cy="265" rx="20" ry="10" fill="#e11d48" stroke="#f43f5e" strokeWidth="1.5" />
                          <text x="230" y="80" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="bold">
                            Mitochondria
                          </text>
                        </g>
                      )}

                      {cellType === 'animal' && (
                        <g>
                          <path
                            d="M 50 160 C 50 80, 100 40, 220 35 C 340 30, 390 90, 400 160 C 410 230, 350 285, 230 290 C 110 295, 50 240, 50 160 Z"
                            fill="#1e1b4b"
                            stroke="#818cf8"
                            strokeWidth="4"
                          />
                          <text x="340" y="190" fill="#a5b4fc" fontSize="12" fontWeight="bold">
                            Cytoplasm
                          </text>
                          <circle cx="210" cy="155" r="50" fill="#7e22ce" stroke="#c084fc" strokeWidth="3.5" />
                          <circle cx="210" cy="155" r="18" fill="#581c87" />
                          <text x="210" y="222" textAnchor="middle" fill="#e9d5ff" fontSize="13" fontWeight="bold">
                            Nucleus (Chromosomes)
                          </text>
                          <ellipse cx="110" cy="110" rx="24" ry="12" fill="#e11d48" stroke="#f43f5e" strokeWidth="2" />
                          <ellipse cx="320" cy="110" rx="24" ry="12" fill="#e11d48" stroke="#f43f5e" strokeWidth="2" />
                          <ellipse cx="120" cy="220" rx="24" ry="12" fill="#e11d48" stroke="#f43f5e" strokeWidth="2" />
                          <text x="110" y="134" textAnchor="middle" fill="#fda4af" fontSize="11" fontWeight="bold">
                            Mitochondria
                          </text>
                          <circle cx="290" cy="230" r="10" fill="#38bdf8" opacity="0.6" />
                          <circle cx="315" cy="240" r="7" fill="#38bdf8" opacity="0.6" />
                          <circle cx="160" cy="90" r="2.5" fill="#facc15" />
                          <circle cx="260" cy="85" r="2.5" fill="#facc15" />
                          <circle cx="180" cy="235" r="2.5" fill="#facc15" />
                        </g>
                      )}

                      {cellType === 'bacteria' && (
                        <g>
                          <rect x="70" y="70" width="300" height="180" rx="60" fill="#3b0764" stroke="#c084fc" strokeWidth="6" />
                          <rect x="80" y="80" width="280" height="160" rx="50" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2.5" />
                          <path d="M 70 160 C 30 140, 40 200, 10 170" fill="none" stroke="#e879f9" strokeWidth="3" strokeDasharray="3 2" />
                          <text x="25" y="145" fill="#e879f9" fontSize="11" fontWeight="bold">Flagellum</text>
                          <path d="M 170 130 C 190 100, 250 110, 270 140 C 290 170, 230 200, 190 180 C 150 160, 230 140, 210 160" fill="none" stroke="#f43f5e" strokeWidth="3" />
                          <text x="220" y="165" textAnchor="middle" fill="#fda4af" fontSize="12" fontWeight="bold">
                            Circular Loop of DNA (Nucleoid)
                          </text>
                          <circle cx="130" cy="180" r="10" fill="none" stroke="#facc15" strokeWidth="2.5" />
                          <circle cx="310" cy="130" r="8" fill="none" stroke="#facc15" strokeWidth="2.5" />
                          <text x="130" y="205" textAnchor="middle" fill="#fef08a" fontSize="10" fontWeight="bold">Plasmid</text>
                          <circle cx="140" cy="120" r="2" fill="#38bdf8" />
                          <circle cx="280" cy="190" r="2" fill="#38bdf8" />
                        </g>
                      )}
                    </svg>
                  </div>

                  {/* Quick Organelle Selector Buttons */}
                  <div className="w-full flex flex-wrap gap-2 pt-3 border-t border-slate-800 justify-center">
                    {CELL_ORGANELLES.map((org) => (
                      <button
                        key={org.name}
                        onClick={() => setSelectedOrganelle(org.name)}
                        className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          selectedOrganelle === org.name
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {org.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Organelle Details (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {(() => {
                    const org = CELL_ORGANELLES.find((o) => o.name === selectedOrganelle) || CELL_ORGANELLES[0];
                    return (
                      <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-600">
                            Organelle Inspector
                          </span>
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                            {org.presentIn}
                          </span>
                        </div>

                        <h4 className="text-2xl font-extrabold text-slate-900">{org.name}</h4>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{org.description}</p>

                        <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
                          <strong className="text-sm sm:text-base font-bold text-slate-900 block">
                            Cellular Function:
                          </strong>
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{org.function}</p>
                        </div>

                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 space-y-1">
                          <span className="font-bold text-sm text-amber-900 block">💡 Cambridge Exam Tip:</span>
                          <p className="text-sm sm:text-base text-amber-900 leading-relaxed font-medium">
                            {org.examTip}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* Sub-view 2: Specialised Cells Showcase (11 Cells with Adaptations) */}
          {cellSubTab === 'specialized' && (
            <div className="space-y-6">
              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl">
                  {(['All', 'Plant', 'Animal'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSpecializedFilter(filter)}
                      className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        specializedFilter === filter
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {filter === 'All' ? `All Cells (${SPECIALIZED_CELLS.length})` : filter === 'Plant' ? '🌿 Plant Cells (5)' : '🐾 Animal Cells (6)'}
                    </button>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  Click any cell card below to inspect its detailed adaptations
                </span>
              </div>

              {/* Specialised Cells Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SPECIALIZED_CELLS.filter(
                  (c) => specializedFilter === 'All' || c.organism === specializedFilter
                ).map((cell) => {
                  const isSelected = selectedSpecializedCell === cell.name;
                  return (
                    <div
                      key={cell.name}
                      onClick={() => setSelectedSpecializedCell(cell.name)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                            cell.organism === 'Plant' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {cell.organism}
                          </span>
                          <span className="text-xs text-slate-500 font-mono font-medium">
                            {cell.system.split(' (')[0]}
                          </span>
                        </div>

                        <h4 className="text-lg font-extrabold text-slate-900">{cell.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {cell.function}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-bold text-blue-700">Inspect Adaptations</span>
                        <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Inspector for Selected Specialised Cell */}
              {(() => {
                const cell = SPECIALIZED_CELLS.find((c) => c.name === selectedSpecializedCell) || SPECIALIZED_CELLS[0];
                return (
                  <div className="p-6 sm:p-7 bg-slate-900 text-white rounded-3xl space-y-4 shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                          Syllabus Adaptations Dossier
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-black text-white">{cell.name}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700">
                          {cell.organism} Cell
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                          {cell.system}
                        </span>
                      </div>
                    </div>

                    {/* Integrated Biological Vector Diagram */}
                    <SpecialisedCellDiagram
                      cellName={cell.name}
                      className="w-full h-52 sm:h-60 bg-slate-950/90 rounded-2xl border border-slate-800 p-2 shadow-inner"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-2">
                        <strong className="text-cyan-300 font-bold block text-sm sm:text-base">
                          Key Structural Adaptations:
                        </strong>
                        <ul className="space-y-1.5 list-disc pl-4 text-slate-200 leading-relaxed">
                          {cell.adaptations.map((ad, i) => (
                            <li key={i}>{ad}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-1.5">
                          <strong className="text-emerald-300 font-bold block text-sm sm:text-base">
                            Physiological Function:
                          </strong>
                          <p className="text-slate-200 leading-relaxed font-normal">
                            {cell.function}
                          </p>
                        </div>

                        <div className="p-4 bg-amber-500/10 border border-amber-400/30 rounded-2xl text-amber-200 text-xs sm:text-sm leading-relaxed">
                          <strong className="text-amber-300 flex items-center gap-1.5 mb-1 font-bold">
                            <Award className="w-4 h-4 text-amber-400" />
                            <span>Examiner Mark Scheme Focus:</span>
                          </strong>
                          {cell.keyExamFact}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Sub-view 3: Magnification Calculator */}
          {cellSubTab === 'magnification' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 bg-indigo-50/80 border border-indigo-200 rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center gap-2 font-bold text-lg text-indigo-950">
                  <Calculator className="w-6 h-6 text-indigo-600" />
                  <span>Magnification Triangle Formula: I = A × M</span>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-indigo-100 text-center font-mono space-y-2">
                  <div className="text-xl font-black text-indigo-950 tracking-wider">
                    I = A × M &nbsp;|&nbsp; A = I ÷ M &nbsp;|&nbsp; M = I ÷ A
                  </div>
                  <div className="text-xs text-slate-500">
                    Image (I) and Actual size (A) MUST be in the SAME units! (1 mm = 1000 μm)
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <label className="font-bold text-slate-800 flex justify-between">
                      <span>Image Size measured with ruler (I):</span>
                      <span className="font-mono text-indigo-700">{imageSizeMm} mm ({imageSizeMm * 1000} μm)</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="1"
                      value={imageSizeMm}
                      onChange={(e) => setImageSizeMm(parseInt(e.target.value))}
                      className="w-full h-2.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mt-1"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-800 flex justify-between">
                      <span>Microscope Magnification (M):</span>
                      <span className="font-mono text-indigo-700">×{magnification}</span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="2000"
                      step="50"
                      value={magnification}
                      onChange={(e) => setMagnification(parseInt(e.target.value))}
                      className="w-full h-2.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mt-1"
                    />
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-950 flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase font-bold text-emerald-800 block">Actual Cell Size (A):</span>
                      <span className="text-3xl font-black text-emerald-900">{actualSizeUm} μm</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-700">
                      ({(actualSizeUm / 1000).toFixed(4)} mm)
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
                <h4 className="text-base font-bold text-slate-900">3-Step Calculation Exam Method:</h4>
                <div className="text-xs sm:text-sm space-y-2 text-slate-700">
                  <p><strong>Step 1:</strong> Measure the image length (I) with a ruler in millimetres (mm).</p>
                  <p><strong>Step 2:</strong> Convert millimetres to micrometers (μm) by multiplying by 1000.</p>
                  <p><strong>Step 3:</strong> Divide image size (μm) by the magnification (M) to get actual size (A = I ÷ M).</p>
                </div>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium">
                  <strong>⚠️ Common Mistake:</strong> Forgetting to multiply mm by 1000 before dividing!
                </div>
              </div>
            </div>
          )}

          {/* Sub-view 4: Levels of Biological Organisation */}
          {cellSubTab === 'organisation' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Levels of Biological Organisation</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Cells are the fundamental building blocks of all living organisms. Trace increasing complexity from organelles to whole organisms:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  { level: '1. Cell', desc: 'Basic structural and functional unit of all living organisms.', plant: 'Palisade cell', animal: 'Ciliated cell' },
                  { level: '2. Tissue', desc: 'A group of similar cells working together to perform a shared function.', plant: 'Palisade mesophyll', animal: 'Ciliated epithelium' },
                  { level: '3. Organ', desc: 'A structure made of different tissues working together to execute specific functions.', plant: 'Leaf', animal: 'Trachea / Stomach' },
                  { level: '4. Organ System', desc: 'A group of organs with related functions working together for body processes.', plant: 'Plant transport shoot system', animal: 'Respiratory system' },
                  { level: '5. Organism', desc: 'A complete individual living entity capable of independent life.', plant: 'Oak tree / Tomato plant', animal: 'Human' },
                ].map((item) => (
                  <div key={item.level} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 flex flex-col justify-between">
                    <div>
                      <h5 className="font-extrabold text-blue-700 text-sm">{item.level}</h5>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                      <p><strong>🌿 Plant:</strong> {item.plant}</p>
                      <p><strong>🐾 Animal:</strong> {item.animal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-view 5: Topic 2 Exam Quiz */}
          {cellSubTab === 'quiz' && (
            <IgcseQuiz
              topicKey="cells"
              customTitle="Topic 2 Exam Quiz: Organisation & Cell Structure"
              customSubtitle="Authentic Cambridge IGCSE 0610 practice on cell ultrastructure, organelles, 11 specialised cells, magnification formula M = I ÷ A, and levels of organisation."
            />
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* CHAPTER 3: MOVEMENT OF SUBSTANCES (DIFFUSION, OSMOSIS, ACTIVE) */}
      {/* ======================================================== */}
      {activeChapter === 'movement' && (
        <div className="flex flex-col gap-8 animate-in fade-in duration-150">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-blue-600" />
              <span>Diffusion, Osmosis & Active Transport Comparison</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-0.5">
              Distinguish between the 3 biological transport mechanisms and observe how water potential gradients alter plant and animal cell volume.
            </p>
          </div>

          {/* Chapter 3 Sub-Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {[
              { id: 'concepts', label: '🌊 Transport Mechanisms Comparison', icon: Droplets },
              { id: 'osmosis_sim', label: '🔬 Water Potential & Cell Volume Simulator', icon: Sliders },
              { id: 'quiz', label: '🎯 Topic 3 Exam Quiz', icon: HelpCircle },
            ].map((sub) => {
              const isCurrent = movementSubTab === sub.id;
              const Icon = sub.icon;
              return (
                <button
                  key={sub.id}
                  onClick={() => setMovementSubTab(sub.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* 3 Core Mechanisms Comparison Grid */}
          {movementSubTab === 'concepts' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MOVEMENT_CONCEPTS.map((m) => (
              <div key={m.type} className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-extrabold text-slate-900">{m.type}</h4>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        m.energyRequired ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {m.energyRequired ? '⚡ Active (Needs ATP)' : '🍃 Passive (No ATP)'}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-white p-3.5 rounded-xl border border-slate-200">
                    &quot;{m.definition}&quot;
                  </p>

                  <div className="text-xs sm:text-sm space-y-2 text-slate-700">
                    <p>
                      <strong>Direction:</strong> {m.direction}
                    </p>
                    <p>
                      <strong>Membrane:</strong> {m.membraneRequired}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <strong className="text-xs font-bold uppercase text-slate-800 block">Key Examples:</strong>
                    <ul className="text-xs sm:text-sm text-slate-600 list-disc pl-4 space-y-1">
                      {m.biologicalExamples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium">
                  <strong>⚠️ Exam Trap:</strong> {m.examPitfall}
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Interactive Osmosis Simulator: Plant Cell vs Animal Cell in Different Solutions */}
          {movementSubTab === 'osmosis_sim' && (
          <div className="p-6 sm:p-7 bg-slate-900 text-white rounded-3xl space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                  Interactive Experiment Simulator
                </span>
                <h4 className="text-2xl font-extrabold">
                  Effect of Water Potential (Osmosis) on Plant vs Animal Cells
                </h4>
              </div>

              {/* Solution Selector Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setOsmosisTonicity(-1)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                    osmosisTonicity === -1 ? 'bg-cyan-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  💧 Pure Water (Hypotonic)
                </button>
                <button
                  onClick={() => setOsmosisTonicity(0)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                    osmosisTonicity === 0 ? 'bg-cyan-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  ⚖️ Isotonic (Equilibrium)
                </button>
                <button
                  onClick={() => setOsmosisTonicity(1)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                    osmosisTonicity === 1 ? 'bg-cyan-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  🧂 Concentrated Salt/Sugar (Hypertonic)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Plant Cell Outcome */}
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-bold text-emerald-300">🌿 Plant Cell Outcome:</h5>
                  <span className="text-xs font-mono font-bold text-white bg-slate-700 px-2.5 py-1 rounded-md">
                    Has Cellulose Cell Wall
                  </span>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl text-sm sm:text-base leading-relaxed">
                  {osmosisTonicity === -1 && (
                    <div className="text-emerald-300 font-semibold space-y-1">
                      <p className="text-xl font-bold">State: TURGID (Turgor Pressure)</p>
                      <p className="text-slate-300 font-normal">
                        Water enters vacuole by osmosis down water potential gradient. The vacuole swells, pushing cytoplasm against the rigid cellulose cell wall. The cell wall pushes back with wall pressure, preventing lysis (bursting). This supports non-woody plants upright!
                      </p>
                    </div>
                  )}
                  {osmosisTonicity === 0 && (
                    <div className="text-slate-200 font-semibold space-y-1">
                      <p className="text-xl font-bold">State: INCIPIENT PLASMOLYSIS</p>
                      <p className="text-slate-300 font-normal">
                        Water potential inside cell equals external solution. No net movement of water molecules.
                      </p>
                    </div>
                  )}
                  {osmosisTonicity === 1 && (
                    <div className="text-rose-400 font-semibold space-y-1">
                      <p className="text-xl font-bold">State: PLASMOLYSED (Flaccid)</p>
                      <p className="text-slate-300 font-normal">
                        Water leaves vacuole by osmosis down water potential gradient. The vacuole collapses and the cell membrane pulls away from the cell wall. The plant wilts!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Animal Cell (Red Blood Cell) Outcome */}
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-bold text-rose-300">🐾 Animal Cell Outcome (RBC):</h5>
                  <span className="text-xs font-mono font-bold text-rose-300 bg-rose-950 px-2.5 py-1 rounded-md border border-rose-800">
                    NO Cell Wall!
                  </span>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl text-sm sm:text-base leading-relaxed">
                  {osmosisTonicity === -1 && (
                    <div className="text-rose-400 font-semibold space-y-1">
                      <p className="text-xl font-bold">State: LYSIS (BURSTING!)</p>
                      <p className="text-slate-300 font-normal">
                        Water enters cell down water potential gradient. Because animal cells have NO rigid cell wall, the membrane stretches and BURSTS (haemolysis in RBCs).
                      </p>
                    </div>
                  )}
                  {osmosisTonicity === 0 && (
                    <div className="text-slate-200 font-semibold space-y-1">
                      <p className="text-xl font-bold">State: NORMAL (Biconcave disc)</p>
                      <p className="text-slate-300 font-normal">
                        Blood plasma is kept strictly isotonic by kidneys. Equal rate of water entry and exit.
                      </p>
                    </div>
                  )}
                  {osmosisTonicity === 1 && (
                    <div className="text-amber-400 font-semibold space-y-1">
                      <p className="text-xl font-bold">State: CRENATED (SHRIVELLED)</p>
                      <p className="text-slate-300 font-normal">
                        Water moves out of cell by osmosis into concentrated solution. Cell shrivels and wrinkles with notched edges (crenation).
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Sub-view 3: Topic 3 Exam Quiz */}
          {movementSubTab === 'quiz' && (
            <IgcseQuiz
              topicKey="movement"
              customTitle="Topic 3 Exam Quiz: Movement in and out of Cells"
              customSubtitle="Authentic Cambridge IGCSE 0610 practice on diffusion, osmosis, active transport, and water potential gradients."
            />
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* CHAPTER 4: BIOLOGICAL MOLECULES & VIRTUAL FOOD TESTS */}
      {/* ======================================================== */}
      {activeChapter === 'molecules' && (
        <div className="flex flex-col gap-8 animate-in fade-in duration-150">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <span>Biological Molecules & The 5 Standard Food Tests</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-0.5">
              Study the elemental composition of carbohydrates, lipids, proteins, and DNA, then practice all 5 practical laboratory food tests.
            </p>
          </div>

          {/* Chapter 4 Sub-Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {[
              { id: 'nutrients', label: '🥗 4 Biological Macromolecules', icon: Sparkles },
              { id: 'food_tests', label: '🧪 5 Food Tests Laboratory (Paper 6)', icon: Beaker },
              { id: 'quiz', label: '🎯 Topic 4 Exam Quiz', icon: HelpCircle },
            ].map((sub) => {
              const isCurrent = moleculesSubTab === sub.id;
              const Icon = sub.icon;
              return (
                <button
                  key={sub.id}
                  onClick={() => setMoleculesSubTab(sub.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isCurrent
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* 4 Major Nutrient Categories */}
          {moleculesSubTab === 'nutrients' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BIOLOGICAL_MOLECULES.map((mol) => (
              <div key={mol.name} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-slate-900">{mol.name}</h4>
                  <div className="text-xs sm:text-sm font-mono font-bold text-purple-700 bg-purple-50 p-2 rounded-lg border border-purple-200">
                    Elements: {mol.elements}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                    <strong>Building Blocks:</strong> {mol.basicUnits}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block mb-0.5">Biological Roles:</strong>
                  {mol.roles}
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Interactive Virtual Food Testing Bench */}
          {moleculesSubTab === 'food_tests' && (
          <div className="p-6 sm:p-7 bg-slate-900 text-white rounded-3xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                  IGCSE Practical Paper 6 Bench
                </span>
                <h4 className="text-2xl font-extrabold">
                  Interactive Virtual Food Testing Laboratory
                </h4>
              </div>

              {/* Food Test Selector Buttons */}
              <div className="flex flex-wrap gap-2">
                {FOOD_TESTS.map((test, index) => (
                  <button
                    key={test.nutrient}
                    onClick={() => setSelectedFoodTestIndex(index)}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      selectedFoodTestIndex === index
                        ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {test.nutrient.split(' (')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Test Tube Visualization & Method */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Test Tube Graphic (5 cols) */}
              <div className="md:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center">
                <span className="text-xs font-mono text-slate-400 mb-2">Reagent Color Reaction</span>

                <div className="flex items-center justify-center gap-6 my-2">
                  {/* Negative Test Tube */}
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-400">Negative Result</span>
                    <div className="w-12 h-36 rounded-b-2xl border-2 border-slate-500 bg-slate-900 relative overflow-hidden flex items-end justify-center p-1">
                      <div
                        className="w-full h-20 rounded-b-xl opacity-90 transition-all duration-300"
                        style={{
                          backgroundColor:
                            selectedFoodTestIndex === 0
                              ? '#2563eb' // Benedict blue
                              : selectedFoodTestIndex === 1
                              ? '#ca8a04' // Iodine yellow-brown
                              : selectedFoodTestIndex === 2
                              ? '#93c5fd' // Biuret pale blue
                              : selectedFoodTestIndex === 3
                              ? 'transparent' // Ethanol clear
                              : '#1d4ed8', // DCPIP deep blue
                          borderTop: '2px solid rgba(255,255,255,0.4)',
                        }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-300 text-center max-w-[100px]">
                      {activeTest.negativeColor}
                    </span>
                  </div>

                  <span className="text-2xl font-bold text-slate-500">→</span>

                  {/* Positive Test Tube */}
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="text-xs font-bold text-emerald-400">Positive Result</span>
                    <div className="w-12 h-36 rounded-b-2xl border-2 border-emerald-400 bg-slate-900 relative overflow-hidden flex items-end justify-center p-1 shadow-lg shadow-emerald-500/20">
                      <div
                        className="w-full h-20 rounded-b-xl opacity-95 transition-all duration-300"
                        style={{
                          backgroundColor:
                            selectedFoodTestIndex === 0
                              ? '#dc2626' // Brick-red
                              : selectedFoodTestIndex === 1
                              ? '#1e1b4b' // Blue-black
                              : selectedFoodTestIndex === 2
                              ? '#a855f7' // Purple / lilac
                              : selectedFoodTestIndex === 3
                              ? '#f8fafc' // Cloudy white emulsion
                              : 'transparent', // Decolorised
                          borderTop: '2px solid rgba(255,255,255,0.5)',
                        }}
                      />
                    </div>
                    <span className="text-xs font-mono text-emerald-300 text-center font-bold max-w-[100px]">
                      {activeTest.positiveColor}
                    </span>
                  </div>
                </div>

                {activeTest.needsHeat && (
                  <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-bold bg-rose-950 text-rose-300 border border-rose-800 animate-pulse">
                    <Thermometer className="w-3.5 h-3.5 text-rose-400" />
                    <span>Requires 80–100°C Boiling Water Bath!</span>
                  </div>
                )}
              </div>

              {/* Lab Procedure & Examiner Notes (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Target Nutrient:
                  </span>
                  <h4 className="text-2xl font-extrabold text-white">{activeTest.nutrient}</h4>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    Reagent used: <span className="text-amber-300 font-bold">{activeTest.reagent}</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-1.5">
                  <span className="text-xs font-bold uppercase text-slate-300 tracking-wider block">
                    Experimental Protocol:
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {activeTest.method}
                  </p>
                </div>

                <div className="p-4 bg-amber-500/10 border border-amber-400/30 rounded-2xl text-amber-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-amber-300 block mb-1">📌 Cambridge 0610 Practical Tip:</strong>
                  {activeTest.examNote}
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Sub-view 3: Topic 4 Exam Quiz */}
          {moleculesSubTab === 'quiz' && (
            <IgcseQuiz
              topicKey="molecules"
              customTitle="Topic 4 Exam Quiz: Biological Molecules & Food Tests"
              customSubtitle="Authentic Cambridge IGCSE 0610 practice on carbohydrates, lipids, proteins, DNA, and the 5 standard food tests."
            />
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* CHAPTER 5: ENZYMES & FACTORS */}
      {/* ======================================================== */}
      {activeChapter === 'enzymes' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-150">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-600 uppercase tracking-wider mb-1">
              <span>Cambridge 0610 Topic 5</span>
              <span>·</span>
              <span>Biological Catalysts, Kinetics & Practical Investigations</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Zap className="w-7 h-7 text-purple-600" />
              <span>Chapter 5: Enzymes, Kinetics & Practical Investigations</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-4xl leading-relaxed">
              Enzymes are protein biological catalysts that speed up metabolic reactions without being altered. Explore kinetic temperature and pH controls, concentration saturation curves, and Paper 6 laboratory experiments.
            </p>
          </div>

          {/* Sub-Tabs for Chapter 5 */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {[
              { id: 'simulation', label: '⚡ Temp & pH Kinetic Sliders', desc: 'Interactive Thermal & pH Activity' },
              { id: 'concentrations', label: '📈 [Substrate] & [Enzyme] Curves', desc: 'Saturation Plateau & Limiting Factors' },
              { id: 'practicals', label: '🧪 Paper 6 Practical Bench', desc: 'Amylase Spotting Tile & Catalase Syringe' },
              { id: 'lock_key', label: '🔐 Lock & Key & Catalysis', desc: 'Active Site, Activation Energy & Intra/Extra' },
              { id: 'quiz', label: '🎯 Topic 5 Exam Quiz', desc: 'Enzyme Kinetics & Paper 6 Practice' },
            ].map((sub) => {
              const isCurrent = enzymeSubTab === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setEnzymeSubTab(sub.id as any)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                    isCurrent
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
                  }`}
                >
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* SUB-TAB 1: KINETIC TEMPERATURE & pH SIMULATOR */}
          {enzymeSubTab === 'simulation' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Sliders (5 cols) */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                  <span className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wider block">
                    1. Reaction Temperature (°C)
                  </span>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium text-slate-500">Body Optimum ~37°C</span>
                    <span className="text-lg font-black font-mono px-3 py-1 rounded-xl bg-white border border-slate-300 text-slate-900 shadow-2xs">
                      {tempC}°C
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="70"
                    step="1"
                    value={tempC}
                    onChange={(e) => setTempC(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />

                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span className="text-blue-600">0°C (Low KE)</span>
                    <span className="text-emerald-600 font-extrabold">37°C (Optimum)</span>
                    <span className="text-rose-600">60°C+ (Denatured)</span>
                  </div>
                </div>

                {/* pH slider */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                  <span className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wider block">
                    2. Solution pH Level
                  </span>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium text-slate-500">Neutral ~7.0</span>
                    <span className="text-lg font-black font-mono px-3 py-1 rounded-xl bg-white border border-slate-300 text-slate-900 shadow-2xs">
                      pH {enzymePh.toFixed(1)}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1.0"
                    max="12.0"
                    step="0.1"
                    value={enzymePh}
                    onChange={(e) => setEnzymePh(parseFloat(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />

                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span className="text-rose-600">pH 2 (Pepsin)</span>
                    <span className="text-emerald-600 font-extrabold">pH 7 (Amylase)</span>
                    <span className="text-blue-600">pH 8.5 (Trypsin)</span>
                  </div>
                </div>

                {/* Direct Deep Link to the full Stomach HCl & Enzyme Sandbox */}
                {onGoToEnzymes && (
                  <button
                    onClick={onGoToEnzymes}
                    className="w-full py-3.5 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-sm transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Beaker className="w-5 h-5" />
                    <span>Launch Deep Stomach HCl Sandbox</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Right Velocity & Molecular State (7 cols) */}
              <div className="md:col-span-7 bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                    Relative Catalytic Velocity
                  </span>
                  <span className="text-3xl font-black text-amber-400 font-mono">
                    {tempRate} units
                  </span>
                </div>

                {/* Progress Velocity Bar */}
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-200 ${
                      isTempDenatured
                        ? 'bg-rose-600'
                        : tempRate > 80
                        ? 'bg-emerald-500'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${tempRate}%` }}
                  />
                </div>

                {/* Active State Feedback Box */}
                <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                  {isTempDenatured ? (
                    <div className="space-y-1.5 text-rose-300">
                      <span className="text-xl font-bold flex items-center gap-2 text-rose-400">
                        🔥 IRREVERSIBLY DENATURED!
                      </span>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        At {tempC}°C, immense thermal vibrations rupture the hydrogen and ionic bonds stabilizing the tertiary protein structure. The active site shape is permanently altered; substrates can no longer bind (no ES complexes form).
                      </p>
                    </div>
                  ) : tempC <= 15 ? (
                    <div className="space-y-1.5 text-blue-300">
                      <span className="text-xl font-bold flex items-center gap-2 text-blue-400">
                        ❄️ LOW KINETIC ENERGY (INACTIVE)
                      </span>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        Molecules move very slowly. Few collisions occur between enzyme active sites and substrate molecules. Note: The enzyme is NOT denatured at low temperatures; warming will restore full activity.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-emerald-300">
                      <span className="text-xl font-bold flex items-center gap-2 text-emerald-400">
                        ⚡ OPTIMAL COLLISION FREQUENCY
                      </span>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        Molecules possess high kinetic energy, resulting in frequent successful collisions and rapid Enzyme-Substrate (ES) complex formation.
                      </p>
                    </div>
                  )}
                </div>

                {/* Lock and Key Theory Explanation */}
                <div className="p-4 bg-purple-950/60 border border-purple-800 rounded-2xl text-xs sm:text-sm text-purple-200 leading-relaxed space-y-1">
                  <strong className="text-white block font-bold">Lock and Key Hypothesis:</strong>
                  The enzyme&apos;s active site has a specific complementary shape to its substrate. Only that specific substrate fits into the active site, just like a key fits only one lock.
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB 2: SUBSTRATE & ENZYME CONCENTRATION CURVES */}
          {enzymeSubTab === 'concentrations' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Controls Column (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                {/* Substrate Concentration Slider */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wider">
                      Substrate Concentration [S]
                    </span>
                    <span className="text-lg font-black font-mono px-3 py-1 rounded-xl bg-purple-100 text-purple-800 border border-purple-200">
                      {substrateConc}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={substrateConc}
                    onChange={(e) => setSubstrateConc(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />

                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>0% (No reaction)</span>
                    <span className="text-purple-700">Moderate</span>
                    <span className="text-emerald-700 font-extrabold">Saturation Plateau (Vmax)</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                    <p className="font-semibold text-slate-900">
                      Calculated Rate: <span className="font-mono text-purple-600 font-bold">{substrateRate}% of Vmax</span>
                    </p>
                    <p className="text-slate-600">
                      {substrateConc < 40 ? (
                        <span className="text-amber-700 font-semibold">
                          ⚠️ Substrate is the LIMITING FACTOR. Adding more substrate increases collision frequency and rate.
                        </span>
                      ) : substrateConc < 80 ? (
                        <span className="text-blue-700 font-semibold">
                          Transition zone: Active sites are becoming increasingly occupied with substrate molecules.
                        </span>
                      ) : (
                        <span className="text-emerald-700 font-semibold">
                          ✅ SATURATED (Vmax reached): All enzyme active sites are occupied. Active site availability is now the LIMITING FACTOR!
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Enzyme Concentration Slider */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wider">
                      Enzyme Concentration [E]
                    </span>
                    <span className="text-lg font-black font-mono px-3 py-1 rounded-xl bg-indigo-100 text-indigo-800 border border-indigo-200">
                      {enzymeConc}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={enzymeConc}
                    onChange={(e) => setEnzymeConc(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />

                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>0% (Zero rate)</span>
                    <span className="text-indigo-700">Linear increase</span>
                    <span className="text-indigo-900">100% (Max active sites)</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                    <p className="font-semibold text-slate-900">
                      Calculated Rate (with excess substrate): <span className="font-mono text-indigo-600 font-bold">{enzymeRate} arbitrary units</span>
                    </p>
                    <p className="text-slate-600">
                      Directly proportional: doubling enzyme molecules doubles available active sites, doubling ES complex formation per second.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kinetic Curves Visualization Column (7 cols) */}
              <div className="lg:col-span-7 bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    Cambridge 0610 Syllabus Graph
                  </span>
                  <h4 className="text-xl font-extrabold text-white">
                    Effect of Substrate Concentration on Reaction Rate
                  </h4>
                </div>

                {/* SVG Curve Diagram */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                  <svg viewBox="0 0 400 220" className="w-full h-48 select-none">
                    {/* Axes */}
                    <line x1="40" y1="180" x2="380" y2="180" stroke="#64748b" strokeWidth="2" />
                    <line x1="40" y1="180" x2="40" y2="20" stroke="#64748b" strokeWidth="2" />

                    {/* Vmax dashed line */}
                    <line x1="40" y1="50" x2="380" y2="50" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="45" y="44" fill="#f59e0b" fontSize="11" fontWeight="bold">
                      Vmax (Maximum Rate — all active sites saturated)
                    </text>

                    {/* Saturation curve */}
                    <path
                      d="M 40 180 Q 90 90, 180 60 T 380 50"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="3.5"
                    />

                    {/* Interactive dot based on current slider */}
                    {(() => {
                      const xPos = 40 + (substrateConc / 100) * 320;
                      // approximate curve y position
                      const yPos = 180 - (substrateRate / 100) * 130;
                      return (
                        <g>
                          <line x1={xPos} y1="180" x2={xPos} y2={yPos} stroke="#ec4899" strokeWidth="1.5" strokeDasharray="2 2" />
                          <circle cx={xPos} cy={yPos} r="7" fill="#ec4899" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                        </g>
                      );
                    })()}

                    {/* Labels */}
                    <text x="210" y="205" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">
                      Substrate Concentration [S] →
                    </text>
                    <text x="15" y="100" fill="#94a3b8" fontSize="11" transform="rotate(-90 15,100)" textAnchor="middle" fontWeight="bold">
                      Rate of Reaction →
                    </text>

                    {/* Annotation on limiting factor */}
                    <text x="90" y="150" fill="#93c5fd" fontSize="10">
                      Slope: [S] is limiting
                    </text>
                    <text x="230" y="80" fill="#86efac" fontSize="10">
                      Plateau: [Enzyme] is limiting
                    </text>
                  </svg>
                </div>

                {/* Exam Key Takeaway Box */}
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 text-xs sm:text-sm space-y-2">
                  <h5 className="font-bold text-amber-300 flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-400" />
                    <span>0610 Cambridge Exam Explanation (Why does the rate plateau?):</span>
                  </h5>
                  <p className="text-slate-300 leading-relaxed">
                    At initial low substrate concentrations, active sites are empty; adding more substrate increases collisions and rate. However, at high concentrations, <strong>every single active site is continuously engaged</strong> in catalysis (saturated). Substrate molecules must wait for active sites to become vacant. The number of enzyme active sites has become the <strong>limiting factor</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB 3: PAPER 6 PRACTICAL BENCH */}
          {enzymeSubTab === 'practicals' && (
            <div className="space-y-6">
              {/* Practical Experiment Switcher */}
              <div className="flex flex-wrap gap-3">
                {ENZYME_PRACTICALS.map((prac, idx) => (
                  <button
                    key={prac.title}
                    onClick={() => setSelectedPracticalIndex(idx)}
                    className={`px-4 py-3 rounded-2xl text-left border transition-all cursor-pointer flex-1 min-w-[280px] ${
                      selectedPracticalIndex === idx
                        ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block opacity-80">
                      0610 Paper 6 Protocol #{idx + 1}
                    </span>
                    <strong className="text-sm sm:text-base block mt-0.5">
                      {prac.enzyme.split(' (')[0]} Investigation
                    </strong>
                    <span className="text-xs opacity-90 line-clamp-1 mt-0.5">
                      {prac.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Practical Full Protocol */}
              {(() => {
                const exp = ENZYME_PRACTICALS[selectedPracticalIndex];
                return (
                  <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 space-y-6">
                    <div className="border-b border-slate-800 pb-4">
                      <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                        Full Laboratory Protocol & Variables Table
                      </span>
                      <h4 className="text-2xl font-extrabold text-white mt-1">
                        {exp.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 mt-2 text-xs sm:text-sm text-slate-300">
                        <span><strong>Enzyme:</strong> {exp.enzyme}</span>
                        <span>•</span>
                        <span><strong>Substrate:</strong> {exp.substrate}</span>
                      </div>
                    </div>

                    {/* Variables 3-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* IV */}
                      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                          Independent Variable (IV)
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white">
                          What is changed by the experimenter:
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {exp.independentVariable}
                        </p>
                      </div>

                      {/* DV */}
                      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5">
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                          Dependent Variable (DV)
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white">
                          What is measured:
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {exp.dependentVariable}
                        </p>
                      </div>

                      {/* CV */}
                      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5">
                        <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
                          Controlled Variables (CV)
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white">
                          Kept constant for fair test:
                        </p>
                        <ul className="text-xs sm:text-sm text-slate-300 space-y-1 list-disc pl-4">
                          {exp.controlledVariables.slice(0, 3).map((cv, i) => (
                            <li key={i}>{cv}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Step by Step Method */}
                    <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                      <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                        Step-by-Step Practical Method
                      </span>
                      <div className="space-y-2">
                        {exp.method.map((step, sIdx) => (
                          <p key={sIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {step}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Expected Results & Sources of Error */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Expected Results */}
                      <div className="p-5 bg-emerald-950/40 border border-emerald-800/80 rounded-2xl space-y-2">
                        <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider block">
                          Expected Results & Trend
                        </span>
                        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                          {exp.expectedResults}
                        </p>
                      </div>

                      {/* Sources of Error & Improvements */}
                      <div className="p-5 bg-rose-950/40 border border-rose-800/80 rounded-2xl space-y-2">
                        <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider block">
                          Sources of Error & Practical Improvements
                        </span>
                        <ul className="text-xs sm:text-sm text-rose-100 space-y-1.5 list-disc pl-4">
                          {exp.sourcesOfErrorAndImprovements.map((err, eIdx) => (
                            <li key={eIdx}>{err}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* SUB-TAB 4: LOCK & KEY THEORY, ACTIVATION ENERGY & COMPARISONS */}
          {enzymeSubTab === 'lock_key' && (
            <div className="space-y-6">
              {/* 4-Step Catalysis Cycle */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                <div>
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">
                    Molecular Mechanism
                  </span>
                  <h4 className="text-xl font-bold text-slate-900">
                    The 4-Step Catalytic Cycle (Lock & Key Hypothesis)
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      step: 'Step 1: Free Active Site',
                      desc: 'Enzyme has a specifically folded active site whose 3D tertiary shape is exact and complementary to the substrate molecule.',
                      badge: 'Complementary Shape',
                    },
                    {
                      step: 'Step 2: Collision & Complex',
                      desc: 'Random thermal collisions bring substrate into active site. Temporary bonds form, creating the Enzyme-Substrate (ES) complex.',
                      badge: 'ES Complex',
                    },
                    {
                      step: 'Step 3: Lowering Activation Energy',
                      desc: 'Enzyme strains chemical bonds in substrate, significantly lowering activation energy (Ea) needed for reaction to occur.',
                      badge: 'Lowers Ea',
                    },
                    {
                      step: 'Step 4: Product Release',
                      desc: 'Products are released because they no longer fit active site. Enzyme emerges completely unchanged, ready to bind another substrate.',
                      badge: 'Unchanged Catalyst',
                    },
                  ].map((st, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                      <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                        {st.badge}
                      </span>
                      <h5 className="font-bold text-slate-900 text-sm sm:text-base">{st.step}</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intracellular vs Extracellular Comparison & Exam Trap */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Comparison Table (7 cols) */}
                <div className="md:col-span-7 p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                  <h4 className="text-lg font-bold text-slate-900">
                    Intracellular vs Extracellular Enzymes (0610 Core Concept)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-100/80">
                          <th className="p-3 font-bold text-slate-800">Feature</th>
                          <th className="p-3 font-bold text-purple-800">Intracellular Enzymes</th>
                          <th className="p-3 font-bold text-blue-800">Extracellular Enzymes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-3 font-semibold text-slate-700">Where they work</td>
                          <td className="p-3 text-slate-600">INSIDE the cells where they were synthesised</td>
                          <td className="p-3 text-slate-600">OUTSIDE the cells that produced them (secreted)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-700">Prime Examples</td>
                          <td className="p-3 text-slate-600">
                            <strong>Catalase</strong> (breaks down H₂O₂ inside liver/potato cells), DNA polymerase, respiratory enzymes
                          </td>
                          <td className="p-3 text-slate-600">
                            <strong>Amylase, Pepsin, Lipase</strong> (secreted into alimentary canal to break down food macromolecules)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-700">Biological Purpose</td>
                          <td className="p-3 text-slate-600">Metabolic maintenance, toxin breakdown, synthesis of cellular parts</td>
                          <td className="p-3 text-slate-600">Digestion of large insoluble polymers into small soluble absorbable units</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Common Exam Trap Warning (5 cols) */}
                <div className="md:col-span-5 p-6 bg-rose-50 border-2 border-rose-300 rounded-3xl space-y-3">
                  <div className="flex items-center gap-2 text-rose-700 font-extrabold text-base">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <span>Cambridge 0610 Examiner Warning</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <strong>NEVER say enzymes &quot;die&quot; or are &quot;killed&quot;!</strong> Enzymes are NOT living organisms; they are non-living biological molecules (proteins).
                  </p>
                  <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    At high temperatures (above optimum) or extreme pH levels, enzymes are <strong>DENATURED</strong>. Increased thermal vibrations break hydrogen and ionic bonds, altering the 3D active site shape so the substrate can no longer fit. Denaturation is irreversible.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Sub-view 5: Topic 5 Exam Quiz */}
          {enzymeSubTab === 'quiz' && (
            <IgcseQuiz
              topicKey="enzymes"
              customTitle="Topic 5 Exam Quiz: Enzymes & Biological Catalysts"
              customSubtitle="Authentic Cambridge IGCSE 0610 practice on lock and key hypothesis, active site shape, temperature/pH denaturation, concentration limiting factors, and Paper 6 practicals."
            />
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* CHAPTER 6: HUMAN NUTRITION & DIGESTIVE SYSTEM */}
      {/* ======================================================== */}
      {activeChapter === 'digestion' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-150">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
              <span>Cambridge 0610 Topic 7</span>
              <span>·</span>
              <span>Alimentary Canal, Physical & Chemical Digestion, and Absorption</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Activity className="w-7 h-7 text-blue-600" />
              <span>Chapter 6: Human Digestive System Explorer</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-4xl leading-relaxed">
              Explore the continuous journey of food through the alimentary canal, inspect tooth structure and dental decay, understand peristaltic contractions, and examine nutrient absorption across intestinal villi.
            </p>
          </div>

          {/* Sub-Tabs for Chapter 6 */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {[
              { id: 'journey', label: '🗺️ GI Pathway & Organ Tour', desc: 'Interactive Alimentary Canal & Bolus Journey' },
              { id: 'teeth', label: '🦷 Teeth & Decay Lab', desc: 'Tooth Types, Anatomy & Acid Erosion' },
              { id: 'peristalsis', label: '🌊 Peristalsis Lab', desc: 'Circular & Longitudinal Smooth Muscles' },
              { id: 'villus', label: '🔬 Villus Absorption Lab', desc: 'Microvilli, Capillaries & Central Lacteal' },
              { id: 'enzymes', label: '🧪 Digestive Enzymes & Stomach', desc: 'HCl pH, Pepsin, Amylase, Lipase & Bile' },
              { id: 'stages', label: '📝 5 Food Processing Stages', desc: 'Ingestion, Digestion, Absorption, Assimilation, Egestion' },
              { id: 'quiz', label: '🎯 Topic 6 Exam Quiz', desc: 'Practice 0610 Digestion Exam Questions' },
              { id: 'notes', label: '📋 0610 Revision Notes', desc: 'Syllabus Summary Sheet & Mark Schemes' },
            ].map((sub) => {
              const isCurrent = digestiveSubTab === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setDigestiveSubTab(sub.id as any)}
                  className={`flex-1 min-w-[190px] py-2.5 px-3.5 rounded-xl text-left transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white text-blue-700 shadow-sm border border-slate-200 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-semibold'
                  }`}
                >
                  <div className="text-sm font-bold">{sub.label}</div>
                  <div className={`text-xs ${isCurrent ? 'text-blue-600' : 'text-slate-500'}`}>
                    {sub.desc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sub-view 1: GI Tour & Interactive Organ Sandbox */}
          {digestiveSubTab === 'journey' && (
            <div className="flex flex-col gap-6">
              {/* Quick Organ Jump Chips */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 shadow-2xs">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-sm font-bold">
                  <span className="text-slate-500 uppercase text-xs tracking-wider shrink-0 pl-1 font-bold">
                    Select Organ:
                  </span>
                  {ORGANS.map((org) => {
                    const isSelected = selectedOrganId === org.id;
                    return (
                      <button
                        key={org.id}
                        onClick={() => handleSelectOrgan(org.id)}
                        className={`px-3 py-1.5 rounded-xl border transition-all whitespace-nowrap shrink-0 cursor-pointer text-xs sm:text-sm font-bold ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : org.isAccessory
                            ? 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {org.isAccessory && '⭐ '}
                        {org.id === 'pancreas'
                          ? pancreasLabel.split(' (')[0]
                          : org.name.split(' (')[0]}
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
                    pancreasLabel={pancreasLabel}
                    onUpdatePancreasLabel={setPancreasLabel}
                  />
                </div>

                {/* Right Zone: Synchronized Organ Details Deck (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <OrganDetailsCard
                    organ={currentOrganInfo}
                    onSelectConnectedOrgan={handleSelectOrgan}
                    selectedFoodType={selectedFoodType}
                    pancreasLabel={pancreasLabel}
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

          {/* Sub-view 2: Teeth Lab */}
          {digestiveSubTab === 'teeth' && <TeethLab />}

          {/* Sub-view 3: Peristalsis Lab */}
          {digestiveSubTab === 'peristalsis' && <PeristalsisLab />}

          {/* Sub-view 4: Villus Absorption Lab */}
          {digestiveSubTab === 'villus' && <VillusLab />}

          {/* Sub-view 5: 5 Stages of Food Processing */}
          {digestiveSubTab === 'stages' && (
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {STAGES.map((stage) => (
                  <div key={stage.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-bold text-slate-900">{stage.name}</h4>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                          Topic 7.1
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                        &quot;{stage.definition}&quot;
                      </p>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950">
                      <strong>💡 Examiner Note:</strong> {stage.igcseNote}
                    </div>
                  </div>
                ))}
              </div>

              {/* High-yield Bile & Stomach HCl comparison box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-emerald-950 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <span>The Two Crucial Roles of Bile in Digestion</span>
                  </h4>
                  <ul className="text-xs sm:text-sm text-emerald-900 space-y-2 list-disc pl-4 leading-relaxed font-medium">
                    <li>
                      <strong>1. Neutralises acidic stomach chyme:</strong> Bile is alkaline (produced by liver, stored in gallbladder). It neutralises stomach hydrochloric acid to create an alkaline pH (~8) optimum for pancreatic enzymes (amylase, trypsin, lipase) in the duodenum.
                    </li>
                    <li>
                      <strong>2. Emulsifies large fat droplets:</strong> Breaks large fat globules into millions of microscopic droplets. This is <em>mechanical digestion</em>, not chemical, vastly increasing surface area for lipase to hydrolyse triglycerides into fatty acids and glycerol.
                    </li>
                    <li>
                      <strong>⚠️ EXAM WARNING:</strong> Bile contains <u>NO enzymes</u>! Never write that bile digests fats chemically.
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-blue-950 flex items-center gap-2">
                    <Beaker className="w-5 h-5 text-blue-600" />
                    <span>The Two Crucial Roles of Stomach Hydrochloric Acid</span>
                  </h4>
                  <ul className="text-xs sm:text-sm text-blue-900 space-y-2 list-disc pl-4 leading-relaxed font-medium">
                    <li>
                      <strong>1. Kills bacteria and pathogens in food:</strong> Creates a strongly acidic environment (pH 1.5–2.0) that denatures bacterial proteins and enzymes, destroying harmful microorganisms ingested with food.
                    </li>
                    <li>
                      <strong>2. Provides optimum acidic pH for pepsin:</strong> Pepsin is an acidic protease that breaks long protein chains into shorter polypeptides. It functions optimally at pH 1.5–2.0.
                    </li>
                    <li>
                      <strong>⚠️ EXAM WARNING:</strong> Hydrochloric acid does NOT digest food directly; it provides the correct pH for pepsin to act and protects the body from infection!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Sub-view 6: Digestive Enzymes & Stomach Sandbox */}
          {digestiveSubTab === 'enzymes' && <EnzymeSandbox />}

          {/* Sub-view 7: Topic 6 Exam Quiz */}
          {digestiveSubTab === 'quiz' && (
            <IgcseQuiz
              topicKey="digestion"
              customTitle="Topic 6 Exam Quiz: Human Nutrition & Digestive System"
              customSubtitle="Authentic Cambridge IGCSE 0610 practice on alimentary canal organs, teeth types, peristalsis, digestive enzymes, bile, and villus absorption."
            />
          )}

          {/* Sub-view 8: 0610 Revision Notes & Summary Sheet */}
          {digestiveSubTab === 'notes' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-slate-900 text-white rounded-3xl border border-slate-800">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                    Official Cambridge Syllabus Summary
                  </span>
                  <h4 className="text-2xl font-extrabold text-white">
                    0610 Human Digestion & Nutrition Reference Sheet
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    High-yield definitions, enzyme substrates & products, pH optimums, and examiner mark schemes.
                  </p>
                </div>
                <button
                  onClick={() => setIsSummaryModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-2xl transition-all cursor-pointer shrink-0 shadow-md"
                >
                  <FileText className="w-4 h-4 text-slate-950" />
                  <span>Launch Full Syllabus Modal</span>
                </button>
              </div>

              {/* Quick Summary Tables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h5 className="font-bold text-slate-900 text-base">Key Syllabus Enzymes Summary</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-100 font-bold text-slate-700">
                          <th className="p-2">Enzyme</th>
                          <th className="p-2">Substrate</th>
                          <th className="p-2">Product</th>
                          <th className="p-2">Optimum pH</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-2 font-bold text-slate-800">Salivary Amylase</td>
                          <td className="p-2">Starch</td>
                          <td className="p-2">Maltose</td>
                          <td className="p-2">pH 7.0</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold text-slate-800">Pepsin (Gastric)</td>
                          <td className="p-2">Proteins</td>
                          <td className="p-2">Polypeptides</td>
                          <td className="p-2 text-rose-600 font-bold">pH 1.5–2.0 (HCl)</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold text-slate-800">Pancreatic Lipase</td>
                          <td className="p-2">Triglycerides</td>
                          <td className="p-2">Fatty acids + glycerol</td>
                          <td className="p-2">pH 8.0 (Bile)</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold text-slate-800">Trypsin</td>
                          <td className="p-2">Proteins</td>
                          <td className="p-2">Peptides</td>
                          <td className="p-2">pH 8.0</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-bold text-slate-800">Maltase</td>
                          <td className="p-2">Maltose</td>
                          <td className="p-2">Glucose</td>
                          <td className="p-2">pH 7.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h5 className="font-bold text-slate-900 text-base">Villus Adaptations for Absorption</h5>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>
                      <strong>Microvilli:</strong> Vastly increase surface area to volume ratio for rapid diffusion and active transport.
                    </li>
                    <li>
                      <strong>Single-cell thin epithelium:</strong> Shortens diffusion pathway to one cell thick (~1 μm).
                    </li>
                    <li>
                      <strong>Dense capillary network:</strong> Continuous blood flow maintains a steep concentration gradient for glucose and amino acids.
                    </li>
                    <li>
                      <strong>Central lacteal (lymphatic vessel):</strong> Absorbs fatty acids and glycerol (lipids).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Revision Summary Sheet Modal */}
      <RevisionSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
      />
    </div>
  );
};
