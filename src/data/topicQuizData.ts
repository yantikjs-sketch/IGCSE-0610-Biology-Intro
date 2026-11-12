import { QuizQuestion } from '../types/digestive';

export const TOPIC_QUIZZES: Record<string, { title: string; syllabusRef: string; questions: QuizQuestion[] }> = {
  characteristics: {
    title: 'Topic 1: Characteristics & Classification of Living Organisms',
    syllabusRef: '0610 Topic 1',
    questions: [
      {
        id: 'c1',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 1.1',
        question: 'Which characteristic of living organisms is defined as the removal of toxic materials and substances in excess of requirements from an organism?',
        options: [
          'Egestion',
          'Nutrition',
          'Excretion',
          'Respiration'
        ],
        correctIndex: 2,
        explanation: 'Excretion is the removal from organisms of the waste products of metabolism (chemical reactions in cells including respiration), toxic materials, and substances in excess of requirements. Egestion is the passing out of undigested food as faeces.',
        examTip: 'Never confuse excretion (metabolic cellular waste, e.g. urea, CO2) with egestion (undigested food that never entered body cells).'
      },
      {
        id: 'c2',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 1.2',
        question: 'An unknown arthropod has 4 pairs of jointed walking legs, a body divided into a cephalothorax and abdomen, and no antennae. Which group does it belong to?',
        options: [
          'Insects',
          'Crustaceans',
          'Arachnids',
          'Myriapods'
        ],
        correctIndex: 2,
        explanation: 'Arachnids (e.g. spiders, scorpions) have 4 pairs of legs (8 legs total), 2 body parts (cephalothorax and abdomen), and NO antennae or wings.',
        examTip: 'Count the legs: 3 pairs (6) = Insects; 4 pairs (8) = Arachnids; 5+ pairs (10+) = Crustaceans; many pairs = Myriapods.'
      },
      {
        id: 'c3',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 1.2',
        question: 'Which feature distinguishes Crustaceans from all other arthropod groups?',
        options: [
          'They have wings for flight',
          'They possess two pairs of antennae',
          'Their bodies are completely unsegmented',
          'They do not possess an exoskeleton'
        ],
        correctIndex: 1,
        explanation: 'Crustaceans (crabs, lobsters, woodlice) are unique among arthropods in possessing two pairs of antennae. Insects and myriapods have one pair, while arachnids have none.',
        examTip: 'Two pairs of antennae is a key diagnostic feature for Crustacea in Cambridge 0610.'
      },
      {
        id: 'c4',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 1.2',
        question: 'How do Annelids differ from Nematodes?',
        options: [
          'Annelids have a segmented body with chaetae; nematodes have a smooth unsegmented cylindrical body',
          'Annelids have an exoskeleton of chitin; nematodes have a calcium carbonate shell',
          'Annelids lack a mouth; nematodes have a complex digestive system',
          'Annelids are microscopic single-celled protoctists'
        ],
        correctIndex: 0,
        explanation: 'Annelids (e.g. earthworms) have bodies made of repeating ring-like segments with tiny bristles called chaetae. Nematodes (roundworms) are completely unsegmented with smooth cylindrical bodies tapered at both ends.',
        examTip: 'Segments + chaetae = Annelid. Smooth unsegmented round body = Nematode.'
      },
      {
        id: 'c5',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 1.3',
        question: 'Which vertebrate class lays soft eggs in water, undergoes metamorphosis, and possesses moist permeable skin without scales?',
        options: [
          'Reptiles',
          'Amphibians',
          'Fish',
          'Mammals'
        ],
        correctIndex: 1,
        explanation: 'Amphibians (frogs, toads, newts) have moist, scale-less skin through which they can breathe. They lay jelly-coated eggs in water and larvae (tadpoles) breathe with gills before metamorphosing into lung-breathing adults.',
        examTip: 'Reptiles have dry scaly waterproof skin and lay shelled eggs on land. Amphibians have moist skin and lay jelly eggs in water.'
      },
      {
        id: 'c6',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 1.4',
        question: 'What is the binomial name for an organism composed of?',
        options: [
          'Kingdom followed by Phylum',
          'Family followed by Order',
          'Genus followed by Species',
          'Class followed by Genus'
        ],
        correctIndex: 2,
        explanation: 'In the binomial system of naming species, an organism is given two names: the genus (capitalised) and the species (lowercase), e.g. Homo sapiens.',
        examTip: 'Genus name has a Capital letter, species name is lowercase, e.g. Panthera leo.'
      }
    ]
  },

  cells: {
    title: 'Topic 2: Organisation of the Organism & Cell Structure',
    syllabusRef: '0610 Topic 2',
    questions: [
      {
        id: 'cl1',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 2.1',
        question: 'Which three structures are present in plant cells but absent in typical animal cells?',
        options: [
          'Cell wall, chloroplasts, and permanent large central vacuole',
          'Cell membrane, nucleus, and cytoplasm',
          'Mitochondria, ribosomes, and cell wall',
          'Nucleus, chloroplasts, and cell membrane'
        ],
        correctIndex: 0,
        explanation: 'Plant cells have a cellulose cell wall, chloroplasts (in photosynthetic tissues), and a large permanent central vacuole. Both animal and plant cells have a cell membrane, nucleus, cytoplasm, mitochondria, and ribosomes.',
        examTip: 'Remember the big 3 plant-only structures: Cellulose Cell Wall, Chloroplasts, Permanent Central Vacuole.'
      },
      {
        id: 'cl2',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 2.1',
        question: 'An image of a bacterial cell measures 30 mm across under a microscope. If the magnification is x1000, what is the actual size of the bacterium?',
        options: [
          '0.03 μm',
          '30 μm',
          '300 μm',
          '3 μm'
        ],
        correctIndex: 1,
        explanation: 'Actual size A = Image size I / Magnification M. First convert 30 mm to micrometers: 30 mm = 30,000 μm. Then 30,000 μm / 1000 = 30 μm.',
        examTip: 'Always convert Image size to micrometers (μm) by multiplying mm by 1000 before dividing by magnification!'
      },
      {
        id: 'cl3',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 2.2',
        question: 'How is a root hair cell adapted for its specific function?',
        options: [
          'It is packed with chloroplasts to trap sunlight underground',
          'It has a long narrow extension that increases surface area for water and ion absorption',
          'It has no cell wall so that water can enter without resistance',
          'It contains haemoglobin to transport dissolved oxygen to the roots'
        ],
        correctIndex: 1,
        explanation: 'The long, thin finger-like extension greatly increases the surface area to volume ratio for rapid uptake of water by osmosis and mineral ions by active transport. It has NO chloroplasts because roots grow in dark soil.',
        examTip: 'Common exam trick: Root hair cells NEVER have chloroplasts because no sunlight reaches underground roots!'
      },
      {
        id: 'cl4',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 2.2',
        question: 'Which adaptation enables red blood cells to transport maximum oxygen efficiently?',
        options: [
          'Cilia on their surface that beat rhythmically',
          'A thick cellulose cell wall that prevents bursting',
          'Biconcave disc shape and absence of a nucleus to provide more volume for haemoglobin',
          'Large numbers of chloroplasts to synthesise oxygen'
        ],
        correctIndex: 2,
        explanation: 'Mature mammalian red blood cells lose their nucleus, providing more internal volume for haemoglobin. Their biconcave disc shape increases surface area to volume ratio and shortens diffusion distance for oxygen.',
        examTip: 'Key features: Biconcave disc (high SA:V ratio) + No nucleus (more space for haemoglobin).'
      },
      {
        id: 'cl5',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 2.2',
        question: 'Why are xylem vessels hollow tubes without end walls or cell contents?',
        options: [
          'To allow water and mineral ions to flow continuously without resistance',
          'To store starch granules for winter',
          'To secrete digestive enzymes into plant tissues',
          'To protect the plant from insect attacks'
        ],
        correctIndex: 0,
        explanation: 'Xylem vessel elements are dead cells joined end-to-end with end walls broken down, forming continuous hollow pipes strengthened by waterproof lignin. This allows uninterrupted transpiration pull of water and minerals.',
        examTip: 'Xylem = dead, hollow tube with lignin walls; transports water and mineral ions unidirectionally upwards.'
      },
      {
        id: 'cl6',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 2.3',
        question: 'Which sequence correctly represents the levels of organisation from simplest to most complex?',
        options: [
          'Organism → Organ system → Organ → Tissue → Cell',
          'Cell → Tissue → Organ → Organ system → Organism',
          'Tissue → Cell → Organ → Organ system → Organism',
          'Cell → Organ → Tissue → Organ system → Organism'
        ],
        correctIndex: 1,
        explanation: 'Cells group to form tissues; tissues work together to form organs; organs coordinate within organ systems; organ systems make up an organism.',
        examTip: 'Cell -> Tissue -> Organ -> Organ system -> Organism.'
      }
    ]
  },

  movement: {
    title: 'Topic 3: Movement in and out of Cells',
    syllabusRef: '0610 Topic 3',
    questions: [
      {
        id: 'm1',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 3.1',
        question: 'What is diffusion defined as in the 0610 syllabus?',
        options: [
          'The net movement of particles from a region of lower to higher concentration using energy',
          'The net movement of particles from a region of higher to lower concentration down a concentration gradient as a result of their random movement',
          'The movement of water molecules through a fully permeable membrane',
          'The active uptake of mineral ions by carrier proteins in membranes'
        ],
        correctIndex: 1,
        explanation: 'Diffusion is the net movement of particles from a region of their higher concentration to a region of their lower concentration down a concentration gradient, as a result of their random movement. It requires no cellular energy (ATP).',
        examTip: 'Key phrase: "net movement down a concentration gradient due to random kinetic movement".'
      },
      {
        id: 'm2',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 3.2',
        question: 'What happens to a plant cell placed in pure water?',
        options: [
          'Water leaves the cell by osmosis; cytoplasm shrinks from cell wall (plasmolysed)',
          'Water enters by osmosis; vacuole swells and pushes against cell wall, making the cell turgid',
          'The cell absorbs water until its cell membrane stretches and bursts (lysis)',
          'No water movement occurs because cell walls are impermeable'
        ],
        correctIndex: 1,
        explanation: 'Water enters the plant cell by osmosis down a water potential gradient. The vacuole swells and cytoplasm pushes firmly against the rigid cellulose cell wall. The wall resists the internal turgor pressure, preventing bursting and making the cell turgid.',
        examTip: 'Plant cells become TURGID in pure water; they DO NOT burst because of the tough cellulose cell wall.'
      },
      {
        id: 'm3',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 3.2',
        question: 'Why do red blood cells burst when placed into pure distilled water, whereas plant cells do not?',
        options: [
          'Red blood cells have higher internal water potential than pure water',
          'Red blood cells lack a cell wall to withstand internal hydrostatic pressure',
          'Red blood cells actively pump water inside using ATP',
          'Plant cells have no partially permeable membrane'
        ],
        correctIndex: 1,
        explanation: 'Animal cells (like red blood cells) possess only a fragile cell membrane and NO cell wall. In hypotonic water, osmotic water entry causes excessive swelling until the membrane ruptures (haemolysis/lysis). Plant cells are protected by their rigid cell wall.',
        examTip: 'Animal cells in pure water = LYSIS (bursting) due to lack of cell wall!'
      },
      {
        id: 'm4',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 3.3',
        question: 'Which of the following processes requires cellular energy from respiration (ATP) and specific carrier proteins?',
        options: [
          'Diffusion of oxygen into alveoli',
          'Osmosis of water into root hair cells',
          'Active transport of nitrate ions into root hair cells against a concentration gradient',
          'Evaporation of water vapor through stomata'
        ],
        correctIndex: 2,
        explanation: 'Active transport moves particles through a cell membrane from a region of lower concentration to higher concentration (against a concentration gradient) using energy from respiration and protein carriers.',
        examTip: 'Active transport: Against concentration gradient + requires energy (ATP) + uses protein carriers.'
      },
      {
        id: 'm5',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 3.1',
        question: 'Which combination of factors will result in the fastest rate of diffusion?',
        options: [
          'Low temperature, large diffusion distance, small surface area',
          'High temperature, small diffusion distance, large surface area, steep concentration gradient',
          'High temperature, large diffusion distance, small concentration gradient',
          'Low temperature, small diffusion distance, small surface area'
        ],
        correctIndex: 1,
        explanation: 'Rate of diffusion increases with: higher temperature (more kinetic energy), shorter diffusion distance, larger surface area, and steeper concentration gradient.',
        examTip: 'Think of lung alveoli or villi: high surface area + very thin (short distance) + steep gradient = rapid diffusion.'
      }
    ]
  },

  molecules: {
    title: 'Topic 4: Biological Molecules & Food Tests',
    syllabusRef: '0610 Topic 4',
    questions: [
      {
        id: 'bm1',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 4.1',
        question: 'Which chemical elements are found in all protein molecules, but absent in simple carbohydrates and lipids?',
        options: [
          'Carbon and Hydrogen',
          'Nitrogen and usually Sulfur',
          'Oxygen and Phosphorus',
          'Calcium and Iron'
        ],
        correctIndex: 1,
        explanation: 'Carbohydrates and lipids contain only Carbon (C), Hydrogen (H), and Oxygen (O). Proteins contain Carbon, Hydrogen, Oxygen, plus Nitrogen (N) and usually Sulfur (S).',
        examTip: 'Carbohydrates & Lipids = C, H, O. Proteins = C, H, O, N (and S).'
      },
      {
        id: 'bm2',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 4.2',
        question: 'Which food test requires heating in a hot water bath (80–100°C) to show a positive result?',
        options: [
          'Biuret test for protein',
          'Iodine test for starch',
          'Benedict\'s test for reducing sugars',
          'Ethanol emulsion test for lipids'
        ],
        correctIndex: 2,
        explanation: 'Benedict\'s test is the ONLY standard food test that requires boiling/heating in a water bath. A positive result turns from clear blue to green, yellow, orange, and finally brick-red precipitate depending on sugar concentration.',
        examTip: 'Paper 6 favorite: Always state "heat in a boiling water bath at 80-100°C" when describing Benedict\'s test!'
      },
      {
        id: 'bm3',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 4.2',
        question: 'A student adds Biuret reagent to a liquid food sample. The solution turns violet/purple. What nutrient is present?',
        options: [
          'Starch',
          'Reducing sugar (glucose)',
          'Protein',
          'Lipid (fat)'
        ],
        correctIndex: 2,
        explanation: 'Biuret reagent (dilute copper sulfate + potassium hydroxide) tests for peptide bonds in proteins. A color change from pale blue to purple/violet/lilac confirms the presence of protein.',
        examTip: 'Biuret: Blue -> Purple = Protein.'
      },
      {
        id: 'bm4',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 4.2',
        question: 'In the ethanol emulsion test for lipids, why does a cloudy white emulsion form when water is added?',
        options: [
          'Lipids are soluble in ethanol but completely insoluble in water, precipitating out as microscopic light-scattering droplets',
          'Ethanol reacts chemically with water to produce insoluble chalk',
          'Protein in the food sample denatures and coagulates',
          'Starch grains swell and turn milky white'
        ],
        correctIndex: 0,
        explanation: 'Lipids dissolve readily in ethanol. When the clear ethanol solution is poured into cold water, the lipids are insoluble in water and precipitate out as tiny suspended droplets, scattering light to form a cloudy white emulsion.',
        examTip: 'Ethanol emulsion test: Dissolve in ethanol first, then pour into water -> cloudy white emulsion.'
      },
      {
        id: 'bm5',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 4.2',
        question: 'Which reagent turns from deep blue to colorless when titrated against fruit juices containing Vitamin C?',
        options: [
          'Benedict\'s solution',
          'DCPIP solution',
          'Iodine solution',
          'Biuret reagent'
        ],
        correctIndex: 1,
        explanation: 'DCPIP (dichlorophenolindophenol) is a blue dye that is decolorised (turns colorless) by reducing agents like Vitamin C (ascorbic acid). The fewer drops needed to decolorize DCPIP, the higher the Vitamin C concentration.',
        examTip: 'DCPIP: Deep blue -> Colorless (decolorised) confirms Vitamin C.'
      }
    ]
  },

  enzymes: {
    title: 'Topic 5: Enzymes & Factors Affecting Reaction Rate',
    syllabusRef: '0610 Topic 5',
    questions: [
      {
        id: 'e1',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 5.1',
        question: 'What is an enzyme according to the Cambridge 0610 syllabus?',
        options: [
          'A carbohydrate that provides quick energy for chemical reactions',
          'A protein that functions as a biological catalyst, speeding up chemical reactions without being changed',
          'A lipid hormone that travels in blood to regulate digestion',
          'A mineral ion that neutralises stomach acid'
        ],
        correctIndex: 1,
        explanation: 'Enzymes are proteins that act as biological catalysts. They increase the rate of chemical reactions in living organisms without being changed or consumed in the reaction.',
        examTip: 'Memorise: "protein", "biological catalyst", "speeds up reactions without being consumed".'
      },
      {
        id: 'e2',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 5.1',
        question: 'According to the lock and key hypothesis, why is an enzyme specific to only one type of substrate?',
        options: [
          'The enzyme moves at the same speed as the substrate',
          'The substrate and active site have complementary shapes that fit together precisely',
          'The enzyme dissolves the substrate using hydrochloric acid',
          'Both enzyme and substrate have the same molecular mass'
        ],
        correctIndex: 1,
        explanation: 'The 3D folding of the enzyme protein creates an active site with a specific shape. Only a substrate with a complementary shape can fit into the active site, just as only the correct key fits into a lock.',
        examTip: 'Always use the word "COMPLEMENTARY" when explaining active site and substrate fit.'
      },
      {
        id: 'e3',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 5.2',
        question: 'Why does the rate of an enzyme-catalysed reaction plummet to zero at temperatures above 60°C?',
        options: [
          'The enzymes run out of energy and fall asleep',
          'The enzyme molecules die because they are living cells',
          'High thermal kinetic energy ruptures bonds in the enzyme, denaturing the active site shape so substrates can no longer bind',
          'The substrate molecules evaporate completely'
        ],
        correctIndex: 2,
        explanation: 'Enzymes are molecules, not living cells, so they NEVER "die". At high temperatures, thermal vibrations break hydrogen and ionic bonds stabilizing the protein structure. The active site permanently changes shape (denatures); substrate molecules can no longer fit.',
        examTip: 'Examiner trap: Never say enzymes "die" or are "killed"! State: "The active site is denatured and changed shape".'
      },
      {
        id: 'e4',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 5.2',
        question: 'Why does increasing substrate concentration eventually reach a plateau where reaction rate no longer increases?',
        options: [
          'The substrate begins destroying the enzyme active sites',
          'All enzyme active sites are occupied with substrate (saturated); enzyme concentration is now the limiting factor',
          'The solution becomes too cold for collisions',
          'Substrate molecules stop moving'
        ],
        correctIndex: 1,
        explanation: 'At high substrate concentrations, every enzyme active site is continuously occupied forming enzyme-substrate complexes. Substrates must wait for an active site to become free. Enzyme concentration has become the limiting factor.',
        examTip: 'Plateau explanation: All active sites are saturated/occupied. Enzyme concentration is now the limiting factor.'
      },
      {
        id: 'e5',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 5.2',
        question: 'Which enzyme functions optimally in the strongly acidic environment of the human stomach (pH 1.5–2.0)?',
        options: [
          'Salivary amylase',
          'Pancreatic lipase',
          'Pepsin (gastric protease)',
          'Trypsin'
        ],
        correctIndex: 2,
        explanation: 'Pepsin is a protease secreted in gastric juice that functions optimally at pH 1.5–2.0, maintained by hydrochloric acid. Salivary amylase operates around pH 7, while trypsin and lipase operate around pH 8 in the alkaline small intestine.',
        examTip: 'Pepsin = stomach = acidic pH 1.5-2. Amylase = mouth = neutral pH 7. Trypsin/Lipase = small intestine = alkaline pH 8.'
      }
    ]
  },

  digestion: {
    title: 'Topic 6: Human Nutrition & Digestive System',
    syllabusRef: '0610 Topic 7',
    questions: [
      {
        id: 'd1',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 7.1',
        question: 'Which of the following correctly defines chemical digestion according to Cambridge IGCSE Biology?',
        options: [
          'The breakdown of food into smaller pieces without chemical change to food molecules',
          'The breakdown of large, insoluble molecules into small, soluble molecules',
          'The movement of digested food molecules through the wall of the intestine into blood',
          'The passing out of food that has not been digested or absorbed as faeces'
        ],
        correctIndex: 1,
        explanation: 'Chemical digestion is specifically defined as the breakdown of large, insoluble molecules into small, soluble molecules by enzymes. Option A is physical digestion, C is absorption, and D is egestion.',
        examTip: 'Memorise the exact syllabus definition: "large insoluble -> small soluble molecules".'
      },
      {
        id: 'd2',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 7.3',
        question: 'Which two roles does hydrochloric acid (HCl) play in the human stomach?',
        options: [
          'Digests lipids and neutralises bile',
          'Emulsifies fats and absorbs vitamins',
          'Kills pathogens in food and provides optimum acidic pH for pepsin',
          'Breaks down starch to glucose and protects stomach lining'
        ],
        correctIndex: 2,
        explanation: 'Hydrochloric acid produces pH 1.5-2, which denatures bacterial enzymes to kill pathogens, and provides the optimum acidic pH for the protease enzyme pepsin to function.',
        examTip: 'Examiners always look for both points: killing bacteria/pathogens AND optimum pH for pepsin.'
      },
      {
        id: 'd3',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 7.3',
        question: 'Why is the emulsification of fats by bile described as physical digestion rather than chemical digestion?',
        options: [
          'Bile changes fats into fatty acids and glycerol without an enzyme',
          'Bile breaks large fat globules into small droplets without breaking chemical covalent bonds',
          'Bile is acidic and evaporates the fats',
          'Bile contains a protease enzyme that coats fat droplets'
        ],
        correctIndex: 1,
        explanation: 'Emulsification increases the surface area of fat droplets so lipase can act faster, but it does NOT break the chemical ester bonds of triglyceride molecules. Therefore it is a physical/mechanical process, not chemical.',
        examTip: 'Remember: Bile contains NO enzymes! It acts mechanically by increasing surface area.'
      },
      {
        id: 'd4',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 7.4',
        question: 'Which vessel carries absorbed glucose and amino acids directly from the small intestine to the liver?',
        options: [
          'Hepatic artery',
          'Hepatic vein',
          'Hepatic portal vein',
          'Renal vein'
        ],
        correctIndex: 2,
        explanation: 'The hepatic portal vein transports blood rich in absorbed nutrients (glucose, amino acids, vitamins) directly from the capillaries of the small intestine to the liver for assimilation and processing.',
        examTip: 'Hepatic portal vein = Gut to Liver. Hepatic vein = Liver to Vena Cava. Hepatic artery = Heart to Liver.'
      },
      {
        id: 'd5',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 7.4',
        question: 'Inside an intestinal villus, into which structure are fatty acids and glycerol absorbed?',
        options: [
          'Blood capillary network',
          'Lacteal (lymphatic capillary)',
          'Mucus goblet cell',
          'Bile duct'
        ],
        correctIndex: 1,
        explanation: 'Water-soluble nutrients (glucose and amino acids) diffuse into blood capillaries, but lipids (fatty acids & glycerol) recombine and enter the central lacteal, which drains into the lymphatic system.',
        examTip: 'Capillaries = Glucose + Amino acids. Lacteal = Fats / Lipids.'
      },
      {
        id: 'd6',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 7.2',
        question: 'Which tooth type has a flat surface with cusps specialised for crushing and grinding plant and animal food?',
        options: [
          'Incisor',
          'Canine',
          'Molar and Premolar',
          'Wisdom tooth only'
        ],
        correctIndex: 2,
        explanation: 'Incisors are chisel-shaped for biting and cutting. Canines are pointed for tearing. Premolars and molars have broad, flattened surfaces with ridges (cusps) for crushing and grinding food.',
        examTip: 'Incisors = bite/cut; Canines = pierce/tear; Molars/Premolars = crush/grind.'
      },
      {
        id: 'd7',
        type: 'multiple-choice',
        syllabusRef: '0610 Topic 7.3',
        question: 'How do circular and longitudinal muscles coordinate to move a food bolus along the oesophagus by peristalsis?',
        options: [
          'Circular muscles relax while longitudinal muscles contract behind the bolus',
          'Circular muscles contract behind bolus while longitudinal muscles contract ahead to shorten the tube',
          'Both muscle layers contract simultaneously to squeeze the bolus backwards',
          'Muscles remain static and gravity moves the bolus downward'
        ],
        correctIndex: 1,
        explanation: 'During peristalsis, circular muscles contract behind the bolus to narrow the tube and push it forward, while longitudinal muscles ahead contract to widen and shorten the pathway.',
        examTip: 'Peristalsis works against gravity! Circular muscles contract behind bolus to push it forward.'
      }
    ]
  }
};
