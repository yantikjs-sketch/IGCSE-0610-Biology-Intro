import React, { useState, useEffect } from 'react';
import { Droplets, CheckCircle2, RefreshCw, Layers, Box, Info } from 'lucide-react';

interface NutrientParticle {
  id: number;
  type: 'glucose' | 'amino_acid' | 'lipid' | 'water';
  x: number;
  y: number;
  target: 'blood' | 'lacteal';
  progress: number; // 0 to 1
  label: string;
  color: string;
}

interface VillusStructure {
  id: 'microvilli' | 'capillary' | 'lacteal';
  title: string;
  subtitle: string;
  description: string;
  highlightColor: string;
  badgeBg: string;
  pinX: number;
  pinY: number;
  absorbedSubstances: string[];
}

export const VillusLab: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [particles, setParticles] = useState<NutrientParticle[]>([]);
  const [particleIdCounter, setParticleIdCounter] = useState(1);
  const [absorbedStats, setAbsorbedStats] = useState({
    glucose: 0,
    amino_acid: 0,
    lipid: 0,
    water: 0,
  });

  const [activeStructure, setActiveStructure] = useState<'microvilli' | 'capillary' | 'lacteal' | null>('microvilli');

  // 3D image with ONLY the 3 key labels: Microvilli, Capillary, and Lacteal
  const villus3dImgUrl = '/src/assets/images/villus_3d_3labels_1793753671172.jpg';

  // The 3 essential structures required by Cambridge IGCSE 0610
  const structures: VillusStructure[] = [
    {
      id: 'microvilli',
      title: 'Microvilli (Brush Border)',
      subtitle: 'Surface Area Maximiser',
      description:
        'Millions of microscopic folds extending from each columnar epithelial cell. They hugely amplify the surface area of the ileum, allowing maximum rates of diffusion and active transport.',
      highlightColor: '#f59e0b',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      pinX: 345,
      pinY: 55,
      absorbedSubstances: ['Initial contact site for all digested nutrients'],
    },
    {
      id: 'capillary',
      title: 'Capillary Network',
      subtitle: 'Water-Soluble Nutrient Transport',
      description:
        'A dense mesh of microscopic blood vessels wrapping closely around the central lacteal. Constant blood flow rapidly sweeps away absorbed glucose, amino acids, water, and mineral ions into the Hepatic Portal Vein toward the liver, maintaining a steep concentration gradient.',
      highlightColor: '#ef4444',
      badgeBg: 'bg-red-500/20 text-red-300 border-red-500/40',
      pinX: 308,
      pinY: 188,
      absorbedSubstances: ['Glucose', 'Amino Acids', 'Water', 'Vitamins B & C'],
    },
    {
      id: 'lacteal',
      title: 'Lacteal (Lymphatic Vessel)',
      subtitle: 'Lipid / Fat Absorption Vessel',
      description:
        'A central, blind-ended lymphatic vessel running up the core of each villus. Fatty acids and glycerol (insoluble in water) are absorbed and packaged into tiny lipid droplets (chylomicrons) which enter the lacteal and travel through the lymphatic system.',
      highlightColor: '#10b981',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      pinX: 302,
      pinY: 305,
      absorbedSubstances: ['Fatty Acids', 'Glycerol', 'Fat-Soluble Vitamins (A, D, E, K)'],
    },
  ];

  // Spawn nutrient particles
  const spawnNutrient = (type: 'glucose' | 'amino_acid' | 'lipid' | 'water') => {
    // In 3D mode (viewBox 0 0 600 450), start in lumen near top
    const startX = 220 + Math.random() * 160;
    const startY = 15 + Math.random() * 25;

    let label = 'Glucose';
    let color = '#3b82f6';
    let target: 'blood' | 'lacteal' = 'blood';

    if (type === 'amino_acid') {
      label = 'Amino Acid';
      color = '#f97316';
      target = 'blood';
    } else if (type === 'lipid') {
      label = 'Fatty Acid / Glycerol';
      color = '#10b981';
      target = 'lacteal';
    } else if (type === 'water') {
      label = 'Water (H2O)';
      color = '#06b6d4';
      target = 'blood';
    }

    const newParticle: NutrientParticle = {
      id: particleIdCounter,
      type,
      x: startX,
      y: startY,
      target,
      progress: 0,
      label,
      color,
    };

    setParticleIdCounter((prev) => prev + 1);
    setParticles((prev) => [...prev.slice(-30), newParticle]);
  };

  // Animate particles through the villus into capillary or lacteal
  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prev) => {
        const next: NutrientParticle[] = [];
        prev.forEach((p) => {
          if (p.progress < 1) {
            const newProg = p.progress + 0.03;
            let currentX = p.x;
            let currentY = p.y;

            if (p.target === 'lacteal') {
              // Moves toward center green lacteal (x ~ 302, y ~ 305)
              currentX = p.x + (302 - p.x) * newProg;
              currentY = 40 + newProg * 265;
            } else {
              // Moves toward capillary loop (x ~ 285 or 325, y ~ 188)
              const sideX = p.x < 300 ? 285 : 325;
              currentX = p.x + (sideX - p.x) * newProg;
              currentY = 40 + newProg * 148;
            }

            if (newProg >= 1) {
              setAbsorbedStats((s) => ({
                ...s,
                [p.type]: s[p.type] + 1,
              }));
            } else {
              next.push({
                ...p,
                x: currentX,
                y: currentY,
                progress: newProg,
              });
            }
          }
        });
        return next;
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  const resetStats = () => {
    setParticles([]);
    setAbsorbedStats({ glucose: 0, amino_acid: 0, lipid: 0, water: 0 });
  };

  const selectedStructureData = structures.find((s) => s.id === activeStructure);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
            <span>IGCSE 0610 Topic 7.4</span>
            <span aria-hidden="true">·</span>
            <span>Absorption & Small Intestine Anatomy</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            3D Intestinal Villus & Nutrient Absorption Model
          </h2>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Simplified diagram showing the three core structures required for Cambridge IGCSE: <strong className="text-slate-800">Microvilli</strong>, <strong className="text-slate-800">Capillary</strong>, and <strong className="text-slate-800">Lacteal</strong>.
          </p>
        </div>

        {/* 3D vs 2D Diagram Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              viewMode === '3d'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D Diagram</span>
          </button>
          <button
            onClick={() => setViewMode('2d')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              viewMode === '2d'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2D Schematic</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 3D Villus Cutaway Viewport (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col items-center relative select-none">
          <div className="w-full flex items-center justify-between pb-2 text-xs text-slate-400 border-b border-slate-800">
            <span className="font-semibold text-slate-200">
              {viewMode === '3d' ? '3D Villus: Microvilli · Capillary · Lacteal' : '2D Schematic Villus Cross-Section'}
            </span>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                3 Key Labels
              </span>
            </div>
          </div>

          {/* Viewport Container */}
          {viewMode === '3d' ? (
            /* 3D Cutaway Diagram with ONLY Microvilli, Capillary, and Lacteal labels */
            <div className="w-full max-w-[480px] aspect-[4/3] relative my-2 rounded-xl overflow-hidden border border-slate-800 bg-white shadow-2xl">
              <img
                src={villus3dImgUrl}
                alt="3D cutaway diagram of human intestinal villus showing microvilli, capillary and lacteal"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Interactive SVG Overlay for Particles & Highlight Rings (viewBox 0 0 600 450) */}
              <svg viewBox="0 0 600 450" className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                <defs>
                  <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#ffffff" floodOpacity="0.8" />
                  </filter>
                  <filter id="villusHighlight" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.85" />
                  </filter>
                </defs>

                {/* Highlight Indicator for Active Structure */}
                {selectedStructureData && (
                  <g filter="url(#villusHighlight)">
                    <circle
                      cx={selectedStructureData.pinX}
                      cy={selectedStructureData.pinY}
                      r="16"
                      fill="none"
                      stroke={selectedStructureData.highlightColor}
                      strokeWidth="3.5"
                      strokeDasharray="4 2"
                      className="animate-spin"
                      style={{
                        transformOrigin: `${selectedStructureData.pinX}px ${selectedStructureData.pinY}px`,
                        animationDuration: '5s',
                      }}
                    />
                    <circle
                      cx={selectedStructureData.pinX}
                      cy={selectedStructureData.pinY}
                      r="6"
                      fill={selectedStructureData.highlightColor}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  </g>
                )}

                {/* Animated Nutrient Particles traveling into 3D Capillary or Lacteal */}
                {particles.map((p) => (
                  <g key={p.id} filter="url(#particleGlow)" className="transition-all duration-75">
                    <circle cx={p.x} cy={p.y} r="5" fill={p.color} stroke="#ffffff" strokeWidth="1.5" />
                  </g>
                ))}
              </svg>

              {/* Clickable hotspots over the 3 labels to quickly select them */}
              <div className="absolute inset-0 pointer-events-auto">
                {structures.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStructure(s.id)}
                    style={{
                      left: `${(s.pinX / 600) * 100}%`,
                      top: `${(s.pinY / 450) * 100}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group p-2"
                    title={`Click to inspect ${s.title}`}
                  >
                    <span className="sr-only">Inspect {s.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* 2D Schematic Cross-Section Viewport with ONLY 3 Labels */
            <div className="w-full max-w-[420px] aspect-[400/460] relative my-2">
              <svg viewBox="0 0 400 460" className="w-full h-full">
                <defs>
                  <linearGradient id="lactealGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#86efac" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                {/* Intestinal Lumen */}
                <rect x="0" y="0" width="400" height="90" fill="#334155" opacity="0.3" />
                
                {/* Villus outline */}
                <path d="M 90 430 L 90 200 C 90 90, 140 70, 200 70 C 260 70, 310 90, 310 200 L 310 430 Z" fill="#fff7ed" stroke="#fed7aa" strokeWidth="2" />
                
                {/* Microvilli brush border */}
                <path d="M 85 430 L 85 200 C 85 85, 135 63, 200 63 C 265 63, 315 85, 315 200 L 315 430" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="2 3" />
                <path d="M 90 430 L 90 200 C 90 90, 140 70, 200 70 C 260 70, 310 90, 310 200 L 310 430" fill="none" stroke="#fb923c" strokeWidth="8" strokeLinecap="round" />

                {/* Central Lacteal */}
                <path d="M 190 430 L 190 220 C 190 150, 195 130, 200 130 C 205 130, 210 150, 210 220 L 210 430 Z" fill="url(#lactealGrad)" stroke="#059669" strokeWidth="2" />

                {/* Blood Capillaries */}
                <path d="M 130 430 L 130 230 C 130 140, 155 110, 180 110" fill="none" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
                <path d="M 180 110 C 205 110, 270 130, 270 230 L 270 430" fill="none" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />

                {/* Clean 3 Labels on 2D Schematic */}
                {/* 1. Microvilli */}
                <line x1="200" y1="60" x2="200" y2="28" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="140" y="10" width="120" height="20" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
                <text x="200" y="24" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">Microvilli</text>

                {/* 2. Capillary */}
                <line x1="140" y1="200" x2="40" y2="200" stroke="#ef4444" strokeWidth="1.5" />
                <rect x="5" y="190" width="80" height="20" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
                <text x="45" y="204" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">Capillary</text>

                {/* 3. Lacteal */}
                <line x1="200" y1="260" x2="310" y2="260" stroke="#10b981" strokeWidth="1.5" />
                <rect x="310" y="250" width="75" height="20" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
                <text x="347" y="264" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="bold">Lacteal</text>

                {/* Particles */}
                {particles.map((p) => (
                  <circle key={p.id} cx={p.x * (400 / 600)} cy={p.y} r="5" fill={p.color} stroke="#ffffff" strokeWidth="1.5" />
                ))}
              </svg>
            </div>
          )}

          {/* Interactive Spawner Bar */}
          <div className="w-full flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-slate-800">
            <button
              onClick={() => spawnNutrient('glucose')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span>🥖</span>
              <span>+ Carbohydrates (Glucose)</span>
            </button>

            <button
              onClick={() => spawnNutrient('amino_acid')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span>🥩</span>
              <span>+ Proteins (Amino Acids)</span>
            </button>

            <button
              onClick={() => spawnNutrient('lipid')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span>🥑</span>
              <span>+ Fats (Fatty Acids)</span>
            </button>

            <button
              onClick={() => spawnNutrient('water')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-700 hover:bg-cyan-600 text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <Droplets className="w-3.5 h-3.5" />
              <span>+ Water (Osmosis)</span>
            </button>
          </div>
        </div>

        {/* Right: Live Absorption Tally & The 3 Key Structures (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Absorption Tally Box */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Nutrient Absorption Tracker
              </span>
              <button
                onClick={resetStats}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-amber-50/70 border border-amber-200 rounded-lg">
                <span className="text-[11px] text-amber-800 font-semibold block">🥖 Carbohydrates:</span>
                <p className="text-lg font-bold text-amber-900 font-mono">
                  {absorbedStats.glucose}{' '}
                  <span className="text-[10px] font-normal text-slate-500">→ Capillary</span>
                </p>
              </div>

              <div className="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg">
                <span className="text-[11px] text-rose-800 font-semibold block">🥩 Proteins:</span>
                <p className="text-lg font-bold text-rose-900 font-mono">
                  {absorbedStats.amino_acid}{' '}
                  <span className="text-[10px] font-normal text-slate-500">→ Capillary</span>
                </p>
              </div>

              <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                <span className="text-[11px] text-emerald-800 font-semibold block">🥑 Fats / Lipids:</span>
                <p className="text-lg font-bold text-emerald-900 font-mono">
                  {absorbedStats.lipid}{' '}
                  <span className="text-[10px] font-normal text-slate-500">→ Lacteal</span>
                </p>
              </div>

              <div className="p-2.5 bg-cyan-50/70 border border-cyan-200 rounded-lg">
                <span className="text-[11px] text-cyan-800 font-semibold block">💧 Water (Osmosis):</span>
                <p className="text-lg font-bold text-cyan-900 font-mono">
                  {absorbedStats.water}{' '}
                  <span className="text-[10px] font-normal text-slate-500">→ Capillary</span>
                </p>
              </div>
            </div>
          </div>

          {/* The 3 Core Syllabus Structures */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                The 3 Core Villus Structures (IGCSE 0610)
              </h3>
              <span className="text-[11px] text-slate-500">Click to highlight</span>
            </div>

            <div className="space-y-2">
              {structures.map((s) => {
                const isSelected = activeStructure === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStructure(s.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-400 shadow-xs ring-1 ring-amber-300'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: s.highlightColor }}
                        />
                        <span className="font-bold text-sm text-slate-900">{s.title}</span>
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : (
                        <span className="text-[11px] text-slate-400 font-medium">{s.subtitle}</span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {s.description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {s.absorbedSubstances.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exam Summary Note */}
          <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-blue-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-blue-950">
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Cambridge 0610 Exam Key Points:</span>
            </div>
            <p className="leading-relaxed">
              • <strong>Microvilli</strong> provide huge surface area for rapid absorption.
            </p>
            <p className="leading-relaxed">
              • <strong>Capillaries</strong> absorb glucose & amino acids → flow to liver via <strong>Hepatic Portal Vein</strong>.
            </p>
            <p className="leading-relaxed">
              • <strong>Lacteal</strong> absorbs fatty acids & glycerol into the lymphatic system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
