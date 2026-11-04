import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, Info } from 'lucide-react';
import { FoodType } from '../types/digestive';

export const PeristalsisLab: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0.25); // 0.05 to 0.95 along the tube
  const [speed, setSpeed] = useState(1);
  const [selectedFood, setSelectedFood] = useState<FoodType>('carbohydrates');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.008 * speed;
        return next > 0.95 ? 0.05 : next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const handleManualNudge = () => {
    setProgress((prev) => Math.min(0.92, prev + 0.1));
  };

  const handleReset = () => {
    setProgress(0.1);
  };

  // Food bolus styling based on selected nutrient
  const foodConfig = {
    carbohydrates: {
      name: 'Carbohydrates (Starch)',
      icon: '🥖',
      bolusLabel: 'Carbohydrate Bolus',
      stopColor1: '#f59e0b',
      stopColor2: '#b45309',
      particleColor: '#78350f',
      accentColor: '#fef08a',
      note: 'Starch bolus moistened with saliva; salivary amylase continues working inside the bolus during peristaltic transit.',
    },
    proteins: {
      name: 'Proteins (Meat / Egg)',
      icon: '🥩',
      bolusLabel: 'Protein Bolus',
      stopColor1: '#f43f5e',
      stopColor2: '#9f1239',
      particleColor: '#4c0519',
      accentColor: '#fecdd3',
      note: 'Fibrous chewed proteins bound together into a cohesive bolus with mucus, heading to the stomach for pepsin digestion.',
    },
    fats: {
      name: 'Fats / Lipids (Butter / Oil)',
      icon: '🥑',
      bolusLabel: 'Fat Bolus',
      stopColor1: '#10b981',
      stopColor2: '#047857',
      particleColor: '#064e3b',
      accentColor: '#a7f3d0',
      note: 'Hydrophobic fat droplets thoroughly coated with mucus glycoproteins so they slip smoothly along the epithelial lining.',
    },
  }[selectedFood];

  // Dimensions for 2D SVG peristalsis animation
  const width = 640;
  const height = 240;
  const centerY = 120;
  const bolusX = 60 + progress * (width - 120);
  const bolusRadius = 26;

  // Compute top and bottom wall curves with wave pinching behind bolus
  const generateWallPath = (isTop: boolean) => {
    const points: string[] = [];
    const step = 15;
    for (let x = 30; x <= width - 30; x += step) {
      const dist = x - bolusX;
      let offset = 42; // default half-lumen radius

      // Pinch effect behind bolus (contraction wave)
      if (dist < -10 && dist > -90) {
        const factor = Math.cos(((dist + 50) / 40) * (Math.PI / 2));
        offset -= 20 * Math.max(0, factor); // squeeze lumen down
      }
      // Bulge around bolus
      else if (Math.abs(dist) <= 30) {
        const factor = Math.cos((dist / 30) * (Math.PI / 2));
        offset += (bolusRadius - 25) * Math.max(0, factor);
      }
      // Slight widening ahead of bolus
      else if (dist > 10 && dist < 80) {
        const factor = Math.cos(((dist - 45) / 35) * (Math.PI / 2));
        offset += 6 * Math.max(0, factor);
      }

      const y = isTop ? centerY - offset : centerY + offset;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
      {/* Header & Food Type Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
            <span>IGCSE 0610 Topic 7.2</span>
            <span aria-hidden="true">·</span>
            <span>Physical Digestion & Food Transport</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Peristalsis Simulator: Antagonistic Muscle Action
          </h2>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Watch how circular and longitudinal muscles work antagonistically to propel Carbohydrates, Proteins, or Fats forward in one direction.
          </p>
        </div>

        {/* Food Molecule Type Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto shrink-0">
          <button
            onClick={() => setSelectedFood('carbohydrates')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedFood === 'carbohydrates'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🥖</span>
            <span>Carbohydrates</span>
          </button>
          <button
            onClick={() => setSelectedFood('proteins')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedFood === 'proteins'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🥩</span>
            <span>Proteins</span>
          </button>
          <button
            onClick={() => setSelectedFood('fats')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedFood === 'fats'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🥑</span>
            <span>Fats</span>
          </button>
        </div>
      </div>

      {/* Selected Food Transit Note */}
      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs flex items-center gap-2.5">
        <span className="text-xl shrink-0">{foodConfig.icon}</span>
        <div>
          <span className="font-bold text-slate-900">{foodConfig.name} in Peristalsis: </span>
          <span className="text-slate-600">{foodConfig.note}</span>
        </div>
      </div>

      {/* Main Interactive Stage (2D Diagram) */}
      <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white flex flex-col items-center select-none overflow-hidden relative shadow-inner">
        <div className="w-full flex items-center justify-between pb-3 text-xs text-slate-400 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-200">Alimentary Canal Lumen (2D Cross-Section Diagram)</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-medium">
            Transporting: {foodConfig.name} (Left → Right)
          </span>
        </div>

        {/* 2D SVG Tube Simulation */}
        <div className="w-full max-w-[640px] aspect-[640/240] my-2 relative">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
            <defs>
              <linearGradient id="muscleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="bolusFoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={foodConfig.stopColor1} />
                <stop offset="100%" stopColor={foodConfig.stopColor2} />
              </linearGradient>
            </defs>

            {/* Top Outer Longitudinal Muscle Layer */}
            <rect x="25" y="20" width={width - 50} height="20" rx="4" fill="#7f1d1d" opacity="0.75" />
            <text x="35" y="34" fill="#fca5a5" fontSize="10" fontWeight="600">
              Longitudinal Muscle Layer (Outer)
            </text>

            {/* Top Circular Muscle Layer (Antagonistic) */}
            <path
              d={`${generateWallPath(true)} L ${width - 30},45 L 30,45 Z`}
              fill="url(#muscleGrad)"
              stroke="#f87171"
              strokeWidth="1.5"
            />

            {/* Bottom Circular Muscle Layer */}
            <path
              d={`${generateWallPath(false)} L ${width - 30},195 L 30,195 Z`}
              fill="url(#muscleGrad)"
              stroke="#f87171"
              strokeWidth="1.5"
            />

            {/* Bottom Outer Longitudinal Muscle Layer */}
            <rect x="25" y="200" width={width - 50} height="20" rx="4" fill="#7f1d1d" opacity="0.75" />
            <text x="35" y="214" fill="#fca5a5" fontSize="10" fontWeight="600">
              Longitudinal Muscle Layer (Outer)
            </text>

            {/* Mucus lining inside lumen */}
            <path d={generateWallPath(true)} fill="none" stroke="#67e8f9" strokeWidth="2.5" opacity="0.6" strokeDasharray="4 2" />
            <path d={generateWallPath(false)} fill="none" stroke="#67e8f9" strokeWidth="2.5" opacity="0.6" strokeDasharray="4 2" />

            {/* Squeeze wave arrows behind bolus */}
            {bolusX > 90 && (
              <g>
                {/* Downward squeeze arrow */}
                <line x1={bolusX - 50} y1="55" x2={bolusX - 50} y2="85" stroke="#fef08a" strokeWidth="2.5" />
                <polygon points={`${bolusX - 50},92 ${bolusX - 55},82 ${bolusX - 45},82`} fill="#fef08a" />
                {/* Upward squeeze arrow */}
                <line x1={bolusX - 50} y1="185" x2={bolusX - 50} y2="155" stroke="#fef08a" strokeWidth="2.5" />
                <polygon points={`${bolusX - 50},148 ${bolusX - 55},158 ${bolusX - 45},158`} fill="#fef08a" />
              </g>
            )}

            {/* Food Bolus (Color-coded to selected food: Carbohydrates, Proteins, or Fats) */}
            <g>
              <ellipse
                cx={bolusX}
                cy={centerY}
                rx={bolusRadius + 2}
                ry={bolusRadius - 2}
                fill="url(#bolusFoodGrad)"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Internal food particles */}
              <circle cx={bolusX - 8} cy={centerY - 6} r="3" fill={foodConfig.particleColor} opacity="0.8" />
              <circle cx={bolusX + 6} cy={centerY - 4} r="4" fill={foodConfig.particleColor} opacity="0.8" />
              <circle cx={bolusX} cy={centerY + 8} r="3.5" fill={foodConfig.particleColor} opacity="0.8" />
              <circle cx={bolusX - 10} cy={centerY + 6} r="2.5" fill={foodConfig.accentColor} opacity="0.9" />

              {/* Bolus label */}
              <text x={bolusX} y={centerY + 3} textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="bold">
                {foodConfig.bolusLabel}
              </text>
            </g>

            {/* Forward push arrow */}
            <line x1={bolusX + 35} y1={centerY} x2={bolusX + 65} y2={centerY} stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 2" />
            <polygon points={`${bolusX + 72},${centerY} ${bolusX + 62},${centerY - 5} ${bolusX + 62},${centerY + 5}`} fill="#38bdf8" />
          </svg>
        </div>

        {/* Real-time Antagonistic Muscle State Badges */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
          <div className="p-3 bg-red-950/70 border border-red-700/60 rounded-xl shadow-xs">
            <span className="font-bold text-red-300 flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              ⬅️ BEHIND THE BOLUS: Squeezing Wave
            </span>
            <ul className="text-slate-300 space-y-1 text-[11px]">
              <li>• <strong className="text-white">Circular muscles:</strong> <span className="text-red-400 font-bold uppercase">CONTRACT</span> (narrows lumen)</li>
              <li>• <strong className="text-white">Longitudinal muscles:</strong> <span className="text-slate-300 uppercase">RELAX</span></li>
              <li>• Squeezes the food bolus forward along the tract.</li>
            </ul>
          </div>

          <div className="p-3 bg-blue-950/70 border border-blue-700/60 rounded-xl shadow-xs">
            <span className="font-bold text-blue-300 flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              ➡️ IN FRONT OF THE BOLUS: Widening Wave
            </span>
            <ul className="text-slate-300 space-y-1 text-[11px]">
              <li>• <strong className="text-white">Circular muscles:</strong> <span className="text-slate-300 uppercase">RELAX</span> (widens lumen)</li>
              <li>• <strong className="text-white">Longitudinal muscles:</strong> <span className="text-cyan-400 font-bold uppercase">CONTRACT</span> (shortens wall)</li>
              <li>• Allows passage with minimal friction and resistance.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Simulator Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer shadow-xs ${
              isPlaying ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Play Peristalsis</span>
              </>
            )}
          </button>

          <button
            onClick={handleManualNudge}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>Nudge Wave</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer shadow-xs"
            title="Reset position"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Scrubber Slider */}
        <div className="flex items-center gap-2 text-xs text-slate-700 flex-1 max-w-xs min-w-[180px]">
          <span className="font-semibold text-slate-600">Position:</span>
          <input
            type="range"
            min="0.05"
            max="0.95"
            step="0.01"
            value={progress}
            onChange={(e) => {
              setIsPlaying(false);
              setProgress(parseFloat(e.target.value));
            }}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
        </div>

        {/* Speed Multiplier Controls */}
        <div className="flex items-center gap-3 text-xs text-slate-700">
          <span className="font-semibold">Wave Speed:</span>
          <div className="flex items-center gap-1">
            {[0.5, 1, 1.5, 2].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-2 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                  speed === s ? 'bg-emerald-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* IGCSE Syllabus Reference Box */}
      <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-blue-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm text-blue-950">
          <Info className="w-4 h-4 text-blue-600" />
          <span>Cambridge IGCSE 0610 Exam Answer Template for Peristalsis</span>
        </div>
        <p className="leading-relaxed text-blue-900">
          If an exam question asks: <em>&quot;Describe how food is moved along the alimentary canal by peristalsis&quot;</em> [3–4 marks], write:
        </p>
        <div className="pl-4 space-y-1.5 font-medium text-blue-900">
          <p>1. Peristalsis is a series of wave-like involuntary muscular contractions.</p>
          <p>2. Circular and longitudinal muscles work <strong>antagonistically</strong> (in opposing pairs).</p>
          <p>3. <strong>Behind</strong> the bolus, <strong>circular muscles contract</strong> and longitudinal muscles relax, narrowing the lumen and squeezing the bolus forward.</p>
          <p>4. <strong>Ahead</strong> of the bolus, circular muscles relax and longitudinal muscles contract to widen the lumen.</p>
          <p>5. Mucus secreted by goblet cells lubricates the food bolus to prevent friction against the mucosa.</p>
        </div>
      </div>
    </div>
  );
};
