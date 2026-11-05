import React, { useState, useEffect } from 'react';
import { Droplets, CheckCircle2, RefreshCw, Info } from 'lucide-react';

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
  const [particles, setParticles] = useState<NutrientParticle[]>([]);
  const [particleIdCounter, setParticleIdCounter] = useState(1);
  const [absorbedStats, setAbsorbedStats] = useState({
    glucose: 0,
    amino_acid: 0,
    lipid: 0,
    water: 0,
  });

  const [activeStructure, setActiveStructure] = useState<'microvilli' | 'capillary' | 'lacteal' | null>('microvilli');

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
      pinX: 230,
      pinY: 68,
      absorbedSubstances: ['Initial contact site for all digested nutrients'],
    },
    {
      id: 'capillary',
      title: 'Capillary Network',
      subtitle: 'Water-Soluble Nutrient Transport',
      description:
        'A dense network of microscopic blood vessels wrapping closely around the central lacteal. Constant blood flow rapidly sweeps away absorbed glucose, amino acids, water, and mineral ions into the Hepatic Portal Vein toward the liver, maintaining a steep concentration gradient.',
      highlightColor: '#ef4444',
      badgeBg: 'bg-red-500/20 text-red-300 border-red-500/40',
      pinX: 165,
      pinY: 220,
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
      pinX: 230,
      pinY: 290,
      absorbedSubstances: ['Fatty Acids', 'Glycerol', 'Fat-Soluble Vitamins (A, D, E, K)'],
    },
  ];

  // Spawn nutrient particles in the intestinal lumen
  const spawnNutrient = (type: 'glucose' | 'amino_acid' | 'lipid' | 'water') => {
    // In 2D mode (viewBox 0 0 460 520), start in lumen near top (y ~ 20 to 45)
    const startX = 140 + Math.random() * 180;
    const startY = 18 + Math.random() * 28;

    let label = 'Glucose';
    let color = '#f59e0b';
    let target: 'blood' | 'lacteal' = 'blood';

    if (type === 'amino_acid') {
      label = 'Amino Acid';
      color = '#f43f5e';
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

  // Animate particles through the 2D villus epithelium into capillary or lacteal
  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prev) => {
        const next: NutrientParticle[] = [];
        prev.forEach((p) => {
          if (p.progress < 1) {
            const newProg = p.progress + 0.035;
            let currentX = p.x;
            let currentY = p.y;

            if (p.target === 'lacteal') {
              // Moves toward center green lacteal (x ~ 230, y ~ 260)
              currentX = p.x + (230 - p.x) * newProg;
              currentY = 45 + newProg * 235;
            } else {
              // Moves toward capillary loop (x ~ 170 or 290, y ~ 220)
              const sideX = p.x < 230 ? 170 : 290;
              currentX = p.x + (sideX - p.x) * newProg;
              currentY = 45 + newProg * 195;
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
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 uppercase tracking-wider mb-1">
          <span>IGCSE 0610 Topic 7.4</span>
          <span aria-hidden="true">·</span>
          <span>Absorption & Small Intestine Anatomy</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          2D Intestinal Villus Diagram: Microvilli · Capillary · Lacteal
        </h2>
        <p className="text-base text-slate-600 mt-1 leading-relaxed">
          Examine the 2D cross-section diagram of an intestinal villus from the ileum. Observe how <strong className="text-slate-800">Microvilli</strong>, <strong className="text-slate-800">Capillaries</strong>, and the <strong className="text-slate-800">Lacteal</strong> absorb digested nutrients.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 2D Villus Diagram Viewport (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white flex flex-col items-center relative select-none shadow-inner">
          <div className="w-full flex items-center justify-between pb-2 text-sm text-slate-300 border-b border-slate-800">
            <span className="font-semibold text-slate-100 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              2D Schematic Villus Cross-Section
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono text-amber-400 font-bold">
                3 Key Labels for Cambridge 0610
              </span>
            </div>
          </div>

          {/* 2D Vector SVG Villus Cross-Section Viewport (viewBox 0 0 460 520) */}
          <div className="w-full max-w-[480px] aspect-[460/520] relative my-2 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <svg viewBox="0 0 460 520" className="w-full h-full">
              <defs>
                {/* Central Lacteal Gradient */}
                <linearGradient id="lacteal2DGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="60%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>

                {/* Arteriole Red Gradient */}
                <linearGradient id="arterioleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f87171" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>

                {/* Venule Blue Gradient */}
                <linearGradient id="venuleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                {/* Villus Wall Tissue Shading */}
                <linearGradient id="villusTissueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#fffbeb" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.9" />
                </linearGradient>

                {/* Glow Filter for Active Callout */}
                <filter id="villusPinGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#38bdf8" floodOpacity="0.9" />
                </filter>
              </defs>

              {/* 1. Intestinal Lumen Zone (Top) */}
              <rect x="0" y="0" width="460" height="75" fill="#0f172a" opacity="0.6" />
              <text x="25" y="30" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="0.05em">
                INTESTINAL LUMEN (Digested Food Chyme)
              </text>
              <line x1="25" y1="36" x2="280" y2="36" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />

              {/* 2. Villus Core Body (Lamina Propria & Columnar Epithelium) */}
              <path
                d="M 100 500 L 100 220 C 100 100, 160 70, 230 70 C 300 70, 360 100, 360 220 L 360 500 Z"
                fill="url(#villusTissueGrad)"
                stroke="#fde68a"
                strokeWidth="2.5"
              />

              {/* 3. Microvilli Brush Border (Detailed microscopic folds along outer surface) */}
              {/* Outer microvillar fringe line */}
              <path
                d="M 94 500 L 94 220 C 94 94, 156 63, 230 63 C 304 63, 366 94, 366 220 L 366 500"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="5"
                strokeDasharray="2 3"
              />
              <path
                d="M 100 500 L 100 220 C 100 100, 160 70, 230 70 C 300 70, 360 100, 360 220 L 360 500"
                fill="none"
                stroke="#d97706"
                strokeWidth="2"
              />

              {/* Individual Columnar Epithelial Cells (One Cell Thick Barrier) */}
              {/* Left wall cells */}
              <g stroke="#fcd34d" strokeWidth="1" fill="none">
                {[100, 140, 180, 220, 260, 300, 340, 380, 420, 460].map((y) => (
                  <line key={`left-cell-${y}`} x1="100" y1={y} x2="120" y2={y} />
                ))}
                {/* Right wall cells */}
                {[100, 140, 180, 220, 260, 300, 340, 380, 420, 460].map((y) => (
                  <line key={`right-cell-${y}`} x1="340" y1={y} x2="360" y2={y} />
                ))}
              </g>

              {/* Cell Nuclei (purple dots in columnar cells) */}
              <g fill="#9333ea" opacity="0.6">
                {[120, 160, 200, 240, 280, 320, 360, 400, 440, 480].map((y) => (
                  <ellipse key={`nuc-l-${y}`} cx="110" cy={y} rx="3" ry="5" />
                ))}
                {[120, 160, 200, 240, 280, 320, 360, 400, 440, 480].map((y) => (
                  <ellipse key={`nuc-r-${y}`} cx="350" cy={y} rx="3" ry="5" />
                ))}
                <ellipse cx="190" cy="85" rx="5" ry="3" />
                <ellipse cx="230" cy="80" rx="5" ry="3" />
                <ellipse cx="270" cy="85" rx="5" ry="3" />
              </g>

              {/* 4. Central Lacteal (Blind-ended lymphatic vessel in core) */}
              <path
                d="M 218 500 L 218 220 C 218 140, 222 118, 230 118 C 238 118, 242 140, 242 220 L 242 500 Z"
                fill="url(#lacteal2DGrad)"
                stroke="#047857"
                strokeWidth="2.5"
              />
              {/* Lymph fluid droplets inside lacteal */}
              <circle cx="230" cy="180" r="3" fill="#a7f3d0" opacity="0.8" />
              <circle cx="227" cy="250" r="3.5" fill="#a7f3d0" opacity="0.8" />
              <circle cx="232" cy="330" r="3" fill="#a7f3d0" opacity="0.8" />
              <circle cx="228" cy="410" r="3.5" fill="#a7f3d0" opacity="0.8" />

              {/* 5. Blood Capillary Network (Wrapping around lacteal) */}
              {/* Arteriole (Red, brings blood) */}
              <path
                d="M 155 500 L 155 250 C 155 160, 185 125, 210 125"
                fill="none"
                stroke="url(#arterioleGrad)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
              {/* Venule (Blue, sweeps nutrients to Hepatic Portal Vein) */}
              <path
                d="M 250 125 C 275 125, 305 160, 305 250 L 305 500"
                fill="none"
                stroke="url(#venuleGrad)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
              {/* Connecting capillary loops & cross-vessels */}
              <path d="M 155 190 C 185 185, 275 185, 305 190" fill="none" stroke="#dc2626" strokeWidth="3" />
              <path d="M 155 270 C 185 265, 275 265, 305 270" fill="none" stroke="#7c3aed" strokeWidth="3" />
              <path d="M 155 350 C 185 345, 275 345, 305 350" fill="none" stroke="#2563eb" strokeWidth="3" />
              <path d="M 155 430 C 185 425, 275 425, 305 430" fill="none" stroke="#2563eb" strokeWidth="3" />

              {/* Capillary Blood Flow Direction Arrows */}
              <polygon points="155,300 151,312 159,312" fill="#ef4444" />
              <polygon points="305,290 301,278 309,278" fill="#3b82f6" />

              {/* 6. ONLY 3 ESSENTIAL LABELS & LEADER LINES */}
              {/* 1. MICROVILLI LABEL */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveStructure('microvilli')}
              >
                <line x1="230" y1="63" x2="230" y2="28" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 2" />
                <circle cx="230" cy="63" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                <rect
                  x="150"
                  y="8"
                  width="160"
                  height="30"
                  rx="7"
                  fill="#0f172a"
                  stroke="#f59e0b"
                  strokeWidth={activeStructure === 'microvilli' ? '2.5' : '1.5'}
                  filter="drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
                />
                <text x="230" y="28" textAnchor="middle" fill="#fef08a" fontSize="14.5" fontWeight="bold">
                  Microvilli
                </text>
              </g>

              {/* 2. CAPILLARY LABEL */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveStructure('capillary')}
              >
                <line x1="155" y1="210" x2="60" y2="210" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="3 2" />
                <circle cx="155" cy="210" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                <rect
                  x="8"
                  y="195"
                  width="112"
                  height="30"
                  rx="7"
                  fill="#0f172a"
                  stroke="#ef4444"
                  strokeWidth={activeStructure === 'capillary' ? '2.5' : '1.5'}
                  filter="drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
                />
                <text x="64" y="215" textAnchor="middle" fill="#fca5a5" fontSize="14.5" fontWeight="bold">
                  Capillary
                </text>
              </g>

              {/* 3. LACTEAL LABEL */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveStructure('lacteal')}
              >
                <line x1="235" y1="290" x2="345" y2="290" stroke="#10b981" strokeWidth="2.5" strokeDasharray="3 2" />
                <circle cx="235" cy="290" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                <rect
                  x="345"
                  y="275"
                  width="105"
                  height="30"
                  rx="7"
                  fill="#0f172a"
                  stroke="#10b981"
                  strokeWidth={activeStructure === 'lacteal' ? '2.5' : '1.5'}
                  filter="drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
                />
                <text x="397" y="295" textAnchor="middle" fill="#86efac" fontSize="14.5" fontWeight="bold">
                  Lacteal
                </text>
              </g>

              {/* Active Selection Pin Indicator */}
              {selectedStructureData && (
                <g filter="url(#villusPinGlow)">
                  <circle
                    cx={selectedStructureData.pinX}
                    cy={selectedStructureData.pinY}
                    r="15"
                    fill="none"
                    stroke={selectedStructureData.highlightColor}
                    strokeWidth="3"
                    strokeDasharray="4 2"
                    className="animate-spin"
                    style={{
                      transformOrigin: `${selectedStructureData.pinX}px ${selectedStructureData.pinY}px`,
                      animationDuration: '6s',
                    }}
                  />
                </g>
              )}

              {/* Animated Nutrient Particles diffusing into 2D Capillary or Lacteal */}
              {particles.map((p) => (
                <g key={p.id}>
                  <circle cx={p.x} cy={p.y} r="5.5" fill={p.color} stroke="#ffffff" strokeWidth="1.5" />
                </g>
              ))}
            </svg>
          </div>

          {/* Interactive Spawner Bar */}
          <div className="w-full flex flex-wrap items-center justify-center gap-2.5 pt-3 border-t border-slate-800">
            <button
              onClick={() => spawnNutrient('glucose')}
              className="px-3.5 py-2 rounded-lg text-sm font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span className="text-base">🥖</span>
              <span>+ Carbohydrates (Glucose)</span>
            </button>

            <button
              onClick={() => spawnNutrient('amino_acid')}
              className="px-3.5 py-2 rounded-lg text-sm font-bold bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span className="text-base">🥩</span>
              <span>+ Proteins (Amino Acids)</span>
            </button>

            <button
              onClick={() => spawnNutrient('lipid')}
              className="px-3.5 py-2 rounded-lg text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span className="text-base">🥑</span>
              <span>+ Fats (Fatty Acids)</span>
            </button>

            <button
              onClick={() => spawnNutrient('water')}
              className="px-3.5 py-2 rounded-lg text-sm font-bold bg-cyan-700 hover:bg-cyan-600 text-white transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <Droplets className="w-4 h-4" />
              <span>+ Water (Osmosis)</span>
            </button>
          </div>
        </div>

        {/* Right: Live Absorption Tally & The 3 Key Structures (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Absorption Tally Box */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Nutrient Absorption Tracker
              </span>
              <button
                onClick={resetStats}
                className="text-xs sm:text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer font-medium"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-sm">
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg">
                <span className="text-xs sm:text-sm text-amber-800 font-semibold block">🥖 Carbohydrates:</span>
                <p className="text-xl font-bold text-amber-900 font-mono mt-0.5">
                  {absorbedStats.glucose}{' '}
                  <span className="text-xs font-normal text-slate-500">→ Capillary</span>
                </p>
              </div>

              <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-lg">
                <span className="text-xs sm:text-sm text-rose-800 font-semibold block">🥩 Proteins:</span>
                <p className="text-xl font-bold text-rose-900 font-mono mt-0.5">
                  {absorbedStats.amino_acid}{' '}
                  <span className="text-xs font-normal text-slate-500">→ Capillary</span>
                </p>
              </div>

              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                <span className="text-xs sm:text-sm text-emerald-800 font-semibold block">🥑 Fats / Lipids:</span>
                <p className="text-xl font-bold text-emerald-900 font-mono mt-0.5">
                  {absorbedStats.lipid}{' '}
                  <span className="text-xs font-normal text-slate-500">→ Lacteal</span>
                </p>
              </div>

              <div className="p-3 bg-cyan-50/70 border border-cyan-200 rounded-lg">
                <span className="text-xs sm:text-sm text-cyan-800 font-semibold block">💧 Water (Osmosis):</span>
                <p className="text-xl font-bold text-cyan-900 font-mono mt-0.5">
                  {absorbedStats.water}{' '}
                  <span className="text-xs font-normal text-slate-500">→ Capillary</span>
                </p>
              </div>
            </div>
          </div>

          {/* The 3 Core Syllabus Structures */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                The 3 Core Villus Structures (IGCSE 0610)
              </h3>
              <span className="text-xs text-slate-500 font-medium">Click to highlight on 2D diagram</span>
            </div>

            <div className="space-y-2.5">
              {structures.map((s) => {
                const isSelected = activeStructure === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStructure(s.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-400 shadow-xs ring-1 ring-amber-300'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full"
                          style={{ backgroundColor: s.highlightColor }}
                        />
                        <span className="font-bold text-base text-slate-900">{s.title}</span>
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">{s.subtitle}</span>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {s.description}
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {s.absorbedSubstances.map((sub, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
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
          <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl text-sm text-blue-900 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-base text-blue-950">
              <Info className="w-5 h-5 text-blue-600 shrink-0" />
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
