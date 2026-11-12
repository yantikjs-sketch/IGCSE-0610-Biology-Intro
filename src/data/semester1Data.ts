// Cambridge IGCSE Biology (0610) - Year 9 Semester 1 Comprehensive Revision Data

export interface CharacteristicOfLife {
  id: string;
  letter: string;
  name: string;
  syllabusDefinition: string;
  plantExample: string;
  animalExample: string;
  examTip: string;
}

export interface CellOrganelleInfo {
  name: string;
  presentIn: 'Both' | 'Plant Only' | 'Bacterial & Plant/Animal';
  description: string;
  function: string;
  examTip: string;
}

export interface SpecializedCellInfo {
  name: string;
  system: string;
  adaptations: string[];
  function: string;
  organism: 'Animal' | 'Plant';
  diagramIcon?: string;
  keyExamFact: string;
}

export interface ArthropodGroup {
  id: string;
  name: string;
  scientificGroup: string;
  bodyRegions: string;
  pairsOfLegs: string;
  wings: string;
  antennae: string;
  eyesAndSensory: string;
  breathing: string;
  examples: string[];
  keyFeatures: string;
  examTip: string;
}

export interface InvertebratePhylum {
  name: string;
  commonName: string;
  bodyPlan: string;
  segmentation: string;
  limbsAndLocomotion: string;
  shellOrCuticle: string;
  examples: string[];
  examIdentifier: string;
}

export interface VertebrateClass {
  name: string;
  bodyCovering: string;
  thermoregulation: string;
  reproduction: string;
  breathing: string;
  limbs: string;
  examples: string[];
  keyExamPoint: string;
}

export interface MovementSubstanceInfo {
  type: 'Diffusion' | 'Osmosis' | 'Active Transport';
  definition: string;
  energyRequired: boolean;
  direction: string;
  membraneRequired: string;
  factors: string[];
  biologicalExamples: string[];
  examPitfall: string;
}

export interface FoodTestInfo {
  nutrient: string;
  reagent: string;
  method: string;
  needsHeat: boolean;
  initialColor: string;
  positiveColor: string;
  negativeColor: string;
  sampleFoods: string[];
  examNote: string;
}

export interface EnzymePracticalInfo {
  title: string;
  enzyme: string;
  substrate: string;
  independentVariable: string;
  dependentVariable: string;
  controlledVariables: string[];
  method: string[];
  expectedResults: string;
  sourcesOfErrorAndImprovements: string[];
}

// ============================================================================
// 1. CHARACTERISTICS OF LIVING THINGS (MRS GREN)
// ============================================================================
export const MRS_GREN: CharacteristicOfLife[] = [
  {
    id: 'movement',
    letter: 'M',
    name: 'Movement',
    syllabusDefinition: 'An action by an organism or part of an organism causing a change of position or place.',
    plantExample: 'Shoots growing slowly towards sunlight (phototropism); flowers opening and closing.',
    animalExample: 'Muscles contracting to walk, fly, swim, or escape predators.',
    examTip: 'Plants do move! Do not write that plants cannot move; they move parts of their body towards light or gravity.',
  },
  {
    id: 'respiration',
    letter: 'R',
    name: 'Respiration',
    syllabusDefinition: 'The chemical reactions in cells that break down nutrient molecules and release energy for metabolism.',
    plantExample: 'Plant cells break down glucose during aerobic respiration in mitochondria 24/7.',
    animalExample: 'Human cells use oxygen to oxidize glucose, releasing energy for muscle contraction, active transport, and protein synthesis.',
    examTip: 'NEVER confuse respiration with breathing! Breathing (ventilation) is gas exchange; respiration is an intracellular chemical release of energy.',
  },
  {
    id: 'sensitivity',
    letter: 'S',
    name: 'Sensitivity',
    syllabusDefinition: 'The ability to detect and respond to changes in the internal or external environment.',
    plantExample: 'Roots detect gravity (geotropism) and grow downwards; shoots detect light (phototropism) and grow upwards.',
    animalExample: 'Sense organs (eyes, ears, skin) detect light, sound, temperature and send nerve impulses.',
    examTip: 'Use syllabus terms: "stimulus" (the detected change) and "response" (the resulting action).',
  },
  {
    id: 'growth',
    letter: 'G',
    name: 'Growth',
    syllabusDefinition: 'A permanent increase in size and dry mass.',
    plantExample: 'Seedlings increase cell number by mitosis and absorb water/nutrients to permanently increase biomass.',
    animalExample: 'A baby growing into an adult through cell division and tissue development.',
    examTip: 'Always mention "dry mass" (mass without water) in the definition to get full marks on IGCSE Paper 2 & 4.',
  },
  {
    id: 'reproduction',
    letter: 'R',
    name: 'Reproduction',
    syllabusDefinition: 'The processes that make more of the same kind of organism.',
    plantExample: 'Asexual reproduction via runners/tubers; sexual reproduction via pollination and seeds.',
    animalExample: 'Sexual reproduction via fertilisation of an ovum by a sperm cell to produce offspring.',
    examTip: 'Distinguish asexual (1 parent, genetically identical clones) from sexual (2 parents, gametes, genetic variation).',
  },
  {
    id: 'excretion',
    letter: 'E',
    name: 'Excretion',
    syllabusDefinition: 'The removal of the waste products of metabolism and substances in excess of requirements.',
    plantExample: 'Excreting oxygen as a waste product of photosynthesis through stomata during the daytime.',
    animalExample: 'Kidneys excreting urea, excess water, and salts in urine; lungs excreting carbon dioxide.',
    examTip: 'CRITICAL TRAP: Egestion is NOT excretion! Egestion is passing out undigested food as faeces. Excretion is metabolic cellular waste (urea, CO₂).',
  },
  {
    id: 'nutrition',
    letter: 'N',
    name: 'Nutrition',
    syllabusDefinition: 'The taking in of materials for energy, growth and development.',
    plantExample: 'Autotrophic nutrition: plants make their own organic nutrients (glucose) using photosynthesis (CO₂ + H₂O + light).',
    animalExample: 'Heterotrophic nutrition: animals ingest and digest organic matter produced by other living organisms.',
    examTip: 'Plants require light, carbon dioxide, water, and mineral ions (nitrate, magnesium) for nutrition.',
  },
];

