import React, { useState } from 'react';
import { ENZYMES } from '../data/digestiveData';
import { EnzymeInfo } from '../types/digestive';
import { X, Search, BookOpen, Award, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface EnzymeCheatSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectForSandbox?: (enzymeName: string, optimumPh: number, substrateType: 'starch' | 'protein' | 'lipid') => void;
}

export const EnzymeCheatSheet: React.FC<EnzymeCheatSheetProps> = ({
  isOpen,
  onClose,
  onSelectForSandbox,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'All' | 'Carbohydrase' | 'Protease' | 'Lipase'>('All');

  if (!isOpen) return null;

  const filteredEnzymes = ENZYMES.filter((enz) => {
    const matchesFilter = selectedTypeFilter === 'All' || enz.type === selectedTypeFilter;
    const matchesSearch =
      enz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enz.substrate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enz.products.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enz.secretedInto.some((loc) => loc.toLowerCase().includes(searchTerm.toLowerCase())) ||
      enz.producedBy.some((prod) => prod.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getSubstrateCategory = (enz: EnzymeInfo): 'starch' | 'protein' | 'lipid' => {
    if (enz.type === 'Carbohydrase') return 'starch';
    if (enz.type === 'Protease') return 'protein';
    return 'lipid';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                IGCSE 0610: Digestive Enzyme Master Cheat Sheet
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Optimal pH, Secretion Locations, Substrates & Chemical Products
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Close Cheat Sheet"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="p-4 sm:p-5 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search enzyme, substrate, or organ (e.g. Pepsin, Stomach, Lipids)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 text-sm sm:text-base bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-sm sm:text-base font-bold">
            {(['All', 'Carbohydrase', 'Protease', 'Lipase'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTypeFilter(t)}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  selectedTypeFilter === t
                    ? 'bg-white text-purple-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t === 'All' ? 'All Enzymes' : `${t}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body: Master List of Enzymes */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEnzymes.map((enz) => {
              const isAcidic = enz.optimumPh < 4;
              const isAlkaline = enz.optimumPh > 7.3;

              return (
                <div
                  key={enz.name}
                  className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-300 transition-all shadow-xs space-y-4"
                >
                  <div className="space-y-3.5">
                    {/* Top Row: Name & pH Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-purple-700 block mb-0.5">
                          {enz.type}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900">
                          {enz.name}
                        </h4>
                      </div>

                      <div className="text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-bold ${
                            isAcidic
                              ? 'bg-rose-100 text-rose-800 border border-rose-200'
                              : isAlkaline
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          }`}
                        >
                          Opt. pH ~{enz.optimumPh}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-500 block mt-0.5 font-medium">
                          {isAcidic ? 'Strongly Acidic' : isAlkaline ? 'Alkaline' : 'Neutral'}
                        </span>
                      </div>
                    </div>

                    {/* Site of Action & Production */}
                    <div className="grid grid-cols-2 gap-2 text-sm p-3.5 bg-white rounded-xl border border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-0.5">
                          Produced By:
                        </span>
                        <strong className="text-slate-900 text-sm sm:text-base font-bold block">
                          {enz.producedBy.join(', ')}
                        </strong>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-0.5">
                          Location of Action:
                        </span>
                        <strong className="text-purple-700 text-sm sm:text-base font-bold block">
                          {enz.secretedInto.join(', ')}
                        </strong>
                      </div>
                    </div>

                    {/* Substrate to Products Reaction */}
                    <div className="p-3.5 bg-purple-50/50 rounded-xl border border-purple-100 space-y-1">
                      <div className="flex items-center gap-2 font-mono text-sm sm:text-base">
                        <span className="font-semibold text-slate-700">Substrate:</span>
                        <span className="text-slate-900 font-bold">{enz.substrate}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-sm sm:text-base">
                        <span className="font-semibold text-purple-700">Product(s):</span>
                        <span className="text-emerald-700 font-bold">{enz.products}</span>
                      </div>
                    </div>

                    {/* IGCSE Syllabus Note */}
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                      📌 {enz.igcseSummary}
                    </p>
                  </div>

                  {/* Action: Test in Sandbox */}
                  {onSelectForSandbox && (
                    <div className="pt-3 border-t border-slate-200 flex justify-end">
                      <button
                        onClick={() => {
                          onSelectForSandbox(enz.name, enz.optimumPh, getSubstrateCategory(enz));
                          onClose();
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-purple-700 hover:text-white bg-purple-100/70 hover:bg-purple-600 rounded-xl transition-colors cursor-pointer shadow-2xs"
                      >
                        <span>Test in Sandbox</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Memory Mnemonic Card */}
          <div className="p-5 sm:p-6 bg-amber-50/80 border border-amber-200 rounded-2xl space-y-3 text-amber-950 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-base sm:text-lg text-amber-950">
              <Award className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Cambridge IGCSE 0610 Enzyme Memory Mnemonics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-amber-900 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>• Pancreas produces &apos;ATL&apos;:</strong> <strong>A</strong>mylase, <strong>T</strong>rypsin (protease), and <strong>L</strong>ipase. All secreted into the duodenum where conditions are neutralised to alkaline pH 7.5–8.5.
              </p>
              <p>
                <strong>• Pepsin vs Trypsin:</strong> Both digest proteins! But <strong>Pepsin</strong> works in the stomach at acidic pH ~2, while <strong>Trypsin</strong> works in the duodenum at alkaline pH ~8.
              </p>
              <p>
                <strong>• Amylase vs Maltase:</strong> <strong>Amylase</strong> breaks starch into maltose. Then <strong>Maltase</strong> (bound on the small intestine microvilli) breaks maltose into glucose.
              </p>
              <p>
                <strong>• Bile is NOT an enzyme:</strong> Bile emulsifies fats into smaller droplets (physical digestion), increasing surface area for lipase to act upon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
