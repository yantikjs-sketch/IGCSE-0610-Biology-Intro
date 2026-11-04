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
} from 'lucide-react';

interface OrganDetailsCardProps {
  organ: OrganInfo;
  onSelectConnectedOrgan?: (id: OrganId) => void;
  selectedFoodType?: FoodType;
}

export const OrganDetailsCard: React.FC<OrganDetailsCardProps> = ({
  organ,
  onSelectConnectedOrgan,
  selectedFoodType = 'carbohydrates',
}) => {
  const currentStage = STAGES.find((s) => s.id === organ.stage);
  const currentFood = FOOD_TYPES[selectedFoodType];
  const foodDetails = FOOD_JOURNEY_DETAILS[selectedFoodType]?.[organ.id];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
          <span className="uppercase tracking-wider text-blue-600">
            {currentStage?.name || organ.stage}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {organ.isAccessory ? 'Accessory Gland' : `Pathway Step ${organ.positionInPath + 1} of 8`}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          {organ.name}
        </h2>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
          {organ.description}
        </p>
      </div>

      {/* Selected Food Molecule Digestion Spotlight */}
      {foodDetails && (
        <div
          className={`p-4 rounded-xl border text-xs space-y-2 ${
            selectedFoodType === 'carbohydrates'
              ? 'bg-amber-50/80 border-amber-200'
              : selectedFoodType === 'proteins'
              ? 'bg-rose-50/80 border-rose-200'
              : 'bg-emerald-50/80 border-emerald-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <span className="text-base">{currentFood.icon}</span>
              <span>Digestion of {currentFood.name} Here:</span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border bg-white ${
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

          <div className="space-y-1 text-slate-700 pl-6">
            <p className="leading-relaxed">
              <strong className="text-slate-900">Action:</strong> {foodDetails.chemicalAction}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] pt-1">
              <span>
                <strong className="text-slate-900">Enzyme:</strong> {foodDetails.enzyme}
              </span>
              <span>
                <strong className="text-slate-900">Environment:</strong> {foodDetails.phNote}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 italic pt-1">
              💡 {foodDetails.igcseTip}
            </p>
          </div>
        </div>
      )}

      {/* pH & Secretions Quick Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
        <div>
          <div className="flex items-center gap-1.5 font-semibold text-slate-700">
            <Activity className="w-4 h-4 text-rose-500" />
            <span>Optimum pH Environment:</span>
          </div>
          <p className="mt-1 font-mono font-medium text-slate-900 pl-5.5">
            {organ.optimumPh}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 font-semibold text-slate-700">
            <Droplets className="w-4 h-4 text-cyan-600" />
            <span>Secretions / Fluids:</span>
          </div>
          <p className="mt-1 text-slate-900 pl-5.5 font-medium">
            {organ.secretions.join(', ')}
          </p>
        </div>
      </div>

      {/* Mechanical vs Chemical Digestion Split */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Mechanical Digestion */}
        <div className="p-4 rounded-xl border border-amber-200/60 bg-amber-50/40">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>Physical / Mechanical</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2">
            {organ.mechanicalDigestion.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chemical Digestion */}
        <div className="p-4 rounded-xl border border-blue-200/60 bg-blue-50/40">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-blue-800 mb-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Chemical & Enzymes</span>
          </div>
          <ul className="text-xs text-slate-700 space-y-2">
            {organ.chemicalDigestion.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* IGCSE Syllabus Key Points */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          IGCSE 0610 Syllabus Essentials
        </h3>
        <div className="space-y-1.5">
          {organ.igcseKeyPoints.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Examiner Tip & Common Mistake Banner */}
      <div className="space-y-2.5 pt-2 border-t border-slate-100">
        <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs">
          <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Examiner Top Tip (0610 Exam Mark Scheme)</span>
          </div>
          <p className="text-emerald-800 leading-relaxed pl-5.5">
            {organ.examinerTip}
          </p>
        </div>

        <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl text-xs">
          <div className="flex items-center gap-1.5 font-bold text-rose-900 mb-1">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Avoid This Common Student Mistake</span>
          </div>
          <p className="text-rose-800 leading-relaxed pl-5.5">
            {organ.commonMistake}
          </p>
        </div>
      </div>
    </div>
  );
};