// ============================================================================
// 2. THE 5 KINGDOMS
// ============================================================================
export const FIVE_KINGDOMS = [
  {
    name: 'Animals',
    cells: 'Multicellular eukaryotes',
    cellWall: 'Absent',
    chloroplasts: 'Absent',
    nutrition: 'Heterotrophic (ingest food)',
    nucleus: 'Present (true nucleus enclosed in membrane)',
    examples: 'Insects, Fish, Birds, Mammals, Reptiles, Amphibians',
    keyFeatures: 'Have nervous systems, mobile at some life stage, store carbohydrate as glycogen.',
  },
  {
    name: 'Plants',
    cells: 'Multicellular eukaryotes',
    cellWall: 'Present (made of cellulose)',
    chloroplasts: 'Present (contain green chlorophyll)',
    nutrition: 'Autotrophic (photosynthesis)',
    nucleus: 'Present',
    examples: 'Flowering plants (monocots & dicots), ferns, mosses',
    keyFeatures: 'Large permanent central vacuole filled with cell sap, store carbohydrate as starch.',
  },
  {
    name: 'Fungi',
    cells: 'Mostly multicellular (moulds, mushrooms) or unicellular (yeast)',
    cellWall: 'Present (made of chitin, NOT cellulose)',
    chloroplasts: 'Absent (cannot photosynthesise)',
    nutrition: 'Saprotrophic (secrete extracellular enzymes onto decaying organic matter and absorb nutrients)',
    nucleus: 'Present',
    examples: 'Mucor (bread mould), yeast, mushrooms, Penicillium',
    keyFeatures: 'Body composed of a network of thread-like hyphae called a mycelium, store glycogen.',
  },
  {
    name: 'Protoctists',
    cells: 'Mostly unicellular microscopic organisms (some multicellular like seaweeds)',
    cellWall: 'Some have cell walls (plant-like algae); some lack cell walls (protozoa)',
    chloroplasts: 'Present in green algae (Chlorella); absent in Amoeba',
    nutrition: 'Some autotrophic (photosynthetic), some heterotrophic',
    nucleus: 'Present (eukaryotic)',
    examples: 'Amoeba, Paramecium, Plasmodium (causes malaria), Chlorella',
    keyFeatures: 'The "dustbin kingdom" of single-celled eukaryotes that do not fit into animals, plants, or fungi.',
  },
  {
    name: 'Prokaryotes (Bacteria)',
    cells: 'Unicellular microscopic organisms',
    cellWall: 'Present (made of peptidoglycan / murein, NOT cellulose)',
    chloroplasts: 'Absent',
    nutrition: 'Mostly saprotrophic or parasitic; some are photosynthetic',
    nucleus: 'ABSENT! Genetic material is a circular loop of DNA free in cytoplasm',
    examples: 'Lactobacillus bulgaricus, E. coli, Pneumococcus',
    keyFeatures: 'Have plasmids (small circular DNA rings), cell membrane, ribosomes, but NO mitochondria or chloroplasts.',
  },
];

