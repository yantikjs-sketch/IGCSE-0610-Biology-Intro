import React from 'react';
import { MyeStimulusId } from '../types/mye';

// 3D Biological Assets
import plantCell3dImg from '../assets/images/plant_cell_3d_1794529010340.jpg';
import animalCell3dImg from '../assets/images/animal_cell_3d_1794529009968.jpg';
import bacterialCell3dImg from '../assets/images/bacterial_cell_3d_1794529011421.jpg';
import dnaStructure3dImg from '../assets/images/dna_structure_3d_1794529011821.jpg';
import ciliatedCell3dImg from '../assets/images/ciliated_cell_3d_1794529012493.jpg';
import rootHairCell3dImg from '../assets/images/root_hair_cell_3d_1794529013673.jpg';
import xylemVessel3dImg from '../assets/images/xylem_vessel_3d_1794529013713.jpg';
import phloemCell3dImg from '../assets/images/phloem_cell_3d_1794529031181.jpg';
import palisadeCell3dImg from '../assets/images/palisade_cell_3d_1794529016674.jpg';
import guardCells3dImg from '../assets/images/guard_cells_3d_1794529016207.jpg';
import redBloodCell3dImg from '../assets/images/red_blood_cell_3d_1794529016865.jpg';
import motorNeurone3dImg from '../assets/images/motor_neurone_3d_1794529018146.jpg';
import spermCell3dImg from '../assets/images/sperm_cell_3d_1794529017935.jpg';
import eggCell3dImg from '../assets/images/egg_cell_3d_1794529019038.jpg';
import muscleCell3dImg from '../assets/images/muscle_cell_3d_1794529018990.jpg';
import insect3dRealImg from '../assets/images/insect_3d_real_1794531116199.jpg';
import crustacean3dRealImg from '../assets/images/crustacean_3d_real_1794531116686.jpg';
import arachnid3dRealImg from '../assets/images/arachnid_3d_real_1794531116989.jpg';
import myriapod3dRealImg from '../assets/images/myriapod_3d_real_1794531117148.jpg';
import annelid3dRealImg from '../assets/images/annelid_3d_real_1794531118541.jpg';
import nematode3dRealImg from '../assets/images/nematode_3d_real_1794531118491.jpg';
import mollusc3dRealImg from '../assets/images/mollusc_3d_real_1794531119009.jpg';
import fish3dRealImg from '../assets/images/fish_3d_real_1794531119531.jpg';
import amphibian3dRealImg from '../assets/images/amphibian_3d_real_1794531120244.jpg';
import reptile3dRealImg from '../assets/images/reptile_3d_real_1794531121504.jpg';
import bird3dRealImg from '../assets/images/bird_3d_real_1794531121933.jpg';
import mammal3dRealImg from '../assets/images/mammal_3d_real_1794531121762.jpg';
import rbcHypotonicImg from '../assets/images/rbc_hypotonic_lysis_3d_1794531267880.jpg';
import rbcIsotonicImg from '../assets/images/rbc_isotonic_normal_3d_1794531268591.jpg';
import rbcHypertonicImg from '../assets/images/rbc_hypertonic_crenated_3d_1794531268422.jpg';
import palisadeHypotonicImg from '../assets/images/palisade_hypotonic_turgid_3d_1794531269105.jpg';
import palisadeIsotonicImg from '../assets/images/palisade_isotonic_flaccid_3d_1794531268648.jpg';
import palisadeHypertonicImg from '../assets/images/palisade_hypertonic_plasmolysed_3d_1794531269245.jpg';
import digestiveAnatomyImg from '../assets/images/human_digestive_anatomy_1793751059607.jpg';
import peristalsisWaveImg from '../assets/images/peristalsis_3d_wave_1793753327934.jpg';
import villusCutawayImg from '../assets/images/villus_3d_simplified_1793753656924.jpg';

const IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  img_plant_cell: { src: plantCell3dImg, alt: '3D cutaway diagram of a plant cell' },
  img_animal_cell: { src: animalCell3dImg, alt: '3D cutaway diagram of an animal cell' },
  img_bacterial_cell: { src: bacterialCell3dImg, alt: '3D cutaway diagram of a bacterial cell' },
  img_dna_helix: { src: dnaStructure3dImg, alt: '3D model of a DNA double helix molecule' },
  img_ciliated_cell: { src: ciliatedCell3dImg, alt: '3D diagram of ciliated epithelial cells with goblet cell' },
  img_root_hair_cell: { src: rootHairCell3dImg, alt: '3D cutaway of a root hair cell in soil' },
  img_xylem_vessel: { src: xylemVessel3dImg, alt: '3D cutaway of a lignified xylem vessel' },
  img_phloem_cell: { src: phloemCell3dImg, alt: '3D cutaway of phloem sieve tube and companion cell' },
  img_palisade_cell: { src: palisadeCell3dImg, alt: '3D cutaway of a palisade mesophyll cell' },
  img_guard_cells: { src: guardCells3dImg, alt: '3D diagram of paired guard cells around a stomatal pore' },
  img_red_blood_cell: { src: redBloodCell3dImg, alt: '3D model of biconcave red blood cells' },
  img_motor_neurone: { src: motorNeurone3dImg, alt: '3D model of a myelinated motor neurone' },
  img_sperm_cell: { src: spermCell3dImg, alt: '3D cutaway of a human sperm cell' },
  img_egg_cell: { src: eggCell3dImg, alt: '3D cutaway of a human egg cell (ovum)' },
  img_muscle_cell: { src: muscleCell3dImg, alt: '3D cutaway of skeletal muscle fibres' },
  img_insect: { src: insect3dRealImg, alt: '3D real wildlife render of an insect (honeybee)' },
  img_crustacean: { src: crustacean3dRealImg, alt: '3D real wildlife render of crustaceans (lobster and crab)' },
  img_arachnid: { src: arachnid3dRealImg, alt: '3D real wildlife render of an arachnid (spider)' },
  img_myriapod: { src: myriapod3dRealImg, alt: '3D real wildlife render of a myriapod (centipede)' },
  img_annelid: { src: annelid3dRealImg, alt: '3D real wildlife render of an annelid (earthworm)' },
  img_nematode: { src: nematode3dRealImg, alt: '3D scientific render of a nematode (roundworm)' },
  img_mollusc: { src: mollusc3dRealImg, alt: '3D real wildlife render of a mollusc (garden snail)' },
  img_fish: { src: fish3dRealImg, alt: '3D real wildlife render of a fish (rainbow trout)' },
  img_amphibian: { src: amphibian3dRealImg, alt: '3D real wildlife render of an amphibian (tree frog)' },
  img_reptile: { src: reptile3dRealImg, alt: '3D real wildlife render of a reptile (green iguana)' },
  img_bird: { src: bird3dRealImg, alt: '3D real wildlife render of a bird (golden eagle)' },
  img_mammal: { src: mammal3dRealImg, alt: '3D real wildlife render of a mammal (red fox)' },
  img_rbc_hypotonic: { src: rbcHypotonicImg, alt: '3D model of red blood cell bursting (lysis) in hypotonic water' },
  img_rbc_isotonic: { src: rbcIsotonicImg, alt: '3D model of normal biconcave red blood cell in isotonic solution' },
  img_rbc_hypertonic: { src: rbcHypertonicImg, alt: '3D model of crenated shrivelled red blood cell in hypertonic solution' },
  img_palisade_hypotonic: { src: palisadeHypotonicImg, alt: '3D model of turgid palisade mesophyll cell in hypotonic water' },
  img_palisade_isotonic: { src: palisadeIsotonicImg, alt: '3D model of flaccid palisade mesophyll cell in isotonic solution' },
  img_palisade_hypertonic: { src: palisadeHypertonicImg, alt: '3D model of plasmolysed palisade mesophyll cell in hypertonic solution' },
  img_digestive_anatomy: { src: digestiveAnatomyImg, alt: 'Human digestive system anatomical diagram' },
  img_peristalsis_wave: { src: peristalsisWaveImg, alt: '3D diagram of peristalsis muscular wave in the oesophagus' },
  img_villus_cutaway: { src: villusCutawayImg, alt: '3D cutaway diagram of an intestinal villus' },
};

interface MyeStimulusVisualProps {
  id: MyeStimulusId;
  caption?: string;
}

