import React from 'react';
import { OrganInfo, OrganId, FoodType } from '../types/digestive';
import { STAGES, FOOD_TYPES, FOOD_JOURNEY_DETAILS } from '../data/digestiveData';
import {
  AlertTriangle,
  Award,
  Sparkles,
  Zap,
  Droplets,
  Activity,
  Layers,
  ChevronRight,
  Utensils,
  Edit3,
} from 'lucide-react';

interface OrganDetailsCardProps {
  organ: OrganInfo;
  onSelectConnectedOrgan?: (id: OrganId) => void;
  selectedFoodType?: FoodType;
  pancreasLabel?: string;
  onEditPancreasLabel?: () => void;
}

export const OrganDetailsCard: React.FC<OrganDetailsCardProps> = ({
  organ,
  onSelectConnectedOrgan,
  selectedFoodType = 'carbohydrates',
  pancreasLabel,
  onEditPancreasLabel,
}) => {
  const currentStage = STAGES.find((s) => s.id === organ.stage);
  const currentFood = FOOD_TYPES[selectedFoodType];
  const foodDetails = FOOD_JOURNEY_DETAILS[selectedFoodType]?.[organ.id];

  const displayName = organ.id === 'pancreas' && pancreasLabel ? pancreasLabel : organ.name;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-1">
          <span className="uppercase tracking-wider text-blue-600">
            {currentStage?.name || organ.stage}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {organ.isAccessory ? 'Accessory Gland' : `Pathway Step ${organ.positionInPath + 1} of 8`}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            {displayName}
          </h2>
          {organ.id === 'pancreas' && onEditPancreasLabel && (
            <button
              onClick={onEditPancreasLabel}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors cursor-pointer shadow-2xs shrink-0"
              title="Edit pancreas label"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-600" />
              <span>Edit Label</span>
            </button>
          )}
        </div>
        <p className="text-base text-slate-600 mt-1 leading-relaxed">
          {organ.description}
        </p>
      </div>

      {/* Selected Food Molecule Digestion Spotlight */}
      {foodDetails && (
        <div
          className={`p-4 rounded-xl border text-sm space-y-2.5 ${
            selectedFoodType === 'carbohydrates'
              ? 'bg-amber-50/80 border-amber-200'
              : selectedFoodType === 'proteins'
              ? 'bg-rose-50/80 border-rose-200'
              : 'bg-emerald-50/80 border-emerald-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
              <span className="text-xl">{currentFood.icon}</span>
              <span>Digestion of {currentFood.name} Here:</span>
            </div>
            <span
              className={`text-xs font-bold px-2.5 py-0.5 rounded-full border bg-white ${
                selectedFoodType === 'carbohydrates'
                  ? 'border-amber-300 text-amber-800'
                  : selectedFoodType === 'proteins'
                  ? 'border-rose-300 text-rose-800'
                  : 'border-emerald-300 text-emerald-800'
              }`}
            >
              {foodDetails.state}
            </span>
          </div>

          <div className="space-y-1.5 text-slate-700 pl-7 text-sm">
            <p className="leading-relaxed">
              <strong className="text-slate-900">Action:</strong> {foodDetails.chemicalAction}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs sm:text-sm pt-1">
              <span>
                <strong className="text-slate-900">Enzyme:</strong> {foodDetails.enzyme}
              </span>
              <span>
                <strong className="text-slate-900">Environment:</strong> {foodDetails.phNote}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 italic pt-1">
              💡 {foodDetails.igcseTip}
            </p>
          </div>
        </div>
      )}

      {/* pH & Secretions Quick Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold text-slate-700 text-sm">
            <Activity className="w-4 h-4 text-rose-500" />
            <span>Optimum pH Environment:</span>
          </div>
          <p className="mt-1 font-mono font-bold text-slate-900 pl-6 text-base">
            {organ.optimumPh}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 font-semibold text-slate-700 text-sm">
            <Droplets className="w-4 h-4 text-cyan-600" />
            <span>Secretions / Fluids:</span>
          </div>
          <p className="mt-1 text-slate-900 pl-6 font-medium text-sm">
            {organ.secretions.join(', ')}
          </p>
        </div>
      </div>

      {/* Mechanical vs Chemical Digestion Split */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Mechanical Digestion */}
        <div className="p-4 rounded-xl border border-amber-200/60 bg-amber-50/40">
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-amber-800 mb-2.5">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>Physical / Mechanical</span>
          </div>
          <ul className="text-sm text-slate-700 space-y-2">
            {organ.mechanicalDigestion.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold text-base leading-none mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chemical Digestion */}
        <div className="p-4 rounded-xl border border-blue-200/60 bg-blue-50/40">
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-blue-800 mb-2.5">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Chemical & Enzymes</span>
          </div>
          <ul className="text-sm text-slate-700 space-y-2">
            {organ.chemicalDigestion.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold text-base leading-none mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* IGCSE Syllabus Key Points */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-2.5">
          IGCSE 0610 Syllabus Essentials
        </h3>
        <div className="space-y-2">
          {organ.igcseKeyPoints.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                {idx + 1}
              </span>
              <p className="leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Examiner Tip & Common Mistake Banner */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-sm">
          <div className="flex items-center gap-2 font-bold text-emerald-900 mb-1.5 text-sm sm:text-base">
            <Award className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Examiner Top Tip (0610 Exam Mark Scheme)</span>
          </div>
          <p className="text-emerald-800 leading-relaxed pl-7 text-sm">
            {organ.examinerTip}
          </p>
        </div>

        <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl text-sm">
          <div className="flex items-center gap-2 font-bold text-rose-900 mb-1.5 text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>Avoid This Common Student Mistake</span>
          </div>
          <p className="text-rose-800 leading-relaxed pl-7 text-sm">
            {organ.commonMistake}
          </p>
        </div>
      </div>
    </div>
  );
};