// ============================================================================
// 3. INVERTEBRATES GROUP (CAMBRIDGE 0610 TOPIC 1)
// ============================================================================
export const ARTHROPOD_GROUPS: ArthropodGroup[] = [
  {
    id: 'insects',
    name: 'Insects',
    scientificGroup: 'Class Insecta',
    bodyRegions: '3 body regions: Head, Thorax, and Abdomen',
    pairsOfLegs: '3 pairs of jointed walking legs attached to thorax (6 legs total)',
    wings: 'Usually 1 or 2 pairs of wings on thorax (e.g. fly has 1 pair, bee has 2 pairs)',
    antennae: '1 pair of jointed antennae on head (tactile & olfactory sensors)',
    eyesAndSensory: '1 pair of prominent compound eyes',
    breathing: 'Internal tracheal system opening through spiracles along abdomen',
    examples: ['Housefly (Musca domestica)', 'Honeybee (Apis mellifera)', 'Butterfly', 'Mosquito (Anopheles)', 'Dragonfly'],
    keyFeatures: 'Most diverse animal group on Earth; undergo metamorphosis (larva → pupa → adult). Exoskeleton made of waterproof chitin.',
    examTip: 'Count the legs! If it has 6 legs (3 pairs) and 3 body sections (head, thorax, abdomen), it is ALWAYS an Insect.',
  },
  {
    id: 'crustaceans',
    name: 'Crustaceans',
    scientificGroup: 'Subphylum Crustacea',
    bodyRegions: '2 main body regions: Cephalothorax (head fused with thorax) and Abdomen',
    pairsOfLegs: 'More than 4 pairs (usually 5 pairs / 10 walking legs; front pair often modified as large chelae/claws)',
    wings: 'NO wings (none ever possess wings)',
    antennae: '2 pairs of antennae (1 long pair, 1 short pair - unique to crustaceans!)',
    eyesAndSensory: 'Compound eyes, frequently elevated on movable stalks',
    breathing: 'Feathery gills beneath the carapace (mostly aquatic; terrestrial woodlice need moisture)',
    examples: ['Crab', 'Lobster', 'Prawn', 'Shrimp', 'Woodlouse (terrestrial oniscidean)', 'Barnacle'],
    keyFeatures: 'Heavy, calcified, chalky exoskeleton impregnated with calcium carbonate salts for tremendous armor.',
    examTip: 'Key identifier on IGCSE papers: 2 pairs of antennae. No other arthropod group has two pairs!',
  },
  {
    id: 'arachnids',
    name: 'Arachnids',
    scientificGroup: 'Class Arachnida',
    bodyRegions: '2 body parts: Cephalothorax (prosoma) and Abdomen (opisthosoma)',
    pairsOfLegs: '4 pairs of jointed walking legs (8 legs total)',
    wings: 'NO wings',
    antennae: 'NO antennae (absent in all arachnids)',
    eyesAndSensory: 'Several pairs of simple eyes (ocelli, usually 8 eyes), NO compound eyes; sensory pedipalps',
    breathing: 'Book lungs or book tracheae inside abdomen',
    examples: ['Garden spider (Araneus diadematus)', 'Scorpion', 'Tick', 'Mite', 'Tarantula'],
    keyFeatures: 'Have chelicerae (poison fangs) to paralyze prey and inject digestive enzymes for external digestion; spinnerets for silk webs.',
    examTip: 'Count 8 walking legs (4 pairs) + NO antennae = Arachnid. Do not confuse pedipalps (grasping organs) with legs.',
  },
  {
    id: 'myriapods',
    name: 'Myriapods',
    scientificGroup: 'Subphylum Myriapoda (Centipedes & Millipedes)',
    bodyRegions: 'Distinct head and a long elongated body composed of many similar repeating segments',
    pairsOfLegs: 'Centipedes: 1 pair of legs per segment; Millipedes: 2 pairs of legs per segment',
    wings: 'NO wings',
    antennae: '1 pair of jointed antennae',
    eyesAndSensory: 'Simple eyes or groups of ocelli',
    breathing: 'Tracheal tubes opening through spiracles on every segment',
    examples: ['Centipede (Chilopoda - fast carnivore with poison claws)', 'Millipede (Diplopoda - slow herbivore, curls into coil)'],
    keyFeatures: 'Non-waxy cuticle means they desiccate easily; live in damp, dark soil or leaf litter.',
    examTip: 'Distinguish centipedes from millipedes: Centipedes have ONE pair of legs per segment (flattened carnivores); Millipedes have TWO pairs per segment (cylindrical herbivores).',
  },
];

export const OTHER_INVERTEBRATES: InvertebratePhylum[] = [
  {
    name: 'Annelids',
    commonName: 'Segmented Worms',
    bodyPlan: 'Long cylindrical vermiform body divided externally and internally into distinct ring-like segments (metamerism).',
    segmentation: 'Clearly segmented with septa between segments.',
    limbsAndLocomotion: 'No jointed legs; move via hydrostatic skeleton and tiny stiff bristles (chaetae) gripping soil.',
    shellOrCuticle: 'Thin, moist, non-chitinous cuticle (gas exchange occurs by diffusion directly through moist skin).',
    examples: ['Earthworm (Lumbricus terrestris)', 'Leech (Hirudinea)', 'Lugworm'],
    examIdentifier: 'Segmented ringed body with bristles (chaetae) and no jointed limbs.',
  },
  {
    name: 'Nematodes',
    commonName: 'Roundworms',
    bodyPlan: 'Slender, smooth, unsegmented cylindrical body tapering to a fine point at both anterior and posterior ends.',
    segmentation: 'UNSEGMENTED! Body is smooth without rings or segments.',
    limbsAndLocomotion: 'No legs, no chaetae; move with a whip-like thrashing motion of longitudinal muscles.',
    shellOrCuticle: 'Tough, transparent, flexible outer cuticle resistant to host digestive enzymes (many are parasites).',
    examples: ['Ascaris lumbricoides (intestinal parasite)', 'Hookworm', 'Vinegar eelworm', 'C. elegans'],
    examIdentifier: 'Smooth, unsegmented cylindrical worm with pointed ends and no bristles or limbs.',
  },
  {
    name: 'Molluscs',
    commonName: 'Soft-Bodied Invertebrates',
    bodyPlan: 'Soft unsegmented body comprising a muscular foot (locomotion), visceral hump (internal organs), and a mantle fold.',
    segmentation: 'Unsegmented soft body.',
    limbsAndLocomotion: 'Broad muscular foot for gliding (snails/slugs) or tentacles with suckers (squids/octopuses).',
    shellOrCuticle: 'Mantle secretes a protective hard shell made of calcium carbonate (external in snails, internal in squids, absent in slugs/octopuses).',
    examples: ['Garden snail (Helix aspersa)', 'Slug', 'Mussel', 'Oyster', 'Squid', 'Octopus'],
    examIdentifier: 'Soft unsegmented body with a muscular foot and often a protective calcium carbonate shell.',
  },
];

