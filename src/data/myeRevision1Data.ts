import { MyeMcqQuestion } from '../types/mye';

export const MYE_REVISION_1_MCQS: MyeMcqQuestion[] = [
  // =========================================================================
  // TOPIC 1: CHARACTERISTICS & CLASSIFICATION OF LIVING ORGANISMS (Q1–Q7)
  // =========================================================================
  {
    id: 'mye1_q1',
    number: 1,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.1',
    question:
      'A germinating bean seed absorbs oxygen, breaks down stored food to release energy for growth, and releases carbon dioxide gas. Which two characteristics of living organisms are directly demonstrated?',
    options: [
      'Excretion and photosynthesis',
      'Respiration and excretion',
      'Nutrition and sensitivity',
      'Reproduction and movement',
    ],
    correctIndex: 1,
    solvingTip:
      'Look at the two actions described: (1) breaking down food with oxygen to release energy = Respiration; (2) removing metabolic waste gas (CO₂) = Excretion.',
    explanation:
      'Respiration is the chemical breakdown of nutrient molecules in cells to release energy for metabolism. Excretion is the removal of waste products of metabolism (such as carbon dioxide from respiration).',
  },
  {
    id: 'mye1_q2',
    number: 2,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_arachnid',
      caption: 'Specimen X: Invertebrate found on a garden web',
    },
    question:
      'Which combination of features places Specimen X in the class Arachnida rather than Insecta?',
    options: [
      '3 body parts, 3 pairs of legs, and 1 pair of antennae',
      '2 body parts, 4 pairs of legs, and no antennae',
      '2 body parts, 5 pairs of legs, and 2 pairs of antennae',
      'Many segments, 1 pair of legs per segment, and 1 pair of antennae',
    ],
    correctIndex: 1,
    solvingTip:
      'Count the walking legs on the specimen first (8 legs = 4 pairs), then check the head for antennae (none) and count body regions (cephalothorax + abdomen = 2).',
    explanation:
      'Arachnids have 2 main body parts (cephalothorax and abdomen), 4 pairs of jointed legs (8 legs total), and NO antennae or wings.',
  },
  {
    id: 'mye1_q3',
    number: 3,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_annelid',
      caption: 'Specimen Y: Soil-dwelling worm',
    },
    question:
      'Specimen Y belongs to the phylum Annelida. Which structural feature visible in the image confirms it is an annelid and NOT a nematode?',
    options: [
      'Presence of a waterproof chitin exoskeleton',
      'A smooth, unsegmented body tapering to points at both ends',
      'A cylindrical body divided into distinct ring-like segments',
      'A hard spiral calcium carbonate shell secreted by a mantle',
    ],
    correctIndex: 2,
    solvingTip:
      'Contrast the two worm phyla from 0610: Annelids have repeating rings (segments) + clitellum/chaetae, whereas Nematodes are completely smooth and unsegmented.',
    explanation:
      'Annelids (such as earthworms) have bodies divided into clear ring-like segments and possess bristles (chaetae). Nematodes lack segments.',
  },
  {
    id: 'mye1_q4',
    number: 4,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_amphibian',
      caption: 'Vertebrate Specimen Z',
    },
    question:
      'Which row correctly identifies the skin covering and reproduction method of Vertebrate Specimen Z?',
    options: [
      'Dry keratinised scales | Lays leathery-shelled eggs on land',
      'Moist, smooth scale-less skin | Lays jelly-coated eggs in water',
      'Wet overlapping scales | External fertilisation with gills throughout life',
      'Skin with fur | Internal fertilisation and mammary glands',
    ],
    correctIndex: 1,
    solvingTip:
      'Identify the animal first (tree frog = Amphibian), then recall the two classic 0610 markers that separate amphibians from reptiles: moist skin without scales + jelly eggs laid in water.',
    explanation:
      'Specimen Z is an amphibian. Amphibians have moist, smooth skin without scales, lay soft jelly-coated eggs in water, and breathe through lungs and moist skin as adults.',
  },
  {
    id: 'mye1_q5',
    number: 5,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.2',
    question:
      'The binomial name of the domestic cat is Felis catus, and the lion is Panthera leo. What can be deduced from these scientific names?',
    options: [
      'They belong to the same genus and the same species',
      'They belong to the same genus but different species',
      'They belong to different genera and different species',
      'They belong to the same species but different kingdoms',
    ],
    correctIndex: 2,
    solvingTip:
      'Remember Binomial = Genus (first word) + species (second word). Compare both first words (Felis vs Panthera) and both second words (catus vs leo).',
    explanation:
      'Because both the first word (genus: Felis vs Panthera) and the second word (species: catus vs leo) are different, they belong to different genera and different species.',
  },
  {
    id: 'mye1_q6',
    number: 6,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.2',
    stimulus: {
      id: 'svg_dichotomous_leaves',
      caption: 'Use the dichotomous key below to identify Leaf C',
    },
    question:
      'Key: 1(a) Leaf divided into separate leaflets → Fraxinus; 1(b) Single undivided blade → go to 2. 2(a) Parallel veins → Zea; 2(b) Network of branching veins → go to 3. 3(a) Smooth leaf edge → Fagus; 3(b) Toothed (serrated) leaf edge → Betula. What is Leaf C?',
    options: ['Fraxinus', 'Zea', 'Fagus', 'Betula'],
    correctIndex: 3,
    solvingTip:
      'Follow the key step-by-step for Leaf C only: Does C have one undivided blade? Yes → go to 2. Branching veins? Yes → go to 3. Smooth or toothed edge? Look closely at Leaf C’s zigzag edge.',
    explanation:
      'Leaf C has a single undivided blade (1b → 2), branching veins (2b → 3), and a clearly toothed/serrated margin (3b), identifying it as Betula.',
  },
  {
    id: 'mye1_q7',
    number: 7,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.2',
    question:
      'An organism is multicellular, has cell walls made of chitin, lacks chloroplasts, and feeds saprotrophically by secreting enzymes onto decaying bread. Which kingdom does it belong to?',
    options: ['Plants', 'Fungi', 'Protoctists', 'Prokaryotes'],
    correctIndex: 1,
    solvingTip:
      'Spot the two giveaway keywords: "chitin cell walls" and "saprotrophic nutrition" (extracellular digestion with hyphae). Plants have cellulose; bacteria have peptidoglycan.',
    explanation:
      'Fungi have cell walls made of chitin (not cellulose), lack chlorophyll, and feed saprotrophically by secreting enzymes onto dead organic matter and absorbing the soluble products.',
  },

  // =========================================================================
  // TOPIC 2: ORGANISATION OF THE ORGANISM & CELL STRUCTURE (Q8–Q14)
  // =========================================================================
  {
    id: 'mye1_q8',
    number: 8,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.1',
    stimulus: {
      id: 'img_plant_cell',
      caption: '3D Cutaway Model of a Eukaryotic Plant Cell',
    },
    question:
      'In the 3D plant cell shown, what is the primary function of the large translucent blue sac in the interior?',
    options: [
      'Site of aerobic cellular respiration to release ATP',
      'Contains cell sap and maintains turgor pressure against the cell wall',
      'Synthesises proteins by linking amino acids together',
      'Traps sunlight energy using chlorophyll for photosynthesis',
    ],
    correctIndex: 1,
    solvingTip:
      'Identify each 3D organelle by shape and colour: blue fluid-filled sac = Permanent Central Vacuole; green discs = chloroplasts; orange folded rods = mitochondria; purple sphere = nucleus.',
    explanation:
      'The large blue structure is the permanent central vacuole, which stores cell sap (water, sugars, mineral ions) and pushes outward against the cellulose cell wall to keep the cell turgid.',
  },
  {
    id: 'mye1_q9',
    number: 9,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.1',
    stimulus: {
      id: 'img_bacterial_cell',
      caption: '3D Cutaway Model of a Prokaryotic Bacterial Cell',
    },
    question:
      'Looking at the 3D bacterial cell model, which two structures carry genetic DNA without being enclosed in a nuclear membrane?',
    options: [
      'Flagellum and cell wall',
      'Ribosomes and cell membrane',
      'Circular DNA loop (pink) and plasmids (gold rings)',
      'Mitochondria and chloroplasts',
    ],
    correctIndex: 2,
    solvingTip:
      'Prokaryotes (bacteria) have NO nucleus, NO mitochondria, and NO chloroplasts. Their DNA is found as one main circular strand plus tiny extra circular rings called plasmids.',
    explanation:
      'Bacteria lack a true nucleus. Their genetic material consists of a single circular loop of DNA free in the cytoplasm plus small circular rings of DNA called plasmids.',
  },
  {
    id: 'mye1_q10',
    number: 10,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    stimulus: {
      id: 'img_ciliated_cell',
      caption: '3D Tissue Section from the Human Trachea',
    },
    question:
      'How do the two specialised cell types shown in this tracheal lining work together to protect the lungs?',
    options: [
      'Ciliated cells secrete antibodies while goblet cells absorb oxygen',
      'Goblet cells secrete mucus to trap dust/bacteria, and cilia beat to sweep the mucus upward',
      'Goblet cells contract to widen the trachea while cilia produce hydrochloric acid',
      'Ciliated cells carry haemoglobin while goblet cells digest trapped bacteria',
    ],
    correctIndex: 1,
    solvingTip:
      'Notice the two distinct cells in the image: pale droplet-filled Goblet cell (makes sticky mucus) next to pink hair-topped Ciliated cells (wave cilia using ATP from yellow mitochondria).',
    explanation:
      'Goblet cells secrete mucus that traps inhaled dust and pathogens; the hair-like cilia beat rhythmically in coordinated waves to sweep the mucus upward out of the airways.',
  },
  {
    id: 'mye1_q11',
    number: 11,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    stimulus: {
      id: 'img_root_hair_cell',
      caption: '3D Cutaway of a Specialised Plant Root Cell in Soil',
    },
    question:
      'Why does this specialised root hair cell contain many golden mitochondria but zero green chloroplasts?',
    options: [
      'Mitochondria photosynthesise in the dark; chloroplasts are destroyed by soil water',
      'Mitochondria release energy for active transport of mineral ions; no light reaches underground for photosynthesis',
      'Mitochondria store starch; chloroplasts only occur in xylem vessels',
      'Mitochondria pump water by osmosis; chloroplasts would block the cell wall',
    ],
    correctIndex: 1,
    solvingTip:
      'Link organelle to job: active transport of nitrates/magnesium against a gradient needs ATP from mitochondria; roots grow underground in darkness so chloroplasts would be useless.',
    explanation:
      'Mineral ions are absorbed against a concentration gradient by active transport, requiring ATP from aerobic respiration in mitochondria. Roots are underground without sunlight, so they have no chloroplasts.',
  },
  {
    id: 'mye1_q12',
    number: 12,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.3',
    stimulus: {
      id: 'svg_magnification_ruler',
      caption: 'Chloroplast measured from an electron micrograph',
    },
    question:
      'Using the formula A = I ÷ M, what is the actual length of the chloroplast in micrometers (μm)?',
    options: ['0.008 μm', '8.0 μm', '80 μm', '125 μm'],
    correctIndex: 1,
    solvingTip:
      'Step 1: Convert Image size (I) from mm to μm by multiplying by 1000 (32 mm = 32,000 μm). Step 2: Divide by Magnification M (32,000 ÷ 4000).',
    explanation:
      'Convert 32 mm into micrometers: 32 × 1000 = 32,000 μm. Actual size A = I ÷ M = 32,000 ÷ 4000 = 8.0 μm.',
  },
  {
    id: 'mye1_q13',
    number: 13,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    question:
      'Which row correctly arranges structures in order of INCREASING complexity?',
    options: [
      'Organ → Tissue → Cell → Organ system',
      'Cell → Tissue → Organ → Organ system',
      'Tissue → Cell → Organ system → Organ',
      'Cell → Organ → Tissue → Organism',
    ],
    correctIndex: 1,
    solvingTip:
      'Start with the smallest living unit (Cell) → group of similar cells (Tissue) → different tissues working together (Organ) → group of organs (Organ system).',
    explanation:
      'The correct hierarchy of biological organisation from simplest to most complex is Cell → Tissue → Organ → Organ system → Organism.',
  },
  {
    id: 'mye1_q14',
    number: 14,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.1',
    question:
      'Which organelle is responsible for synthesising polypeptides (proteins) and is too small to be seen with a standard school light microscope?',
    options: ['Nucleus', 'Chloroplast', 'Ribosome', 'Permanent vacuole'],
    correctIndex: 2,
    solvingTip:
      'Look for two clues: "protein synthesis" and "only visible under an electron microscope". That uniquely describes ribosomes.',
    explanation:
      'Ribosomes are tiny structures (~20 nm) where amino acids are joined together to make proteins; they require an electron microscope to be seen.',
  },

  // =========================================================================
  // TOPIC 3: MOVEMENT INTO AND OUT OF CELLS (Q15–Q21)
  // =========================================================================
  {
    id: 'mye1_q15',
    number: 15,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'svg_visking_osmosis',
      caption: 'Osmosis experiment using Visking tubing after 30 minutes',
    },
    question:
      'Why did the liquid level inside the capillary tube rise during the 30-minute experiment?',
    options: [
      'Sucrose molecules diffused out of the Visking bag into the beaker',
      'Water molecules moved by osmosis from the beaker (higher water potential) into the sucrose bag (lower water potential)',
      'Water was pumped into the Visking bag by active transport using ATP',
      'Air bubbles expanded inside the capillary tube due to room temperature',
    ],
    correctIndex: 1,
    solvingTip:
      'Compare water potentials: Distilled water outside = higher water potential (Ψ); 20% sucrose inside = lower water potential. Visking tubing lets small water molecules cross, not large sucrose molecules.',
    explanation:
      'Water moves by osmosis across the partially permeable Visking membrane from a region of higher water potential (distilled water) to a region of lower water potential (sucrose solution), increasing the volume inside and pushing liquid up the tube.',
  },
  {
    id: 'mye1_q16',
    number: 16,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'img_rbc_hypotonic',
      caption: 'Red blood cell placed in Solution M',
    },
    question:
      'The image shows what happened to a red blood cell 5 minutes after being placed in Solution M. What is Solution M and why did the cell burst?',
    options: [
      'Concentrated salt solution; water left the cell rapidly',
      'Isotonic plasma; water entered and left at equal rates',
      'Pure distilled water (hypotonic); water entered by osmosis and there is no rigid cell wall to resist bursting',
      'Pure distilled water; active transport pumped salt out until the membrane tore',
    ],
    correctIndex: 2,
    solvingTip:
      'Observe the burst/ruptured spherical red blood cell (lysis). Lysis happens ONLY in hypotonic solution (higher water potential outside), because animal cells have no cellulose cell wall.',
    explanation:
      'In pure water (higher water potential than cytoplasm), water enters the red blood cell by osmosis. Lacking a rigid cell wall, the plasma membrane stretches and bursts (haemolysis).',
  },
  {
    id: 'mye1_q17',
    number: 17,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'img_palisade_hypertonic',
      caption: 'Palisade mesophyll cell immersed in concentrated sucrose solution',
    },
    question:
      'Which biological term describes the condition of the plant cell shown, where the cell membrane has pulled away from the cell wall?',
    options: ['Turgid', 'Plasmolysed', 'Haemolysed', 'Crenated'],
    correctIndex: 1,
    solvingTip:
      'Match the exact syllabus terms: Animal burst = lysis; Animal shrivelled = crenated; Plant swollen = turgid; Plant membrane pulled away from wall = plasmolysed.',
    explanation:
      'When a plant cell loses water by osmosis in a concentrated solution, the vacuole shrinks and the cell membrane pulls away from the rigid cellulose cell wall. This state is called plasmolysis (plasmolysed).',
  },
  {
    id: 'mye1_q18',
    number: 18,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'svg_potato_osmosis_graph',
      caption: 'Graph of potato cylinder mass change after 1 hour in sucrose solutions',
    },
    question:
      'From the graph, what is the concentration of sucrose solution that has the SAME water potential as the potato cell sap?',
    options: ['0.0 mol/dm³', '0.2 mol/dm³', '0.4 mol/dm³', '0.8 mol/dm³'],
    correctIndex: 2,
    solvingTip:
      'When external water potential equals cell sap water potential (isotonic), there is NO net gain or loss of water—so find where the line crosses 0% change in mass!',
    explanation:
      'At 0.4 mol/dm³, the percentage change in mass is 0%, meaning there is no net movement of water by osmosis because the external solution and potato cytoplasm have equal water potential.',
  },
  {
    id: 'mye1_q19',
    number: 19,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'svg_osmosis_turgid_plasmolysed',
      caption: 'Comparison of Plant Cell X and Plant Cell Y',
    },
    question:
      'In Plant Cell Y, what substance fills the space labelled Gap Z between the cellulose cell wall and the shrunken cell membrane?',
    options: [
      'Air from the leaf air spaces',
      'Cell sap leaked from the vacuole',
      'The external concentrated sugar solution',
      'Pure distilled water only',
    ],
    correctIndex: 2,
    solvingTip:
      'Remember two rules from Topic 2 & 3: The cellulose cell wall is FULLY permeable, whereas the cell membrane is partially permeable. So whatever solution is outside passes freely through the wall into Gap Z!',
    explanation:
      'The cellulose cell wall is fully permeable to water and dissolved solutes, so the external concentrated solution passes through the cell wall and fills Gap Z.',
  },
  {
    id: 'mye1_q20',
    number: 20,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.3',
    question:
      'A scientist adds cyanide (a poison that stops aerobic respiration) to a suspension of root hair cells. Uptake of nitrate ions drops almost to zero, while water uptake continues. What does this prove?',
    options: [
      'Nitrate ions enter by diffusion and water enters by active transport',
      'Nitrate ions are absorbed by active transport requiring ATP, whereas water enters passively by osmosis',
      'Both water and nitrate ions require energy from respiration',
      'Cyanide blocks all pores in the cellulose cell wall',
    ],
    correctIndex: 1,
    solvingTip:
      'If stopping respiration stops a process, that process MUST require ATP energy = Active Transport. If a process keeps going without ATP, it is passive (Osmosis/Diffusion).',
    explanation:
      'Active transport uses energy (ATP) from cellular respiration to move ions against a concentration gradient via carrier proteins. Osmosis is passive and does not depend on respiration.',
  },
  {
    id: 'mye1_q21',
    number: 21,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.1',
    question:
      'Which factor will DECREASE the rate of diffusion of oxygen across an alveolar wall?',
    options: [
      'Increasing the alveolar surface area',
      'Increasing the oxygen concentration gradient',
      'Thickening of the alveolar diffusion barrier (longer diffusion distance)',
      'Increasing body temperature slightly',
    ],
    correctIndex: 2,
    solvingTip:
      'Check the 4 factors affecting diffusion rate: Higher SA, steeper gradient, higher temp = FASTER; Greater distance (thicker wall) = SLOWER.',
    explanation:
      'Diffusion slows down as diffusion distance increases because particles must travel farther through the barrier.',
  },

  // =========================================================================
  // TOPIC 4: BIOLOGICAL MOLECULES & FOOD TESTS (Q22–Q27)
  // =========================================================================
  {
    id: 'mye1_q22',
    number: 22,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    stimulus: {
      id: 'svg_food_test_tubes_benedict',
      caption: 'Results of Benedict’s test on four food extracts heated in a water bath',
    },
    question:
      'Which sample contains the HIGHEST concentration of reducing sugar, and which sample contains NONE?',
    options: [
      'Highest: Sample 1 | None: Sample 4',
      'Highest: Sample 4 | None: Sample 1',
      'Highest: Sample 3 | None: Sample 2',
      'Highest: Sample 2 | None: Sample 1',
    ],
    correctIndex: 1,
    solvingTip:
      'Benedict’s is semi-quantitative: Blue (0 sugar) → Green (trace) → Yellow → Orange → Brick-red precipitate (highest concentration).',
    explanation:
      'Sample 4 formed a brick-red precipitate (highest reducing sugar concentration), whereas Sample 1 remained clear blue (negative result, no reducing sugar).',
  },
  {
    id: 'mye1_q23',
    number: 23,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    stimulus: {
      id: 'svg_food_test_panel',
      caption: 'Food test observations recorded for an unknown meal',
    },
    question:
      'Based on the four test-tube results shown, which nutrients are PRESENT in the unknown meal?',
    options: [
      'Fats and starch only',
      'Starch, protein, and vitamin C',
      'Protein and fats only',
      'Reducing sugar, protein, and fats',
    ],
    correctIndex: 1,
    solvingTip:
      'Decode each test one by one: Iodine blue-black = Starch (+); Biuret purple = Protein (+); Ethanol stays clear = Fats (-); DCPIP turns colourless = Vitamin C (+).',
    explanation:
      'Blue-black iodine indicates starch, lilac/purple Biuret indicates protein, and decolourised DCPIP indicates vitamin C. A clear ethanol test means lipids (fats) are absent.',
  },
  {
    id: 'mye1_q24',
    number: 24,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    stimulus: {
      id: 'img_dna_helix',
      caption: '3D Molecular Model of Deoxyribonucleic Acid (DNA)',
    },
    question:
      'A short section of one DNA strand has the base sequence A – C – G – T – A – G. What is the complementary sequence on the opposite strand?',
    options: [
      'A – C – G – T – A – G',
      'T – G – C – A – T – C',
      'G – A – T – C – G – A',
      'C – A – T – G – C – T',
    ],
    correctIndex: 1,
    solvingTip:
      'Apply the 0610 complementary base-pairing rule letter-by-letter: A ↔ T and C ↔ G. Write the partner below each base: A→T, C→G, G→C, T→A, A→T, G→C.',
    explanation:
      'In DNA’s double helix, adenine (A) always pairs with thymine (T), and cytosine (C) always pairs with guanine (G). Therefore A-C-G-T-A-G pairs with T-G-C-A-T-C.',
  },
  {
    id: 'mye1_q25',
    number: 25,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    question:
      'Which chemical elements are always present in ALL proteins, and what are their basic building-block molecules?',
    options: [
      'C, H, O only | Fatty acids and glycerol',
      'C, H, O, N (and often S) | Amino acids',
      'C, H, O, P | Simple sugars (glucose)',
      'C, H, N only | Nucleotides',
    ],
    correctIndex: 1,
    solvingTip:
      'Match molecule → elements → monomer: Carbs (C,H,O → simple sugars); Lipids (C,H,O → 1 glycerol + 3 fatty acids); Proteins (C,H,O,N → amino acids).',
    explanation:
      'Proteins always contain Carbon, Hydrogen, Oxygen, and Nitrogen (often with Sulfur), and are polymers formed from long chains of amino acids.',
  },
  {
    id: 'mye1_q26',
    number: 26,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    question:
      'Which polysaccharide is stored in human liver and muscle cells as an energy reserve, and which forms tough plant cell walls?',
    options: [
      'Stored in animals: Starch | Plant cell wall: Glycogen',
      'Stored in animals: Glycogen | Plant cell wall: Cellulose',
      'Stored in animals: Cellulose | Plant cell wall: Starch',
      'Stored in animals: Maltose | Plant cell wall: Glycogen',
    ],
    correctIndex: 1,
    solvingTip:
      'Keep the three big glucose polymers distinct: Starch = plant storage; Glycogen = animal/fungal storage; Cellulose = plant cell wall strength.',
    explanation:
      'Animals store excess glucose as glycogen in liver and muscle cells, whereas plants use cellulose to build rigid cell walls (and starch for energy storage).',
  },
  {
    id: 'mye1_q27',
    number: 27,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    question:
      'During a practical food test, a student adds cold ethanol to crushed peanut, shakes it, and pours the liquid into cold water. A cloudy white emulsion forms. What does this confirm?',
    options: [
      'Starch is present',
      'Proteins are present',
      'Fats / oils (lipids) are present',
      'Vitamin C is present',
    ],
    correctIndex: 2,
    solvingTip:
      'Lipids dissolve in ethanol but are insoluble in water—when poured into water, tiny fat droplets suspend to form a milky white emulsion.',
    explanation:
      'A milky white emulsion in the ethanol emulsion test confirms the presence of fats or oils (lipids).',
  },

  // =========================================================================
  // TOPIC 5: ENZYMES (Q28–Q33)
  // =========================================================================
  {
    id: 'mye1_q28',
    number: 28,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_temp_curve',
      caption: 'Graph showing human amylase reaction rate from 0 °C to 65 °C',
    },
    question:
      'On the temperature graph, why is the rate of reaction lower at Point P (15 °C) than at Point Q (37 °C)?',
    options: [
      'At 15 °C the enzyme molecules have been permanently denatured',
      'At 15 °C molecules have less kinetic energy, resulting in fewer successful collisions per second',
      'At 15 °C all the starch substrate has already been used up',
      'At 37 °C the enzyme active site melts and enlarges to fit more starch',
    ],
    correctIndex: 1,
    solvingTip:
      'Always distinguish LOW temperature from HIGH temperature: Cold = inactive (low kinetic energy, NOT denatured); Above optimum (~50–60 °C) = denatured (shape changed permanently).',
    explanation:
      'Below the optimum temperature (Point P), enzymes are NOT denatured; molecules simply move more slowly with less kinetic energy, leading to fewer effective enzyme-substrate collisions.',
  },
  {
    id: 'mye1_q29',
    number: 29,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_ph_curves',
      caption: 'Activity curves of two human digestive enzymes, X and Y',
    },
    question:
      'Where in the human alimentary canal are Enzyme X and Enzyme Y most likely to be active?',
    options: [
      'Enzyme X: Small intestine | Enzyme Y: Stomach',
      'Enzyme X: Stomach | Enzyme Y: Small intestine (duodenum)',
      'Enzyme X: Mouth | Enzyme Y: Oesophagus',
      'Enzyme X: Colon | Enzyme Y: Stomach',
    ],
    correctIndex: 1,
    solvingTip:
      'Read the pH peak of each curve: Enzyme X peaks around pH 2 (very acidic = stomach pepsin); Enzyme Y peaks around pH 8 (alkaline = pancreatic enzymes in duodenum).',
    explanation:
      'Enzyme X has an optimum pH of ~2, matching the acidic gastric juice in the stomach (pepsin). Enzyme Y has an optimum pH of ~8, matching the slightly alkaline environment of the small intestine.',
  },
  {
    id: 'mye1_q30',
    number: 30,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_lock_key',
      caption: 'Model of Enzyme J and Substrate K at 37 °C and after heating to 75 °C',
    },
    question:
      'After Enzyme J is heated to 75 °C and cooled back down to 37 °C, it can no longer break down Substrate K. Which statement explains why?',
    options: [
      'Cooling back to 37 °C freezes the substrate so it cannot move',
      'Heating broke bonds in Enzyme J, permanently altering the 3D shape of its active site so Substrate K no longer fits',
      'Substrate K was permanently denatured at 75 °C',
      'Enzyme J was used up during the collision at 75 °C',
    ],
    correctIndex: 1,
    solvingTip:
      'Use the Lock-and-Key vocabulary: High temperature breaks bonds → active site changes shape → active site is no longer complementary to substrate → enzyme is denatured (irreversible).',
    explanation:
      'High temperatures break bonds holding the enzyme’s 3D protein structure, permanently changing the shape of the active site. Substrate K is no longer complementary to the active site, so no enzyme-substrate complexes can form.',
  },
  {
    id: 'mye1_q31',
    number: 31,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_substrate_curve',
      caption: 'Effect of increasing substrate concentration at fixed enzyme concentration',
    },
    question:
      'Why does the graph level off (plateau) in Region N even though more substrate continues to be added?',
    options: [
      'All the enzymes have become denatured by the excess substrate',
      'All enzyme active sites are saturated (fully occupied) at any instant, so enzyme concentration is the limiting factor',
      'The reaction has reached equilibrium and stopped completely',
      'The pH dropped to 1 as more substrate was added',
    ],
    correctIndex: 1,
    solvingTip:
      'At the flat plateau (Region N), the rate is at maximum (NOT zero!). Why can’t it go faster? Every active site is already busy—there are no spare free active sites left.',
    explanation:
      'In Region N, all active sites of the fixed number of enzyme molecules are saturated with substrate molecules, so adding extra substrate cannot increase the rate further.',
  },
  {
    id: 'mye1_q32',
    number: 32,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    question:
      'Which statement accurately defines an enzyme?',
    options: [
      'A carbohydrate molecule that provides energy for metabolic reactions',
      'A protein that functions as a biological catalyst and speeds up reactions without being used up',
      'A lipid that slows down chemical digestion in the stomach',
      'A mineral ion required for haemoglobin formation',
    ],
    correctIndex: 1,
    solvingTip:
      'Every IGCSE definition of an enzyme needs three points: (1) Protein, (2) Biological catalyst (speeds up metabolic reactions), (3) Remains unchanged / not used up.',
    explanation:
      'Enzymes are proteins that act as biological catalysts, speeding up chemical reactions inside living organisms without being permanently altered or consumed.',
  },
  {
    id: 'mye1_q33',
    number: 33,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    question:
      'Why can amylase catalyse the breakdown of starch into maltose, but CANNOT catalyse the breakdown of protein into amino acids?',
    options: [
      'Protein molecules are too small to collide with amylase',
      'The shape of amylase’s active site is only complementary to starch, not protein (enzyme specificity)',
      'Amylase only works inside plant cells, not animal stomachs',
      'Proteins denature amylase immediately on contact',
    ],
    correctIndex: 1,
    solvingTip:
      'One enzyme = one type of substrate. The exact keyword Cambridge examiners look for is "complementary shape of the active site".',
    explanation:
      'Due to enzyme specificity, only a substrate with a complementary shape (starch) can fit into amylase’s active site to form an enzyme-substrate complex.',
  },

  // =========================================================================
  // TOPIC 6: HUMAN NUTRITION & DIGESTIVE SYSTEM (Q34–Q40)
  // =========================================================================
  {
    id: 'mye1_q34',
    number: 34,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.2',
    stimulus: {
      id: 'svg_alimentary_canal_letters',
      caption: 'Human Alimentary Canal and Associated Accessory Organs',
    },
    question:
      'Which letters correctly identify the organ that PRODUCES bile and the organ that STORES bile before releasing it into the duodenum?',
    options: [
      'Produces bile: P | Stores bile: S',
      'Produces bile: Q | Stores bile: R',
      'Produces bile: R | Stores bile: Q',
      'Produces bile: S | Stores bile: T',
    ],
    correctIndex: 1,
    solvingTip:
      'Classic 0610 trap: The LIVER (Q) makes bile; the GALL BLADDER (R) only stores and concentrates it! Never write that the gall bladder produces bile.',
    explanation:
      'Bile is produced by the liver (Q), stored in the gall bladder (R), and released via the bile duct into the duodenum to emulsify fats and neutralise stomach acid.',
  },
  {
    id: 'mye1_q35',
    number: 35,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.3',
    stimulus: {
      id: 'svg_human_tooth_structure',
      caption: 'Vertical Section of a Human Molar Tooth',
    },
    question:
      'Which row correctly names layers A, B, and C in the molar tooth diagram?',
    options: [
      'A: Dentine | B: Enamel | C: Cement',
      'A: Enamel | B: Dentine | C: Pulp cavity',
      'A: Cement | B: Pulp cavity | C: Enamel',
      'A: Enamel | B: Cement | C: Dentine',
    ],
    correctIndex: 1,
    solvingTip:
      'Work from outside inward: A = hardest non-living white outer cap (Enamel); B = softer bone-like layer beneath (Dentine); C = living central cavity with nerves & blood vessels (Pulp cavity); D = root Cement.',
    explanation:
      'Layer A is enamel (hardest substance in the body), Layer B is dentine, Region C is the living pulp cavity containing capillaries and sensory nerves, and D is cement.',
  },
  {
    id: 'mye1_q36',
    number: 36,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.2',
    stimulus: {
      id: 'img_peristalsis_wave',
      caption: 'Food bolus moving down the oesophagus',
    },
    question:
      'How do the circular and longitudinal muscle layers BEHIND the bolus behave to push food forward during peristalsis?',
    options: [
      'Circular muscles relax and longitudinal muscles contract',
      'Circular muscles contract and longitudinal muscles relax, narrowing the lumen behind the bolus',
      'Both circular and longitudinal muscles relax simultaneously',
      'Cilia on the oesophageal lining sweep the bolus downward',
    ],
    correctIndex: 1,
    solvingTip:
      'Visualise squeezing toothpaste: Behind the bolus, circular rings squeeze tight (CONTRACT) to push it forward, while longitudinal muscles RELAX. Ahead of the bolus, circular muscles relax to open the tube.',
    explanation:
      'Peristalsis works by antagonistic muscle waves: behind the bolus, circular muscles contract and longitudinal muscles relax to narrow the lumen and squeeze the bolus forward.',
  },
  {
    id: 'mye1_q37',
    number: 37,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.4',
    stimulus: {
      id: 'svg_villus_labelled_letters',
      caption: 'Structure of a Single Intestinal Villus',
    },
    question:
      'Which digested nutrients are absorbed primarily into structure X (blood capillaries) versus structure Y (lacteal)?',
    options: [
      'Into X: Fatty acids and glycerol | Into Y: Glucose and amino acids',
      'Into X: Glucose and amino acids | Into Y: Fatty acids and glycerol',
      'Into X: Starch and maltose | Into Y: Cellulose fibre',
      'Into X: Undigested proteins | Into Y: Mineral ions and water',
    ],
    correctIndex: 1,
    solvingTip:
      'Separate the two absorption pathways: Water-soluble monomers (glucose, amino acids) → Blood capillaries (X) → hepatic portal vein → liver. Lipids (fatty acids & glycerol) → Lacteal (Y) → lymphatic system.',
    explanation:
      'Glucose and amino acids are absorbed through the one-cell-thick epithelium (W) into the capillary network (X). Fatty acids and glycerol are absorbed into the central lacteal (Y).',
  },
  {
    id: 'mye1_q38',
    number: 38,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.4',
    stimulus: {
      id: 'svg_digestive_ph_profile',
      caption: 'pH recorded in three regions of the alimentary canal',
    },
    question:
      'Why does amylase swallowed from Region 1 (mouth) stop digesting starch when the food bolus enters Region 2 (stomach)?',
    options: [
      'Starch is completely digested in the oesophagus before reaching Region 2',
      'Hydrochloric acid in Region 2 lowers the pH to 2, which denatures salivary amylase',
      'Bile in Region 2 neutralises salivary amylase',
      'Pepsin digests all remaining starch into amino acids',
    ],
    correctIndex: 1,
    solvingTip:
      'Connect Topic 5 (Enzymes & pH) with Topic 6 (Stomach): Salivary amylase works at pH ~7. Region 2 drops to pH 2 because of stomach HCl → extreme acidity denatures amylase’s active site!',
    explanation:
      'Hydrochloric acid in the stomach creates pH ~2, which kills pathogens and provides the optimum pH for pepsin, but denatures salivary amylase.',
  },
  {
    id: 'mye1_q39',
    number: 39,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.3',
    question:
      'What is the role of bile salts in lipid digestion, and is bile an enzyme?',
    options: [
      'Bile is a protease enzyme that digests fats into glycerol',
      'Bile is NOT an enzyme; it physically emulsifies large fat globules into tiny droplets to increase surface area for lipase',
      'Bile is a carbohydrase enzyme that turns fats into glucose',
      'Bile is NOT an enzyme; it converts fatty acids directly into amino acids',
    ],
    correctIndex: 1,
    solvingTip:
      'CRITICAL 0610 rule: Bile contains NO enzymes! Emulsification is MECHANICAL (physical) digestion — breaking large fat drops into smaller droplets for faster lipase action.',
    explanation:
      'Bile contains no enzymes. It emulsifies large fat globules into tiny droplets, greatly increasing the surface area for pancreatic lipase to chemically digest fats into fatty acids and glycerol.',
  },
  {
    id: 'mye1_q40',
    number: 40,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.4',
    question:
      'What is the difference between assimilation and egestion?',
    options: [
      'Assimilation is passing faeces out of the anus; egestion is chewing food in the mouth',
      'Assimilation is the uptake and use of absorbed food molecules by body cells; egestion is passing out undigested food as faeces',
      'Assimilation occurs only in the colon; egestion occurs in the liver',
      'Assimilation breaks down starch; egestion removes urea in urine',
    ],
    correctIndex: 1,
    solvingTip:
      'Recall the 5 stages in order: Ingestion (mouth) → Digestion (breakdown) → Absorption (into blood/lymph in ileum) → Assimilation (used by cells) → Egestion (faeces out of anus).',
    explanation:
      'Assimilation is the incorporation of absorbed nutrients into body cells (e.g. amino acids built into new proteins), whereas egestion is the elimination of undigested dietary fibre/food as faeces through the anus.',
  },
];
