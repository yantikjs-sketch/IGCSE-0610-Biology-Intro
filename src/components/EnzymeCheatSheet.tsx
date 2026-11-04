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
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                IGCSE 0610: Digestive Enzyme Master Cheat Sheet
              </h3>
              <p className="text-xs text-slate-500">
                Optimal pH, Secretion Locations, Substrates & Chemical Products
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Close Cheat Sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="p-4 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search enzyme, substrate, or organ (e.g. Pepsin, Stomach, Lipids)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
            {(['All', 'Carbohydrase', 'Protease', 'Lipase'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTypeFilter(t)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
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
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEnzymes.map((enz) => {
              const isAcidic = enz.optimumPh < 4;
              const isAlkaline = enz.optimumPh > 7.3;

              return (
                <div
                  key={enz.name}
                  className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-purple-300 transition-all shadow-xs"
                >
                  <div className="space-y-2.5">
                    {/* Top Row: Name & pH Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">
                          {enz.type}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          {enz.name}
                        </h4>
                      </div>

                      <div className="text-right">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                            isAcidic
                              ? 'bg-rose-100 text-rose-800 border border-rose-200'
                              : isAlkaline
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          }`}
                        >
                          Opt. pH ~{enz.optimumPh}
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">
                          {isAcidic ? 'Strongly Acidic' : isAlkaline ? 'Alkaline' : 'Neutral'}
                        </span>
                      </div>
                    </div>

                    {/* Site of Action & Production */}
                    <div className="grid grid-cols-2 gap-2 text-xs p-2.5 bg-white rounded-lg border border-slate-100">
                      <div>
                        <span className="text-[10px] font-semibold text-slate-400 block uppercase">
                          Produced By:
                        </span>
                        <strong className="text-slate-800 text-[11px]">
                          {enz.producedBy.join(', ')}
                        </strong>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-slate-400 block uppercase">
                          Location of Action:
                        </span>
                        <strong className="text-purple-700 text-[11px]">
                          {enz.secretedInto.join(', ')}
                        </strong>
                      </div>
                    </div>

                    {/* Substrate to Products Reaction */}
                    <div className="text-xs p-2.5 bg-purple-50/50 rounded-lg border border-purple-100">
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="font-semibold text-slate-700">Substrate:</span>
                        <span className="text-slate-900 font-bold">{enz.substrate}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[11px] mt-1">
                        <span className="font-semibold text-purple-700">Product(s):</span>
                        <span className="text-emerald-700 font-bold">{enz.products}</span>
                      </div>
                    </div>

                    {/* IGCSE Syllabus Note */}
                    <p className="text-[11px] text-slate-600 leading-relaxed italic">
                      📌 {enz.igcseSummary}
                    </p>
                  </div>

                  {/* Action: Test in Sandbox */}
                  {onSelectForSandbox && (
                    <div className="pt-3 mt-3 border-t border-slate-200 flex justify-end">
                      <button
                        onClick={() => {
                          onSelectForSandbox(enz.name, enz.optimumPh, getSubstrateCategory(enz));
                          onClose();
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-purple-700 hover:text-white bg-purple-100/70 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>Test in Sandbox</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Memory Mnemonic Card */}
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2 text-xs text-amber-950">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Cambridge IGCSE 0610 Enzyme Memory Mnemonics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-amber-900 text-[11px] leading-relaxed">
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