export const VERTEBRATE_CLASSES: VertebrateClass[] = [
  {
    name: 'Fish (Pisces)',
    bodyCovering: 'Wet, slippery overlapping scales; streamlined body',
    thermoregulation: 'Poikilothermic (cold-blooded / ectothermic)',
    reproduction: 'External fertilisation; lay soft eggs without shells in water',
    breathing: 'Gills covered by an operculum (extract dissolved O₂ from water)',
    limbs: 'Fins for swimming, steering, and balance; lateral line for pressure detection',
    examples: ['Salmon', 'Tuna', 'Shark', 'Goldfish'],
    keyExamPoint: 'Gills + wet scales + fins + eggs laid in water.',
  },
  {
    name: 'Amphibians',
    bodyCovering: 'Moist, smooth, glandular skin without scales (permeable to gas & water)',
    thermoregulation: 'Poikilothermic (ectothermic)',
    reproduction: 'External fertilisation in water; lay jelly-coated eggs (spawn); swimming aquatic larvae with gills (tadpoles) metamorphose into adults',
    breathing: 'Larvae use gills; adults use simple lungs and moist skin for gas exchange',
    limbs: '4 limbs (tetrapod), webbed feet in water',
    examples: ['Frog', 'Toad', 'Newt', 'Salamander'],
    keyExamPoint: 'Moist naked skin + jelly-coated eggs in water + aquatic larval stage.',
  },
  {
    name: 'Reptiles',
    bodyCovering: 'Dry, tough skin covered with waterproof keratinised scales',
    thermoregulation: 'Poikilothermic (ectothermic)',
    reproduction: 'Internal fertilisation; lay leathery waterproof eggs on dry land (amniotic eggs)',
    breathing: 'Lungs throughout life (skin cannot breathe)',
    limbs: '4 limbs (absent in snakes); claws on toes',
    examples: ['Lizard', 'Snake', 'Crocodile', 'Tortoise'],
    keyExamPoint: 'Dry scaly skin + leathery-shelled eggs laid on land (does not require water for breeding).',
  },
  {
    name: 'Birds (Aves)',
    bodyCovering: 'Feathers covering body, dry scales on legs and feet',
    thermoregulation: 'Homoiothermic (warm-blooded / endothermic - maintain constant body temperature)',
    reproduction: 'Internal fertilisation; lay hard calcium carbonate shelled eggs in nests; incubate and care for young',
    breathing: 'Highly efficient lungs with air sacs',
    limbs: 'Forelimbs modified as wings; toothless beak/bill for feeding',
    examples: ['Eagle', 'Robin', 'Penguin', 'Ostrich'],
    keyExamPoint: 'Feathers + wings + toothless beak + hard calcium-shelled eggs + warm-blooded.',
  },
  {
    name: 'Mammals',
    bodyCovering: 'Skin covered with fur or hair',
    thermoregulation: 'Homoiothermic (endothermic)',
    reproduction: 'Internal fertilisation; give birth to live young (viviparous); females have mammary glands to suckle young with milk',
    breathing: 'Lungs with alveoli; muscular diaphragm separating thorax and abdomen',
    limbs: '4 limbs; external ears (pinnae); differentiated teeth (incisors, canines, premolars, molars)',
    examples: ['Human', 'Whale', 'Dolphin', 'Bat', 'Kangaroo', 'Dog'],
    keyExamPoint: 'Fur/hair + mammary glands (milk) + external ear pinna + live birth + diaphragm.',
  },
];

// ============================================================================
// 4. CELL ORGANELLES
// ============================================================================
export const CELL_ORGANELLES: CellOrganelleInfo[] = [
  {
    name: 'Nucleus',
    presentIn: 'Both',
    description: 'Enclosed by a double nuclear membrane containing chromosomes made of DNA.',
    function: 'Controls all cell activities, cell division, and stores genetic instructions for protein synthesis.',
    examTip: 'Red blood cells, xylem vessels, and bacteria lack a nucleus. Red blood cells lose it to carry more haemoglobin.',
  },
  {
    name: 'Cytoplasm',
    presentIn: 'Both',
    description: 'Jelly-like aqueous solution (approx. 70-80% water) with dissolved proteins, salts, and sugars.',
    function: 'Site of many metabolic biochemical reactions, such as the initial stages of respiration and translation.',
    examTip: 'Organelles are suspended in the cytoplasm.',
  },
  {
    name: 'Cell Membrane',
    presentIn: 'Both',
    description: 'Thin, flexible lipid bilayer with embedded carrier and channel proteins.',
    function: 'Partially permeable barrier that controls the entry and exit of dissolved substances (glucose, ions, water).',
    examTip: 'NEVER confuse cell membrane (partially permeable, in all cells) with cell wall (fully permeable, only in plants/fungi/bacteria).',
  },
  {
    name: 'Ribosomes',
    presentIn: 'Both',
    description: 'Tiny spherical structures found free in the cytoplasm or attached to endoplasmic reticulum.',
    function: 'Site of protein synthesis (translates mRNA into amino acid polypeptide chains).',
    examTip: 'Visible only under an electron microscope, not under a standard school light microscope.',
  },
  {
    name: 'Mitochondria',
    presentIn: 'Both',
    description: 'Rod-shaped organelle with a folded inner membrane (cristae).',
    function: 'Site of aerobic cellular respiration; breaks down glucose using oxygen to release energy (ATP).',
    examTip: 'Cells with high energy demands (muscle cells, sperm cells, ciliated cells) have large numbers of mitochondria.',
  },
  {
    name: 'Cell Wall',
    presentIn: 'Plant Only',
    description: 'Tough, rigid outer layer made of criss-crossed insoluble cellulose fibres.',
    function: 'Provides mechanical support, maintains plant cell shape, and prevents bursting when cell is turgid with water.',
    examTip: 'The cell wall is FULLY permeable! It allows water and all dissolved solutes to pass through freely.',
  },
  {
    name: 'Chloroplasts',
    presentIn: 'Plant Only',
    description: 'Disc-shaped green organelles containing the pigment chlorophyll.',
    function: 'Traps light energy and converts it into chemical energy (glucose) during photosynthesis.',
    examTip: 'Root cells, bulb cells (onion epidermis), and internal flower cells DO NOT have chloroplasts because they are not exposed to light.',
  },
  {
    name: 'Permanent Central Vacuole',
    presentIn: 'Plant Only',
    description: 'Large fluid-filled internal sac enclosed by a membrane (tonoplast), containing cell sap (water, sugars, mineral ions).',
    function: 'Pushes outward against the cell wall to maintain turgidity and keep plant tissues rigid.',
    examTip: 'Animal cells may have small, temporary vacuoles, but only plant cells have a permanent large central vacuole.',
  },
];

