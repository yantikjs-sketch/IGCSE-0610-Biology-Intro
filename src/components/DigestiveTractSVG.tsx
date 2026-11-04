import React, { useState } from 'react';
import { OrganId, FoodType } from '../types/digestive';
import { ORGANS, FOOD_TYPES, FOOD_JOURNEY_DETAILS } from '../data/digestiveData';
import { Eye, EyeOff, Layers, PenTool } from 'lucide-react';

interface DigestiveTractSVGProps {
  selectedOrganId: OrganId;
  onSelectOrgan: (id: OrganId) => void;
  bolusProgress: number; // 0 to 1 along the path
  isPlaying: boolean;
  quizTargetOrganId?: OrganId | null;
  onQuizClickOrgan?: (id: OrganId) => void;
  selectedFoodType?: FoodType;
}

interface DiagramLabelConfig {
  id: OrganId;
  name: string;
  side: 'left' | 'right';
  anchorX: number; // point directly on organ
  anchorY: number;
  tagX: number; // label box x
  tagY: number; // label box y
  tagWidth: number;
  tagHeight: number;
  hotspotRadius: number;
}

export const DigestiveTractSVG: React.FC<DigestiveTractSVGProps> = ({
  selectedOrganId,
  onSelectOrgan,
  bolusProgress,
  isPlaying,
  quizTargetOrganId,
  onQuizClickOrgan,
  selectedFoodType = 'carbohydrates',
}) => {
  const [diagramMode, setDiagramMode] = useState<'vector' | 'illustrated'>('vector');
  const [showLabels, setShowLabels] = useState(true);
  const [hoveredOrgan, setHoveredOrgan] = useState<OrganId | null>(null);

  const currentFood = FOOD_TYPES[selectedFoodType];

  // Clean genderless half-body human diagram image
  const halfBodyImgUrl = '/src/assets/images/half_body_digestive_1793751642573.jpg';

  // Real trajectory coordinates matching the 2D diagram (viewBox 0 0 600 800)
  const halfBodyPathCoordinates: { x: number; y: number; organ: OrganId; stageName: string }[] = [
    { x: 255, y: 155, organ: 'mouth', stageName: 'Mouth: Ingestion & Chewing' },
    { x: 285, y: 180, organ: 'mouth', stageName: 'Salivary Amylase acting' },
    { x: 298, y: 220, organ: 'oesophagus', stageName: 'Entering Oesophagus' },
    { x: 298, y: 280, organ: 'oesophagus', stageName: 'Peristalsis in Oesophagus' },
    { x: 300, y: 350, organ: 'oesophagus', stageName: 'Cardiac Sphincter into Stomach' },
    { x: 335, y: 410, organ: 'stomach', stageName: 'Gastric Churning with HCl & Pepsin' },
    { x: 325, y: 445, organ: 'stomach', stageName: 'Pyloric sphincter' },
    { x: 280, y: 470, organ: 'duodenum', stageName: 'Duodenum: Bile & Pancreatic Juice' },
    { x: 295, y: 515, organ: 'ileum', stageName: 'Ileum: Villi absorbing Glucose & Amino Acids' },
    { x: 335, y: 545, organ: 'ileum', stageName: 'Ileum: Lacteal absorbing Fatty Acids' },
    { x: 285, y: 575, organ: 'ileum', stageName: 'Ileum: Water absorption' },
    { x: 245, y: 600, organ: 'ileum', stageName: 'Ileocaecal valve' },
    { x: 225, y: 575, organ: 'colon', stageName: 'Caecum & Ascending Colon' },
    { x: 225, y: 505, organ: 'colon', stageName: 'Ascending Colon: Water Reabsorption' },
    { x: 275, y: 495, organ: 'colon', stageName: 'Transverse Colon' },
    { x: 355, y: 495, organ: 'colon', stageName: 'Transverse Colon' },
    { x: 385, y: 545, organ: 'colon', stageName: 'Descending Colon: Compacting Faeces' },
    { x: 385, y: 615, organ: 'colon', stageName: 'Descending Colon' },
    { x: 340, y: 635, organ: 'colon', stageName: 'Sigmoid Colon' },
    { x: 300, y: 660, organ: 'rectum', stageName: 'Rectum: Faeces Storage' },
    { x: 300, y: 692, organ: 'anus', stageName: 'Anus: Egestion' },
  ];

  // Interpolate bolus position from 0 to 1
  const pathIndex = Math.min(
    halfBodyPathCoordinates.length - 1,
    Math.max(0, Math.floor(bolusProgress * (halfBodyPathCoordinates.length - 1)))
  );
  const nextIndex = Math.min(halfBodyPathCoordinates.length - 1, pathIndex + 1);
  const fraction = bolusProgress * (halfBodyPathCoordinates.length - 1) - pathIndex;

  const currentCoord = {
    x: halfBodyPathCoordinates[pathIndex].x + (halfBodyPathCoordinates[nextIndex].x - halfBodyPathCoordinates[pathIndex].x) * fraction,
    y: halfBodyPathCoordinates[pathIndex].y + (halfBodyPathCoordinates[nextIndex].y - halfBodyPathCoordinates[pathIndex].y) * fraction,
    organ: halfBodyPathCoordinates[pathIndex].organ,
    stageName: halfBodyPathCoordinates[pathIndex].stageName,
  };

  const handleOrganClick = (organId: OrganId) => {
    if (quizTargetOrganId && onQuizClickOrgan) {
      onQuizClickOrgan(organId);
    } else {
      onSelectOrgan(organId);
    }
  };

  const isOrganActive = (organId: OrganId) => {
    if (quizTargetOrganId) {
      return hoveredOrgan === organId;
    }
    return selectedOrganId === organId;
  };

  // 12 Cambridge IGCSE labels & leader lines (viewBox 0 0 600 800)
  const labels: DiagramLabelConfig[] = [
    // LEFT SIDE LABELS
    {
      id: 'mouth',
      name: 'Mouth (Buccal cavity)',
      side: 'left',
      anchorX: 255,
      anchorY: 155,
      tagX: 10,
      tagY: 143,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 24,
    },
    {
      id: 'liver',
      name: 'Liver',
      side: 'left',
      anchorX: 245,
      anchorY: 410,
      tagX: 10,
      tagY: 348,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 36,
    },
    {
      id: 'gall_bladder',
      name: 'Gall bladder',
      side: 'left',
      anchorX: 250,
      anchorY: 450,
      tagX: 10,
      tagY: 408,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 20,
    },
    {
      id: 'duodenum',
      name: 'Duodenum',
      side: 'left',
      anchorX: 275,
      anchorY: 475,
      tagX: 10,
      tagY: 463,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 22,
    },
    {
      id: 'colon',
      name: 'Colon (Large intestine)',
      side: 'left',
      anchorX: 225,
      anchorY: 540,
      tagX: 10,
      tagY: 528,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 32,
    },
    {
      id: 'rectum',
      name: 'Rectum',
      side: 'left',
      anchorX: 300,
      anchorY: 660,
      tagX: 10,
      tagY: 648,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 22,
    },

    // RIGHT SIDE LABELS
    {
      id: 'salivary_glands',
      name: 'Salivary glands',
      side: 'right',
      anchorX: 285,
      anchorY: 180,
      tagX: 458,
      tagY: 168,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 20,
    },
    {
      id: 'oesophagus',
      name: 'Oesophagus (Gullet)',
      side: 'right',
      anchorX: 300,
      anchorY: 290,
      tagX: 458,
      tagY: 278,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 24,
    },
    {
      id: 'stomach',
      name: 'Stomach',
      side: 'right',
      anchorX: 345,
      anchorY: 430,
      tagX: 458,
      tagY: 378,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 34,
    },
    {
      id: 'pancreas',
      name: 'Pancreas',
      side: 'right',
      anchorX: 315,
      anchorY: 480,
      tagX: 458,
      tagY: 438,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 22,
    },
    {
      id: 'ileum',
      name: 'Ileum (Small intestine)',
      side: 'right',
      anchorX: 310,
      anchorY: 560,
      tagX: 458,
      tagY: 523,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 38,
    },
    {
      id: 'anus',
      name: 'Anus',
      side: 'right',
      anchorX: 300,
      anchorY: 692,
      tagX: 458,
      tagY: 680,
      tagWidth: 132,
      tagHeight: 24,
      hotspotRadius: 18,
    },
  ];

  return (
    <div className="relative bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col items-center">
      {/* Viewport Control Bar */}
      <div className="w-full flex flex-wrap items-center justify-between pb-3 mb-2 border-b border-slate-100 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
            2D Human Digestive System Diagram
          </span>
          {isPlaying && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Bolus Journey
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Diagram Type Switcher (Vector vs Illustrated) */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => setDiagramMode('vector')}
              className={`flex items-center gap-1 px-2 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                diagramMode === 'vector'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenTool className="w-3 h-3" />
              <span>2D Vector</span>
            </button>
            <button
              onClick={() => setDiagramMode('illustrated')}
              className={`flex items-center gap-1 px-2 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                diagramMode === 'illustrated'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>2D Illustrated</span>
            </button>
          </div>

          {/* Self-Test Label Visibility Toggle */}
          <button
            onClick={() => setShowLabels(!showLabels)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            {showLabels ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                <span>Hide Labels</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-slate-500" />
                <span>Show Labels</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main 2D Diagram Viewport (viewBox 0 0 600 800) */}
      <div className="w-full max-w-[520px] aspect-[600/800] relative select-none rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-white">
        {/* MODE 1: 2D ILLUSTRATED IMAGE */}
        {diagramMode === 'illustrated' && (
          <img
            src={halfBodyImgUrl}
            alt="Genderless human half-body diagram showing internal digestive system"
            className="w-full h-full object-contain absolute inset-0"
            referrerPolicy="no-referrer"
          />
        )}

        {/* MODE 2: PURE 2D VECTOR SVG ANATOMY DIAGRAM & OVERLAY */}
        <svg
          viewBox="0 0 600 800"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="organHalo" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#2563eb" floodOpacity="0.85" />
            </filter>
            <filter id="bolusGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#f59e0b" floodOpacity="0.9" />
            </filter>
            <linearGradient id="stomach2dGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
            <linearGradient id="liver2dGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          {/* 2D Vector Graphic Anatomy Elements (Active in Vector Mode) */}
          {diagramMode === 'vector' && (
            <g>
              {/* Human Body Silhouette (Head, Neck, Torso, Hips) */}
              <path
                d="M 300 40 C 270 40 240 50 220 80 C 205 105 205 125 195 135 C 190 140 185 142 185 145 C 185 148 195 152 205 152 C 215 152 225 155 228 160 C 230 165 220 170 215 175 C 220 185 235 190 250 190 L 275 195 L 280 230 C 260 235 220 245 180 265 C 150 280 135 305 130 350 L 125 450 L 120 580 C 118 630 120 680 125 740 C 127 760 135 780 145 780 L 230 780 L 245 720 C 255 690 280 670 300 670 C 320 670 345 690 355 720 L 370 780 L 455 780 C 465 780 473 760 475 740 C 480 680 482 630 480 580 L 475 450 L 470 350 C 465 305 450 280 420 265 C 380 245 340 235 320 230 L 325 195 C 335 190 345 180 350 165 C 360 135 355 80 340 60 C 330 48 315 40 300 40 Z"
                fill="#f8fafc"
                stroke="#cbd5e1"
                strokeWidth="2.5"
              />

              {/* Head profile line */}
              <path
                d="M 230 75 C 215 95 210 115 200 130 L 188 142 L 205 148 L 225 155 L 225 168 L 245 188"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              {/* Oral Cavity (Mouth) */}
              <path
                d="M 225 148 C 240 148 265 150 265 162 C 265 174 245 174 230 170 Z"
                fill={isOrganActive('mouth') ? '#fb7185' : '#fecdd3'}
                stroke="#e11d48"
                strokeWidth={isOrganActive('mouth') ? 2.5 : 1.8}
              />
              {/* Tongue */}
              <path d="M 232 166 C 242 160 255 163 260 168 Z" fill="#f43f5e" />

              {/* Salivary Glands */}
              <g
                fill={isOrganActive('salivary_glands') ? '#facc15' : '#fef08a'}
                stroke="#ca8a04"
                strokeWidth={isOrganActive('salivary_glands') ? 2.5 : 1.8}
              >
                <ellipse cx="286" cy="176" rx="9" ry="7" />
                <ellipse cx="278" cy="188" rx="8" ry="6" />
              </g>

              {/* Oesophagus (Gullet) */}
              <rect
                x="295"
                y="195"
                width="10"
                height="180"
                rx="3"
                fill={isOrganActive('oesophagus') ? '#fb923c' : '#fed7aa'}
                stroke="#ea580c"
                strokeWidth={isOrganActive('oesophagus') ? 2.5 : 1.8}
              />

              {/* Liver */}
              <path
                d="M 298 375 C 265 365 220 375 200 410 C 190 430 200 455 235 455 C 265 455 295 440 305 410 C 310 395 308 380 298 375 Z"
                fill={isOrganActive('liver') ? '#ef4444' : 'url(#liver2dGrad)'}
                stroke="#b91c1c"
                strokeWidth={isOrganActive('liver') ? 3 : 2}
              />

              {/* Gall Bladder & Bile Duct */}
              <ellipse
                cx="250"
                cy="445"
                rx="8"
                ry="12"
                fill={isOrganActive('gall_bladder') ? '#22c55e' : '#4ade80'}
                stroke="#15803d"
                strokeWidth={isOrganActive('gall_bladder') ? 2.5 : 1.8}
              />
              <path
                d="M 252 452 C 258 462 268 468 275 470"
                fill="none"
                stroke="#15803d"
                strokeWidth="2.5"
              />

              {/* Stomach (J-shaped Pouch) */}
              <path
                d="M 298 375 C 335 370 375 395 375 425 C 375 455 355 465 330 465 C 300 465 285 455 285 448 C 285 440 295 435 305 435 C 320 435 340 430 340 415 C 340 395 315 390 304 380 Z"
                fill={isOrganActive('stomach') ? '#4ade80' : 'url(#stomach2dGrad)'}
                stroke="#15803d"
                strokeWidth={isOrganActive('stomach') ? 3 : 2.2}
              />

              {/* Pancreas (in Duodenum C-loop) */}
              <path
                d="M 285 468 C 295 460 330 460 355 468 C 360 475 350 482 335 480 C 310 478 290 478 285 468 Z"
                fill={isOrganActive('pancreas') ? '#facc15' : '#fef08a'}
                stroke="#ca8a04"
                strokeWidth={isOrganActive('pancreas') ? 2.5 : 1.8}
              />

              {/* Duodenum (C-loop curve) */}
              <path
                d="M 285 448 C 270 455 268 480 280 495 C 290 505 310 500 315 510"
                fill="none"
                stroke={isOrganActive('duodenum') ? '#f97316' : '#fdba74'}
                strokeWidth={isOrganActive('duodenum') ? 14 : 11}
                strokeLinecap="round"
              />

              {/* Colon (Large Intestine: Ascending, Transverse, Descending, Sigmoid) */}
              <path
                d="M 225 595 L 225 485 L 375 485 L 375 605 L 340 635 L 300 650"
                fill="none"
                stroke={isOrganActive('colon') ? '#0284c7' : '#38bdf8'}
                strokeWidth={isOrganActive('colon') ? 18 : 15}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Colon segmentation bands (Haustra rings) */}
              <path
                d="M 225 595 L 225 485 L 375 485 L 375 605 L 340 635 L 300 650"
                fill="none"
                stroke="#0369a1"
                strokeWidth="1.5"
                strokeDasharray="4 8"
              />

              {/* Ileum (Small Intestine Coils inside the Colon frame) */}
              <path
                d="M 315 510 C 270 515 250 530 280 540 C 320 550 345 535 340 555 C 335 570 290 565 270 575 C 255 585 270 600 310 595 C 335 590 325 610 280 610 C 250 610 230 600 225 595"
                fill="none"
                stroke={isOrganActive('ileum') ? '#db2777' : '#f472b6'}
                strokeWidth={isOrganActive('ileum') ? 12 : 9}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Rectum */}
              <line
                x1="300"
                y1="650"
                x2="300"
                y2="685"
                stroke={isOrganActive('rectum') ? '#1e293b' : '#64748b'}
                strokeWidth={isOrganActive('rectum') ? 14 : 11}
                strokeLinecap="round"
              />

              {/* Anus */}
              <circle
                cx="300"
                cy="692"
                r="6"
                fill={isOrganActive('anus') ? '#0284c7' : '#475569'}
                stroke="#0f172a"
                strokeWidth="2"
              />
            </g>
          )}

          {/* Interactive Clickable Hotspots over each organ */}
          {labels.map((lbl) => {
            const active = isOrganActive(lbl.id);
            const hovered = hoveredOrgan === lbl.id;

            return (
              <g
                key={`hotspot-${lbl.id}`}
                className="cursor-pointer transition-all duration-200"
                onClick={() => handleOrganClick(lbl.id)}
                onMouseEnter={() => setHoveredOrgan(lbl.id)}
                onMouseLeave={() => setHoveredOrgan(null)}
              >
                {/* Active / Hover Spinning Glowing Ring */}
                {(active || hovered) && (
                  <circle
                    cx={lbl.anchorX}
                    cy={lbl.anchorY}
                    r={lbl.hotspotRadius + 6}
                    fill="none"
                    stroke={active ? '#2563eb' : '#0284c7'}
                    strokeWidth={active ? '3' : '2'}
                    strokeDasharray="4 2"
                    className="animate-spin"
                    style={{ transformOrigin: `${lbl.anchorX}px ${lbl.anchorY}px`, animationDuration: '8s' }}
                  />
                )}

                {/* Hotspot transparent target area */}
                <circle
                  cx={lbl.anchorX}
                  cy={lbl.anchorY}
                  r={lbl.hotspotRadius}
                  fill={active ? '#2563eb' : hovered ? '#38bdf8' : 'transparent'}
                  fillOpacity={active ? 0.22 : hovered ? 0.12 : 0.01}
                  stroke={active ? '#2563eb' : hovered ? '#0284c7' : 'transparent'}
                  strokeWidth="2"
                />
              </g>
            );
          })}

          {/* 100% Correctly Positioned Labels & Leader Lines */}
          {labels.map((lbl) => {
            const active = isOrganActive(lbl.id);
            const hovered = hoveredOrgan === lbl.id;
            const isVisible = showLabels || active || hovered;

            if (!isVisible) return null;

            const isLeft = lbl.side === 'left';
            const lineStartX = lbl.anchorX;
            const lineStartY = lbl.anchorY;
            const lineEndX = isLeft ? lbl.tagX + lbl.tagWidth : lbl.tagX;
            const lineEndY = lbl.tagY + lbl.tagHeight / 2;

            return (
              <g
                key={`label-${lbl.id}`}
                className="cursor-pointer transition-all duration-150 select-none"
                onClick={() => handleOrganClick(lbl.id)}
                onMouseEnter={() => setHoveredOrgan(lbl.id)}
                onMouseLeave={() => setHoveredOrgan(null)}
              >
                {/* Organ Anchor Bullet Dot */}
                <circle
                  cx={lbl.anchorX}
                  cy={lbl.anchorY}
                  r={active ? '5' : '3.5'}
                  fill={active ? '#2563eb' : '#1e293b'}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />

                {/* Leader Line to Label Tag */}
                <line
                  x1={lineStartX}
                  y1={lineStartY}
                  x2={lineEndX}
                  y2={lineEndY}
                  stroke={active ? '#2563eb' : '#64748b'}
                  strokeWidth={active ? '2.2' : '1.3'}
                  strokeDasharray={active ? undefined : '2.5 1.5'}
                />

                {/* Label Tag Box */}
                <rect
                  x={lbl.tagX}
                  y={lbl.tagY}
                  width={lbl.tagWidth}
                  height={lbl.tagHeight}
                  rx="5"
                  fill={active ? '#2563eb' : '#ffffff'}
                  stroke={active ? '#1d4ed8' : '#cbd5e1'}
                  strokeWidth={active ? '1.8' : '1'}
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))"
                />

                {/* Label Text */}
                <text
                  x={lbl.tagX + lbl.tagWidth / 2}
                  y={lbl.tagY + lbl.tagHeight / 2 + 3.8}
                  textAnchor="middle"
                  fill={active ? '#ffffff' : '#0f172a'}
                  fontSize="9.8"
                  fontWeight={active ? 'bold' : '600'}
                  className="font-sans"
                >
                  {lbl.name}
                </text>
              </g>
            );
          })}

          {/* Animated Food Molecule Particle Traveling down the Digestive Tract */}
          <g filter="url(#bolusGlow)">
            <circle
              cx={currentCoord.x}
              cy={currentCoord.y}
              r="10.5"
              fill={currentFood.glowColor}
              opacity="0.45"
              className="animate-ping"
              style={{ transformOrigin: `${currentCoord.x}px ${currentCoord.y}px` }}
            />
            <circle
              cx={currentCoord.x}
              cy={currentCoord.y}
              r="8"
              fill={currentFood.glowColor}
              stroke="#ffffff"
              strokeWidth="2"
            />
            <circle
              cx={currentCoord.x}
              cy={currentCoord.y}
              r="4.5"
              fill="#ffffff"
              opacity="0.9"
            />
          </g>
        </svg>

        {/* Live Food Molecule Tooltip Badge */}
        <div
          className="absolute transform -translate-x-1/2 -translate-y-full pointer-events-none transition-all duration-150 z-20"
          style={{
            left: `${(currentCoord.x / 600) * 100}%`,
            top: `${(currentCoord.y / 800) * 100 - 2.5}%`,
          }}
        >
          <div className="bg-slate-900/95 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-lg shadow-xl whitespace-nowrap flex items-center gap-1.5 border border-slate-700">
            <span>{currentFood.icon}</span>
            <span className="font-bold text-amber-300">{currentFood.name}:</span>
            <span className="text-slate-200">
              {FOOD_JOURNEY_DETAILS[selectedFoodType]?.[currentCoord.organ]?.state || currentCoord.stageName}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Helper caption */}
      <div className="w-full text-center mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-500">
        💡 Click any organ directly on the 2D diagram to inspect enzymes, secretions, and Cambridge IGCSE exam tips.
      </div>
    </div>
  );
};