export const MyeStimulusVisual: React.FC<MyeStimulusVisualProps> = ({ id, caption }) => {
  const imageEntry = IMAGE_MAP[id];

  if (imageEntry) {
    return (
      <figure className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm">
        <div className="flex justify-center bg-slate-950">
          <img
            src={imageEntry.src}
            alt={imageEntry.alt}
            referrerPolicy="no-referrer"
            className="w-full max-w-[560px] max-h-[300px] object-contain"
          />
        </div>
        {caption && (
          <figcaption className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 text-xs sm:text-sm text-cyan-200 font-semibold text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="rounded-2xl overflow-hidden bg-white border border-slate-300 shadow-xs">
      <div className="p-3 sm:p-4 flex justify-center bg-white">
        {renderSvgStimulus(id)}
      </div>
      {caption && (
        <figcaption className="px-4 py-2 bg-slate-100 border-t border-slate-200 text-xs sm:text-sm text-slate-700 font-semibold text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

function renderSvgStimulus(id: MyeStimulusId) {
  switch (id) {
    case 'svg_dichotomous_leaves':
      return (
        <svg viewBox="0 0 560 210" className="w-full max-w-[560px] h-auto">
          <text x="280" y="18" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            Four Unknown Leaves (A, B, C, D) — Dichotomous Key Specimen Sheet
          </text>
          {/* Leaf A: Compound pinnate */}
          <g transform="translate(20,30)">
            <rect width="120" height="150" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
            <text x="60" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">Leaf A</text>
            <line x1="60" y1="35" x2="60" y2="128" stroke="#15803d" strokeWidth="2.5" />
            {[45, 65, 85, 105].map((y, idx) => (
              <g key={idx}>
                <ellipse cx="42" cy={y} rx="14" ry="7" fill="#22c55e" stroke="#166534" transform={`rotate(-18 42 ${y})`} />
                <ellipse cx="78" cy={y} rx="14" ry="7" fill="#22c55e" stroke="#166534" transform={`rotate(18 78 ${y})`} />
              </g>
            ))}
            <text x="60" y="142" textAnchor="middle" fontSize="10" fill="#475569">Divided into leaflets</text>
          </g>
          {/* Leaf B: Simple oval, smooth margin, net veins */}
          <g transform="translate(155,30)">
            <rect width="120" height="150" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
            <text x="60" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">Leaf B</text>
            <path d="M60 32 C88 45, 92 95, 60 116 C28 95, 32 45, 60 32 Z" fill="#4ade80" stroke="#166534" strokeWidth="2" />
            <line x1="60" y1="34" x2="60" y2="130" stroke="#166534" strokeWidth="2" />
            <path d="M60 55 L76 46 M60 72 L80 62 M60 90 L76 80 M60 55 L44 46 M60 72 L40 62 M60 90 L44 80" stroke="#166534" strokeWidth="1.2" />
            <text x="60" y="142" textAnchor="middle" fontSize="10" fill="#475569">Smooth edge, net veins</text>
          </g>
          {/* Leaf C: Simple serrated edge, net veins */}
          <g transform="translate(290,30)">
            <rect width="120" height="150" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
            <text x="60" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">Leaf C</text>
            <path
              d="M60 32 L68 44 L78 46 L76 58 L86 64 L80 76 L88 84 L76 96 L78 106 L60 116 L42 106 L44 96 L32 84 L40 76 L34 64 L44 58 L42 46 L52 44 Z"
              fill="#22c55e"
              stroke="#166534"
              strokeWidth="2"
            />
            <line x1="60" y1="35" x2="60" y2="130" stroke="#166534" strokeWidth="2" />
            <text x="60" y="142" textAnchor="middle" fontSize="10" fill="#475569">Toothed edge, net veins</text>
          </g>
          {/* Leaf D: Long narrow monocot leaf with parallel veins */}
          <g transform="translate(425,30)">
            <rect width="120" height="150" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
            <text x="60" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">Leaf D</text>
            <path d="M60 30 Q74 75, 68 125 L52 125 Q46 75, 60 30 Z" fill="#86efac" stroke="#15803d" strokeWidth="2" />
            <line x1="56" y1="45" x2="55" y2="122" stroke="#166534" strokeWidth="1" />
            <line x1="60" y1="34" x2="60" y2="128" stroke="#166534" strokeWidth="1.4" />
            <line x1="64" y1="45" x2="65" y2="122" stroke="#166534" strokeWidth="1" />
            <text x="60" y="142" textAnchor="middle" fontSize="10" fill="#475569">Parallel veins</text>
          </g>
        </svg>
      );

    case 'svg_magnification_ruler':
      return (
        <svg viewBox="0 0 540 200" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="180" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            Light Micrograph Drawing of a Chloroplast (Magnification = ×4000)
          </text>
          {/* Chloroplast */}
          <ellipse cx="270" cy="95" rx="120" ry="38" fill="#dcfce7" stroke="#15803d" strokeWidth="3" />
          <ellipse cx="270" cy="95" rx="112" ry="32" fill="none" stroke="#16a34a" strokeWidth="1.5" />
          {[200, 240, 280, 320, 345].map((cx, i) => (
            <g key={i}>
              <rect x={cx - 8} y="78" width="16" height="5" rx="2" fill="#166534" />
              <rect x={cx - 8} y="85" width="16" height="5" rx="2" fill="#166534" />
              <rect x={cx - 8} y="92" width="16" height="5" rx="2" fill="#166534" />
            </g>
          ))}
          {/* Ruler below */}
          <line x1="150" y1="150" x2="390" y2="150" stroke="#1d4ed8" strokeWidth="2.5" />
          <line x1="150" y1="142" x2="150" y2="158" stroke="#1d4ed8" strokeWidth="2.5" />
          <line x1="390" y1="142" x2="390" y2="158" stroke="#1d4ed8" strokeWidth="2.5" />
          <rect x="200" y="156" width="140" height="22" rx="6" fill="#dbeafe" />
          <text x="270" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a">
            Measured Length (I) = 32 mm
          </text>
        </svg>
      );

    case 'svg_visking_osmosis':
      return (
        <svg viewBox="0 0 540 215" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="195" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            Partially Permeable Visking Tubing Osmosis Apparatus (After 30 Minutes)
          </text>
          {/* Beaker */}
          <path d="M120 65 L120 185 L290 185 L290 65" fill="#e0f2fe" stroke="#334155" strokeWidth="3" />
          {/* Water level */}
          <line x1="122" y1="88" x2="288" y2="88" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
          {/* Capillary tube & Visking bag */}
          <rect x="198" y="42" width="14" height="72" fill="#fffbeb" stroke="#475569" strokeWidth="1.5" />
          <rect x="199" y="54" width="12" height="60" fill="#f59e0b" opacity="0.65" />
          <path d="M175 114 C168 145, 175 170, 205 170 C235 170, 242 145, 235 114 Z" fill="#fef3c7" stroke="#b45309" strokeWidth="2.5" />
          <text x="205" y="145" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">Concentrated</text>
          <text x="205" y="157" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">Sucrose Solution</text>
          {/* Initial vs Final markers */}
          <line x1="215" y1="88" x2="255" y2="88" stroke="#64748b" strokeWidth="1.5" />
          <text x="260" y="92" fontSize="10" fontWeight="bold" fill="#475569">Start level</text>
          <line x1="215" y1="54" x2="255" y2="54" stroke="#dc2626" strokeWidth="2" />
          <text x="260" y="58" fontSize="10" fontWeight="bold" fill="#dc2626">Final level (Rose!)</text>
          {/* Legend box */}
          <rect x="330" y="65" width="180" height="105" rx="8" fill="#ffffff" stroke="#cbd5e1" />
          <text x="342" y="86" fontSize="11" fontWeight="bold" fill="#0f172a">Setup Key:</text>
          <text x="342" y="106" fontSize="10.5" fill="#334155">• Beaker: Distilled Water</text>
          <text x="342" y="124" fontSize="10.5" fill="#334155">• Bag: 20% Sucrose Solution</text>
          <text x="342" y="142" fontSize="10.5" fill="#334155">• Bag membrane: Partially</text>
          <text x="350" y="156" fontSize="10.5" fill="#334155">permeable (H₂O passes)</text>
        </svg>
      );

    case 'svg_potato_osmosis_graph':
      return (
        <svg viewBox="0 0 540 225" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="205" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="275" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Percentage Change in Mass of Potato Cylinders in Sucrose Solutions
          </text>
          {/* Grid lines */}
          {[55, 85, 115, 145, 175].map((y, idx) => (
            <line key={idx} x1="90" y1={y} x2="490" y2={y} stroke={y === 115 ? '#0f172a' : '#e2e8f0'} strokeWidth={y === 115 ? '2' : '1'} />
          ))}
          <line x1="90" y1="45" x2="90" y2="185" stroke="#0f172a" strokeWidth="2" />
          {/* Y labels */}
          <text x="80" y="59" textAnchor="end" fontSize="10" fill="#334155">+20%</text>
          <text x="80" y="89" textAnchor="end" fontSize="10" fill="#334155">+10%</text>
          <text x="80" y="119" textAnchor="end" fontSize="10" fontWeight="bold" fill="#0f172a">0%</text>
          <text x="80" y="149" textAnchor="end" fontSize="10" fill="#334155">-10%</text>
          <text x="80" y="179" textAnchor="end" fontSize="10" fill="#334155">-20%</text>
          <text x="24" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a" transform="rotate(-90 24 120)">
            % Change in Mass
          </text>
          {/* X labels */}
          {[
            { x: 90, label: '0.0' },
            { x: 170, label: '0.2' },
            { x: 250, label: '0.4' },
            { x: 330, label: '0.6' },
            { x: 410, label: '0.8' },
            { x: 490, label: '1.0' },
          ].map((pt, i) => (
            <g key={i}>
              <line x1={pt.x} y1="115" x2={pt.x} y2="120" stroke="#0f172a" strokeWidth="1.5" />
              <text x={pt.x} y="198" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">{pt.label}</text>
            </g>
          ))}
          <text x="290" y="211" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
            Sucrose Concentration (mol / dm³)
          </text>
          {/* Curve: crosses 0% at x=250 (0.4 mol/dm3) */}
          <path d="M90 61 Q170 86, 250 115 T410 163 L490 175" fill="none" stroke="#2563eb" strokeWidth="3" />
          {[
            [90, 61],
            [170, 88],
            [250, 115],
            [330, 142],
            [410, 163],
            [490, 175],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="4.5" fill={idx === 2 ? '#dc2626' : '#2563eb'} stroke="#ffffff" strokeWidth="1.5" />
          ))}
        </svg>
      );

    case 'svg_osmosis_turgid_plasmolysed':
      return (
        <svg viewBox="0 0 540 205" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="185" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          {/* Cell X: Turgid */}
          <g transform="translate(45, 28)">
            <text x="90" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Plant Cell X</text>
            <rect x="20" y="26" width="140" height="120" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="5" />
            <rect x="25" y="31" width="130" height="110" rx="5" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <ellipse cx="90" cy="86" rx="50" ry="38" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" />
            <circle cx="42" cy="50" r="10" fill="#7e22ce" />
            <text x="90" y="164" textAnchor="middle" fontSize="10.5" fill="#334155">Vacuole swollen, membrane pressed to wall</text>
          </g>
          {/* Cell Y: Plasmolysed */}
          <g transform="translate(305, 28)">
            <text x="90" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">Plant Cell Y</text>
            <rect x="20" y="26" width="140" height="120" rx="8" fill="#f1f5f9" stroke="#15803d" strokeWidth="5" />
            <path d="M52 50 C85 45, 115 48, 128 60 C134 90, 130 112, 116 122 C85 126, 55 122, 48 106 C42 84, 46 62, 52 50 Z" fill="#bbf7d0" stroke="#dc2626" strokeWidth="2" />
            <ellipse cx="92" cy="90" rx="22" ry="18" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="62" cy="70" r="9" fill="#7e22ce" />
            <line x1="138" y1="86" x2="160" y2="86" stroke="#dc2626" strokeWidth="1.5" />
            <text x="163" y="90" fontSize="10" fontWeight="bold" fill="#dc2626">Gap Z</text>
            <text x="90" y="164" textAnchor="middle" fontSize="10.5" fill="#334155">Membrane pulled away from cell wall</text>
          </g>
        </svg>
      );

    case 'svg_food_test_tubes_benedict':
      return (
        <svg viewBox="0 0 540 205" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="185" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="32" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Four Food Samples Tested with Benedict’s Solution & Heated at 90 °C
          </text>
          {[
            { x: 65, label: 'Sample 1', color: '#2563eb', result: 'Remains Blue' },
            { x: 185, label: 'Sample 2', color: '#22c55e', result: 'Green ppt' },
            { x: 305, label: 'Sample 3', color: '#f59e0b', result: 'Orange ppt' },
            { x: 425, label: 'Sample 4', color: '#b91c1c', result: 'Brick-Red ppt' },
          ].map((tube, idx) => (
            <g key={idx} transform={`translate(${tube.x}, 48)`}>
              <text x="28" y="12" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#1e293b">{tube.label}</text>
              <path d="M12 22 L12 96 A16 16 0 0 0 44 96 L44 22" fill="#ffffff" stroke="#334155" strokeWidth="2.5" />
              <path d="M14 55 L14 96 A14 14 0 0 0 42 96 L42 55 Z" fill={tube.color} />
              <text x="28" y="132" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#334155">{tube.result}</text>
            </g>
          ))}
        </svg>
      );

    case 'svg_food_test_panel':
      return (
        <svg viewBox="0 0 540 205" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="185" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="32" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Unknown Meal Extract Tested with Four Reagents (Room Temperature unless stated)
          </text>
          {[
            { x: 45, test: 'Iodine', color: '#1e1b4b', obs: 'Blue-black' },
            { x: 170, test: 'Biuret', color: '#7e22ce', obs: 'Lilac / Purple' },
            { x: 295, test: 'Ethanol + H₂O', color: '#f1f5f9', obs: 'Clear (No emulsion)' },
            { x: 420, test: 'DCPIP', color: '#e2e8f0', obs: 'Colourless (Decolourised)' },
          ].map((t, i) => (
            <g key={i} transform={`translate(${t.x}, 48)`}>
              <text x="42" y="12" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">{t.test}</text>
              <path d="M26 22 L26 94 A16 16 0 0 0 58 94 L58 22" fill="#ffffff" stroke="#334155" strokeWidth="2.2" />
              <path d="M28 54 L28 94 A14 14 0 0 0 56 94 L56 54 Z" fill={t.color} />
              <text x="42" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">{t.obs}</text>
            </g>
          ))}
        </svg>
      );

    case 'svg_enzyme_temp_curve':
      return (
        <svg viewBox="0 0 540 215" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="195" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="270" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Effect of Temperature on Rate of Reaction of Human Amylase
          </text>
          <line x1="75" y1="45" x2="75" y2="170" stroke="#0f172a" strokeWidth="2" />
          <line x1="75" y1="170" x2="490" y2="170" stroke="#0f172a" strokeWidth="2" />
          <text x="28" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a" transform="rotate(-90 28 110)">
            Rate of Reaction
          </text>
          <text x="285" y="196" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
            Temperature (°C)
          </text>
          {[
            { x: 75, t: '0' },
            { x: 145, t: '15' },
            { x: 215, t: '30' },
            { x: 260, t: '37' },
            { x: 325, t: '45' },
            { x: 395, t: '55' },
            { x: 465, t: '65' },
          ].map((pt, i) => (
            <g key={i}>
              <line x1={pt.x} y1="170" x2={pt.x} y2="175" stroke="#0f172a" />
              <text x={pt.x} y="185" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">{pt.t}</text>
            </g>
          ))}
          {/* Curve peaking at 37°C (x=260, y=58) and dropping to 0 at 60°C (x=430) */}
          <path d="M75 166 C145 148, 220 70, 260 58 C290 58, 350 115, 425 170 L465 170" fill="none" stroke="#e11d48" strokeWidth="3" />
          {/* Callout Points P, Q, R */}
          <circle cx="145" cy="140" r="5" fill="#2563eb" />
          <text x="138" y="130" fontSize="11" fontWeight="bold" fill="#2563eb">P</text>
          <circle cx="260" cy="58" r="5" fill="#059669" />
          <text x="260" y="48" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#059669">Q</text>
          <circle cx="385" cy="140" r="5" fill="#d97706" />
          <text x="395" y="132" fontSize="11" fontWeight="bold" fill="#d97706">R</text>
        </svg>
      );

    case 'svg_enzyme_ph_curves':
      return (
        <svg viewBox="0 0 540 215" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="195" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="270" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Rate of Activity of Two Digestive Enzymes (X and Y) Across pH 1–12
          </text>
          <line x1="70" y1="45" x2="70" y2="170" stroke="#0f172a" strokeWidth="2" />
          <line x1="70" y1="170" x2="495" y2="170" stroke="#0f172a" strokeWidth="2" />
          <text x="26" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a" transform="rotate(-90 26 110)">
            Enzyme Activity
          </text>
          <text x="285" y="196" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">pH</text>
          {[1, 2, 4, 6, 7, 8, 10, 12].map((ph) => {
            const x = 70 + ((ph - 1) / 11) * 400;
            return (
              <g key={ph}>
                <line x1={x} y1="170" x2={x} y2="175" stroke="#0f172a" />
                <text x={x} y="185" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">{ph}</text>
              </g>
            );
          })}
          {/* Enzyme X: Pepsin peaking at pH 2 */}
          <path d="M70 110 Q106 52, 145 140 T190 170" fill="none" stroke="#dc2626" strokeWidth="3" />
          <text x="115" y="55" fontSize="11" fontWeight="bold" fill="#dc2626">Enzyme X</text>
          {/* Enzyme Y: Trypsin/Pancreatic amylase peaking at pH 8 */}
          <path d="M210 170 Q270 155, 325 58 Q380 155, 435 170" fill="none" stroke="#2563eb" strokeWidth="3" />
          <text x="325" y="50" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2563eb">Enzyme Y</text>
        </svg>
      );

    case 'svg_enzyme_lock_key':
      return (
        <svg viewBox="0 0 540 205" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="185" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="32" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Enzyme-Substrate Action & Effect of Extreme Heat (75 °C)
          </text>
          {/* Normal active enzyme */}
          <g transform="translate(45, 55)">
            <path d="M0 15 A45 45 0 1 0 90 15 L72 15 L62 42 L28 42 L18 15 Z" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2.5" />
            <text x="45" y="80" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e3a8a">Enzyme J</text>
            <text x="45" y="114" textAnchor="middle" fontSize="10" fill="#334155">At 37 °C</text>
          </g>
          {/* Substrate */}
          <g transform="translate(175, 62)">
            <polygon points="10,0 50,0 40,28 20,28" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />
            <text x="30" y="52" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#854d0e">Substrate K</text>
          </g>
          <line x1="255" y1="95" x2="310" y2="95" stroke="#0f172a" strokeWidth="2.5" />
          <polygon points="305,90 315,95 305,100" fill="#0f172a" />
          <text x="285" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">Heated 75 °C</text>
          {/* Denatured enzyme */}
          <g transform="translate(345, 55)">
            <path d="M5 18 C-10 45, 10 95, 55 95 C95 95, 115 45, 95 20 C82 28, 70 10, 58 24 C45 32, 28 8, 5 18 Z" fill="#fecaca" stroke="#dc2626" strokeWidth="2.5" />
            <text x="50" y="76" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#991b1b">Denatured J</text>
            <text x="50" y="114" textAnchor="middle" fontSize="10" fill="#991b1b">Active site shape altered</text>
          </g>
        </svg>
      );

    case 'svg_enzyme_substrate_curve':
      return (
        <svg viewBox="0 0 540 215" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="195" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="270" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Effect of Increasing Substrate Concentration (Fixed Enzyme Concentration)
          </text>
          <line x1="75" y1="45" x2="75" y2="170" stroke="#0f172a" strokeWidth="2" />
          <line x1="75" y1="170" x2="485" y2="170" stroke="#0f172a" strokeWidth="2" />
          <text x="30" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a" transform="rotate(-90 30 110)">
            Rate of Reaction
          </text>
          <text x="280" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
            Substrate Concentration
          </text>
          <path d="M75 170 Q135 72, 260 66 L475 66" fill="none" stroke="#7c3aed" strokeWidth="3.5" />
          <line x1="260" y1="50" x2="260" y2="170" stroke="#94a3b8" strokeDasharray="4 3" />
          <text x="165" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6d28d9">Region M</text>
          <text x="370" y="58" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#059669">Region N (Plateau)</text>
        </svg>
      );

    case 'svg_human_tooth_structure':
      return (
        <svg viewBox="0 0 540 225" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="205" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Vertical Section Through a Human Molar Tooth
          </text>
          {/* Gum */}
          <path d="M120 120 Q170 110, 195 122 L345 122 Q370 110, 420 120 L420 198 L120 198 Z" fill="#fda4af" opacity="0.6" />
          {/* Crown Enamel (outer) */}
          <path d="M195 122 C185 75, 205 45, 240 48 C258 52, 282 52, 300 48 C335 45, 355 75, 345 122 Z" fill="#ffffff" stroke="#334155" strokeWidth="2.5" />
          {/* Roots Cement */}
          <path d="M195 122 L212 190 C216 196, 228 196, 232 188 L255 142 L285 142 L308 188 C312 196, 324 196, 328 188 L345 122" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          {/* Dentine */}
          <path d="M207 122 C202 82, 218 60, 244 62 C260 64, 280 64, 296 62 C322 60, 338 82, 333 122 L318 182 L292 135 L248 135 L222 182 Z" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
          {/* Pulp cavity */}
          <path d="M242 122 C240 94, 255 82, 270 82 C285 82, 300 94, 298 122 L313 180 L306 180 L282 132 L258 132 L234 180 L227 180 Z" fill="#ef4444" opacity="0.85" />
          {/* Callouts A, B, C, D */}
          <line x1="212" y1="62" x2="145" y2="55" stroke="#0f172a" strokeWidth="1.5" />
          <text x="140" y="59" textAnchor="end" fontSize="12" fontWeight="bold" fill="#0f172a">A (Hardest outer layer)</text>
          <line x1="322" y1="78" x2="395" y2="68" stroke="#0f172a" strokeWidth="1.5" />
          <text x="400" y="72" fontSize="12" fontWeight="bold" fill="#0f172a">B (Bone-like layer)</text>
          <line x1="270" y1="100" x2="395" y2="100" stroke="#0f172a" strokeWidth="1.5" />
          <text x="400" y="104" fontSize="12" fontWeight="bold" fill="#0f172a">C (Nerves & blood vessels)</text>
          <line x1="335" y1="158" x2="395" y2="158" stroke="#0f172a" strokeWidth="1.5" />
          <text x="400" y="162" fontSize="12" fontWeight="bold" fill="#0f172a">D (Anchors root in gum)</text>
        </svg>
      );

    case 'svg_alimentary_canal_letters':
      return (
        <svg viewBox="0 0 540 230" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="210" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Schematic Diagram of the Human Alimentary Canal & Associated Organs
          </text>
          {/* Oesophagus */}
          <rect x="255" y="42" width="16" height="45" fill="#fbcfe8" stroke="#be185d" strokeWidth="2" />
          {/* Stomach (P) */}
          <path d="M255 87 C225 90, 215 125, 255 130 C285 134, 295 110, 271 87 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" />
          {/* Liver (Q) */}
          <path d="M180 78 L242 75 L230 110 L185 102 Z" fill="#991b1b" opacity="0.85" />
          {/* Gall bladder (R) */}
          <ellipse cx="222" cy="112" rx="11" ry="7" fill="#16a34a" stroke="#14532d" strokeWidth="1.5" />
          {/* Pancreas (S) */}
          <path d="M265 132 L335 126 L332 140 L265 142 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Duodenum + Ileum (T) */}
          <path d="M255 130 C240 140, 240 155, 260 155 C290 155, 295 170, 260 172 C235 174, 235 186, 265 188" fill="none" stroke="#fb923c" strokeWidth="10" strokeLinecap="round" />
          {/* Colon (U) */}
          <path d="M210 194 L210 148 L325 148 L325 196 L275 196" fill="none" stroke="#818cf8" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          {/* Labels */}
          <line x1="242" y1="108" x2="365" y2="80" stroke="#0f172a" strokeWidth="1.2" />
          <text x="370" y="84" fontSize="11.5" fontWeight="bold" fill="#0f172a">P (Acidic protease organ)</text>
          <line x1="205" y1="88" x2="135" y2="75" stroke="#0f172a" strokeWidth="1.2" />
          <text x="130" y="79" textAnchor="end" fontSize="11.5" fontWeight="bold" fill="#0f172a">Q (Makes bile)</text>
          <line x1="215" y1="112" x2="135" y2="115" stroke="#0f172a" strokeWidth="1.2" />
          <text x="130" y="119" textAnchor="end" fontSize="11.5" fontWeight="bold" fill="#0f172a">R (Stores bile)</text>
          <line x1="335" y1="133" x2="385" y2="133" stroke="#0f172a" strokeWidth="1.2" />
          <text x="390" y="137" fontSize="11.5" fontWeight="bold" fill="#0f172a">S (Makes amylase/trypsin/lipase)</text>
          <line x1="265" y1="175" x2="135" y2="175" stroke="#0f172a" strokeWidth="1.2" />
          <text x="130" y="179" textAnchor="end" fontSize="11.5" fontWeight="bold" fill="#0f172a">T (Site of villus absorption)</text>
          <line x1="325" y1="175" x2="385" y2="175" stroke="#0f172a" strokeWidth="1.2" />
          <text x="390" y="179" fontSize="11.5" fontWeight="bold" fill="#0f172a">U (Absorbs remaining water)</text>
        </svg>
      );

    case 'svg_villus_labelled_letters':
      return (
        <svg viewBox="0 0 540 220" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="200" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="270" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            Cross-Section of a Single Intestinal Villus (Ileum)
          </text>
          {/* Epithelium (W) */}
          <path d="M180 190 L180 95 C180 42, 260 42, 260 95 L260 190 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="4" />
          {/* Capillary loop (X) */}
          <path d="M196 188 L196 98 C196 65, 244 65, 244 98 L244 188" fill="none" stroke="#dc2626" strokeWidth="5" />
          {/* Central Lacteal (Y) */}
          <path d="M214 188 L214 96 C214 78, 226 78, 226 96 L226 188 Z" fill="#86efac" stroke="#15803d" strokeWidth="2.5" />
          {/* Labels */}
          <line x1="252" y1="70" x2="320" y2="62" stroke="#0f172a" strokeWidth="1.5" />
          <text x="326" y="66" fontSize="11.5" fontWeight="bold" fill="#0f172a">W (One-cell-thick epithelium + microvilli)</text>
          <line x1="244" y1="108" x2="320" y2="108" stroke="#0f172a" strokeWidth="1.5" />
          <text x="326" y="112" fontSize="11.5" fontWeight="bold" fill="#dc2626">X (Blood capillary network)</text>
          <line x1="220" y1="145" x2="320" y2="152" stroke="#0f172a" strokeWidth="1.5" />
          <text x="326" y="156" fontSize="11.5" fontWeight="bold" fill="#15803d">Y (Central lacteal)</text>
        </svg>
      );

    case 'svg_digestive_ph_profile':
    default:
      return (
        <svg viewBox="0 0 540 215" className="w-full max-w-[540px] h-auto">
          <rect x="10" y="10" width="520" height="195" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="270" y="30" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#0f172a">
            pH Changes Along the Human Alimentary Canal (Regions 1, 2, 3)
          </text>
          <line x1="75" y1="45" x2="75" y2="170" stroke="#0f172a" strokeWidth="2" />
          <line x1="75" y1="170" x2="485" y2="170" stroke="#0f172a" strokeWidth="2" />
          <text x="65" y="158" textAnchor="end" fontSize="10" fontWeight="bold">pH 2</text>
          <text x="65" y="108" textAnchor="end" fontSize="10" fontWeight="bold">pH 7</text>
          <text x="65" y="78" textAnchor="end" fontSize="10" fontWeight="bold">pH 8.5</text>
          <line x1="75" y1="104" x2="485" y2="104" stroke="#e2e8f0" strokeDasharray="4 3" />
          {/* Bars / Graph line */}
          <path d="M120 104 L210 104 L250 156 L320 156 L365 82 L465 82" fill="none" stroke="#0284c7" strokeWidth="3.5" />
          <text x="155" y="186" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">Region 1</text>
          <text x="285" y="186" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">Region 2</text>
          <text x="415" y="186" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#059669">Region 3</text>
        </svg>
      );
  }
}