// ============================================================================
// 5. EXTENDED SPECIALIZED CELLS (0610 SYLLABUS)
// ============================================================================
export const SPECIALIZED_CELLS: SpecializedCellInfo[] = [
  {
    name: 'Ciliated Epithelial Cell',
    system: 'Respiratory tract (trachea, bronchi) & Oviducts (fallopian tubes)',
    adaptations: [
      'Tiny hair-like cytoplasmic projections (cilia) along the apical surface that beat rhythmically in coordinated waves.',
      'Packed with numerous mitochondria releasing ATP energy for continuous ciliary beating.',
      'Interspersed with goblet cells that secrete mucus to trap dust particles, bacteria, and smoke.',
    ],
    function: 'In trachea/bronchi: sweeps mucus with trapped pathogens upwards towards throat to be swallowed and killed by stomach acid. In oviduct: moves the ovum/egg towards uterus.',
    organism: 'Animal',
    keyExamFact: 'Cilia beat synchronously; cigarette smoke paralyzes cilia, causing smoker cough.',
  },
  {
    name: 'Root Hair Cell',
    system: 'Plant Root Epidermis (Root absorption zone)',
    adaptations: [
      'Long, narrow finger-like cytoplasmic extension greatly increases surface area to volume ratio for faster absorption.',
      'Thin cell wall shortens diffusion and osmosis distance.',
      'NO chloroplasts (grows underground in dark soil where no light penetrates).',
      'High concentration of dissolved mineral ions in vacuole maintains steep water potential gradient for osmosis.',
      'Packed with mitochondria for active transport of mineral ions (nitrates, magnesium) against concentration gradient.',
    ],
    function: 'Absorbs water by osmosis and dissolved mineral ions by active transport from soil water.',
    organism: 'Plant',
    keyExamFact: 'Has a huge surface area; contains mitochondria but NEVER chloroplasts.',
  },
  {
    name: 'Xylem Vessel',
    system: 'Plant Vascular Bundle (Stem, Root, Leaf veins)',
    adaptations: [
      'Dead cells joined end-to-end with end cross-walls completely broken down, forming an uninterrupted hollow continuous pipe.',
      'No cytoplasm, nucleus, or organelles, allowing completely unhindered water flow.',
      'Thick cell walls heavily impregnated with waterproof, woody lignin arranged in rings or spirals for immense tensile strength.',
      'Withstands high negative hydrostatic tension caused by transpiration pull without collapsing inwards.',
    ],
    function: 'Transports water and dissolved mineral ions unidirectionally upwards from roots to leaves (transpiration stream); provides mechanical support.',
    organism: 'Plant',
    keyExamFact: 'Dead and hollow at maturity; walls strengthened with impermeable lignin.',
  },
  {
    name: 'Phloem Sieve Tube & Companion Cell',
    system: 'Plant Vascular Bundle (Translocation transport system)',
    adaptations: [
      'Living elongated cells joined end-to-end with perforated end walls called sieve plates.',
      'Sieve tube elements have reduced cytoplasm, no nucleus, and no vacuole to facilitate mass flow of sap.',
      'Each sieve tube element is connected via plasmodesmata to a nucleated Companion Cell.',
      'Companion cells are packed with mitochondria to synthesize ATP for active loading of sucrose into phloem.',
    ],
    function: 'Translocates sucrose and amino acids bidirectionally from sources (photosynthesising leaves/storage organs) to sinks (roots, growing tips, flowers).',
    organism: 'Plant',
    keyExamFact: 'Living tissue (unlike dead xylem); requires companion cell mitochondria for active loading.',
  },
  {
    name: 'Palisade Mesophyll Cell',
    system: 'Plant Leaf Upper Layer (Below upper epidermis)',
    adaptations: [
      'Packed tightly together vertically upright beneath the transparent upper epidermis to receive direct sunlight.',
      'Packed with numerous chloroplasts that can migrate within the cytoplasm towards light.',
      'Tall column shape maximizes light absorption through the leaf depth.',
      'Thin cellulose cell wall and large central vacuole pushing chloroplasts to outer cell periphery for optimal light absorption.',
    ],
    function: 'The primary site of photosynthesis in flowering plants (converts light, CO₂ and H₂O into glucose and O₂).',
    organism: 'Plant',
    keyExamFact: 'Contains the highest density of chloroplasts of any plant cell.',
  },
  {
    name: 'Guard Cells',
    system: 'Plant Leaf Lower & Upper Epidermis (Stomatal apparatus)',
    adaptations: [
      'Occur in pairs flanking each microscopic stomatal pore.',
      'Asymmetric cell wall: thick, inelastic inner wall facing pore; thin, flexible outer wall.',
      'Contain chloroplasts (unlike other epidermal cells).',
      'When turgid with water: outer wall stretches more than inner wall, causing cells to curve outward and OPEN the stoma.',
      'When flaccid (water loss): cells straighten and CLOSE the stoma, conserving water.',
    ],
    function: 'Regulates gas exchange (CO₂ intake, O₂ release) and controls transpiration water loss from the leaf.',
    organism: 'Plant',
    keyExamFact: 'Only cells in leaf epidermis with chloroplasts; changes shape via turgor pressure.',
  },
  {
    name: 'Red Blood Cell (Erythrocyte)',
    system: 'Circulatory System (Blood transport)',
    adaptations: [
      'Biconcave disc shape increases surface area to volume ratio for rapid oxygen diffusion in and out.',
      'NO nucleus, NO mitochondria, NO endoplasmic reticulum, providing maximum internal volume for haemoglobin molecules.',
      'Packed with approx. 270 million molecules of haemoglobin (iron-containing protein) that binds oxygen reversibly to form oxyhaemoglobin.',
      'Flexible, pliable membrane allows cells to deform and squeeze single-file through narrow 7 μm capillaries.',
    ],
    function: 'Transports oxygen from lungs to respiring body tissues in the form of oxyhaemoglobin.',
    organism: 'Animal',
    keyExamFact: 'Lacks a nucleus to pack more haemoglobin; biconcave shape maximizes surface area.',
  },
  {
    name: 'Motor Neurone (Nerve Cell)',
    system: 'Nervous System (Central & Peripheral)',
    adaptations: [
      'Extremely long cytoplasmic axon (can be over 1 meter long) to transmit electrical impulses rapidly across long distances.',
      'Axon surrounded by an insulating fatty Myelin Sheath produced by Schwann cells, speeding up nerve impulse transmission via saltatory conduction.',
      'Extensive branched dendrites and cell body (soma) to receive incoming synaptic impulses from relay neurones.',
      'Axon terminal contains synaptic vesicles loaded with neurotransmitter chemicals (e.g. acetylcholine).',
    ],
    function: 'Transmits rapid electrical nerve impulses from the central nervous system (brain/spinal cord) to effectors (muscles or glands).',
    organism: 'Animal',
    keyExamFact: 'Long axon conducts impulses rapidly; myelin sheath acts as electrical insulation.',
  },
  {
    name: 'Sperm Cell (Male Gamete)',
    system: 'Male Reproductive System (Testes)',
    adaptations: [
      'Long whip-like flagellum (tail) propels the sperm cell through female reproductive fluids towards the ovum.',
      'Midpiece packed with numerous mitochondria releasing ATP energy via respiration for vigorous swimming.',
      'Acrosome vesicle in the head contains digestive hydrolytic enzymes to digest through the ovum jelly coat.',
      'Streamlined head containing a haploid nucleus (23 chromosomes) to restore diploid status (46) at fertilisation.',
    ],
    function: 'Delivers male genetic material to fertilise the egg cell.',
    organism: 'Animal',
    keyExamFact: 'Acrosome has enzymes; midpiece has mitochondria; haploid nucleus has 23 chromosomes.',
  },
  {
    name: 'Egg Cell (Ovum / Female Gamete)',
    system: 'Female Reproductive System (Ovary & Oviduct)',
    adaptations: [
      'Massive size compared to sperm: rich cytoplasmic yolk store (lipids and proteins) to nourish the embryo after fertilisation.',
      'Surrounded by a thick protective jelly coat (zona pellucida).',
      'Cortical reaction: immediately after the first sperm nucleus penetrates, the jelly coat hardens to prevent polyspermy (entry of extra sperm).',
      'Haploid nucleus (23 chromosomes) to fuse with sperm nucleus.',
    ],
    function: 'Provides female genetic material and nutritional energy reserves for early embryonic development.',
    organism: 'Animal',
    keyExamFact: 'Jelly coat hardens upon fertilisation; large cytoplasm contains yolk nutrients.',
  },
  {
    name: 'Skeletal Muscle Cell (Muscle Fibre)',
    system: 'Muscular System & Locomotion',
    adaptations: [
      'Elongated, multi-nucleated cylindrical fibres packed with myofibril protein filaments (actin and myosin).',
      'Protein filaments slide past one another to shorten the cell during active contraction.',
      'Packed with abundant mitochondria to supply continuous ATP for muscle contraction.',
      'Stores high reserves of glycogen that can be broken down to glucose for cellular respiration.',
    ],
    function: 'Contracts and relaxes to produce movement of the skeleton and joints.',
    organism: 'Animal',
    keyExamFact: 'Contains sliding protein filaments (actin/myosin) and abundant mitochondria.',
  },
];

