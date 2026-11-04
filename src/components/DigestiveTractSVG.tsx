import React, { useState } from 'react';
import { OrganId, FoodType } from '../types/digestive';
import { ORGANS, FOOD_TYPES, FOOD_JOURNEY_DETAILS } from '../data/digestiveData';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

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
  const [showLabels, setShowLabels] = useState(true);
  const [hoveredOrgan, setHoveredOrgan] = useState<OrganId | null>(null);

  const currentFood = FOOD_TYPES[selectedFoodType];

  // Clean genderless half-body human diagram image
  const halfBodyImgUrl = '/src/assets/images/half_body_digestive_1793751642573.jpg';

  // Real trajectory coordinates matching the half-body diagram (viewBox 0 0 600 800)
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

  // 12 Perfectly positioned Cambridge IGCSE labels & leader lines (viewBox 0 0 600 800)
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
            Genderless Half-Body Diagram
          </span>
          {isPlaying && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Bolus Journey
            </span>
          )}
        </div>

        <button
          onClick={() => setShowLabels(!showLabels)}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          {showLabels ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-slate-500" />
              <span>Hide Labels (Self Test)</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Show Labels</span>
            </>
          )}
        </button>
      </div>

      {/* Main Half-Body Diagram Viewport (viewBox 0 0 600 800) */}
      <div className="w-full max-w-[520px] aspect-[600/800] relative select-none rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-white">
        {/* Genderless Half-Body Medical Diagram Image */}
        <img
          src={halfBodyImgUrl}
          alt="Genderless human half-body diagram showing internal digestive system"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />

        {/* Interactive SVG Overlay with Accurate Labels and Bolus Animation */}
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
          </defs>

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
                {/* Organ Anchor Bullet Dot directly touching the target organ */}
                <circle
                  cx={lbl.anchorX}
                  cy={lbl.anchorY}
                  r={active ? '5' : '3.5'}
                  fill={active ? '#2563eb' : '#1e293b'}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  filter={active ? 'url(#organHalo)' : undefined}
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
        💡 Click any organ or label directly on the half-body diagram to inspect enzymes, secretions, and Cambridge IGCSE exam tips.
      </div>
    </div>
  );
};
