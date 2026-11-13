import React from 'react';

// ============================================================================
// 1. SPECIALISED CELLS DETAILED BIOLOGICAL DIAGRAMS
// ============================================================================

interface CellDiagramProps {
  cellName: string;
  className?: string;
}

export const SpecialisedCellDiagram: React.FC<CellDiagramProps> = ({ cellName, className = 'w-full h-48 sm:h-56' }) => {
  switch (cellName) {
    case 'Ciliated Epithelial Cell':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          <defs>
            <linearGradient id="ciliaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="mucusGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>

          {/* Background / Base membrane */}
          <rect x="20" y="210" width="360" height="12" fill="#cbd5e1" rx="4" />
          <text x="200" y="232" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="bold">Basement Membrane</text>

          {/* Cell 1: Columnar ciliated cell */}
          <path d="M 50 70 L 140 70 L 140 210 L 50 210 Z" fill="#fdf2f8" stroke="#db2777" strokeWidth="2.5" />
          {/* Cilia hairs on top */}
          {[55, 63, 71, 79, 87, 95, 103, 111, 119, 127, 135].map((x, i) => (
            <path key={i} d={`M ${x} 70 Q ${x + 6} 45, ${x + (i % 2 === 0 ? 8 : 12)} 25`} fill="none" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
          ))}

          {/* Nucleus */}
          <ellipse cx="95" cy="165" rx="22" ry="16" fill="#be185d" />
          <ellipse cx="90" cy="160" rx="6" ry="4" fill="#fbcfe8" opacity="0.6" />
          <text x="95" y="170" fontSize="10" fill="#ffffff" textAnchor="middle" fontWeight="bold">Nucleus</text>

          {/* Mitochondria */}
          <ellipse cx="75" cy="110" rx="10" ry="5" fill="#f59e0b" transform="rotate(-20 75 110)" />
          <ellipse cx="115" cy="115" rx="10" ry="5" fill="#f59e0b" transform="rotate(25 115 115)" />

          {/* Cell 2: Goblet Cell secreting mucus */}
          <path d="M 140 70 L 220 70 L 220 210 L 140 210 Z" fill="#ecfdf5" stroke="#059669" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 155 70 Q 180 120, 180 190 L 140 190" fill="none" stroke="#059669" strokeWidth="1.5" />
          {/* Mucus droplet */}
          <ellipse cx="180" cy="50" rx="18" ry="12" fill="url(#mucusGrad)" opacity="0.8" />
          <circle cx="174" cy="45" r="2" fill="#065f46" />
          <circle cx="185" cy="52" r="2" fill="#065f46" />
          <text x="180" y="54" fontSize="9" fill="#065f46" textAnchor="middle" fontWeight="bold">Mucus</text>

          {/* Cell 3: Adjacent ciliated cell */}
          <path d="M 220 70 L 310 70 L 310 210 L 220 210 Z" fill="#fdf2f8" stroke="#db2777" strokeWidth="2.5" />
          {[225, 233, 241, 249, 257, 265, 273, 281, 289, 297, 305].map((x, i) => (
            <path key={i} d={`M ${x} 70 Q ${x + 6} 45, ${x + (i % 2 === 0 ? 8 : 12)} 25`} fill="none" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <ellipse cx="265" cy="165" rx="22" ry="16" fill="#be185d" />

          {/* Labels & Callouts */}
          <line x1="140" y1="25" x2="190" y2="15" stroke="#db2777" strokeWidth="1.5" />
          <text x="195" y="18" fontSize="11" fill="#be185d" fontWeight="bold">Cilia (beat in waves to sweep mucus)</text>

          <line x1="125" y1="115" x2="160" y2="115" stroke="#d97706" strokeWidth="1.5" />
          <text x="165" y="119" fontSize="10" fill="#b45309" fontWeight="bold">Mitochondria (ATP)</text>

          <line x1="220" y1="90" x2="260" y2="90" stroke="#059669" strokeWidth="1.5" />
          <text x="265" y="94" fontSize="10" fill="#047857" fontWeight="bold">Goblet Cell (mucus)</text>
        </svg>
      );

    case 'Root Hair Cell':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Soil particles */}
          <circle cx="350" cy="40" r="14" fill="#a16207" opacity="0.4" />
          <circle cx="370" cy="80" r="16" fill="#a16207" opacity="0.5" />
          <circle cx="340" cy="130" r="18" fill="#a16207" opacity="0.3" />
          <circle cx="365" cy="180" r="15" fill="#a16207" opacity="0.5" />

          {/* Main cell body */}
          <path
            d="M 40 40 L 130 40 L 130 90 C 230 90, 310 95, 360 110 C 375 115, 375 125, 360 130 C 310 145, 230 150, 130 150 L 130 200 L 40 200 Z"
            fill="#ecfdf5"
            stroke="#059669"
            strokeWidth="3.5"
          />

          {/* Inner membrane */}
          <path
            d="M 46 46 L 124 46 L 124 96 C 224 96, 304 101, 354 113 C 363 115, 363 125, 354 127 C 304 139, 224 144, 124 144 L 124 194 L 46 194 Z"
            fill="#d1fae5"
            stroke="#10b981"
            strokeWidth="1.5"
          />

          {/* Large central vacuole extending into hair */}
          <path
            d="M 60 70 L 110 70 L 110 105 C 190 105, 260 108, 330 118 C 335 119, 335 121, 330 122 C 260 132, 190 135, 110 135 L 110 170 L 60 170 Z"
            fill="#a7f3d0"
            stroke="#047857"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text x="85" y="125" fontSize="10" fill="#065f46" fontWeight="bold">Large Vacuole</text>

          {/* Nucleus */}
          <ellipse cx="85" cy="75" rx="16" ry="14" fill="#047857" />
          <text x="85" y="79" fontSize="9" fill="#ffffff" textAnchor="middle" fontWeight="bold">Nucleus</text>

          {/* Mitochondria for active transport */}
          <ellipse cx="100" cy="180" rx="8" ry="4" fill="#f59e0b" transform="rotate(-15 100 180)" />
          <ellipse cx="70" cy="180" rx="8" ry="4" fill="#f59e0b" transform="rotate(20 70 180)" />

          {/* Labels */}
          <line x1="280" y1="100" x2="280" y2="50" stroke="#047857" strokeWidth="1.5" />
          <text x="280" y="42" fontSize="11" fill="#065f46" textAnchor="middle" fontWeight="bold">
            Finger-like Hair Extension (High Surface Area)
          </text>

          <line x1="100" y1="185" x2="160" y2="215" stroke="#d97706" strokeWidth="1.5" />
          <text x="165" y="220" fontSize="10" fill="#b45309" fontWeight="bold">
            Mitochondria (ATP for Active Transport)
          </text>

          <text x="280" y="200" fontSize="11" fill="#dc2626" fontWeight="bold">
            ❌ NO Chloroplasts! (Underground)
          </text>
        </svg>
      );

    case 'Xylem Vessel':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Outer continuous hollow cylinder */}
          <rect x="120" y="20" width="160" height="200" fill="#f8fafc" stroke="#475569" strokeWidth="3" />

          {/* Thick Lignified Wall Left */}
          <rect x="120" y="20" width="22" height="200" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
          {/* Thick Lignified Wall Right */}
          <rect x="258" y="20" width="22" height="200" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />

          {/* Lignin Spiral Rings */}
          {[40, 75, 110, 145, 180].map((y, idx) => (
            <ellipse key={idx} cx="200" cy={y} rx="58" ry="12" fill="none" stroke="#c2410c" strokeWidth="3.5" />
          ))}

          {/* Transpiration water flow arrows */}
          <path d="M 200 190 L 200 60" stroke="#0284c7" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="195,65 200,45 205,65" fill="#0284c7" />

          {/* Labels */}
          <line x1="120" y1="110" x2="40" y2="110" stroke="#ea580c" strokeWidth="1.5" />
          <text x="35" y="105" fontSize="11" fill="#c2410c" textAnchor="end" fontWeight="bold">Thick Wall with</text>
          <text x="35" y="120" fontSize="11" fill="#c2410c" textAnchor="end" fontWeight="bold">Woody Lignin</text>

          <line x1="200" y1="130" x2="310" y2="130" stroke="#0284c7" strokeWidth="1.5" />
          <text x="315" y="125" fontSize="11" fill="#0369a1" fontWeight="bold">Hollow Uninterrupted</text>
          <text x="315" y="140" fontSize="11" fill="#0369a1" fontWeight="bold">Lumen (Dead Cells)</text>

          <text x="200" y="235" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="bold">
            No cytoplasm, no nucleus, no end walls → unimpeded water stream
          </text>
        </svg>
      );

    case 'Phloem Sieve Tube & Companion Cell':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Sieve tube element (center) */}
          <rect x="80" y="20" width="120" height="200" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2.5" />

          {/* Sieve Plate Top */}
          <line x1="80" y1="45" x2="200" y2="45" stroke="#15803d" strokeWidth="4" />
          {[100, 120, 140, 160, 180].map((x, i) => (
            <circle key={i} cx={x} cy={45} r="3" fill="#ffffff" />
          ))}

          {/* Sieve Plate Bottom */}
          <line x1="80" y1="195" x2="200" y2="195" stroke="#15803d" strokeWidth="4" />
          {[100, 120, 140, 160, 180].map((x, i) => (
            <circle key={i} cx={x} cy={195} r="3" fill="#ffffff" />
          ))}

          {/* Thin peripheral cytoplasm */}
          <rect x="85" y="50" width="8" height="140" fill="#bbf7d0" />
          <rect x="187" y="50" width="8" height="140" fill="#bbf7d0" />

          {/* Companion Cell (right) */}
          <rect x="205" y="40" width="70" height="160" fill="#fdf4ff" stroke="#a855f7" strokeWidth="2.5" rx="8" />

          {/* Companion cell nucleus */}
          <circle cx="240" cy="100" r="18" fill="#7e22ce" />
          <text x="240" y="104" fontSize="9" fill="#ffffff" textAnchor="middle" fontWeight="bold">Nucleus</text>

          {/* Companion cell mitochondria */}
          <ellipse cx="230" cy="140" rx="8" ry="4" fill="#f59e0b" transform="rotate(-30 230 140)" />
          <ellipse cx="250" cy="160" rx="8" ry="4" fill="#f59e0b" transform="rotate(30 250 160)" />

          {/* Plasmodesmata connections */}
          <line x1="200" y1="80" x2="205" y2="80" stroke="#6b21a8" strokeWidth="3" />
          <line x1="200" y1="120" x2="205" y2="120" stroke="#6b21a8" strokeWidth="3" />
          <line x1="200" y1="150" x2="205" y2="150" stroke="#6b21a8" strokeWidth="3" />

          {/* Translocation sucrose flow arrows (bidirectional) */}
          <path d="M 140 70 L 140 170" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 3" />
          <polygon points="137,165 140,175 143,165" fill="#16a34a" />
          <polygon points="137,75 140,65 143,75" fill="#16a34a" />

          {/* Labels */}
          <text x="140" y="35" fontSize="10" fill="#15803d" textAnchor="middle" fontWeight="bold">Perforated Sieve Plate</text>
          <text x="240" y="30" fontSize="10" fill="#7e22ce" textAnchor="middle" fontWeight="bold">Companion Cell</text>
          <text x="320" y="100" fontSize="10" fill="#6b21a8" fontWeight="bold">Controls Sieve Tube</text>
          <text x="320" y="115" fontSize="10" fill="#6b21a8">Provides ATP</text>
        </svg>
      );

    case 'Palisade Mesophyll Cell':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Sunlight beams */}
          <line x1="160" y1="5" x2="160" y2="25" stroke="#eab308" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="200" y1="5" x2="200" y2="25" stroke="#eab308" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="240" y1="5" x2="240" y2="25" stroke="#eab308" strokeWidth="2" strokeDasharray="3 2" />
          <text x="200" y="18" fontSize="10" fill="#ca8a04" textAnchor="middle" fontWeight="bold">Sunlight from Upper Epidermis ☀️</text>

          {/* Tall Columnar Cell Wall */}
          <rect x="140" y="30" width="120" height="190" fill="#ecfdf5" stroke="#059669" strokeWidth="3" rx="4" />
          {/* Cell membrane */}
          <rect x="145" y="35" width="110" height="180" fill="#d1fae5" stroke="#10b981" strokeWidth="1" rx="3" />

          {/* Large Central Vacuole */}
          <rect x="170" y="55" width="60" height="130" fill="#a7f3d0" stroke="#047857" strokeWidth="1" strokeDasharray="3 2" rx="6" />
          <text x="200" y="125" fontSize="10" fill="#065f46" textAnchor="middle" fontWeight="bold">Vacuole</text>

          {/* Nucleus pushed to side */}
          <circle cx="215" cy="180" r="14" fill="#047857" />
          <text x="215" y="184" fontSize="8" fill="#ffffff" textAnchor="middle" fontWeight="bold">Nucleus</text>

          {/* Chloroplasts packed along vertical perimeter */}
          {[
            [152, 45], [170, 42], [190, 42], [210, 42], [230, 42], [245, 45],
            [152, 65], [245, 65],
            [152, 85], [245, 85],
            [152, 105], [245, 105],
            [152, 125], [245, 125],
            [152, 145], [245, 145],
            [152, 165], [245, 165],
            [152, 185], [170, 205], [190, 205]
          ].map(([cx, cy], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx="8" ry="5" fill="#15803d" stroke="#14532d" strokeWidth="1" />
          ))}

          {/* Labels */}
          <line x1="245" y1="85" x2="290" y2="85" stroke="#15803d" strokeWidth="1.5" />
          <text x="295" y="82" fontSize="10" fill="#14532d" fontWeight="bold">Dozens of Chloroplasts</text>
          <text x="295" y="95" fontSize="10" fill="#14532d">packed near light surface</text>

          <line x1="140" y1="120" x2="70" y2="120" stroke="#059669" strokeWidth="1.5" />
          <text x="65" y="115" fontSize="10" fill="#065f46" textAnchor="end" fontWeight="bold">Tall Columnar</text>
          <text x="65" y="128" fontSize="10" fill="#065f46" textAnchor="end" fontWeight="bold">Shape</text>
        </svg>
      );

    case 'Guard Cells':
    case 'Guard Cells (Stomata)':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Pair of kidney-shaped guard cells */}
          {/* Left Guard Cell */}
          <path
            d="M 175 40 C 130 50, 120 120, 130 170 C 140 200, 175 200, 175 200 C 150 170, 150 70, 175 40 Z"
            fill="#dcfce7"
            stroke="#16a34a"
            strokeWidth="2.5"
          />
          {/* Thick inner wall left */}
          <path d="M 175 40 C 150 70, 150 170, 175 200" fill="none" stroke="#14532d" strokeWidth="4.5" />

          {/* Right Guard Cell */}
          <path
            d="M 225 40 C 270 50, 280 120, 270 170 C 260 200, 225 200, 225 200 C 250 170, 250 70, 225 40 Z"
            fill="#dcfce7"
            stroke="#16a34a"
            strokeWidth="2.5"
          />
          {/* Thick inner wall right */}
          <path d="M 225 40 C 250 70, 250 170, 225 200" fill="none" stroke="#14532d" strokeWidth="4.5" />

          {/* Stoma Pore (center) */}
          <ellipse cx="200" cy="120" rx="14" ry="45" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
          <text x="200" y="124" fontSize="10" fill="#0f172a" textAnchor="middle" fontWeight="bold">Stoma Pore</text>

          {/* Nuclei */}
          <circle cx="140" cy="120" r="10" fill="#15803d" />
          <circle cx="260" cy="120" r="10" fill="#15803d" />

          {/* Chloroplasts in guard cells */}
          <ellipse cx="145" cy="80" rx="5" ry="3" fill="#166534" />
          <ellipse cx="150" cy="160" rx="5" ry="3" fill="#166534" />
          <ellipse cx="255" cy="80" rx="5" ry="3" fill="#166534" />
          <ellipse cx="250" cy="160" rx="5" ry="3" fill="#166534" />

          {/* Labels */}
          <line x1="165" y1="120" x2="80" y2="80" stroke="#14532d" strokeWidth="1.5" />
          <text x="75" y="75" fontSize="10" fill="#14532d" textAnchor="end" fontWeight="bold">Thick Inelastic</text>
          <text x="75" y="88" fontSize="10" fill="#14532d" textAnchor="end" fontWeight="bold">Inner Wall</text>

          <line x1="275" y1="140" x2="330" y2="140" stroke="#16a34a" strokeWidth="1.5" />
          <text x="335" y="137" fontSize="10" fill="#166534" fontWeight="bold">Thin Elastic Outer Wall</text>
          <text x="335" y="150" fontSize="10" fill="#166534">(curves open when turgid)</text>
        </svg>
      );

    case 'Red Blood Cell (Erythrocyte)':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Capillary walls */}
          <line x1="20" y1="30" x2="380" y2="30" stroke="#fca5a5" strokeWidth="4" />
          <line x1="20" y1="210" x2="380" y2="210" stroke="#fca5a5" strokeWidth="4" />
          <text x="200" y="24" fontSize="10" fill="#b91c1c" textAnchor="middle" fontWeight="bold">Capillary Lumen</text>

          {/* Biconcave Disc 3D View */}
          <ellipse cx="150" cy="120" rx="70" ry="45" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
          {/* Inner indented central depression */}
          <ellipse cx="150" cy="120" rx="38" ry="22" fill="#dc2626" stroke="#991b1b" strokeWidth="2" opacity="0.8" />
          <ellipse cx="150" cy="120" rx="22" ry="12" fill="#b91c1c" opacity="0.6" />

          {/* Cross-section dumbbell shape view on right */}
          <path
            d="M 280 80 C 265 80, 265 110, 280 115 C 295 120, 295 120, 280 125 C 265 130, 265 160, 280 160 C 310 160, 310 80, 280 80 Z"
            fill="#ef4444"
            stroke="#b91c1c"
            strokeWidth="2.5"
            transform="rotate(90 290 120)"
          />

          {/* Labels */}
          <line x1="150" y1="120" x2="150" y2="185" stroke="#991b1b" strokeWidth="1.5" />
          <text x="150" y="198" fontSize="10" fill="#991b1b" textAnchor="middle" fontWeight="bold">
            Biconcave Depression (High SA:V ratio)
          </text>

          <text x="290" y="65" fontSize="10" fill="#b91c1c" textAnchor="middle" fontWeight="bold">
            Side Cross-Section
          </text>

          <text x="290" y="185" fontSize="11" fill="#7f1d1d" textAnchor="middle" fontWeight="bold">
            ❌ NO Nucleus!
          </text>
          <text x="290" y="200" fontSize="10" fill="#7f1d1d" textAnchor="middle">
            (Maximises haemoglobin for O₂)
          </text>
        </svg>
      );

    case 'Motor Neurone (Nerve Cell)':
    case 'Motor Neurone':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Cell Body (Soma) left */}
          <polygon
            points="70,120 40,80 50,60 70,80 90,50 100,75 120,60 110,100 130,120 110,140 120,175 100,165 90,190 70,160 50,180 40,155"
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="2.5"
          />

          {/* Nucleus */}
          <circle cx="80" cy="120" r="14" fill="#b45309" />
          <text x="80" y="124" fontSize="9" fill="#ffffff" textAnchor="middle" fontWeight="bold">Nucleus</text>

          {/* Long Axon */}
          <line x1="125" y1="120" x2="330" y2="120" stroke="#d97706" strokeWidth="4" />

          {/* Myelin Sheath Schwann cells */}
          {[140, 185, 230, 275].map((x, i) => (
            <rect key={i} x={x} y="105" width="35" height="30" fill="#fde68a" stroke="#b45309" strokeWidth="2" rx="6" />
          ))}

          {/* Nodes of Ranvier */}
          <circle cx="180" cy="120" r="3" fill="#b45309" />
          <circle cx="225" cy="120" r="3" fill="#b45309" />
          <circle cx="270" cy="120" r="3" fill="#b45309" />

          {/* Axon Terminal / Synaptic Endings */}
          <path d="M 330 120 L 360 90 M 330 120 L 370 120 M 330 120 L 360 150" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
          <circle cx="360" cy="90" r="4" fill="#d97706" />
          <circle cx="370" cy="120" r="4" fill="#d97706" />
          <circle cx="360" cy="150" r="4" fill="#d97706" />

          {/* Nerve Impulse Arrow */}
          <path d="M 130 85 L 290 85" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 3" />
          <polygon points="285,81 295,85 285,89" fill="#2563eb" />
          <text x="210" y="78" fontSize="10" fill="#1d4ed8" textAnchor="middle" fontWeight="bold">Electrical Impulse (Saltatory Conduction) ⚡</text>

          {/* Labels */}
          <text x="60" y="45" fontSize="10" fill="#b45309" fontWeight="bold">Dendrites (receive impulses)</text>
          <text x="200" y="155" fontSize="10" fill="#92400e" textAnchor="middle" fontWeight="bold">Myelin Sheath (electrical insulation)</text>
          <text x="350" y="175" fontSize="10" fill="#b45309" textAnchor="middle" fontWeight="bold">Axon Terminals</text>
        </svg>
      );

    case 'Sperm Cell (Male Gamete)':
    case 'Sperm Cell':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Head */}
          <ellipse cx="80" cy="120" rx="30" ry="18" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2.5" />

          {/* Acrosome Cap */}
          <path d="M 50 120 C 50 105, 65 105, 75 105 L 75 135 C 65 135, 50 135, 50 120 Z" fill="#6366f1" stroke="#3730a3" strokeWidth="1.5" />
          <text x="62" y="123" fontSize="8" fill="#ffffff" textAnchor="middle" fontWeight="bold">Acrosome</text>

          {/* Haploid Nucleus */}
          <ellipse cx="92" cy="120" rx="14" ry="12" fill="#3730a3" />
          <text x="92" y="123" fontSize="8" fill="#ffffff" textAnchor="middle" fontWeight="bold">n (23)</text>

          {/* Midpiece with spiral mitochondria */}
          <rect x="110" y="112" width="40" height="16" fill="#fde047" stroke="#ca8a04" strokeWidth="2" rx="4" />
          {[116, 124, 132, 140].map((x, i) => (
            <line key={i} x1={x} y1="112" x2={x} y2="128" stroke="#a16207" strokeWidth="2" />
          ))}

          {/* Long Flagellum Tail (sine wave) */}
          <path
            d="M 150 120 Q 180 80, 210 120 T 270 120 T 330 120 T 385 120"
            fill="none"
            stroke="#4338ca"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Labels */}
          <line x1="62" y1="105" x2="62" y2="60" stroke="#4338ca" strokeWidth="1.5" />
          <text x="62" y="48" fontSize="10" fill="#3730a3" textAnchor="middle" fontWeight="bold">Acrosome (Digestive enzymes</text>
          <text x="62" y="60" fontSize="10" fill="#3730a3" textAnchor="middle">to penetrate egg jelly coat)</text>

          <line x1="130" y1="112" x2="130" y2="175" stroke="#a16207" strokeWidth="1.5" />
          <text x="130" y="188" fontSize="10" fill="#854d0e" textAnchor="middle" fontWeight="bold">Midpiece Mitochondria</text>
          <text x="130" y="200" fontSize="10" fill="#854d0e" textAnchor="middle">(ATP for continuous swimming)</text>

          <line x1="270" y1="120" x2="270" y2="70" stroke="#4338ca" strokeWidth="1.5" />
          <text x="270" y="65" fontSize="10" fill="#3730a3" textAnchor="middle" fontWeight="bold">Flagellum Tail (propulsion)</text>
        </svg>
      );

    case 'Egg Cell (Ovum / Female Gamete)':
    case 'Egg Cell (Ovum)':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Thick Jelly Coat (Zona Pellucida) */}
          <circle cx="160" cy="120" r="85" fill="#fef2f2" stroke="#f87171" strokeWidth="6" strokeDasharray="6 3" />

          {/* Cell Membrane & Cytoplasm rich in yolk food reserves */}
          <circle cx="160" cy="120" r="76" fill="#fff1f2" stroke="#e11d48" strokeWidth="2" />

          {/* Lipid / Nutrient Yolk Droplets in Cytoplasm */}
          {[
            [120, 80], [180, 70], [130, 150], [195, 155], [110, 120], [170, 160], [200, 100]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5" fill="#fbcfe8" stroke="#db2777" strokeWidth="1" />
          ))}

          {/* Haploid Nucleus */}
          <circle cx="160" cy="120" r="26" fill="#be123c" />
          <text x="160" y="124" fontSize="10" fill="#ffffff" textAnchor="middle" fontWeight="bold">Haploid Nucleus</text>
          <text x="160" y="136" fontSize="9" fill="#fecdd3" textAnchor="middle">n (23 chromosomes)</text>

          {/* Corona radiata follicle cells surrounding egg */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const cx = 160 + 94 * Math.cos(rad);
            const cy = 120 + 94 * Math.sin(rad);
            return <circle key={i} cx={cx} cy={cy} r="7" fill="#fed7aa" stroke="#ea580c" strokeWidth="1" />;
          })}

          {/* Labels */}
          <line x1="240" y1="80" x2="295" y2="80" stroke="#e11d48" strokeWidth="1.5" />
          <text x="300" y="78" fontSize="10" fill="#be123c" fontWeight="bold">Jelly Coat (Zona Pellucida)</text>
          <text x="300" y="90" fontSize="9" fill="#9f1239">Hardens after 1 sperm enters</text>
          <text x="300" y="102" fontSize="9" fill="#9f1239">to prevent polyspermy</text>

          <line x1="210" y1="150" x2="295" y2="150" stroke="#db2777" strokeWidth="1.5" />
          <text x="300" y="148" fontSize="10" fill="#9d174d" fontWeight="bold">Yolk Food Reserves</text>
          <text x="300" y="160" fontSize="9" fill="#9d174d">Nourishes early embryo</text>
          <text x="300" y="172" fontSize="9" fill="#9d174d">before implantation</text>
        </svg>
      );

    case 'Skeletal Muscle Cell (Muscle Fibre)':
    case 'Skeletal Muscle Cell':
    default:
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Long cylindrical muscle fibre */}
          <rect x="40" y="60" width="320" height="120" fill="#fef2f2" stroke="#dc2626" strokeWidth="3" rx="12" />

          {/* Striations (alternating light I-bands and dark A-bands: Actin & Myosin) */}
          {[60, 85, 110, 135, 160, 185, 210, 235, 260, 285, 310, 335].map((x, i) => (
            <rect key={i} x={x} y="62" width="12" height="116" fill="#fca5a5" opacity="0.7" />
          ))}

          {/* Multiple peripheral nuclei */}
          <ellipse cx="90" cy="72" rx="16" ry="7" fill="#991b1b" />
          <ellipse cx="230" cy="72" rx="16" ry="7" fill="#991b1b" />
          <ellipse cx="160" cy="168" rx="16" ry="7" fill="#991b1b" />
          <ellipse cx="300" cy="168" rx="16" ry="7" fill="#991b1b" />

          {/* Abundant mitochondria */}
          <ellipse cx="120" cy="115" rx="8" ry="4" fill="#f59e0b" />
          <ellipse cx="190" cy="115" rx="8" ry="4" fill="#f59e0b" />
          <ellipse cx="270" cy="115" rx="8" ry="4" fill="#f59e0b" />

          {/* Labels */}
          <line x1="90" y1="72" x2="90" y2="35" stroke="#991b1b" strokeWidth="1.5" />
          <text x="90" y="28" fontSize="10" fill="#7f1d1d" textAnchor="middle" fontWeight="bold">Multiple Peripheral Nuclei</text>

          <line x1="210" y1="120" x2="210" y2="205" stroke="#dc2626" strokeWidth="1.5" />
          <text x="210" y="218" fontSize="10" fill="#991b1b" textAnchor="middle" fontWeight="bold">Striated Protein Filaments (Actin & Myosin slide to contract)</text>

          <text x="320" y="45" fontSize="10" fill="#b45309" textAnchor="middle" fontWeight="bold">Dense Mitochondria (ATP)</text>
        </svg>
      );
  }
};