// ============================================================================
// 6. MOVEMENT OF SUBSTANCES (DIFFUSION, OSMOSIS, ACTIVE TRANSPORT)
// ============================================================================
export const MOVEMENT_CONCEPTS: MovementSubstanceInfo[] = [
  {
    type: 'Diffusion',
    definition: 'The net movement of particles from a region of higher concentration to a region of lower concentration down a concentration gradient, as a result of their random movement.',
    energyRequired: false,
    direction: 'Down concentration gradient (High → Low)',
    membraneRequired: 'Not required (occurs in gases, liquids, and across cell membranes)',
    factors: [
      'Concentration Gradient: Steeper difference = faster diffusion rate.',
      'Temperature: Higher temperature = higher kinetic energy = particles move faster.',
      'Surface Area: Larger surface area = more particles diffuse simultaneously.',
      'Distance: Thinner barrier = shorter travel distance = faster diffusion.',
    ],
    biologicalExamples: [
      'Oxygen diffusing from alveoli (high O₂) into blood capillaries (low O₂).',
      'Carbon dioxide diffusing from blood into alveoli to be exhaled.',
      'CO₂ entering plant leaves through stomata for photosynthesis.',
      'Glucose diffusing from ileum lumen into bloodstream.',
    ],
    examPitfall: 'Always state "NET movement" and "down a concentration gradient", never say "along" or "across" the gradient.',
  },
  {
    type: 'Osmosis',
    definition: 'The net movement of water molecules from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution), through a partially permeable membrane.',
    energyRequired: false,
    direction: 'Down water potential gradient (Higher Ψ → Lower Ψ)',
    membraneRequired: 'Partially permeable membrane required',
    factors: [
      'Water Potential Gradient: Greater difference in solute concentration = faster osmosis.',
      'Temperature: Higher temperature increases kinetic motion of water molecules.',
      'Surface Area of membrane: Greater area allows more water molecules to pass.',
    ],
    biologicalExamples: [
      'Water uptake into root hair cells from soil water.',
      'Water reabsorption in the large intestine (colon) and kidney nephrons.',
      'Maintaining plant turgor pressure (cell vacuole expands, pushing against wall).',
    ],
    examPitfall: 'NEVER say "water moves from high water concentration" or "strong water". Use the syllabus term: "from high water potential to low water potential".',
  },
  {
    type: 'Active Transport',
    definition: 'The movement of particles through a cell membrane from a region of lower concentration to a region of higher concentration (against a concentration gradient), using energy from respiration.',
    energyRequired: true,
    direction: 'Against concentration gradient (Low → High)',
    membraneRequired: 'Carrier protein embedded in cell membrane required',
    factors: [
      'Oxygen supply & Glucose concentration: Needed for aerobic respiration in mitochondria to produce ATP.',
      'Temperature: Affects respiration rate and carrier protein conformation.',
      'Presence of respiratory inhibitors (e.g. cyanide halts active transport immediately).',
    ],
    biologicalExamples: [
      'Root hair cells absorbing nitrate (NO₃⁻) and magnesium ions from dilute soil solution.',
      'Glucose and amino acid uptake from small intestine lumen into villus epithelial cells when luminal concentration is low.',
      'Kidney tubule cells reabsorbing 100% of filtered glucose back into blood.',
    ],
    examPitfall: 'Active transport STOPS if cells are deprived of oxygen or treated with metabolic poisons because it directly relies on ATP from cellular respiration.',
  },
];

