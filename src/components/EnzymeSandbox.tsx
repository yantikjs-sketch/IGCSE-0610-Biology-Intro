import React, { useState } from 'react';
import { ENZYMES } from '../data/digestiveData';
import { EnzymeCheatSheet } from './EnzymeCheatSheet';
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Info,
  Flame,
  Beaker,
  ShieldAlert,
  ArrowRight,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

type SubstrateType = 'starch' | 'protein' | 'lipid';
type SandboxMode = 'hcl_simulation' | 'general_sandbox';
type HclTargetEnzyme = 'pepsin' | 'salivary_amylase' | 'bacterial_enzyme';

export const EnzymeSandbox: React.FC = () => {
  const [activeMode, setActiveMode] = useState<SandboxMode>('hcl_simulation');
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  // State for General Sandbox
  const [selectedSubstrate, setSelectedSubstrate] = useState<SubstrateType>('starch');
  const [selectedEnzymeIndex, setSelectedEnzymeIndex] = useState(0); // index in ENZYMES
  const [ph, setPh] = useState(7.0);
  const [hasBile, setHasBile] = useState(false);

  // State for Stomach HCl Denaturation Simulation
  const [hclLevel, setHclLevel] = useState(1.8); // pH from 1.0 to 8.5
  const [targetEnzyme, setTargetEnzyme] = useState<HclTargetEnzyme>('pepsin');
  const [hclDropsAdded, setHclDropsAdded] = useState(4); // count of drops

  // --- GENERAL SANDBOX LOGIC ---
  const currentEnzyme = ENZYMES[selectedEnzymeIndex];

  let isSubstrateMatch = false;
  if (selectedSubstrate === 'starch' && (currentEnzyme.name.includes('Amylase') || currentEnzyme.name.includes('Maltase'))) {
    isSubstrateMatch = true;
  } else if (selectedSubstrate === 'protein' && (currentEnzyme.name === 'Pepsin' || currentEnzyme.name === 'Trypsin')) {
    isSubstrateMatch = true;
  } else if (selectedSubstrate === 'lipid' && currentEnzyme.name === 'Lipase') {
    isSubstrateMatch = true;
  }

  const deltaPh = Math.abs(ph - currentEnzyme.optimumPh);
  let phEfficiency = 0;
  if (deltaPh < 2.5) {
    phEfficiency = Math.max(0, 1 - Math.pow(deltaPh / 2.2, 2));
  }

  let reactionRate = 0;
  let status: 'optimum' | 'suboptimal' | 'denatured' | 'mismatch' = 'mismatch';

  if (!isSubstrateMatch) {
    reactionRate = 0;
    status = 'mismatch';
  } else if (phEfficiency <= 0.05) {
    reactionRate = 0;
    status = 'denatured';
  } else {
    let baseRate = phEfficiency * 100;
    if (selectedSubstrate === 'lipid' && currentEnzyme.name === 'Lipase' && !hasBile) {
      baseRate *= 0.35;
    }
    reactionRate = Math.round(baseRate);
    status = reactionRate > 75 ? 'optimum' : 'suboptimal';
  }

  // --- STOMACH HCL SIMULATION LOGIC ---
  // Pepsin optimum is ~2.0, Salivary Amylase optimum is ~7.0, Bacterial enzyme optimum is ~7.2
  let hclEnzymeName = 'Pepsin (Stomach Protease)';
  let hclOptimumPh = 2.0;
  let hclSubstrate = 'Protein chains (Polypeptides)';
  let hclProducts = 'Peptides / Amino Acids';

  if (targetEnzyme === 'salivary_amylase') {
    hclEnzymeName = 'Salivary Amylase (Swallowed from mouth)';
    hclOptimumPh = 7.0;
    hclSubstrate = 'Starch';
    hclProducts = 'Maltose';
  } else if (targetEnzyme === 'bacterial_enzyme') {
    hclEnzymeName = 'Bacterial Pathogen Enzyme (Microbe on food)';
    hclOptimumPh = 7.2;
    hclSubstrate = 'Bacterial Metabolic Substrate';
    hclProducts = 'Cellular Metabolites';
  }

  // Calculate efficiency under current HCl pH
  const hclDelta = Math.abs(hclLevel - hclOptimumPh);
  let hclActivity = 0;
  let isDenatured = false;

  if (targetEnzyme === 'pepsin') {
    // Pepsin thrives at 1.5 - 2.5, denatures as pH rises above 5.0
    if (hclDelta <= 1.2) {
      hclActivity = Math.max(0, 100 - hclDelta * 25);
    } else if (hclLevel > 4.5) {
      hclActivity = 0;
      isDenatured = true;
    } else {
      hclActivity = Math.max(0, 50 - (hclLevel - 2.5) * 20);
    }
  } else {
    // Salivary amylase & bacterial enzymes thrive at neutral (~7.0), denatured by stomach HCl (pH < 4.0)
    if (hclLevel < 4.0) {
      hclActivity = 0;
      isDenatured = true;
    } else if (hclDelta <= 1.5) {
      hclActivity = Math.max(0, 100 - hclDelta * 35);
    } else {
      hclActivity = Math.max(0, 30 - hclDelta * 15);
    }
  }
  hclActivity = Math.round(hclActivity);

  // Helper to add drops of HCl (drops pH towards 1.5)
  const addHclDrop = () => {
    setHclLevel((prev) => {
      const next = Math.max(1.2, +(prev - 0.7).toFixed(1));
      return next;
    });
    setHclDropsAdded((c) => c + 1);
  };

  // Helper to add alkali / neutraliser (raises pH towards 8.0)
  const addAlkali = () => {
    setHclLevel((prev) => {
      const next = Math.min(8.5, +(prev + 0.8).toFixed(1));
      return next;
    });
  };

  const resetHclSim = () => {
    setHclLevel(1.8);
    setHclDropsAdded(4);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
      {/* Header & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">
            <span>IGCSE 0610 Topic 7.3</span>
            <span aria-hidden="true">·</span>
            <span>Enzyme Action & Stomach HCl Chemistry</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Stomach Hydrochloric Acid (HCl) & Enzyme Denaturation Lab
          </h2>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Investigate how stomach acid (HCl) alters environmental pH, denatures swallowed salivary amylase and bacterial pathogen enzymes, while activating stomach pepsin.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Enzyme Cheat Sheet Side Panel / Modal Trigger */}
          <button
            onClick={() => setIsCheatSheetOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors cursor-pointer shadow-xs"
            title="Open Cambridge IGCSE Enzyme Cheat Sheet"
          >
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span>Enzyme Cheat Sheet</span>
          </button>

          {/* Mode Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveMode('hcl_simulation')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeMode === 'hcl_simulation'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Beaker className="w-4 h-4" />
              <span>Stomach HCl Simulator</span>
            </button>
            <button
              onClick={() => setActiveMode('general_sandbox')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeMode === 'general_sandbox'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>General Enzyme Sandbox</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: DEDICATED STOMACH HCL & PEPsin DENATURATION LAB */}
      {/* ======================================================== */}
      {activeMode === 'hcl_simulation' && (
        <div className="flex flex-col gap-6">
          {/* Controls Bar & Enzyme Selection */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Column: Interactive HCl Dropper & Controls (5 cols) */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* 1. Choose Target Enzyme to Test */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  1. Select Enzyme in Stomach Environment:
                </span>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setTargetEnzyme('pepsin');
                      setHclLevel(1.8);
                    }}
                    className={`w-full p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                      targetEnzyme === 'pepsin'
                        ? 'bg-purple-50/80 border-purple-500 shadow-xs ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>Pepsin (Stomach Protease)</span>
                      <span className="text-[10px] bg-purple-100 text-purple-800 font-mono px-2 py-0.5 rounded">
                        Optimum ~pH 2.0
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Adapted to high acidity. Hydrolyses proteins into peptides.
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setTargetEnzyme('salivary_amylase');
                      setHclLevel(7.0);
                    }}
                    className={`w-full p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                      targetEnzyme === 'salivary_amylase'
                        ? 'bg-purple-50/80 border-purple-500 shadow-xs ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>Salivary Amylase (From Mouth)</span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 font-mono px-2 py-0.5 rounded">
                        Optimum ~pH 7.0
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Enters with chewed bolus. Watch HCl denature it instantly!
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setTargetEnzyme('bacterial_enzyme');
                      setHclLevel(7.0);
                    }}
                    className={`w-full p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                      targetEnzyme === 'bacterial_enzyme'
                        ? 'bg-purple-50/80 border-purple-500 shadow-xs ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>Bacterial Pathogen Enzyme</span>
                      <span className="text-[10px] bg-rose-100 text-rose-800 font-mono px-2 py-0.5 rounded">
                        Microbe on food
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Stomach acid denatures bacterial enzymes to sterilise food.
                    </p>
                  </button>
                </div>
              </div>

              {/* 2. Interactive Stomach HCl Titration Controls */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Stomach Acid Titration:
                  </span>
                  <span className="text-sm font-bold font-mono px-2.5 py-0.5 rounded-md bg-white border border-slate-300 text-slate-900">
                    pH {hclLevel.toFixed(1)}
                  </span>
                </div>

                {/* HCl Dropper Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={addHclDrop}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <Droplets className="w-3.5 h-3.5" />
                    <span>+ Add HCl (Acidify)</span>
                  </button>

                  <button
                    onClick={addAlkali}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <span>+ Neutralise (Alkali)</span>
                  </button>
                </div>

                {/* Smooth Slider */}
                <div className="pt-2">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                    <span>Strong Acid (HCl)</span>
                    <span>Neutral</span>
                    <span>Alkaline</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="8.5"
                    step="0.1"
                    value={hclLevel}
                    onChange={(e) => setHclLevel(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>pH 1.0 (Stomach)</span>
                    <span>pH 7.0 (Mouth)</span>
                    <span>pH 8.5 (Duodenum)</span>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={resetHclSim}
                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset to Normal Gastric pH (1.8)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Molecular Active Site & Velocity Visualizer (7 cols) */}
            <div className="md:col-span-7 flex flex-col gap-4">
              {/* Test Tube / Stomach Lumen Chamber */}
              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white flex flex-col items-center relative overflow-hidden select-none">
                {/* Top readout */}
                <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Stomach Gastric Lumen Simulation
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-slate-400">Activity:</span>
                    <span
                      className={`text-xl font-black ${
                        isDenatured ? 'text-rose-400' : hclActivity > 70 ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {hclActivity}%
                    </span>
                  </div>
                </div>

                {/* Molecular Active Site Diagram (SVG) */}
                <div className="w-full max-w-[480px] aspect-[460/230] relative my-2">
                  <svg viewBox="0 0 460 230" className="w-full h-full">
                    <defs>
                      <linearGradient id="activeEnzymeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#7e22ce" />
                      </linearGradient>
                      <linearGradient id="denaturedEnzymeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="100%" stopColor="#9f1239" />
                      </linearGradient>
                      <linearGradient id="substrateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                    </defs>

                    {/* Background Solution with floating H+ ions from HCl */}
                    <rect x="0" y="0" width="460" height="230" rx="10" fill="#0f172a" />

                    {/* Floating H+ ions density depends on acidity */}
                    {hclLevel < 3.5 && (
                      <g className="text-[10px] font-mono font-bold text-rose-300 opacity-70">
                        <text x="30" y="40">H⁺</text>
                        <text x="80" y="70">H⁺</text>
                        <text x="140" y="35">H⁺ (HCl)</text>
                        <text x="380" y="50">H⁺</text>
                        <text x="410" y="80">H⁺</text>
                        <text x="350" y="190">H⁺</text>
                        <text x="50" y="195">H⁺</text>
                        <text x="100" y="170">H⁺</text>
                        <text x="390" y="150">H⁺</text>
                      </g>
                    )}

                    {/* CASE 1: ACTIVE ENZYME CONFORMATION (Lock & Key intact) */}
                    {!isDenatured ? (
                      <g className="transition-all duration-300">
                        {/* Enzyme Molecule Body with complementary active site groove */}
                        <path
                          d="M 120 180 C 90 180, 80 120, 110 80 C 130 55, 170 50, 190 70 C 190 70, 200 95, 230 95 C 260 95, 270 70, 270 70 C 290 50, 330 55, 350 80 C 380 120, 370 180, 340 180 Z"
                          fill="url(#activeEnzymeGrad)"
                          stroke="#c084fc"
                          strokeWidth="2.5"
                        />
                        <text x="230" y="165" textAnchor="middle" fill="#f3e8ff" fontSize="12" fontWeight="bold">
                          {hclEnzymeName.split(' (')[0]} Molecule
                        </text>

                        {/* Active Site Marker */}
                        <rect x="180" y="80" width="100" height="18" rx="4" fill="#581c87" opacity="0.8" />
                        <text x="230" y="93" textAnchor="middle" fill="#e9d5ff" fontSize="9" fontWeight="bold">
                          Active Site (Complementary)
                        </text>

                        {/* Substrate fitting into active site */}
                        <g>
                          <path
                            d="M 205 55 L 205 85 C 205 90, 220 90, 230 90 C 240 90, 255 90, 255 85 L 255 55 Z"
                            fill="url(#substrateGrad)"
                            stroke="#e0f2fe"
                            strokeWidth="1.8"
                          />
                          <text x="230" y="72" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                            Substrate
                          </text>

                          {/* Arrow of catalytic breakdown */}
                          <line x1="285" y1="70" x2="315" y2="70" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
                          <polygon points="320,70 312,66 312,74" fill="#38bdf8" />
                        </g>

                        {/* Status Label */}
                        <text x="230" y="210" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="bold">
                          ✓ Enzyme Active: Substrate binds to complementary active site
                        </text>
                      </g>
                    ) : (
                      /* CASE 2: DENATURED ENZYME (Active site distorted by pH) */
                      <g className="transition-all duration-300">
                        {/* Warped, unfolded denatured protein ribbon */}
                        <path
                          d="M 110 180 C 80 160, 70 100, 100 70 C 130 40, 160 80, 180 60 C 200 40, 220 120, 250 110 C 275 100, 310 40, 335 70 C 365 105, 385 160, 340 185 C 310 200, 280 160, 250 170 C 210 180, 150 200, 110 180 Z"
                          fill="url(#denaturedEnzymeGrad)"
                          stroke="#fb7185"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                        />

                        {/* Warped Active Site Banner */}
                        <rect x="170" y="95" width="120" height="20" rx="4" fill="#4c0519" opacity="0.9" stroke="#f43f5e" strokeWidth="1" />
                        <text x="230" y="109" textAnchor="middle" fill="#fecdd3" fontSize="9" fontWeight="bold">
                          Active Site Warped / Destroyed!
                        </text>

                        {/* Substrate bouncing off because shape no longer fits */}
                        <g>
                          <rect x="210" y="25" width="40" height="25" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                          <text x="230" y="41" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                            Substrate
                          </text>

                          {/* Rebound cross */}
                          <line x1="230" y1="55" x2="230" y2="80" stroke="#f43f5e" strokeWidth="2" strokeDasharray="2 2" />
                          <line x1="222" y1="85" x2="238" y2="70" stroke="#f43f5e" strokeWidth="2.5" />
                          <line x1="222" y1="70" x2="238" y2="85" stroke="#f43f5e" strokeWidth="2.5" />
                        </g>

                        <text x="230" y="160" textAnchor="middle" fill="#fecdd3" fontSize="12" fontWeight="bold">
                          DENATURED {hclEnzymeName.split(' (')[0].toUpperCase()}
                        </text>

                        {/* Status Label */}
                        <text x="230" y="210" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">
                          ✕ DENATURED: Hydrogen & ionic bonds broken; substrate cannot fit
                        </text>
                      </g>
                    )}
                  </svg>
                </div>

                {/* Diagnostic summary strip */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[11px]">
                  <div className="p-2 bg-slate-800/60 rounded-lg">
                    <span className="text-slate-400 block text-[10px]">Stomach Environment:</span>
                    <strong className="text-white">
                      {hclLevel < 3.0 ? 'Strongly Acidic (HCl)' : hclLevel < 6.0 ? 'Weak Acid' : 'Neutral / Alkaline'}
                    </strong>
                  </div>

                  <div className="p-2 bg-slate-800/60 rounded-lg">
                    <span className="text-slate-400 block text-[10px]">Enzyme Conformation:</span>
                    <strong className={isDenatured ? 'text-rose-400' : 'text-emerald-400'}>
                      {isDenatured ? 'Permanently Denatured' : 'Normal / Functional'}
                    </strong>
                  </div>

                  <div className="p-2 bg-slate-800/60 rounded-lg">
                    <span className="text-slate-400 block text-[10px]">Catalytic Action:</span>
                    <strong className="text-white">
                      {hclActivity > 0 ? `${hclSubstrate} → ${hclProducts}` : 'No Enzyme-Substrate Complexes'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* IGCSE 0610 Exam Explanation Card */}
              <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl text-xs text-purple-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-purple-950">
                  <Info className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Cambridge IGCSE 0610: How Hydrochloric Acid Works</span>
                </div>
                <div className="space-y-1.5 text-purple-900 leading-relaxed">
                  <p>
                    <strong>1. Why Pepsin Thrives in HCl:</strong> Pepsin is secreted by gastric glands in the stomach wall. It has adapted to work at an optimum of <strong>pH 1.5–2.0</strong>. At neutral pH 7, pepsin is inactive; at alkaline pH in the duodenum, pepsin is denatured!
                  </p>
                  <p>
                    <strong>2. Why HCl Denatures Other Enzymes:</strong> High concentration of $H^+$ ions from hydrochloric acid interferes with the hydrogen and ionic bonds holding the enzyme&apos;s tertiary 3D structure together. The active site permanently loses its shape (denaturation).
                  </p>
                  <p>
                    <strong>3. Denaturing Pathogens & Salivary Amylase:</strong>
                    Stomach HCl immediately denatures bacterial enzymes (sterilising food to prevent disease) and denatures salivary amylase (ending mouth starch digestion until pancreatic amylase in the duodenum).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: GENERAL ENZYME SANDBOX & OPTIMUM pH CURVE LAB */}
      {/* ======================================================== */}
      {activeMode === 'general_sandbox' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Substrate Selector */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                1. Select Substrate (Food Nutrient)
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedSubstrate('starch')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    selectedSubstrate === 'starch'
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🥖 Carbohydrates
                </button>
                <button
                  onClick={() => setSelectedSubstrate('protein')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    selectedSubstrate === 'protein'
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🥩 Proteins
                </button>
                <button
                  onClick={() => setSelectedSubstrate('lipid')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    selectedSubstrate === 'lipid'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🥑 Fats
                </button>
              </div>
            </div>

            {/* Enzyme Selector */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                2. Select Digestive Enzyme
              </span>
              <div className="grid grid-cols-2 gap-2">
                {ENZYMES.map((enz, idx) => {
                  const isSelected = selectedEnzymeIndex === idx;
                  return (
                    <button
                      key={enz.name}
                      onClick={() => setSelectedEnzymeIndex(idx)}
                      className={`p-2.5 text-left rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="truncate">{enz.name}</div>
                      <div
                        className={`text-[10px] font-normal truncate ${
                          isSelected ? 'text-purple-200' : 'text-slate-500'
                        }`}
                      >
                        Optimum pH ~{enz.optimumPh}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* pH Slider */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Solution pH Level:
                </span>
                <span className="text-sm font-bold font-mono px-2 py-0.5 rounded bg-white border border-slate-300 text-slate-900">
                  pH {ph.toFixed(1)}
                </span>
              </div>

              <input
                type="range"
                min="1.0"
                max="11.0"
                step="0.1"
                value={ph}
                onChange={(e) => setPh(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />

              <div className="flex justify-between text-[10px] font-semibold text-slate-500 mt-1">
                <span className="text-red-600">Acidic (Stomach ~2)</span>
                <span className="text-emerald-600">Neutral (Mouth ~7)</span>
                <span className="text-blue-600">Alkaline (Duodenum ~8)</span>
              </div>
            </div>

            {/* Bile Toggle */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  4. Bile Salts Present
                </span>
                <span className="text-[11px] text-slate-500">
                  Emulsifies fats into micro-droplets
                </span>
              </div>
              <button
                onClick={() => setHasBile(!hasBile)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  hasBile
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                {hasBile ? '✓ Bile Added' : '+ Add Bile'}
              </button>
            </div>
          </div>

          {/* Reaction Visualization & Diagnostics (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white flex flex-col items-center relative overflow-hidden select-none">
              <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Reaction Velocity:
                </span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-2xl font-black text-amber-400">
                    {reactionRate}%
                  </span>
                  <span className="text-xs text-slate-400">of maximum</span>
                </div>
              </div>

              <div className="w-full h-2.5 bg-slate-800 rounded-full my-3 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    status === 'optimum'
                      ? 'bg-emerald-500'
                      : status === 'suboptimal'
                      ? 'bg-amber-500'
                      : 'bg-rose-500'
                  }`}
                  style={{ width: `${reactionRate}%` }}
                />
              </div>

              <div className="w-full h-44 flex flex-col items-center justify-center relative">
                {status === 'mismatch' ? (
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">🚫</div>
                    <p className="text-sm font-bold text-rose-400">
                      Active Site Mismatch (Lock and Key Theory)
                    </p>
                    <p className="text-xs text-slate-400 max-w-sm mt-1">
                      {currentEnzyme.name} active site is not complementary to {selectedSubstrate}.
                    </p>
                  </div>
                ) : status === 'denatured' ? (
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">🔥</div>
                    <p className="text-sm font-bold text-rose-400">
                      Enzyme Denatured at pH {ph.toFixed(1)}!
                    </p>
                    <p className="text-xs text-slate-400 max-w-sm mt-1">
                      Extreme pH broke hydrogen and ionic bonds, permanently changing the active site shape.
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-2 flex flex-col items-center">
                    <div className="flex items-center gap-3 my-2">
                      <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200">
                        {currentEnzyme.substrate}
                      </div>
                      <span className="text-amber-400 font-bold text-lg">→</span>
                      <div className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-700 text-xs font-bold text-emerald-300">
                        {currentEnzyme.products}
                      </div>
                    </div>
                    <p className="text-xs font-medium text-emerald-400 mt-2">
                      {status === 'optimum'
                        ? '⚡ Peak Activity: Optimal ES complex formation!'
                        : '⚠️ Suboptimal Reaction Rate: pH deviates from optimum.'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl text-xs text-purple-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-purple-950">
                <Info className="w-4 h-4 text-purple-600" />
                <span>Enzyme Specificity & Optimum Curve</span>
              </div>
              <p className="text-purple-900 leading-relaxed">
                Enzymes are biological catalysts made of protein. Each enzyme has a specific active site that fits only one substrate. Altering pH alters the charges and ionic bonds, denaturing the enzyme.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Enzyme Master Cheat Sheet Modal / Drawer */}
      <EnzymeCheatSheet
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
        onSelectForSandbox={(enzName, optPh, subType) => {
          setActiveMode('general_sandbox');
          setSelectedSubstrate(subType);
          const idx = ENZYMES.findIndex((e) => e.name === enzName);
          if (idx >= 0) setSelectedEnzymeIndex(idx);
          setPh(optPh);
        }}
      />
    </div>
  );
};