// ============================================================================
// 2. ANIMAL CLASSIFICATION DETAILED BIOLOGICAL DIAGRAMS
// ============================================================================

interface AnimalDiagramProps {
  animalGroup: string;
  className?: string;
}

export const AnimalClassificationDiagram: React.FC<AnimalDiagramProps> = ({ animalGroup, className = 'w-full h-48 sm:h-56' }) => {
  switch (animalGroup) {
    case 'insects':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Insect Body: 3 distinct parts (Head, Thorax, Abdomen) */}
          {/* Abdomen (segmented) */}
          <ellipse cx="280" cy="120" rx="60" ry="26" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
          {[245, 265, 285, 305, 325].map((x, i) => (
            <line key={i} x1={x} y1="98" x2={x} y2="142" stroke="#b45309" strokeWidth="1.5" />
          ))}

          {/* Thorax (middle) */}
          <ellipse cx="180" cy="120" rx="35" ry="30" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />

          {/* Head (front) */}
          <circle cx="115" cy="120" r="24" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
          {/* Compound eye */}
          <circle cx="108" cy="112" r="8" fill="#1e293b" />
          <circle cx="106" cy="110" r="2" fill="#ffffff" />

          {/* 1 Pair of Antennae */}
          <path d="M 100 105 Q 70 80, 50 85" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 105 102 Q 80 65, 65 60" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="85" r="3" fill="#b45309" />
          <circle cx="65" cy="60" r="3" fill="#b45309" />

          {/* 3 Pairs of Jointed Legs (attached strictly to thorax) */}
          {/* Leg 1 */}
          <path d="M 165 140 L 150 175 L 130 195" fill="none" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
          {/* Leg 2 */}
          <path d="M 180 145 L 180 185 L 175 210" fill="none" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
          {/* Leg 3 */}
          <path d="M 195 140 L 220 180 L 235 205" fill="none" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />

          {/* Top legs counterpart */}
          <path d="M 165 100 L 150 65 L 135 50" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <path d="M 180 95 L 180 55 L 180 35" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <path d="M 195 100 L 215 65 L 230 50" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

          {/* Wings (2 pairs) */}
          <ellipse cx="205" cy="80" rx="45" ry="18" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" opacity="0.75" transform="rotate(-25 205 80)" />
          <ellipse cx="230" cy="75" rx="35" ry="14" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1.5" opacity="0.7" transform="rotate(-35 230 75)" />

          {/* Diagnostic Labels */}
          <text x="115" y="160" fontSize="10" fill="#a16207" textAnchor="middle" fontWeight="bold">1. Head</text>
          <text x="180" y="160" fontSize="10" fill="#a16207" textAnchor="middle" fontWeight="bold">2. Thorax</text>
          <text x="280" y="160" fontSize="10" fill="#a16207" textAnchor="middle" fontWeight="bold">3. Abdomen</text>
          <text x="60" y="45" fontSize="10" fill="#b45309" fontWeight="bold">1 Pair Antennae</text>
          <text x="210" y="40" fontSize="10" fill="#0369a1" fontWeight="bold">1–2 Pairs Wings</text>
          <text x="180" y="230" fontSize="11" fill="#b45309" textAnchor="middle" fontWeight="bold">3 Pairs of Jointed Legs (6 legs on thorax)</text>
        </svg>
      );

    case 'crustaceans':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Cephalothorax with chalky carapace */}
          <ellipse cx="180" cy="120" rx="65" ry="50" fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
          {/* Abdomen (tucked or segmented tail) */}
          <ellipse cx="270" cy="120" rx="35" ry="28" fill="#ffedd5" stroke="#c2410c" strokeWidth="2" />

          {/* Compound eyes on stalks */}
          <line x1="130" y1="95" x2="115" y2="80" stroke="#ea580c" strokeWidth="2" />
          <circle cx="115" cy="80" r="5" fill="#1e293b" />
          <line x1="130" y1="145" x2="115" y2="160" stroke="#ea580c" strokeWidth="2" />
          <circle cx="115" cy="160" r="5" fill="#1e293b" />

          {/* TWO Pairs of Antennae (Diagnostic!) */}
          <path d="M 125 105 Q 80 70, 45 75" fill="none" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 125 110 Q 75 95, 35 100" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
          <path d="M 125 130 Q 75 145, 35 140" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
          <path d="M 125 135 Q 80 170, 45 165" fill="none" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round" />

          {/* Large Chelae / Pincers / Claws (Front legs) */}
          <path d="M 150 80 L 120 50 L 100 45" fill="none" stroke="#ea580c" strokeWidth="4" />
          <path d="M 100 45 Q 80 30, 65 45 Q 85 55, 100 45" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
          <path d="M 100 45 Q 75 60, 65 50" fill="none" stroke="#ea580c" strokeWidth="3" />

          {/* Walking legs (5 pairs total = 10 legs) */}
          {[160, 180, 200, 220].map((x, i) => (
            <g key={i}>
              <path d={`M ${x} 70 L ${x + 10} 45 L ${x + 20} 30`} fill="none" stroke="#c2410c" strokeWidth="2.5" />
              <path d={`M ${x} 170 L ${x + 10} 195 L ${x + 20} 210`} fill="none" stroke="#c2410c" strokeWidth="2.5" />
            </g>
          ))}

          {/* Labels */}
          <text x="45" y="55" fontSize="10" fill="#9a3412" fontWeight="bold">2 Pairs Antennae</text>
          <text x="180" y="125" fontSize="11" fill="#7c2d12" textAnchor="middle" fontWeight="bold">Cephalothorax (Carapace)</text>
          <text x="80" y="30" fontSize="10" fill="#c2410c" fontWeight="bold">Cheliped (Pincer)</text>
          <text x="200" y="230" fontSize="11" fill="#9a3412" textAnchor="middle" fontWeight="bold">5+ Pairs of Jointed Legs (10+ legs & gills for breathing)</text>
        </svg>
      );

    case 'arachnids':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Cephalothorax (front) */}
          <ellipse cx="150" cy="120" rx="35" ry="30" fill="#f1f5f9" stroke="#475569" strokeWidth="3" />

          {/* Abdomen (unsegmented rear) */}
          <ellipse cx="240" cy="120" rx="55" ry="42" fill="#e2e8f0" stroke="#334155" strokeWidth="3" />

          {/* 8 Simple Eyes (on cephalothorax) */}
          {[
            [128, 114], [134, 112], [140, 114],
            [128, 126], [134, 128], [140, 126]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#0f172a" />
          ))}

          {/* Chelicerae (Fangs) & Pedipalps at front */}
          <path d="M 120 110 L 105 105 L 100 112" fill="none" stroke="#334155" strokeWidth="2.5" />
          <path d="M 120 130 L 105 135 L 100 128" fill="none" stroke="#334155" strokeWidth="2.5" />
          <path d="M 125 105 L 105 85" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M 125 135 L 105 155" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

          {/* EXACTLY 4 PAIRS OF LEGS (8 LEGS) */}
          {/* Left top legs */}
          <path d="M 140 95 L 110 55 L 70 50" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M 155 92 L 140 45 L 120 25" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M 170 95 L 180 45 L 195 25" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M 180 100 L 210 55 L 245 45" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

          {/* Bottom legs */}
          <path d="M 140 145 L 110 185 L 70 190" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M 155 148 L 140 195 L 120 215" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M 170 145 L 180 195 L 195 215" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M 180 140 L 210 185 L 245 195" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

          {/* Spinnerets rear */}
          <circle cx="295" cy="120" r="4" fill="#64748b" />

          {/* Labels */}
          <text x="150" y="80" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="bold">Cephalothorax</text>
          <text x="240" y="125" fontSize="11" fill="#1e293b" textAnchor="middle" fontWeight="bold">Abdomen</text>
          <text x="310" y="65" fontSize="11" fill="#dc2626" fontWeight="bold">❌ NO Antennae!</text>
          <text x="310" y="80" fontSize="11" fill="#dc2626" fontWeight="bold">❌ NO Wings!</text>
          <text x="200" y="235" fontSize="11" fill="#0f172a" textAnchor="middle" fontWeight="bold">4 Pairs of Walking Legs (8 legs total)</text>
        </svg>
      );

    case 'myriapods':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Head */}
          <circle cx="70" cy="120" r="20" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />
          <circle cx="65" cy="115" r="3" fill="#1e293b" />
          {/* Antennae */}
          <path d="M 55 110 Q 35 90, 20 85" fill="none" stroke="#a16207" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 55 125 Q 35 145, 20 150" fill="none" stroke="#a16207" strokeWidth="2.5" strokeLinecap="round" />

          {/* Many Repeating Segments */}
          {[90, 115, 140, 165, 190, 215, 240, 265, 290, 315, 340].map((x, i) => (
            <g key={i}>
              <rect x={x - 12} y="100" width="24" height="40" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" rx="4" />
              {/* Legs on top and bottom */}
              <line x1={x - 4} y1="100" x2={x - 8} y2="75" stroke="#a16207" strokeWidth="2" strokeLinecap="round" />
              <line x1={x + 4} y1="100" x2={x + 8} y2="75" stroke="#a16207" strokeWidth="2" strokeLinecap="round" />
              <line x1={x - 4} y1="140" x2={x - 8} y2="165" stroke="#a16207" strokeWidth="2" strokeLinecap="round" />
              <line x1={x + 4} y1="140" x2={x + 8} y2="165" stroke="#a16207" strokeWidth="2" strokeLinecap="round" />
            </g>
          ))}

          {/* Labels */}
          <text x="40" y="70" fontSize="10" fill="#854d0e" fontWeight="bold">1 Pair Antennae</text>
          <text x="215" y="55" fontSize="11" fill="#713f12" textAnchor="middle" fontWeight="bold">Many Repeated Body Segments</text>
          <text x="215" y="195" fontSize="11" fill="#854d0e" textAnchor="middle" fontWeight="bold">1 pair (centipede) or 2 pairs (millipede) legs per segment</text>
        </svg>
      );

    case 'annelids':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Earthworm Body (Segmented ringed cylinders) */}
          <path d="M 50 120 C 100 90, 180 150, 260 100 C 310 70, 360 130, 360 130" fill="none" stroke="#f43f5e" strokeWidth="24" strokeLinecap="round" />

          {/* Clitellum (saddle band) */}
          <path d="M 130 118 C 145 125, 160 132, 175 130" fill="none" stroke="#fecdd3" strokeWidth="28" strokeLinecap="round" />
          <text x="155" y="100" fontSize="10" fill="#9f1239" textAnchor="middle" fontWeight="bold">Clitellum (Saddle)</text>

          {/* Chaetae (bristles on segments) */}
          {[80, 105, 205, 230, 255, 280, 310, 335].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={120 + ((i % 2 === 0) ? 14 : -14)} r="2" fill="#881337" />
              <line x1={x} y1={120 + ((i % 2 === 0) ? 12 : -12)} x2={x} y2={120 + ((i % 2 === 0) ? 22 : -22)} stroke="#881337" strokeWidth="1.5" />
            </g>
          ))}

          {/* Mouth and Anus */}
          <circle cx="50" cy="120" r="5" fill="#881337" />
          <text x="40" y="150" fontSize="10" fill="#9f1239" textAnchor="middle" fontWeight="bold">Mouth</text>
          <text x="365" y="155" fontSize="10" fill="#9f1239" textAnchor="middle" fontWeight="bold">Anus</text>

          {/* Labels */}
          <text x="200" y="45" fontSize="11" fill="#881337" textAnchor="middle" fontWeight="bold">Segmented Body with Repeated Ring Units</text>
          <text x="200" y="195" fontSize="11" fill="#9f1239" textAnchor="middle" fontWeight="bold">Tiny bristles (chaetae) provide grip in soil</text>
        </svg>
      );

    case 'nematodes':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Smooth cylindrical unsegmented worm with tapered ends */}
          <path
            d="M 50 120 C 120 70, 200 170, 280 90 C 320 50, 360 120, 350 120 C 330 140, 280 115, 200 195 C 120 100, 50 120, 50 120 Z"
            fill="#e2e8f0"
            stroke="#64748b"
            strokeWidth="2.5"
          />

          {/* Gut tube inside */}
          <path d="M 60 120 C 130 85, 200 175, 280 105 C 315 75, 340 120, 340 120" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

          {/* Labels */}
          <text x="50" y="95" fontSize="10" fill="#475569" textAnchor="middle" fontWeight="bold">Tapered Mouth</text>
          <text x="350" y="95" fontSize="10" fill="#475569" textAnchor="middle" fontWeight="bold">Tapered Anus</text>
          <text x="200" y="45" fontSize="11" fill="#334155" textAnchor="middle" fontWeight="bold">Smooth, UNSEGMENTED Cylindrical Body</text>
          <text x="200" y="215" fontSize="11" fill="#475569" textAnchor="middle" fontWeight="bold">Flexible waterproof cuticle, microscopic or parasitic</text>
        </svg>
      );

    case 'molluscs':
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Spiral Calcium Carbonate Shell */}
          <path
            d="M 140 130 C 130 60, 240 40, 260 110 C 270 145, 210 160, 160 150 C 180 100, 230 90, 220 120 C 210 135, 190 130, 185 125"
            fill="#fed7aa"
            stroke="#ea580c"
            strokeWidth="3"
          />

          {/* Soft unsegmented muscular foot */}
          <path
            d="M 70 170 C 60 160, 80 135, 110 135 C 130 135, 150 155, 270 160 C 310 160, 320 175, 290 180 C 180 185, 90 185, 70 170 Z"
            fill="#fef08a"
            stroke="#ca8a04"
            strokeWidth="2.5"
          />

          {/* Tentacles with eyespots */}
          <path d="M 90 135 Q 75 105, 60 95" fill="none" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="95" r="4" fill="#1e293b" />
          <path d="M 100 138 Q 85 115, 75 110" fill="none" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="75" cy="110" r="3" fill="#1e293b" />

          {/* Labels */}
          <text x="210" y="45" fontSize="11" fill="#c2410c" textAnchor="middle" fontWeight="bold">Calcium Carbonate (CaCO₃) Hard Shell</text>
          <text x="60" y="80" fontSize="10" fill="#854d0e" fontWeight="bold">Tentacles & Eyes</text>
          <text x="180" y="210" fontSize="11" fill="#713f12" textAnchor="middle" fontWeight="bold">Soft, Unsegmented Body with Muscular Foot</text>
        </svg>
      );

    case 'vertebrates':
    default:
      return (
        <svg viewBox="0 0 400 240" className={className}>
          {/* Vertebral Column Backbone Iconography */}
          <rect x="30" y="30" width="340" height="180" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" rx="16" />

          {/* Central backbone */}
          <line x1="60" y1="120" x2="340" y2="120" stroke="#0284c7" strokeWidth="4" />
          {[80, 110, 140, 170, 200, 230, 260, 290, 320].map((x, i) => (
            <circle key={i} cx={x} cy={120} r="7" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          ))}

          {/* 5 Class Icons / Labels */}
          <text x="200" y="55" fontSize="13" fill="#0369a1" textAnchor="middle" fontWeight="black">
            The 5 Vertebrate Classes (Phylum Chordata)
          </text>
          <text x="200" y="75" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="bold">
            All possess an internal backbone (vertebral column)
          </text>

          <g transform="translate(45, 145)">
            <rect x="0" y="0" width="55" height="45" fill="#e0f2fe" stroke="#38bdf8" rx="8" />
            <text x="27" y="20" fontSize="16" textAnchor="middle">🐟</text>
            <text x="27" y="36" fontSize="9" fill="#0369a1" textAnchor="middle" fontWeight="bold">Fish</text>
          </g>
          <g transform="translate(108, 145)">
            <rect x="0" y="0" width="55" height="45" fill="#ecfdf5" stroke="#34d399" rx="8" />
            <text x="27" y="20" fontSize="16" textAnchor="middle">🐸</text>
            <text x="27" y="36" fontSize="9" fill="#047857" textAnchor="middle" fontWeight="bold">Amphibia</text>
          </g>
          <g transform="translate(172, 145)">
            <rect x="0" y="0" width="55" height="45" fill="#fef3c7" stroke="#f59e0b" rx="8" />
            <text x="27" y="20" fontSize="16" textAnchor="middle">🦎</text>
            <text x="27" y="36" fontSize="9" fill="#b45309" textAnchor="middle" fontWeight="bold">Reptiles</text>
          </g>
          <g transform="translate(236, 145)">
            <rect x="0" y="0" width="55" height="45" fill="#fdf4ff" stroke="#c084fc" rx="8" />
            <text x="27" y="20" fontSize="16" textAnchor="middle">🦅</text>
            <text x="27" y="36" fontSize="9" fill="#7e22ce" textAnchor="middle" fontWeight="bold">Birds</text>
          </g>
          <g transform="translate(300, 145)">
            <rect x="0" y="0" width="55" height="45" fill="#fff1f2" stroke="#fb7185" rx="8" />
            <text x="27" y="20" fontSize="16" textAnchor="middle">🦁</text>
            <text x="27" y="36" fontSize="9" fill="#be123c" textAnchor="middle" fontWeight="bold">Mammals</text>
          </g>
        </svg>
      );
  }
};