// ============================================================================
// 7. BIOLOGICAL MOLECULES & FOOD TESTS
// ============================================================================
export const BIOLOGICAL_MOLECULES = [
  {
    name: 'Carbohydrates',
    elements: 'Carbon, Hydrogen, Oxygen (C, H, O)',
    basicUnits: 'Simple sugars (monosaccharides like Glucose)',
    polymers: [
      'Starch: Plant energy storage carbohydrate.',
      'Glycogen: Animal and fungal energy storage in liver and muscles.',
      'Cellulose: Tough structural component of plant cell walls.',
    ],
    roles: 'Immediate energy release via cellular respiration (17 kJ/g); energy storage; structural support in plant cell walls.',
  },
  {
    name: 'Fats and Oils (Lipids)',
    elements: 'Carbon, Hydrogen, Oxygen (C, H, O) with much less oxygen than carbs',
    basicUnits: '1 Glycerol molecule chemically bonded to 3 Fatty Acid molecules',
    polymers: 'Triglycerides, adipose tissue fats, plant seed oils, waxes',
    roles: 'Long-term high-density energy storage (38 kJ/g); thermal insulation beneath skin; electrical insulation of nerve myelin sheath; cell membrane bilayer.',
  },
  {
    name: 'Proteins',
    elements: 'Carbon, Hydrogen, Oxygen, Nitrogen (C, H, O, N) and some Sulfur (S)',
    basicUnits: 'Amino acids (20 different types in nature)',
    polymers: 'Polypeptides folded into specific 3D globular or fibrous proteins',
    roles: 'Enzymes (catalysts), structural proteins (keratin in hair/nails, collagen in skin), antibodies (immunity), haemoglobin (O₂ transport), hormones (insulin).',
  },
  {
    name: 'DNA (Deoxyribonucleic Acid)',
    elements: 'Carbon, Hydrogen, Oxygen, Nitrogen, Phosphorus (C, H, O, N, P)',
    basicUnits: 'Nucleotides (Phosphate group + Deoxyribose sugar + Nitrogenous base)',
    polymers: 'Double-stranded helix molecule',
    roles: 'Stores genetic code; sequence of bases determines sequence of amino acids in synthesized proteins. Complementary base pairing: A pairs with T, C pairs with G.',
  },
];

export const FOOD_TESTS: FoodTestInfo[] = [
  {
    nutrient: 'Reducing Sugars (e.g. Glucose, Maltose)',
    reagent: "Benedict's Solution",
    method: 'Add equal volume of Benedict’s solution to food liquid extract. Heat in a boiling water bath (80–100°C) for 3–5 minutes.',
    needsHeat: true,
    initialColor: 'Clear Blue',
    positiveColor: 'Green (trace) → Yellow → Orange → Brick-red precipitate',
    negativeColor: 'Remains Blue',
    sampleFoods: ['Glucose powder', 'Fruit juice', 'Maltose extract', 'Honey'],
    examNote: 'Benedict’s test is semi-quantitative: the color indicates sugar concentration (green = low, yellow/orange = medium, brick-red = high). Sucrose is a NON-reducing sugar and gives a negative blue result unless pre-hydrolysed with acid.',
  },
  {
    nutrient: 'Starch',
    reagent: 'Iodine Solution (Potassium Iodide)',
    method: 'Add a few drops of yellow-brown iodine solution directly onto solid food sample or liquid extract at room temperature.',
    needsHeat: false,
    initialColor: 'Yellow-brown / Orange',
    positiveColor: 'Blue-black',
    negativeColor: 'Remains Yellow-brown / Orange',
    sampleFoods: ['Potato slice', 'White bread', 'Rice starch', 'Pasta'],
    examNote: 'No heating required! Do not boil. A blue-black color confirms presence of starch instantly.',
  },
  {
    nutrient: 'Protein',
    reagent: 'Biuret Reagent (Potassium Hydroxide + dilute Copper Sulfate)',
    method: 'Add equal volume of Biuret reagent to liquid food sample and shake gently. Observe color change at room temperature.',
    needsHeat: false,
    initialColor: 'Pale Blue',
    positiveColor: 'Purple / Violet / Lilac',
    negativeColor: 'Remains Pale Blue',
    sampleFoods: ['Egg albumen', 'Milk', 'Tofu extract', 'Gelatin'],
    examNote: 'Detects peptide bonds between amino acids. The color turns violet/purple. No heating needed.',
  },
  {
    nutrient: 'Fats and Oils (Lipids)',
    reagent: 'Ethanol Emulsion Test',
    method: 'Chop food, add 2 cm³ pure ethanol, shake vigorously to dissolve lipids. Decant the clear liquid into a test tube containing equal volume of cold water.',
    needsHeat: false,
    initialColor: 'Colorless / Clear',
    positiveColor: 'Milky-white cloudy emulsion',
    negativeColor: 'Remains clear / transparent',
    sampleFoods: ['Cooking vegetable oil', 'Butter', 'Peanut extract', 'Egg yolk'],
    examNote: 'Lipids are soluble in ethanol but completely insoluble in water. When mixed with water, the lipids precipitate out as microscopic droplets that scatter light, forming a white emulsion.',
  },
  {
    nutrient: 'Vitamin C (Ascorbic Acid)',
    reagent: 'DCPIP Solution (Dichlorophenolindophenol)',
    method: 'Add a fixed volume of deep blue DCPIP into test tube. Add fruit juice drop by drop using a dropping pipette, shaking gently after each drop, until blue color completely disappears.',
    needsHeat: false,
    initialColor: 'Deep Blue',
    positiveColor: 'Decolorised (turns colorless)',
    negativeColor: 'Remains Deep Blue',
    sampleFoods: ['Fresh orange juice', 'Lemon juice', 'Kiwi juice', 'Ascorbic acid solution'],
    examNote: 'Quantitative test: The FEWER drops required to decolorize DCPIP, the HIGHER the concentration of Vitamin C in the sample.',
  },
];

