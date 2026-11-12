import React, { useState } from 'react';
import { X, Printer, BookOpen, Award, CheckCircle2, Sparkles, Layers, Droplets, Zap } from 'lucide-react';
import { ORGANS, ENZYMES, STAGES } from '../data/digestiveData';
import {
  MRS_GREN,
  FIVE_KINGDOMS,
  CELL_ORGANELLES,
  MOVEMENT_CONCEPTS,
  BIOLOGICAL_MOLECULES,
  FOOD_TESTS,
} from '../data/semester1Data';

interface RevisionSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RevisionSummaryModal: React.FC<RevisionSummaryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [modalTab, setModalTab] = useState<'sem1' | 'digestion'>('sem1');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white font-extrabold text-sm">
              0610
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  Cambridge IGCSE Biology (0610)
                </h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Year 9 Semester 1 Revision
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Official syllabus summaries, definitions, equations, and high-yield examiner mark schemes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Tab switch inside modal */}
            <div className="flex bg-slate-200/80 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setModalTab('sem1')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  modalTab === 'sem1'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📚 Ch 1–5 Revision
              </button>
              <button
                onClick={() => setModalTab('digestion')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  modalTab === 'digestion'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🥪 Ch 7 Digestion
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {modalTab === 'sem1' ? (
            <div className="space-y-8">
              {/* Ch 1: Characteristics of Life */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <h4 className="text-base font-extrabold text-slate-900">
                    Chapter 1: Characteristics of Living Things & Classification
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <span className="font-bold text-slate-900 text-sm block">MRS GREN Syllabus Definitions:</span>
                    <ul className="space-y-1.5 list-disc pl-4 text-xs sm:text-sm text-slate-700">
                      {MRS_GREN.map((item) => (
                        <li key={item.id}>
                          <strong>{item.name} ({item.letter}):</strong> {item.syllabusDefinition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
                    <span className="font-bold text-slate-900 text-sm block">Binomial System & The 5 Kingdoms:</span>
                    <p>
                      • <strong>Binomial System:</strong> Two-word Latin scientific name. First = <em>Genus</em> (capitalized), Second = <em>species</em> (lowercase). Handwritten names MUST be <u>underlined</u>.
                    </p>
                    <p>
                      • <strong>Animals:</strong> Multicellular, no cell wall, no chloroplasts, heterotrophic, store glycogen.
                    </p>
                    <p>
                      • <strong>Plants:</strong> Multicellular, cellulose cell wall, chloroplasts, autotrophic (photosynthesis), store starch.
                    </p>
                    <p>
                      • <strong>Fungi:</strong> Chitin cell wall, saprotrophic nutrition (extracellular secretion), hyphae / mycelium.
                    </p>
                    <p>
                      • <strong>Bacteria (Prokaryotes):</strong> Unicellular, peptidoglycan wall, NO nucleus (circular loop of DNA), plasmids.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ch 2: Cell Structure & Magnification */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Layers className="w-5 h-5 text-emerald-600" />
                  <h4 className="text-base font-extrabold text-slate-900">
                    Chapter 2: Cell Structure, Organelles & Magnification Formula
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-1.5 text-xs sm:text-sm">
                    <strong className="text-emerald-950 font-bold block text-sm">Plant vs Animal Cells:</strong>
                    <p>• <strong>Plant ONLY:</strong> Cellulose cell wall, chloroplasts (chlorophyll), permanent large central vacuole.</p>
                    <p>• <strong>Animal cells:</strong> NO cell wall, irregular flexible shape, NO chloroplasts, small temporary vacuoles only.</p>
                    <p>• <strong>Both have:</strong> Nucleus, cytoplasm, cell membrane (partially permeable), mitochondria, ribosomes.</p>
                  </div>

                  <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-1.5 text-xs sm:text-sm">
                    <strong className="text-blue-950 font-bold block text-sm">Key Organelle Functions:</strong>
                    <p>• <strong>Nucleus:</strong> Stores genetic information (DNA), controls cell activities.</p>
                    <p>• <strong>Mitochondria:</strong> Site of aerobic respiration (releases ATP energy).</p>
                    <p>• <strong>Ribosomes:</strong> Site of protein synthesis.</p>
                    <p>• <strong>Cell Membrane:</strong> Partially permeable boundary controlling entry/exit.</p>
                  </div>

                  <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-1.5 text-xs sm:text-sm">
                    <strong className="text-indigo-950 font-bold block text-sm">Magnification Formula:</strong>
                    <div className="p-2 bg-white rounded-xl border border-indigo-200 font-mono text-center font-bold text-indigo-900">
                      M = I ÷ A &nbsp;|&nbsp; I = A × M &nbsp;|&nbsp; A = I ÷ M
                    </div>
                    <p className="text-slate-600 text-xs">
                      Always convert measurements into the SAME units before dividing! (1 mm = 1000 μm).
                    </p>
                  </div>
                </div>
              </div>

              {/* Ch 3: Movement of Substances */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  <h4 className="text-base font-extrabold text-slate-900">
                    Chapter 3: Diffusion, Osmosis & Active Transport
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1 text-xs sm:text-sm">
                    <strong className="text-slate-900 font-bold block">1. Diffusion (Passive):</strong>
                    <p>Net movement of particles from high to low concentration down a concentration gradient. No energy required.</p>
                    <p className="text-slate-500 text-xs">Examples: Gas exchange in alveoli; CO2 entering stomata.</p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1 text-xs sm:text-sm">
                    <strong className="text-slate-900 font-bold block">2. Osmosis (Passive):</strong>
                    <p>Net movement of water molecules from higher water potential to lower water potential across a partially permeable membrane.</p>
                    <p className="text-slate-500 text-xs">In pure water: Plant cell becomes <strong>turgid</strong>; Animal RBC <strong>bursts (lysis)</strong>.</p>
                    <p className="text-slate-500 text-xs">In concentrated salt: Plant cell <strong>plasmolyses</strong>; Animal RBC <strong>shrivels (crenation)</strong>.</p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1 text-xs sm:text-sm">
                    <strong className="text-slate-900 font-bold block">3. Active Transport (Active):</strong>
                    <p>Movement of particles through membrane proteins against a concentration gradient (low to high) using energy from respiration (ATP).</p>
                    <p className="text-slate-500 text-xs">Examples: Root hair cells absorbing mineral ions; glucose uptake in villi.</p>
                  </div>
                </div>
              </div>

              {/* Ch 4: Biological Molecules & 5 Food Tests */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <h4 className="text-base font-extrabold text-slate-900">
                    Chapter 4: Biological Molecules & The 5 Standard Food Tests
                  </h4>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        <th className="p-2.5">Nutrient</th>
                        <th className="p-2.5">Reagent Used</th>
                        <th className="p-2.5">Heating?</th>
                        <th className="p-2.5">Initial / Neg. Color</th>
                        <th className="p-2.5">Positive Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      {FOOD_TESTS.map((ft) => (
                        <tr key={ft.nutrient} className="hover:bg-slate-50">
                          <td className="p-2.5 font-bold text-slate-900">{ft.nutrient}</td>
                          <td className="p-2.5">{ft.reagent}</td>
                          <td className="p-2.5">{ft.needsHeat ? '🔥 Boiling water bath (80–100°C)' : '❄️ Room temperature'}</td>
                          <td className="p-2.5 text-slate-500">{ft.negativeColor}</td>
                          <td className="p-2.5 font-bold text-purple-800">{ft.positiveColor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ch 5: Enzymes */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <h4 className="text-base font-extrabold text-slate-900">
                    Chapter 5: Enzymes & Reaction Kinetics
                  </h4>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2 text-xs sm:text-sm text-amber-950">
                  <p>
                    • <strong>Definition:</strong> Biological catalysts (globular proteins) that speed up the rate of chemical reactions without being changed or used up in the reaction.
                  </p>
                  <p>
                    • <strong>Lock and Key Theory:</strong> The enzyme active site has a specific complementary shape to its substrate. Substrate binds to active site forming an Enzyme-Substrate (ES) complex.
                  </p>
                  <p>
                    • <strong>Effect of Low Temperature:</strong> Molecules have low kinetic energy → slow movement → few collisions → low rate of reaction. Note: The enzyme is NOT denatured!
                  </p>
                  <p>
                    • <strong>Effect of High Temperature (&gt;45°C) & Extreme pH:</strong> High thermal vibration or excess H+/OH- ions break hydrogen and ionic bonds holding the 3D protein structure. The active site shape permanently changes (<strong>denatured</strong>) so the substrate can no longer fit.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* 1. The 5 Core Syllabus Definitions */}
              <div>
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b pb-1 mb-3">
                  1. The Five Stages of Food Processing (Topic 7.1)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {STAGES.map((st) => (
                    <div key={st.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-0.5">
                        {st.name}
                      </span>
                      <p className="text-slate-700 leading-relaxed mb-1">{st.definition}</p>
                      <p className="text-xs text-blue-700 font-medium">
                        📌 <strong>Exam Note:</strong> {st.igcseNote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Enzymes Summary Table */}
              <div>
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b pb-1 mb-3">
                  2. Digestive Enzymes Master Matrix
                </h4>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
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
                    <tbody className="divide-y divide-slate-200 font-mono text-xs">
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
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b pb-1 mb-3">
                  3. Human Teeth & Structure (Topic 7.2)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm block">Internal Tooth Structure:</span>
                    <p>• <strong>Enamel:</strong> Hardest non-living mineralised layer (calcium salts). Protects crown against wear and acid.</p>
                    <p>• <strong>Dentine:</strong> Bone-like living layer with tubules. Softer than enamel; decays much faster.</p>
                    <p>• <strong>Pulp Cavity:</strong> Living core with blood vessels (deliver O2 & glucose) and nerve endings (sensory & pain warnings).</p>
                    <p>• <strong>Cementum:</strong> Bone-like layer covering root, attaching to periodontal fibres.</p>
                    <p>• <strong>Periodontal Ligament:</strong> Shock-absorbing collagen fibres anchoring tooth root into jawbone socket.</p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm block">The 4 Tooth Types (Adult Total: 32):</span>
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
          )}
        </div>
      </div>
    </div>
  );
};
