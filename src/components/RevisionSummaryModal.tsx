import React from 'react';
import { X, Printer, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { ORGANS, ENZYMES, STAGES } from '../data/digestiveData';

interface RevisionSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RevisionSummaryModal: React.FC<RevisionSummaryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600 text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Cambridge IGCSE 0610: Digestive System Revision Sheet
              </h3>
              <p className="text-xs text-slate-500">
                Core & Extended Syllabus Summary · Topic 7 Human Nutrition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Print Notes</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          {/* 1. The 5 Core Syllabus Definitions */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b pb-1 mb-3">
              1. The Five Stages of Food Processing
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {STAGES.map((st) => (
                <div key={st.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block text-xs mb-0.5">
                    {st.name}
                  </span>
                  <p className="text-slate-700 leading-relaxed mb-1">{st.definition}</p>
                  <p className="text-[11px] text-blue-700 font-medium">
                    📌 <strong>Exam Note:</strong> {st.igcseNote}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Enzymes Summary Table */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b pb-1 mb-3">
              2. Digestive Enzymes Master Matrix
            </h4>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="p-2.5">Enzyme</th>
                    <th className="p-2.5">Produced By</th>
                    <th className="p-2.5">Site of Action</th>
                    <th className="p-2.5">Substrate</th>
                    <th className="p-2.5">Product(s)</th>
                    <th className="p-2.5">Opt. pH</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
                  {ENZYMES.map((e) => (
                    <tr key={e.name} className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold font-sans text-slate-900">{e.name}</td>
                      <td className="p-2.5 font-sans text-slate-700">{e.producedBy.join(', ')}</td>
                      <td className="p-2.5 font-sans text-slate-700">{e.secretedInto.join(', ')}</td>
                      <td className="p-2.5 font-sans text-slate-700">{e.substrate}</td>
                      <td className="p-2.5 font-sans text-emerald-700 font-medium">{e.products}</td>
                      <td className="p-2.5 font-bold text-blue-700">{e.optimumPh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Human Teeth Types & Structure Summary */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b pb-1 mb-3">
              3. Human Teeth & Structure (Topic 7.2)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <span className="font-bold text-slate-900 text-xs block">Internal Tooth Structure:</span>
                <p>• <strong>Enamel:</strong> Hardest non-living mineralised layer (calcium salts). Protects crown against wear and acid.</p>
                <p>• <strong>Dentine:</strong> Bone-like living layer with tubules. Softer than enamel; decays much faster.</p>
                <p>• <strong>Pulp Cavity:</strong> Living core with blood vessels (deliver O2 & glucose) and nerve endings (sensory & pain warnings).</p>
                <p>• <strong>Cementum:</strong> Bone-like layer covering root, attaching to periodontal fibres.</p>
                <p>• <strong>Periodontal Ligament:</strong> Shock-absorbing collagen fibres anchoring tooth root into jawbone socket.</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <span className="font-bold text-slate-900 text-xs block">The 4 Tooth Types (Adult Total: 32):</span>
                <p>• <strong>Incisors (8):</strong> Chisel-shaped with sharp edge for biting and cutting pieces of food.</p>
                <p>• <strong>Canines (4):</strong> Pointed cone shape for gripping and tearing tough food.</p>
                <p>• <strong>Premolars (8):</strong> Two cusps (bicuspid) for chewing, crushing, and tearing.</p>
                <p>• <strong>Molars (12):</strong> Broad flat crowns with 4–5 cusps and 2–3 roots for heavy grinding and crushing into a paste.</p>
                <p>• <strong>Tooth Decay:</strong> Sugar + Bacteria in plaque → Acid → Dissolves enamel → Spreads through dentine → Reaches pulp nerves (toothache).</p>
              </div>
            </div>
          </div>

          {/* 4. Key High-Yield Exam Traps */}
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
              <Award className="w-4 h-4 text-amber-600" />
              <span>4. High-Yield Cambridge 0610 Exam Points</span>
            </div>
            <ul className="space-y-1.5 pl-4 list-disc text-amber-900 leading-relaxed">
              <li>
                <strong>Bile Functions:</strong> 1. Neutralises acidic chyme from the stomach to create an alkaline pH for pancreatic enzymes. 2. Emulsifies fats into small droplets (physical digestion), increasing the surface area for lipase action.
              </li>
              <li>
                <strong>Bile has NO enzymes:</strong> Emulsification is mechanical, not chemical!
              </li>
              <li>
                <strong>Stomach Hydrochloric Acid (HCl):</strong> 1. Kills bacteria/pathogens in food. 2. Provides optimum acidic pH (~2) for pepsin.
              </li>
              <li>
                <strong>Villi Adaptations:</strong> 1. Large surface area (microvilli). 2. Single-cell thin epithelium (short diffusion pathway). 3. Dense capillary network (steep concentration gradient). 4. Lacteals (absorb fatty acids & glycerol).
              </li>
              <li>
                <strong>Egestion vs Excretion:</strong> Egestion is removing undigested food as faeces through the anus. Excretion is removing cellular metabolic wastes (urea, carbon dioxide).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