// ============================================================================
// 8. DETAILED ENZYMES & EXPERIMENTS (0610 TOPIC 5)
// ============================================================================
export const ENZYME_PRACTICALS: EnzymePracticalInfo[] = [
  {
    title: 'Investigating Temperature Effect on Amylase (Spotting Tile Protocol)',
    enzyme: 'Amylase (hydrolyses starch into maltose)',
    substrate: 'Starch solution (1%)',
    independentVariable: 'Temperature of water bath (e.g. 10°C, 20°C, 30°C, 40°C, 50°C, 60°C)',
    dependentVariable: 'Time taken for starch to be completely digested (seconds until iodine stops turning blue-black)',
    controlledVariables: [
      'Volume and concentration of starch solution (e.g. 5 cm³ 1% starch)',
      'Volume and concentration of amylase solution (e.g. 2 cm³ 1% amylase)',
      'Volume of iodine solution placed in each well (1 drop)',
      'pH maintained constant using buffer solution (pH 7.0)',
      'Equilibration time before mixing (5 minutes in water bath)',
    ],
    method: [
      '1. Add 1 drop of iodine solution to each depression in a white spotting tile.',
      '2. Place starch solution and amylase solution in separate test tubes in a thermostatically controlled water bath at the test temperature for 5 minutes to equilibrate.',
      '3. Mix starch and amylase together, start the stopwatch immediately.',
      '4. Every 30 seconds, use a clean glass rod or pipette to transfer one drop of reaction mixture into a well with iodine.',
      '5. Record the time when iodine solution remains yellow-brown (no blue-black color), indicating all starch has been hydrolysed.',
      '6. Calculate reaction rate: Rate = 1000 / time (s⁻¹). Repeat across 5 temperatures.',
    ],
    expectedResults: 'Rate increases from 10°C to peak at optimum (~37°C–40°C), then plummets to 0 by 60°C due to irreversible active site denaturation.',
    sourcesOfErrorAndImprovements: [
      'Color endpoint is subjective: Use a colorimeter or compare against a standard color card.',
      'Sampling is discontinuous (every 30s): Sample every 10 or 15 seconds for greater precision.',
      'Temperature fluctuations: Use an electric thermostatically controlled water bath instead of a beaker of water.',
    ],
  },
  {
    title: 'Investigating Catalase Activity & Substrate Concentration (Gas Syringe Protocol)',
    enzyme: 'Catalase (found in potato tissue or active yeast suspension)',
    substrate: 'Hydrogen peroxide (2 H₂O₂ → 2 H₂O + O₂)',
    independentVariable: 'Hydrogen peroxide concentration (e.g. 0.5%, 1.0%, 1.5%, 2.0%, 2.5%)',
    dependentVariable: 'Volume of oxygen gas collected in gas syringe over 2 minutes (cm³)',
    controlledVariables: [
      'Mass and surface area of potato cylinders (e.g. 5 cylinders, exactly 20 mm long, cut with a cork borer)',
      'Volume of hydrogen peroxide solution (e.g. 20 cm³)',
      'Temperature (room temperature at 22°C)',
      'pH of buffer solution',
    ],
    method: [
      '1. Cut 5 potato cylinders using a 5mm cork borer and measure to exactly 20 mm with a ruler.',
      '2. Place potato cylinders into a conical flask connected to a delivery tube and a 100 cm³ gas syringe clamped horizontally.',
      '3. Add 20 cm³ of hydrogen peroxide of the chosen concentration, replace the bung airtight immediately, and start the timer.',
      '4. Record the volume of oxygen gas collected in the gas syringe at 30-second intervals for 2 minutes.',
      '5. Repeat 3 times for each concentration to calculate the mean and identify anomalies.',
    ],
    expectedResults: 'At low substrate concentrations, rate increases proportionally (substrate is limiting). At high concentrations, the rate plateaus at Vmax because all catalase active sites are saturated.',
    sourcesOfErrorAndImprovements: [
      'Gas escapes when replacing bung: Use a two-necked flask or an injection syringe through a rubber septum.',
      'Surface area variations in potato: Use uniform potato discs or a standardized yeast suspension.',
      'Gas syringe friction: Ensure the glass barrel is completely dry and lubricated lightly.',
    ],
  },
];
