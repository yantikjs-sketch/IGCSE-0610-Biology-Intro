import React, { useState } from 'react';
import { Award, AlertTriangle, ShieldCheck, Info, CheckCircle2, RefreshCw } from 'lucide-react';

type ToothPartId =
  | 'enamel'
  | 'dentine'
  | 'pulp'
  | 'gum'
  | 'cementum'
  | 'periodontal'
  | 'bone'
  | 'nerves_blood';

type ToothTypeId = 'incisor' | 'canine' | 'premolar' | 'molar';

interface ToothPartInfo {
  id: ToothPartId;
  name: string;
  region: 'Crown' | 'Neck' | 'Root' | 'Crown & Root';
  description: string;
  living: boolean;
  function: string;
  igcseExamTip: string;
}

export const TeethLab: React.FC = () => {
  const [subTab, setSubTab] = useState<'structure' | 'types' | 'decay'>('structure');
  const [selectedPart, setSelectedPart] = useState<ToothPartId>('enamel');
  const [selectedToothType, setSelectedToothType] = useState<ToothTypeId>('molar');
  const [decayStage, setDecayStage] = useState<number>(0); // 0 (healthy) to 3 (pulp infection)

  const toothParts: Record<ToothPartId, ToothPartInfo> = {
    enamel: {
      id: 'enamel',
      name: 'Enamel',
      region: 'Crown',
      description:
        'The extremely hard, glossy white outer layer covering the crown. It is non-living and made almost entirely of mineralised calcium salts (calcium phosphate / hydroxyapatite).',
      living: false,
      function: 'Protects the tooth from biting forces, mechanical wear, and acid erosion.',
      igcseExamTip:
        'Enamel is the hardest biological substance in the human body. Because it contains NO nerves or living cells, decay here causes no pain and enamel cannot repair itself.',
    },
    dentine: {
      id: 'dentine',
      name: 'Dentine',
      region: 'Crown & Root',
      description:
        'Bone-like layer situated directly beneath the enamel and forming the bulk of the tooth. Contains microscopic channels (tubules) with living cytoplasm strands from pulp cells.',
      living: true,
      function: 'Provides structural support, absorbs shock, and surrounds the delicate pulp cavity.',
      igcseExamTip:
        'Dentine is softer than enamel! Once tooth decay penetrates enamel into dentine, decay accelerates much faster.',
    },
    pulp: {
      id: 'pulp',
      name: 'Pulp Cavity',
      region: 'Crown & Root',
      description:
        'Central soft tissue core containing living odontoblast cells, a rich network of blood capillaries, and sensitive nerve endings.',
      living: true,
      function:
        'Supplies oxygen and nutrients (glucose) to keep the dentine alive; nerves detect temperature, pressure, and pain.',
      igcseExamTip:
        'When tooth decay penetrates into the pulp cavity, bacteria reach the nerve endings, causing severe toothache and abscess formation.',
    },
    gum: {
      id: 'gum',
      name: 'Gum (Gingiva)',
      region: 'Neck',
      description:
        'Firm pink mucous membrane that surrounds the neck of the tooth and covers the underlying jawbone.',
      living: true,
      function: 'Provides a tight seal around the neck of each tooth to prevent bacteria from reaching the root.',
      igcseExamTip:
        'Plaque accumulation causes gingivitis (gum disease), leading to bleeding gums and loosening of teeth.',
    },
    cementum: {
      id: 'cementum',
      name: 'Cementum (Cement)',
      region: 'Root',
      description:
        'A thin, specialized layer of bone-like calcified tissue covering the entire outer surface of the root.',
      living: true,
      function: 'Anchors the tooth securely in the jawbone socket by attaching to the periodontal ligament fibres.',
      igcseExamTip:
        'Unlike the crown which is covered by enamel, the root of the tooth is covered by cementum.',
    },
    periodontal: {
      id: 'periodontal',
      name: 'Periodontal Ligament / Fibres',
      region: 'Root',
      description:
        'A network of tough collagen fibre bundles connecting the cementum of the root to the surrounding jawbone socket.',
      living: true,
      function:
        'Holds the tooth firmly in place while acting as a shock absorber during heavy chewing; contains mechanoreceptors.',
      igcseExamTip:
        'Allows slight flexibility under immense chewing pressure so the tooth does not fracture the jawbone.',
    },
    bone: {
      id: 'bone',
      name: 'Jawbone (Alveolar Bone)',
      region: 'Root',
      description:
        'The bone of the upper (maxilla) or lower (mandible) jaw that contains deep sockets (alveoli) housing tooth roots.',
      living: true,
      function: 'Provides rigid anchorage and structural foundation for the dentition.',
      igcseExamTip: 'Teeth roots are embedded in the jawbone, separated by the periodontal ligament.',
    },
    nerves_blood: {
      id: 'nerves_blood',
      name: 'Blood Vessels & Nerves',
      region: 'Root',
      description:
        'Arterioles, capillaries, venules, and sensory nerve fibres entering via the apical foramen (hole at root tip).',
      living: true,
      function:
        'Blood capillaries deliver glucose and oxygen for cell respiration; nerves provide sensory feedback and pain warnings.',
      igcseExamTip:
        'A root canal treatment involves removing the infected nerves and blood vessels from the pulp when decay is deep.',
    },
  };

  const toothTypes = {
    incisor: {
      name: 'Incisor',
      shape: 'Chisel-shaped with a sharp, straight horizontal cutting edge',
      roots: 'Single root',
      totalAdult: 8,
      position: 'Front of mouth (4 upper, 4 lower)',
      function: 'Biting, shearing, and cutting off manageable pieces of food',
      cusps: 'None (flat chisel edge)',
      igcseNote: 'First teeth to make contact with food. Adapted with a narrow chisel edge to slice food clean.',
    },
    canine: {
      name: 'Canine',
      shape: 'Pointed, dagger-like cone shaped crown',
      roots: 'Single, exceptionally long and deep root',
      totalAdult: 4,
      position: 'Next to incisors at the corners of the jaw (2 upper, 2 lower)',
      function: 'Gripping, piercing, and tearing tough or fibrous food (meat)',
      cusps: 'Single pointed cusp',
      igcseNote: 'Longest root of any human tooth to withstand high lateral tearing forces.',
    },
    premolar: {
      name: 'Premolar (Bicuspid)',
      shape: 'Broad, flat crown with two distinct cusps (raised points)',
      roots: '1 or 2 roots',
      totalAdult: 8,
      position: 'Behind canines and in front of molars (4 upper, 4 lower)',
      function: 'Chewing, tearing, and crushing food into smaller pieces',
      cusps: 'Two cusps (bicuspid)',
      igcseNote: 'Transitional tooth combining tearing capabilities of canines with grinding capacity of molars.',
    },
    molar: {
      name: 'Molar',
      shape: 'Large, broad, square-shaped crown with 4 or 5 cusps',
      roots: '2 or 3 sturdy divergent roots (3 in upper jaw, 2 in lower jaw)',
      totalAdult: 12,
      position: 'Back of mouth (6 upper, 6 lower, including 4 wisdom teeth)',
      function: 'Heavy chewing, grinding, and crushing food into a fine paste',
      cusps: '4 to 5 grinding cusps',
      igcseNote:
        'Provides massive surface area to grind food into a paste, massively accelerating salivary amylase action.',
    },
  };

  const activePartData = toothParts[selectedPart];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>IGCSE 0610 Topic 7.2</span>
          <span aria-hidden="true">·</span>
          <span>Physical Digestion & Dental Anatomy</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Human Teeth: Internal Structure, 4 Types & Dental Caries
        </h2>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
          Explore the internal anatomy of a tooth (enamel, dentine, pulp cavity), compare the 4 human tooth types, and investigate the chemical mechanism of tooth decay (dental caries).
        </p>
      </div>

      {/* Sub-Tabs: Structure / Types / Decay */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-fit">
        <button
          onClick={() => setSubTab('structure')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            subTab === 'structure'
              ? 'bg-white text-blue-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. Tooth Cross-Section Structure
        </button>
        <button
          onClick={() => setSubTab('types')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            subTab === 'types'
              ? 'bg-white text-blue-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. The 4 Human Tooth Types
        </button>
        <button
          onClick={() => setSubTab('decay')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            subTab === 'decay'
              ? 'bg-white text-blue-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Tooth Decay (Dental Caries)
        </button>
      </div>

      {/* TAB 1: TOOTH CROSS-SECTION ANATOMY */}
      {subTab === 'structure' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Interactive Tooth Cross-Section SVG (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white flex flex-col items-center select-none relative">
            <div className="w-full flex items-center justify-between pb-2 text-xs text-slate-400 border-b border-slate-800">
              <span className="font-semibold text-slate-200">
                Molar Tooth Cross-Section (Crown, Neck & Root)
              </span>
              <span className="text-[11px] font-mono text-cyan-400">
                Click parts to inspect 🔬
              </span>
            </div>

            {/* SVG Diagram of Molar Cross Section */}
            <div className="w-full max-w-[420px] aspect-[400/440] relative my-2">
              <svg viewBox="0 0 400 440" className="w-full h-full">
                <defs>
                  <linearGradient id="enamelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                  <linearGradient id="dentineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#fde047" />
                  </linearGradient>
                  <linearGradient id="pulpGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                  <linearGradient id="gumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fda4af" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                  <linearGradient id="boneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#94a3b8" />
                  </linearGradient>

                  <filter id="toothGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Region boundary guidelines & labels */}
                {/* Crown Region (Top to y=155) */}
                <line x1="25" y1="155" x2="375" y2="155" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                <text x="35" y="100" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  CROWN
                </text>

                {/* Neck Region (y=155 to y=185) */}
                <line x1="25" y1="185" x2="375" y2="185" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                <text x="35" y="172" fill="#94a3b8" fontSize="10" fontWeight="bold">
                  NECK
                </text>

                {/* Root Region (y=185 down) */}
                <text x="35" y="280" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  ROOT
                </text>

                {/* 1. Jawbone (Socket) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('bone')}
                  filter={selectedPart === 'bone' ? 'url(#toothGlow)' : undefined}
                >
                  <path
                    d="M 50 185 L 120 185 L 125 390 L 275 390 L 280 185 L 350 185 L 350 420 L 50 420 Z"
                    fill="url(#boneGrad)"
                    stroke={selectedPart === 'bone' ? '#38bdf8' : '#64748b'}
                    strokeWidth={selectedPart === 'bone' ? '2.5' : '1.5'}
                  />
                  {/* Trabecular bone dots */}
                  <circle cx="80" cy="240" r="2" fill="#475569" />
                  <circle cx="100" cy="270" r="2" fill="#475569" />
                  <circle cx="310" cy="250" r="2" fill="#475569" />
                  <circle cx="330" cy="290" r="2" fill="#475569" />
                </g>

                {/* 2. Periodontal Ligament (Shock absorbing fibres lining socket) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('periodontal')}
                  filter={selectedPart === 'periodontal' ? 'url(#toothGlow)' : undefined}
                >
                  {/* Left root socket lining */}
                  <path
                    d="M 125 185 L 128 380 L 192 380 L 195 240 L 205 240 L 208 380 L 272 380 L 275 185"
                    fill="none"
                    stroke={selectedPart === 'periodontal' ? '#38bdf8' : '#e0e7ff'}
                    strokeWidth={selectedPart === 'periodontal' ? '6' : '3.5'}
                    strokeDasharray="2 2"
                  />
                </g>

                {/* 3. Cementum (Coats the roots) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('cementum')}
                  filter={selectedPart === 'cementum' ? 'url(#toothGlow)' : undefined}
                >
                  <path
                    d="M 130 180 L 133 375 C 145 375, 175 375, 185 375 L 195 240 L 205 240 L 215 375 C 225 375, 255 375, 267 375 L 270 180 Z"
                    fill="#fed7aa"
                    stroke={selectedPart === 'cementum' ? '#38bdf8' : '#f97316'}
                    strokeWidth={selectedPart === 'cementum' ? '2.5' : '1.2'}
                  />
                </g>

                {/* 4. Dentine (Bulk of the tooth, crown to root) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('dentine')}
                  filter={selectedPart === 'dentine' ? 'url(#toothGlow)' : undefined}
                >
                  <path
                    d="M 135 155 C 135 110, 145 65, 170 55 C 190 48, 200 52, 200 52 C 200 52, 210 48, 230 55 C 255 65, 265 110, 265 155 L 263 370 L 222 370 L 205 235 L 195 235 L 178 370 L 137 370 Z"
                    fill="url(#dentineGrad)"
                    stroke={selectedPart === 'dentine' ? '#38bdf8' : '#ca8a04'}
                    strokeWidth={selectedPart === 'dentine' ? '2.5' : '1.5'}
                  />
                  {/* Subtle microscopic tubule lines */}
                  <line x1="150" y1="90" x2="175" y2="105" stroke="#fef9c3" strokeWidth="0.8" opacity="0.6" />
                  <line x1="250" y1="90" x2="225" y2="105" stroke="#fef9c3" strokeWidth="0.8" opacity="0.6" />
                </g>

                {/* 5. Enamel (Hard cap covering crown) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('enamel')}
                  filter={selectedPart === 'enamel' ? 'url(#toothGlow)' : undefined}
                >
                  <path
                    d="M 135 155 C 130 110, 138 45, 168 35 C 188 28, 200 34, 200 34 C 200 34, 212 28, 232 35 C 262 45, 270 110, 265 155 C 260 115, 252 65, 230 55 C 210 48, 200 52, 200 52 C 200 52, 190 48, 170 55 C 148 65, 140 115, 135 155 Z"
                    fill="url(#enamelGrad)"
                    stroke={selectedPart === 'enamel' ? '#38bdf8' : '#94a3b8'}
                    strokeWidth={selectedPart === 'enamel' ? '2.5' : '1.5'}
                  />
                  {/* Glossy enamel shine */}
                  <path d="M 155 45 Q 165 40 180 44" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 220 44 Q 235 40 245 45" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* 6. Pulp Cavity (Living soft core) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('pulp')}
                  filter={selectedPart === 'pulp' ? 'url(#toothGlow)' : undefined}
                >
                  <path
                    d="M 180 125 C 180 95, 190 85, 200 85 C 210 85, 220 95, 220 125 C 220 165, 212 185, 212 210 L 220 370 L 210 370 L 204 220 L 196 220 L 190 370 L 180 370 L 188 210 C 188 185, 180 165, 180 125 Z"
                    fill="url(#pulpGrad)"
                    stroke={selectedPart === 'pulp' ? '#38bdf8' : '#be123c'}
                    strokeWidth={selectedPart === 'pulp' ? '2.5' : '1.5'}
                  />
                </g>

                {/* 7. Blood Vessels & Nerves entering root canals */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('nerves_blood')}
                  filter={selectedPart === 'nerves_blood' ? 'url(#toothGlow)' : undefined}
                >
                  {/* Artery (Red) */}
                  <path d="M 183 400 L 183 370 L 190 220 L 198 120" fill="none" stroke="#ef4444" strokeWidth="1.8" />
                  {/* Vein (Blue) */}
                  <path d="M 215 400 L 215 370 L 208 220 L 202 120" fill="none" stroke="#3b82f6" strokeWidth="1.8" />
                  {/* Sensory Nerve (Yellow) */}
                  <path d="M 187 400 L 187 370 L 195 220 L 200 110" fill="none" stroke="#facc15" strokeWidth="1.5" strokeDasharray="2 1" />
                  <path d="M 212 400 L 212 370 L 205 220 L 200 110" fill="none" stroke="#facc15" strokeWidth="1.5" strokeDasharray="2 1" />
                </g>

                {/* 8. Gum (Gingiva sealing the neck) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPart('gum')}
                  filter={selectedPart === 'gum' ? 'url(#toothGlow)' : undefined}
                >
                  <path
                    d="M 50 185 L 120 185 C 122 170, 128 155, 136 155 C 130 168, 126 180, 126 185 Z"
                    fill="url(#gumGrad)"
                    stroke={selectedPart === 'gum' ? '#38bdf8' : '#f43f5e'}
                    strokeWidth={selectedPart === 'gum' ? '2' : '1.2'}
                  />
                  <path
                    d="M 350 185 L 280 185 C 278 170, 272 155, 264 155 C 270 168, 274 180, 274 185 Z"
                    fill="url(#gumGrad)"
                    stroke={selectedPart === 'gum' ? '#38bdf8' : '#f43f5e'}
                    strokeWidth={selectedPart === 'gum' ? '2' : '1.2'}
                  />
                </g>

                {/* Leader line indicators to selected part */}
                <circle
                  cx={
                    selectedPart === 'enamel' ? 200 :
                    selectedPart === 'dentine' ? 180 :
                    selectedPart === 'pulp' ? 200 :
                    selectedPart === 'gum' ? 128 :
                    selectedPart === 'cementum' ? 132 :
                    selectedPart === 'periodontal' ? 125 :
                    selectedPart === 'bone' ? 90 : 200
                  }
                  cy={
                    selectedPart === 'enamel' ? 38 :
                    selectedPart === 'dentine' ? 75 :
                    selectedPart === 'pulp' ? 120 :
                    selectedPart === 'gum' ? 165 :
                    selectedPart === 'cementum' ? 240 :
                    selectedPart === 'periodontal' ? 260 :
                    selectedPart === 'bone' ? 220 : 380
                  }
                  r="5"
                  fill="#38bdf8"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="animate-ping"
                />
              </svg>
            </div>

            {/* Quick Part Selector Pills */}
            <div className="w-full flex flex-wrap gap-1.5 pt-2 border-t border-slate-800 justify-center">
              {Object.values(toothParts).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPart(p.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                    selectedPart === p.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed Syllabus Anatomy Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {activePartData.region} Region
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activePartData.living
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {activePartData.living ? 'Living Tissue' : 'Non-Living / Calcified'}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {activePartData.name}
              </h3>

              <p className="text-xs text-slate-700 leading-relaxed">
                {activePartData.description}
              </p>

              <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs">
                <strong className="text-slate-900 block mb-0.5">Key Biological Function:</strong>
                <p className="text-slate-600">{activePartData.function}</p>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Cambridge IGCSE 0610 Exam Tip</span>
                </div>
                <p className="leading-relaxed">{activePartData.igcseExamTip}</p>
              </div>
            </div>

            {/* Crown vs Neck vs Root summary table */}
            <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs space-y-2">
              <span className="font-bold text-slate-800 uppercase text-[11px] tracking-wider block">
                The Three Anatomical Regions
              </span>
              <div className="space-y-1.5 text-slate-600 text-[11px]">
                <p>
                  <strong>• Crown:</strong> The visible portion projecting above the gumline, covered by hard enamel.
                </p>
                <p>
                  <strong>• Neck:</strong> The constricted zone where the crown meets the root, sealed tightly by the gum.
                </p>
                <p>
                  <strong>• Root:</strong> Embedded firmly into the jawbone socket, coated with cementum and anchored by periodontal fibres.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: THE 4 HUMAN TOOTH TYPES */}
      {subTab === 'types' && (
        <div className="flex flex-col gap-6">
          {/* Tooth Type Grid Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(['incisor', 'canine', 'premolar', 'molar'] as ToothTypeId[]).map((typeId) => {
              const tooth = toothTypes[typeId];
              const isSelected = selectedToothType === typeId;

              return (
                <button
                  key={typeId}
                  onClick={() => setSelectedToothType(typeId)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-500 shadow-xs ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">
                      {typeId === 'incisor' ? '🪓' : typeId === 'canine' ? '🦷' : typeId === 'premolar' ? '⚙️' : '🪨'}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/60 px-1.5 py-0.5 rounded">
                      {tooth.totalAdult} in adult
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{tooth.name}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                    {tooth.shape}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Card for Selected Tooth Type */}
          {(() => {
            const current = toothTypes[selectedToothType];
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-slate-50 border border-slate-200 rounded-2xl items-center">
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Syllabus Classification
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {current.position}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {current.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-800 block mb-0.5">Crown Shape:</span>
                      <p className="text-slate-600">{current.shape}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-800 block mb-0.5">Root Architecture:</span>
                      <p className="text-slate-600">{current.roots}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-800 block mb-0.5">Cusps (Raised Points):</span>
                      <p className="text-slate-600">{current.cusps}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-800 block mb-0.5">Role in Physical Digestion:</span>
                      <p className="text-slate-600 font-medium text-blue-700">{current.function}</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950">
                    <strong>💡 Cambridge 0610 Exam Fact:</strong> {current.igcseNote}
                  </div>
                </div>

                {/* Right side: Adult Dental Formula breakdown */}
                <div className="md:col-span-4 bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-xs">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">
                    Adult Dental Formula (32 Teeth)
                  </span>
                  <div className="space-y-2 text-slate-700">
                    <div className="flex justify-between pb-1 border-b border-slate-100">
                      <span>• Incisors (I):</span>
                      <span className="font-mono font-bold">8 total</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-100">
                      <span>• Canines (C):</span>
                      <span className="font-mono font-bold">4 total</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-100">
                      <span>• Premolars (PM):</span>
                      <span className="font-mono font-bold">8 total</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-100">
                      <span>• Molars (M):</span>
                      <span className="font-mono font-bold">12 total</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 pt-1 leading-snug">
                    Arrangement per half jaw: 2 Incisors, 1 Canine, 2 Premolars, 3 Molars (Formula: 2.1.2.3 / 2.1.2.3).
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 3: TOOTH DECAY (DENTAL CARIES) SIMULATOR */}
      {subTab === 'decay' && (
        <div className="flex flex-col gap-6">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Interactive Decay Progression Simulator
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                {decayStage === 0 && 'Stage 1: Healthy Clean Tooth'}
                {decayStage === 1 && 'Stage 2: Plaque Bacteria & Acid Dissolution'}
                {decayStage === 2 && 'Stage 3: Rapid Dentine Penetration'}
                {decayStage === 3 && 'Stage 4: Pulp Infection & Severe Toothache'}
              </span>
            </div>

            {/* Slider to advance decay */}
            <input
              type="range"
              min="0"
              max="3"
              step="1"
              value={decayStage}
              onChange={(e) => setDecayStage(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />

            <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-2">
              <span className={decayStage === 0 ? 'text-emerald-600 font-bold' : ''}>1. Healthy Enamel</span>
              <span className={decayStage === 1 ? 'text-amber-600 font-bold' : ''}>2. Acid Dissolves Enamel</span>
              <span className={decayStage === 2 ? 'text-orange-600 font-bold' : ''}>3. Dentine Decay</span>
              <span className={decayStage === 3 ? 'text-rose-600 font-bold' : ''}>4. Pulp Abscess (Pain!)</span>
            </div>
          </div>

          {/* Visual Stage Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>The Chemical Process of Dental Caries (IGCSE 0610)</span>
              </h4>
              <ul className="text-xs text-slate-700 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Step 1:</span>
                  <span>Food containing sugars (glucose, sucrose) sticks to the teeth, mixing with saliva to form sticky <strong>plaque</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Step 2:</span>
                  <span><strong>Bacteria</strong> in the plaque respire the sugars anaerobically, producing <strong>acid</strong> as a waste product.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Step 3:</span>
                  <span>The acid dissolves the hard calcium salts in the <strong>enamel</strong>, forming a microscopic hole (cavity).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Step 4:</span>
                  <span>Once through the enamel, decay reaches the softer <strong>dentine</strong> and spreads much faster.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">Step 5:</span>
                  <span>Decay reaches the <strong>pulp cavity</strong>; bacteria infect living nerves → intense <strong>toothache</strong> and abscess!</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-3 text-xs text-emerald-950">
              <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>How to Prevent Tooth Decay (Syllabus Strategies)</span>
              </h4>
              <div className="space-y-2 text-emerald-900 leading-relaxed">
                <p>
                  <strong>1. Regular Brushing with Fluoride Toothpaste:</strong> Removes plaque bacteria and food residues. Fluoride incorporates into enamel to form fluorapatite, which is much more resistant to acid dissolution.
                </p>
                <p>
                  <strong>2. Reduce Frequency of Sugary Snacks & Acidic Drinks:</strong> Limiting sweet intake starves plaque bacteria, reducing the frequency of acid attacks.
                </p>
                <p>
                  <strong>3. Flossing:</strong> Cleans between teeth where toothbrushes cannot reach.
                </p>
                <p>
                  <strong>4. Regular Dental Check-ups:</strong> Catches cavities early before they penetrate dentine and infect the pulp cavity.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
