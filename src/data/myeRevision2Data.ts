import { MyeMcqQuestion } from '../types/mye';

export const MYE_REVISION_2_MCQS: MyeMcqQuestion[] = [
  // =========================================================================
  // TOPIC 1: CHARACTERISTICS & CLASSIFICATION OF LIVING ORGANISMS (Q1–Q7)
  // =========================================================================
  {
    id: 'mye2_q1',
    number: 1,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.1',
    question:
      'A biology student measures the increase in DRY MASS of maize seedlings over 14 days rather than their fresh mass. Why is dry mass preferred when measuring growth?',
    options: [
      'Water content fluctuates rapidly depending on soil moisture and transpiration',
      'Dry mass includes oxygen gas absorbed for photosynthesis',
      'Fresh mass only measures root length and ignores stem cells',
      'Dry mass remains constant even when cells divide by mitosis',
    ],
    correctIndex: 0,
    solvingTip:
      'Recall the 0610 syllabus definition of Growth: "a permanent increase in size and dry mass". Think about why water weight can trick an experiment.',
    explanation:
      'Water uptake or loss causes fresh mass to fluctuate temporarily. Drying the organism removes water so dry mass accurately measures permanent gain in organic matter and cell number/size.',
  },
  {
    id: 'mye2_q2',
    number: 2,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_crustacean',
      caption: 'Arthropod Specimen P collected from a rocky shore',
    },
    question:
      'Which diagnostic feature clearly places Specimen P in the subphylum Crustacea rather than Insecta or Arachnida?',
    options: [
      'Presence of 3 pairs of jointed legs on the thorax',
      'Two pairs of antennae and more than 4 pairs of jointed legs',
      'Soft unsegmented body enclosed in a spiral shell',
      'Lack of an exoskeleton and absence of antennae',
    ],
    correctIndex: 1,
    solvingTip:
      'Count antennae on the lobster/crab specimen: Crustaceans are the ONLY arthropod group in IGCSE 0610 with TWO pairs of antennae (one long pair, one short pair) and 5+ pairs of legs.',
    explanation:
      'Crustaceans (lobsters, crabs, woodlice) uniquely possess two pairs of antennae and usually five or more pairs of jointed legs, plus a calcified carapace.',
  },
  {
    id: 'mye2_q3',
    number: 3,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_myriapod',
      caption: 'Arthropod Specimen Q found beneath damp leaf litter',
    },
    question:
      'Specimen Q is a myriapod (centipede). Which set of characteristics describes Specimen Q?',
    options: [
      '3 body sections, 2 pairs of wings, 6 legs',
      'Head and many similar segments, 1 pair of antennae, and 1 pair of legs per segment',
      'Cephalothorax and abdomen, 8 legs, and book lungs',
      'Unsegmented smooth cylindrical body with no legs',
    ],
    correctIndex: 1,
    solvingTip:
      'Look at the repeating body segments in the image: Myriapods have a distinct head with 1 pair of antennae and an elongated segmented body (centipede = 1 pair of legs per segment; millipede = 2 pairs).',
    explanation:
      'Myriapods have many similar body segments and one pair of antennae. Centipedes specifically have one pair of jointed legs attached to each body segment.',
  },
  {
    id: 'mye2_q4',
    number: 4,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_mollusc',
      caption: 'Invertebrate Specimen R',
    },
    question:
      'Specimen R is classified as a mollusc. Which set of features is characteristic of molluscs?',
    options: [
      'Segmented body with chitinous exoskeleton and jointed appendages',
      'Soft, unsegmented body with a muscular foot and a calcium carbonate shell',
      'Segmented cylindrical body with tiny bristles called chaetae',
      'Smooth cylindrical parasitic worm with tapered ends',
    ],
    correctIndex: 1,
    solvingTip:
      'Look closely at the garden snail: Is its body segmented? No! Does it have jointed legs? No! It glides on a soft muscular foot beneath a hard CaCO₃ shell.',
    explanation:
      'Molluscs (snails, slugs, mussels, octopuses) have soft unsegmented bodies with a muscular foot and often a hard shell made of calcium carbonate.',
  },
  {
    id: 'mye2_q5',
    number: 5,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_reptile',
      caption: 'Vertebrate Specimen S',
    },
    question:
      'How are the eggs and skin of Vertebrate Specimen S adapted for surviving exclusively in dry terrestrial habitats?',
    options: [
      'Moist permeable skin and jelly-coated eggs laid in ponds',
      'Dry keratinised waterproof scales and eggs with leathery shells laid on land',
      'Feathers for insulation and hard calcium shells incubated in nests',
      'Slippery overlapping wet scales and external fertilisation',
    ],
    correctIndex: 1,
    solvingTip:
      'Identify Specimen S (green iguana = Reptile). Ask: Why don’t reptiles need water to breed like amphibians? Because waterproof scales prevent drying out and leathery-shelled eggs protect the embryo on land.',
    explanation:
      'Reptiles have dry skin covered with waterproof keratinised scales and lay eggs with tough leathery shells on dry land, preventing water loss.',
  },
  {
    id: 'mye2_q6',
    number: 6,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.3',
    stimulus: {
      id: 'img_bird',
      caption: 'Vertebrate Specimen T',
    },
    question:
      'Which two features are present in Specimen T and help classify it into the class Aves (Birds)?',
    options: [
      'Mammary glands and hair',
      'Feathers and a toothless beak',
      'Gills covered by an operculum and fins',
      'Moist skin without scales and metamorphosis',
    ],
    correctIndex: 1,
    solvingTip:
      'Birds share scaly legs with reptiles, so look for the features UNIQUE to Birds in 0610: feathers, forelimbs modified as wings, toothless beak, and hard calcium-shelled eggs.',
    explanation:
      'Birds (Aves) are endothermic vertebrates covered with feathers, possessing wings, a toothless beak, and laying hard-shelled eggs.',
  },
  {
    id: 'mye2_q7',
    number: 7,
    topic: 1,
    topicName: 'Characteristics & Classification',
    syllabusRef: '0610 Topic 1.2',
    question:
      'A student sees a handwritten binomial name on a biology test: "homo Sapiens". Which two errors did the student make according to binomial nomenclature rules?',
    options: [
      'It should be written in English and include the Kingdom name',
      'The genus name must begin with a capital letter, the species name must be lowercase, and handwritten binomials should be underlined',
      'Both words must be capitalised and put in quotation marks',
      'The species name must come before the genus name',
    ],
    correctIndex: 1,
    solvingTip:
      'Check the 3 formatting rules: (1) Capital Genus, (2) lowercase species, (3) italics in print OR underlined by hand → Homo sapiens (underlined).',
    explanation:
      'The genus name must be capitalised ("Homo"), the species name must be all lowercase ("sapiens"), and handwritten binomial names should be underlined.',
  },

  // =========================================================================
  // TOPIC 2: ORGANISATION OF THE ORGANISM & CELL STRUCTURE (Q8–Q14)
  // =========================================================================
  {
    id: 'mye2_q8',
    number: 8,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.1',
    stimulus: {
      id: 'img_animal_cell',
      caption: '3D Cutaway Model of a Typical Animal Cell',
    },
    question:
      'In this 3D animal cell, what reaction takes place inside the folded orange-red sausage-shaped organelles?',
    options: [
      'Conversion of light energy into glucose (photosynthesis)',
      'Aerobic respiration, releasing ATP energy from glucose',
      'Storage of dilute cell sap to maintain turgor',
      'Synthesis of cellulose fibres for the outer wall',
    ],
    correctIndex: 1,
    solvingTip:
      'Spot the orange bean-shaped organelles with zig-zag folded inner membranes (cristae) — those are always Mitochondria! What is their job? Aerobic respiration.',
    explanation:
      'The orange organelles with folded inner cristae are mitochondria, the site of aerobic respiration which releases energy (ATP) for cell activities.',
  },
  {
    id: 'mye2_q9',
    number: 9,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    stimulus: {
      id: 'img_xylem_vessel',
      caption: '3D Longitudinal Cutaway of a Plant Vascular Tissue',
    },
    question:
      'How is the structure shown adapted for transporting water up a tall tree under high tension?',
    options: [
      'Living cells with companion cells providing ATP for active pumping',
      'Dead, hollow continuous tube with no end walls and thick waterproof lignin rings to prevent collapse',
      'Biconcave cells packed with haemoglobin to bind water molecules',
      'Ciliated walls that sweep mineral ions upward',
    ],
    correctIndex: 1,
    solvingTip:
      'Notice the hollow dead pipe reinforced with spiral woody rings — this is a Xylem vessel. Remember: NO cytoplasm, NO end walls, thick LIGNIN walls.',
    explanation:
      'Xylem vessels are dead hollow tubes with broken-down end walls and thick walls strengthened by waterproof lignin rings/spirals so they do not collapse under transpiration pull.',
  },
  {
    id: 'mye2_q10',
    number: 10,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    stimulus: {
      id: 'img_phloem_cell',
      caption: '3D Cutaway of Phloem Sieve Tube and Adjacent Cell',
    },
    question:
      'Why does each living phloem sieve tube element require an adjacent companion cell packed with mitochondria?',
    options: [
      'The sieve tube has no nucleus and relies on the companion cell to supply ATP for active translocation of sucrose and amino acids',
      'The companion cell synthesises chlorophyll to turn sucrose into starch',
      'The companion cell thickens the sieve plate with waterproof lignin',
      'The sieve tube only transports water downward from roots',
    ],
    correctIndex: 0,
    solvingTip:
      'Compare the two cells in the cutaway: the left tube has a perforated sieve plate and almost empty lumen; the right companion cell has a purple nucleus + golden mitochondria to supply ATP.',
    explanation:
      'Mature sieve tube elements lose their nucleus and most organelles to allow mass flow of sap, so the nucleated companion cell generates ATP for active loading of sucrose and amino acids.',
  },
  {
    id: 'mye2_q11',
    number: 11,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    stimulus: {
      id: 'img_guard_cells',
      caption: '3D Model of Paired Epidermal Cells on a Leaf Underside',
    },
    question:
      'How do these paired cells open the central pore (stoma) during bright daylight?',
    options: [
      'They lose water by osmosis, become flaccid, and pull apart',
      'They absorb water by osmosis, become turgid, and their thinner outer walls stretch more than their thicker inner walls, curving outward',
      'They digest the cellulose wall between them using cellulase',
      'They contract using actin and myosin filaments',
    ],
    correctIndex: 1,
    solvingTip:
      'Look at the two curved kidney-shaped Guard Cells: they have chloroplasts (unlike other epidermal cells) and unevenly thickened walls (thick inner pore wall, thin outer wall) so swelling bends them open!',
    explanation:
      'When guard cells gain water by osmosis and become turgid, the thin flexible outer walls stretch more than the thick inelastic inner walls, causing the cells to bow outward and open the stoma.',
  },
  {
    id: 'mye2_q12',
    number: 12,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    stimulus: {
      id: 'img_sperm_cell',
      caption: '3D Cutaway of a Human Male Gamete',
    },
    question:
      'Which combination correctly matches the cap at the tip of the head and the spiralled structures in the midpiece to their functions?',
    options: [
      'Tip cap: Nucleus (stores glycogen) | Midpiece: Chloroplasts (make glucose)',
      'Tip cap: Acrosome (enzymes to digest egg jelly coat) | Midpiece: Mitochondria (release ATP for swimming)',
      'Tip cap: Vacuole (maintains turgor) | Midpiece: Ribosomes (digest sperm tail)',
      'Tip cap: Cell wall (protects DNA) | Midpiece: Plasmids (speed up mitosis)',
    ],
    correctIndex: 1,
    solvingTip:
      'Read the 3 zones of a sperm cell from front to back: Head tip = Acrosome (enzymes) + Haploid Nucleus (23 chromosomes); Midpiece = Mitochondria spiral (ATP); Tail = Flagellum (swimming).',
    explanation:
      'The acrosome at the tip contains digestive enzymes to penetrate the ovum’s jelly coat, while abundant mitochondria in the midpiece provide ATP energy for flagellum movement.',
  },
  {
    id: 'mye2_q13',
    number: 13,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.3',
    question:
      'A human red blood cell has an actual diameter of 7.5 μm. If it is photographed at a magnification of ×2000, what will its diameter be in the photograph (in mm)?',
    options: ['1.5 mm', '15 mm', '150 mm', '0.375 mm'],
    correctIndex: 1,
    solvingTip:
      'Use I = A × M: First multiply 7.5 μm × 2000 = 15,000 μm. Then convert μm to mm by dividing by 1000!',
    explanation:
      'Image size I = A × M = 7.5 μm × 2000 = 15,000 μm. Dividing by 1000 converts micrometers to millimetres: 15,000 ÷ 1000 = 15 mm.',
  },
  {
    id: 'mye2_q14',
    number: 14,
    topic: 2,
    topicName: 'Cell Structure & Organisation',
    syllabusRef: '0610 Topic 2.2',
    question:
      'Which statement explains why muscle cells and motor neurones have very different shapes even though they come from the same mammal?',
    options: [
      'Muscle cells contain animal DNA while motor neurones contain bacterial plasmids',
      'Cells become specialised (differentiated) with specific structures adapted to their different functions',
      'Motor neurones lack a cell membrane so impulses can escape rapidly',
      'Muscle cells have a cellulose cell wall to prevent over-stretching',
    ],
    correctIndex: 1,
    solvingTip:
      'Both cells have the same DNA in the same organism, but during development they differentiate so their structure matches their function.',
    explanation:
      'Multicellular organisms undergo cell specialisation: muscle cells elongate and pack with contractile filaments and mitochondria, while motor neurones grow long insulated axons to conduct nerve impulses.',
  },

  // =========================================================================
  // TOPIC 3: MOVEMENT INTO AND OUT OF CELLS (Q15–Q21)
  // =========================================================================
  {
    id: 'mye2_q15',
    number: 15,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'img_rbc_hypertonic',
      caption: 'Red blood cell placed in Solution Q',
    },
    question:
      'What happened to this red blood cell after immersion in Solution Q, and why?',
    options: [
      'It became turgid because Solution Q had a higher water potential than the cell',
      'It became crenated (shrivelled) because water moved out of the cell by osmosis into a solution of lower water potential',
      'It underwent lysis because active transport pumped sodium ions into the cell',
      'It remained normal because Solution Q was isotonic with blood plasma',
    ],
    correctIndex: 1,
    solvingTip:
      'Look at the spiky, shrivelled shape: water has LEFT the red blood cell because Solution Q is concentrated (hypertonic / lower water potential). The 0610 term for a shrivelled RBC is "crenated".',
    explanation:
      'Solution Q has a lower water potential (more concentrated) than the red blood cell cytoplasm, so water exits by osmosis down a water potential gradient, causing the cell to shrink and crenated.',
  },
  {
    id: 'mye2_q16',
    number: 16,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'img_palisade_hypotonic',
      caption: 'Palisade mesophyll cell immersed in pure distilled water',
    },
    question:
      'Why does this palisade mesophyll cell NOT burst in pure water, whereas a red blood cell placed in pure water bursts?',
    options: [
      'Chloroplasts pump excess water out of the plant cell using light energy',
      'The tough, rigid cellulose cell wall exerts inward wall pressure once the vacuole swells, preventing lysis',
      'Plant cell membranes are completely impermeable to water molecules',
      'The large vacuole converts incoming water into solid starch',
    ],
    correctIndex: 1,
    solvingTip:
      'Compare Plant vs Animal in hypotonic water: BOTH take in water by osmosis, but Plant has a rigid cellulose cell wall that limits expansion and builds turgor pressure instead of bursting.',
    explanation:
      'As water enters by osmosis, the vacuole swells and presses the cytoplasm against the rigid cellulose cell wall, which resists further expansion so the cell becomes turgid without bursting.',
  },
  {
    id: 'mye2_q17',
    number: 17,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'img_rbc_isotonic',
      caption: 'Red blood cell suspended in hospital saline drip',
    },
    question:
      'Why must intravenous saline drips given to patients have the SAME water potential as blood plasma (isotonic)?',
    options: [
      'So water moves out of red blood cells rapidly to sterilise the blood',
      'So there is no net movement of water into or out of red blood cells, preventing lysis or crenation',
      'So red blood cells swell into spheres to carry double the oxygen',
      'So active transport stops completely inside blood capillaries',
    ],
    correctIndex: 1,
    solvingTip:
      'Equal water potential (isotonic) = equal rate of water entering and leaving = ZERO net osmosis, keeping red blood cells in their healthy biconcave disc shape.',
    explanation:
      'An isotonic drip ensures water enters and leaves red blood cells at equal rates (no net osmosis), preventing dangerous bursting (lysis) or shrivelling (crenation).',
  },
  {
    id: 'mye2_q18',
    number: 18,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    stimulus: {
      id: 'svg_potato_osmosis_graph',
      caption: 'Change in mass of potato strips across sucrose concentrations',
    },
    question:
      'According to the graph, what happened to the potato strip placed in 0.8 mol/dm³ sucrose solution?',
    options: [
      'It gained mass by about 15% because water entered its cells by osmosis',
      'It lost mass by about 16% because water left its cells by osmosis down a water potential gradient',
      'It showed no change in mass because the membrane was impermeable to water',
      'It burst because the sucrose concentration was higher than the cell sap',
    ],
    correctIndex: 1,
    solvingTip:
      'Locate 0.8 on the horizontal axis, move down to the blue curve, and read the vertical axis (~ -16%). Negative % change in mass means water LEFT the potato by osmosis.',
    explanation:
      'At 0.8 mol/dm³, the curve is around -16%, showing that the external sucrose solution had a lower water potential than the potato cells, so water moved out by osmosis.',
  },
  {
    id: 'mye2_q19',
    number: 19,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.3',
    question:
      'In the small intestine (ileum), glucose continues to be absorbed into epithelial cells even when the glucose concentration in the blood is HIGHER than in the gut lumen. Which process is responsible?',
    options: [
      'Osmosis',
      'Simple diffusion',
      'Active transport',
      'Evaporation',
    ],
    correctIndex: 2,
    solvingTip:
      'Spot the direction: moving from LOWER concentration (lumen) to HIGHER concentration (inside cells/blood) = AGAINST the concentration gradient → Active transport!',
    explanation:
      'Moving dissolved glucose against a concentration gradient (low → high) across a cell membrane requires carrier proteins and ATP energy from respiration: active transport.',
  },
  {
    id: 'mye2_q20',
    number: 20,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.1',
    question:
      'Which statement correctly describes the energy source and net direction of simple diffusion?',
    options: [
      'Uses ATP from mitochondria; moves from low to high concentration',
      'Uses kinetic energy of random particle movement (no ATP); net movement is from high to low concentration',
      'Uses energy from sunlight; moves only water molecules through a partially permeable membrane',
      'Uses carrier proteins and ATP; moves ions down a concentration gradient',
    ],
    correctIndex: 1,
    solvingTip:
      'Diffusion is passive (driven by random kinetic motion, NO cellular ATP required) and moves particles DOWN a concentration gradient (high → low).',
    explanation:
      'Diffusion is the net movement of particles from a region of higher concentration to lower concentration down a concentration gradient as a result of their random movement.',
  },
  {
    id: 'mye2_q21',
    number: 21,
    topic: 3,
    topicName: 'Movement of Substances',
    syllabusRef: '0610 Topic 3.2',
    question:
      'In Cambridge 0610 exam mark schemes, which phrase MUST replace "higher water concentration" when explaining osmosis?',
    options: [
      'Stronger water pressure',
      'Higher water potential',
      'Thicker water density',
      'Higher sugar gradient',
    ],
    correctIndex: 1,
    solvingTip:
      'Always write the exact 0610 syllabus phrase: "from a region of higher water potential to a region of lower water potential, through a partially permeable membrane".',
    explanation:
      'Cambridge 0610 specifies using the term "water potential" (higher water potential → lower water potential) rather than "water concentration".',
  },

  // =========================================================================
  // TOPIC 4: BIOLOGICAL MOLECULES & FOOD TESTS (Q22–Q27)
  // =========================================================================
  {
    id: 'mye2_q22',
    number: 22,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    stimulus: {
      id: 'svg_food_test_tubes_benedict',
      caption: 'Benedict’s test results after boiling for 4 minutes',
    },
    question:
      'A student tests pure sucrose solution (a non-reducing sugar) using Benedict’s reagent and heats it at 90 °C. Which tube shows the expected result?',
    options: ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4'],
    correctIndex: 0,
    solvingTip:
      'Watch out for the classic 0610 practical trap: Sucrose is a NON-reducing sugar, so Benedict’s solution gives a NEGATIVE result (stays blue) unless hydrolysed first!',
    explanation:
      'Benedict’s test only detects reducing sugars (such as glucose and maltose). Sucrose is a non-reducing sugar, so the mixture remains blue (Sample 1).',
  },
  {
    id: 'mye2_q23',
    number: 23,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    stimulus: {
      id: 'img_dna_helix',
      caption: '3D Molecular Structure of DNA',
    },
    question:
      'A DNA molecule contains 28% Adenine (A) bases. What percentage of Guanine (G) bases does this DNA molecule contain?',
    options: ['28%', '22%', '44%', '56%'],
    correctIndex: 1,
    solvingTip:
      'Use complementary base pairing math: A = T, so A + T = 28% + 28% = 56%. Subtract from 100%: C + G = 100% − 56% = 44%. Since C = G, divide 44% by 2!',
    explanation:
      'Because A pairs with T, %T = 28%, making A + T = 56%. The remaining 44% is shared equally between C and G, so Guanine = 44% ÷ 2 = 22%.',
  },
  {
    id: 'mye2_q24',
    number: 24,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    question:
      'Which biological molecule is built from ONE glycerol molecule joined to THREE fatty acid molecules?',
    options: ['Starch', 'Protein', 'Fat / Oil (Triglyceride lipid)', 'DNA'],
    correctIndex: 2,
    solvingTip:
      '1 glycerol + 3 fatty acids = 1 triglyceride (fat/oil). Note that lipids contain C, H, and O only (with much less oxygen than carbohydrates).',
    explanation:
      'Fats and oils (lipids) are composed of basic units consisting of one glycerol molecule bonded to three fatty acid molecules.',
  },
  {
    id: 'mye2_q25',
    number: 25,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    question:
      'Which reagent is added to test for PROTEIN in egg white, and what colour indicates a positive result?',
    options: [
      'Iodine solution → turns blue-black',
      'Biuret reagent (KOH + CuSO₄) → turns lilac / purple',
      'Benedict’s solution + heat → turns brick-red',
      'DCPIP solution → turns colourless',
    ],
    correctIndex: 1,
    solvingTip:
      'Match test → positive colour: Starch = Iodine (blue-black); Protein = Biuret (lilac/purple, NO heat); Reducing sugar = Benedict’s + heat (brick-red); Vitamin C = DCPIP (colourless).',
    explanation:
      'The Biuret test turns from pale blue to lilac/purple in the presence of peptide bonds found in proteins, without needing heat.',
  },
  {
    id: 'mye2_q26',
    number: 26,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    question:
      'Why does water play an essential role as a solvent inside living organisms?',
    options: [
      'It reacts directly with starch to turn it into fatty acids',
      'It dissolves ions, glucose, amino acids, and urea so they can be transported in blood/phloem and react in cytoplasm',
      'It provides more chemical energy per gram than fats',
      'It replaces chlorophyll inside guard cells',
    ],
    correctIndex: 1,
    solvingTip:
      'In 0610 Topic 4.1, water is needed as a solvent for: (1) metabolic reactions in cytoplasm, (2) transport of dissolved substances in blood plasma & phloem/xylem, and (3) excretion of urea.',
    explanation:
      'Water acts as a biological solvent allowing metabolic chemical reactions in the cytoplasm and transport of dissolved nutrients and waste products.',
  },
  {
    id: 'mye2_q27',
    number: 27,
    topic: 4,
    topicName: 'Biological Molecules',
    syllabusRef: '0610 Topic 4.1',
    question:
      'What determines the specific 3D shape and function of an enzyme or antibody protein?',
    options: [
      'The order of fatty acids attached to glycerol',
      'The specific sequence of amino acids along the polypeptide chain',
      'The number of glucose rings in cellulose',
      'The amount of iodine absorbed by the cell',
    ],
    correctIndex: 1,
    solvingTip:
      'DNA base sequence → Amino acid sequence → Specific 3D folding → Specific active site / binding shape.',
    explanation:
      'Different sequences of amino acids cause polypeptide chains to fold into unique 3D shapes, determining the specific active site of enzymes or binding site of antibodies.',
  },

  // =========================================================================
  // TOPIC 5: ENZYMES (Q28–Q33)
  // =========================================================================
  {
    id: 'mye2_q28',
    number: 28,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_temp_curve',
      caption: 'Amylase activity measured at temperatures from 0 °C to 65 °C',
    },
    question:
      'Compare Point P (15 °C) and Point R (52 °C). Both have the same reaction rate on the graph, yet what happens if BOTH test tubes are brought back to 37 °C?',
    options: [
      'Both tubes regain maximum rate at 37 °C',
      'Tube P speeds up to maximum rate at 37 °C; Tube R stays permanently low/inactive because most enzyme molecules were denatured at 52 °C',
      'Tube R speeds up while Tube P remains frozen',
      'Neither tube shows any activity at 37 °C',
    ],
    correctIndex: 1,
    solvingTip:
      'Cold (15 °C) is REVERSIBLE (molecules just moved slowly); High heat (52 °C) is IRREVERSIBLE denaturation (bonds broke and active sites changed shape).',
    explanation:
      'Cooling only lowers kinetic energy reversibly—warming Tube P back to 37 °C restores maximum rate. At 52 °C (Tube R), most enzyme active sites have been permanently denatured.',
  },
  {
    id: 'mye2_q29',
    number: 29,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_ph_curves',
      caption: 'pH profiles of Enzyme X and Enzyme Y',
    },
    question:
      'At pH 7, why is the activity of Enzyme X zero?',
    options: [
      'Enzyme X is only produced in the colon',
      'Extreme departure from Enzyme X’s acidic optimum pH alters charges/bonds and denatures its active site',
      'At pH 7 there is no water present for hydrolysis',
      'Enzyme Y digests Enzyme X at pH 7',
    ],
    correctIndex: 1,
    solvingTip:
      'Just like extreme heat, extreme pH away from an enzyme’s optimum disrupts ionic bonds holding the active site shape → Denaturation!',
    explanation:
      'Enzyme X has an optimum pH of ~2. Placing it at pH 7 alters the active site shape (denaturation) so its substrate can no longer bind.',
  },
  {
    id: 'mye2_q30',
    number: 30,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_lock_key',
      caption: 'Lock-and-Key mechanism for Enzyme J',
    },
    question:
      'In the Lock-and-Key hypothesis, what happens immediately after Substrate K binds to Enzyme J at 37 °C?',
    options: [
      'Enzyme J turns permanently into Substrate K',
      'An enzyme-substrate complex forms, Substrate K is converted into products, and Enzyme J is released unchanged to be reused',
      'Enzyme J is destroyed once one molecule of product forms',
      'The active site expands to fit all types of biological molecules',
    ],
    correctIndex: 1,
    solvingTip:
      'Trace the 3-step Lock & Key sequence: (1) Substrate fits complementary active site → (2) Enzyme-substrate complex → (3) Products released & enzyme reused unchanged.',
    explanation:
      'Substrate K fits into the complementary active site of Enzyme J forming an enzyme-substrate complex; products are released while Enzyme J remains unchanged.',
  },
  {
    id: 'mye2_q31',
    number: 31,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    stimulus: {
      id: 'svg_enzyme_substrate_curve',
      caption: 'Rate of enzyme reaction vs substrate concentration',
    },
    question:
      'What is the limiting factor in Region M (left side of the curve), and what happens if MORE ENZYME is added in Region N?',
    options: [
      'Limiting factor in M: Temperature | Adding enzyme in N lowers the rate',
      'Limiting factor in M: Substrate concentration | Adding enzyme in N increases the maximum rate',
      'Limiting factor in M: Enzyme concentration | Adding enzyme in N has no effect',
      'Limiting factor in M: pH | Adding enzyme in N denatures the substrate',
    ],
    correctIndex: 1,
    solvingTip:
      'Whatever is on the X-axis (Substrate Concentration) is the limiting factor while the line is STILL RISING (Region M). Once flat (Region N), enzyme concentration limits the rate—so adding more enzyme raises the plateau!',
    explanation:
      'In Region M, increasing substrate increases the rate, proving substrate concentration is limiting. In Region N, enzyme active sites are saturated, so adding more enzyme increases the rate.',
  },
  {
    id: 'mye2_q32',
    number: 32,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    question:
      'A student tests catalase enzyme from potato cubes with hydrogen peroxide (H₂O₂) at 37 °C and measures oxygen gas volume every 30 seconds. Which control setup proves the enzyme (and not potato starch) caused the oxygen bubbles?',
    options: [
      'Use larger potato cubes at 37 °C',
      'Boil the potato cubes for 10 minutes first to denature catalase, then cool and add H₂O₂',
      'Add iodine solution to the fresh potato cubes',
      'Replace hydrogen peroxide with pure Benedict’s solution',
    ],
    correctIndex: 1,
    solvingTip:
      'The standard IGCSE Paper 6 enzyme control uses BOILED enzyme/tissue (denatured protein) keeping everything else identical.',
    explanation:
      'Boiling denatures catalase while leaving non-protein components intact; zero oxygen bubbles in the boiled control confirms an active protein enzyme caused the reaction.',
  },
  {
    id: 'mye2_q33',
    number: 33,
    topic: 5,
    topicName: 'Enzymes',
    syllabusRef: '0610 Topic 5.1',
    question:
      'Why does the rate of an enzyme-catalysed reaction increase as temperature rises from 10 °C to 35 °C?',
    options: [
      'The enzyme molecules denature to open wider active sites',
      'Particles gain kinetic energy, move faster, and collide more frequently with enough energy to form enzyme-substrate complexes',
      'More substrate molecules are created by heat energy',
      'The pH becomes more acidic at higher temperatures',
    ],
    correctIndex: 1,
    solvingTip:
      'Always use collision-theory words in 0610 enzyme answers: "more kinetic energy → faster movement → more frequent effective collisions per second → more enzyme-substrate complexes".',
    explanation:
      'Higher temperature increases kinetic energy of both enzyme and substrate molecules, increasing collision frequency and the formation of enzyme-substrate complexes.',
  },

  // =========================================================================
  // TOPIC 6: HUMAN NUTRITION & DIGESTIVE SYSTEM (Q34–Q40)
  // =========================================================================
  {
    id: 'mye2_q34',
    number: 34,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.2',
    stimulus: {
      id: 'svg_alimentary_canal_letters',
      caption: 'Human Alimentary Canal and Accessory Glands',
    },
    question:
      'Which letter identifies the organ that secretes amylase, trypsin, and lipase into the duodenum, and which letter identifies the organ that reabsorbs most remaining water from undigested waste?',
    options: [
      'Secretes enzymes: P | Reabsorbs water: R',
      'Secretes enzymes: S | Reabsorbs water: U',
      'Secretes enzymes: Q | Reabsorbs water: T',
      'Secretes enzymes: S | Reabsorbs water: P',
    ],
    correctIndex: 1,
    solvingTip:
      'Match functions to letters: S = Pancreas (pancreatic juice with amylase, trypsin, lipase); U = Colon / Large intestine (water reabsorption).',
    explanation:
      'The pancreas (S) secretes pancreatic juice containing amylase, trypsin, and lipase into the duodenum. The colon (U) absorbs remaining water from undigested food.',
  },
  {
    id: 'mye2_q35',
    number: 35,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.3',
    stimulus: {
      id: 'svg_human_tooth_structure',
      caption: 'Cross-section of a Human Tooth',
    },
    question:
      'How do bacteria on unbrushed teeth cause tooth decay (dental caries) through Layers A and B?',
    options: [
      'Bacteria secrete alkaline bile that dissolves enamel',
      'Bacteria respire sugars anaerobically and produce lactic acid, which dissolves calcium salts in enamel (A) and dentine (B)',
      'Bacteria photosynthesise using sugar and block blood flow in Layer D',
      'Bacteria chew directly through the enamel with tiny teeth',
    ],
    correctIndex: 1,
    solvingTip:
      'Remember the plaque decay chain: Sugary food + Plaque bacteria → Acid produced by bacterial respiration → Dissolves enamel (A) → reaches dentine (B) → infects pulp nerves (C).',
    explanation:
      'Plaque bacteria feed on sugars in the mouth and produce acids during respiration; the acid dissolves mineral salts in enamel (A) and dentine (B), exposing the pulp cavity (C).',
  },
  {
    id: 'mye2_q36',
    number: 36,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.4',
    stimulus: {
      id: 'img_villus_cutaway',
      caption: '3D Cutaway of an Intestinal Villus',
    },
    question:
      'Which combination of structural features makes the ileum wall extremely efficient at absorbing digested food?',
    options: [
      'Thick keratinised epithelium, no blood supply, and cilia',
      'Millions of villi with microvilli (huge surface area), one-cell-thick epithelium (short diffusion distance), dense capillaries, and a lacteal',
      'Impermeable lignin rings and guard cells',
      'Strong acidic gastric pits that secrete pepsin',
    ],
    correctIndex: 1,
    solvingTip:
      'Think of the 4 classic 0610 villus mark-scheme points: (1) Large surface area (villi + microvilli), (2) Thin 1-cell wall, (3) Dense capillary network maintaining gradient, (4) Lacteal for fats.',
    explanation:
      'Villi and microvilli maximise surface area, the single-cell-thick wall minimises diffusion distance, and dense capillaries plus the lacteal rapidly transport absorbed nutrients away to maintain steep concentration gradients.',
  },
  {
    id: 'mye2_q37',
    number: 37,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.4',
    stimulus: {
      id: 'svg_digestive_ph_profile',
      caption: 'pH changes along three sequential regions of the gut',
    },
    question:
      'Why does the pH rise sharply from pH 2 in Region 2 to pH 8.5 in Region 3?',
    options: [
      'Salivary glands inject neutral mucus directly into Region 3',
      'Alkaline bile and pancreatic hydrogencarbonate neutralise the acidic chyme entering the duodenum',
      'Pepsin turns hydrochloric acid into amino acids',
      'Water absorbed in Region 3 turns the acid into fat droplets',
    ],
    correctIndex: 1,
    solvingTip:
      'Acidic chyme leaves the stomach (Region 2) and enters the duodenum (Region 3). Two alkaline secretions neutralise it: Bile + Pancreatic juice (rich in hydrogencarbonate).',
    explanation:
      'Alkaline bile from the liver/gall bladder and hydrogencarbonate ions in pancreatic juice neutralise stomach hydrochloric acid, creating pH ~8 for pancreatic enzymes.',
  },
  {
    id: 'mye2_q38',
    number: 38,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.3',
    question:
      'Where is MALTASE located in the human digestive system, and what reaction does it catalyse?',
    options: [
      'In the stomach; digests proteins into polypeptides',
      'On the membranes of epithelial cells lining the small intestine; breaks down maltose into glucose',
      'In the pancreas; breaks down lipids into fatty acids',
      'In the mouth; converts cellulose into starch',
    ],
    correctIndex: 1,
    solvingTip:
      'Trace starch digestion in two steps: Step 1 (Mouth & Duodenum): Amylase breaks starch → maltose. Step 2 (Small intestine epithelial membranes): Maltase breaks maltose → glucose!',
    explanation:
      'Maltase is bound to the membranes of the epithelial cells lining the villi of the small intestine and hydrolyses maltose molecules into glucose.',
  },
  {
    id: 'mye2_q39',
    number: 39,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.2',
    question:
      'Which blood vessel carries newly absorbed glucose and amino acids directly from the small intestine to the liver?',
    options: [
      'Aorta',
      'Pulmonary vein',
      'Hepatic portal vein',
      'Renal artery',
    ],
    correctIndex: 2,
    solvingTip:
      '"Hepatic" = Liver; "Portal" = vessel connecting two capillary beds (gut villi → liver).',
    explanation:
      'The hepatic portal vein transports absorbed glucose and amino acids from the capillaries of the small intestine directly to the liver for assimilation and regulation.',
  },
  {
    id: 'mye2_q40',
    number: 40,
    topic: 6,
    topicName: 'Human Digestive System',
    syllabusRef: '0610 Topic 7.1',
    question:
      'Compare mechanical (physical) digestion and chemical digestion. Which example is ONLY mechanical digestion?',
    options: [
      'Pepsin breaking protein chains into shorter polypeptides in the stomach',
      'Chewing food with molar teeth and churning by stomach muscles to reduce food piece size without changing molecules chemically',
      'Salivary amylase hydrolysing starch into maltose',
      'Lipase breaking fat droplets into fatty acids and glycerol',
    ],
    correctIndex: 1,
    solvingTip:
      'Mechanical/Physical = smaller pieces, larger surface area, NO new chemical substances formed (teeth, stomach churning, bile emulsification). Chemical = insoluble large molecules broken into soluble small molecules by enzymes.',
    explanation:
      'Chewing by teeth and churning by stomach muscles break food into smaller pieces to increase surface area for enzymes without altering the chemical structure of molecules.',
  },
];
