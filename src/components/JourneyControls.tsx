import React from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, FastForward, Sparkles } from 'lucide-react';
import { STAGES, FOOD_TYPES, FOOD_JOURNEY_DETAILS } from '../data/digestiveData';
import { StageId, FoodType, OrganId } from '../types/digestive';

interface JourneyControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  playbackSpeed: number;
  onChangeSpeed: (speed: number) => void;
  bolusProgress: number; // 0 to 1
  onSeek: (value: number) => void;
  activeStageId: StageId;
  selectedFoodType: FoodType;
  onSelectFoodType: (food: FoodType) => void;
  selectedOrganId: OrganId;
}

export const JourneyControls: React.FC<JourneyControlsProps> = ({
  isPlaying,
  onTogglePlay,
  onReset,
  onStepForward,
  onStepBackward,
  playbackSpeed,
  onChangeSpeed,
  bolusProgress,
  onSeek,
  activeStageId,
  selectedFoodType,
  onSelectFoodType,
  selectedOrganId,
}) => {
  const currentFoodInfo = FOOD_TYPES[selectedFoodType];
  const currentFoodStage = FOOD_JOURNEY_DETAILS[selectedFoodType]?.[selectedOrganId];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col gap-4">
      {/* Food Type Selector Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <span className="text-base">🍽️</span>
            <span>Food Molecule:</span>
          </span>
          <span className="text-xs sm:text-sm text-slate-500 hidden sm:inline">
            (Select to track digestion)
          </span>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {(Object.keys(FOOD_TYPES) as FoodType[]).map((fKey) => {
            const f = FOOD_TYPES[fKey];
            const isSelected = selectedFoodType === fKey;
            return (
              <button
                key={fKey}
                onClick={() => onSelectFoodType(fKey)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer shadow-xs ${
                  isSelected
                    ? fKey === 'carbohydrates'
                      ? 'bg-amber-600 text-white ring-2 ring-amber-400'
                      : fKey === 'proteins'
                      ? 'bg-rose-600 text-white ring-2 ring-rose-400'
                      : 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="text-base">{f.icon}</span>
                <span>{f.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Food Fate Banner at Current Organ */}
      {currentFoodStage && (
        <div
          className={`p-3.5 rounded-xl border text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 ${
            selectedFoodType === 'carbohydrates'
              ? 'bg-amber-50/80 border-amber-200 text-amber-950'
              : selectedFoodType === 'proteins'
              ? 'bg-rose-50/80 border-rose-200 text-rose-950'
              : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-sm">
              <span className="text-base">{currentFoodInfo.icon}</span>
              <span className="uppercase tracking-wide">{currentFoodInfo.name} at this stage:</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-current font-bold text-xs">
                {currentFoodStage.state}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium opacity-90 pl-6">
              {currentFoodStage.chemicalAction}
            </p>
          </div>

          <div className="shrink-0 text-xs sm:text-sm font-semibold bg-white/90 px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs self-end sm:self-center">
            Enzyme: <span className="font-bold text-slate-900">{currentFoodStage.enzyme}</span>
          </div>
        </div>
      )}

      {/* 5 Stages Pipeline Indicator */}
      <div className="overflow-x-auto pb-1">
        <div className="flex items-center justify-between min-w-[540px] gap-2">
          {STAGES.map((stage, idx) => {
            const isActive = activeStageId === stage.id;
            return (
              <div
                key={stage.id}
                className={`flex-1 flex flex-col items-center text-center p-2.5 rounded-xl transition-all border ${
                  isActive
                    ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-xs ring-1 ring-blue-300'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step {idx + 1}
                </span>
                <span className="text-sm font-bold truncate max-w-full">
                  {stage.name.replace(/^\d+\.\s*/, '')}
                </span>
                <span className="text-xs text-slate-500 truncate max-w-full font-medium">
                  {stage.keySite.split('(')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrubbable Progress Bar */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-slate-600 font-medium">
          <span>👄 Mouth (Ingestion)</span>
          <span className="text-slate-800 font-bold text-sm sm:text-base">
            Alimentary Canal Journey Progression
          </span>
          <span>🚽 Anus (Egestion)</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.005"
          value={bolusProgress}
          onChange={(e) => onSeek(parseFloat(e.target.value))}
          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
        />
      </div>

      {/* Playback Button Deck */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          {/* Step Back */}
          <button
            onClick={onStepBackward}
            className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            title="Previous Organ"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Play/Pause Button */}
          <button
            onClick={onTogglePlay}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-colors cursor-pointer shadow-xs ${
              isPlaying
                ? 'bg-amber-600 hover:bg-amber-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>Pause Tour</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Play Journey</span>
              </>
            )}
          </button>

          {/* Step Forward */}
          <button
            onClick={onStepForward}
            className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            title="Next Organ"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Reset */}
          <button
            onClick={onReset}
            className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            title="Reset to Mouth"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Speed Selector */}
        <div className="flex items-center gap-2.5 text-sm text-slate-700">
          <FastForward className="w-4 h-4 text-slate-400" />
          <span className="font-semibold">Speed:</span>
          <div className="flex items-center gap-1.5">
            {[0.5, 1, 1.5, 2].map((s) => (
              <button
                key={s}
                onClick={() => onChangeSpeed(s)}
                className={`px-2.5 py-1 rounded-md text-sm font-semibold cursor-pointer transition-colors ${
                  playbackSpeed === s
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
