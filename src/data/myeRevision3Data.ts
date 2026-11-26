import { MyeSqQuestion } from '../types/mye';

/**
 * Cambridge IGCSE Biology (0610) — MYE Revision 3
 * Paper 4 Style Structured Questions (6 Questions × 10 Marks = 60 Total Marks)
 * Covers all 6 Semester 1 Topics (10 marks per topic) with solving tips and mark schemes.
 */
export const MYE_REVISION_3_SQ: MyeSqQuestion[] = [
  {
    id: 'sq1',
    number: 1,
    topic: 1,
    topicName: '1. Characteristics & Classification',
    syllabusRef: '0610 Syllabus 1.1 – 1.3',
    totalMarks: 10,
    title: 'Classification, Dichotomous Keys & Characteristics of Living Things',
    contextIntro:
      'Biologists use observable morphological features and the binomial system to classify organisms into groups and construct dichotomous keys.',
    stimulus: {
      id: 'svg_dichotomous_leaves',
      caption: 'Fig. 1.1: Four unknown plant leaves (A, B, C, and D) collected during a field survey.',
    },
    subParts: [
      {
        id: 'sq1a',
        label: '(a)',
        commandWord: 'Define & Explain',
        marks: 3,
        prompt:
          'Define the biological term species [2] and state one reason why biologists use the binomial naming system (e.g. Homo sapiens) instead of common names [1].',
        solvingTip:
          'For 2 marks on defining "species", Cambridge mark schemes require BOTH: (1) organisms that can reproduce/interbreed together, AND (2) produce fertile offspring. For the binomial reason, mention international universality or avoiding language/regional confusion.',
        markSchemePoints: [
          'A group of organisms that can reproduce / interbreed with each other [1]',
          '...to produce fertile offspring [1]',
          'Universal / internationally agreed name so scientists worldwide avoid confusion across different languages or local common names [1]',
        ],
        modelAnswer:
          'A species is a group of organisms that can reproduce (interbreed) with each other to produce fertile offspring. Scientists use the binomial system because each species gets a single internationally recognised two-part Latin name (Genus species), preventing confusion caused by different local or common names.',
      },
      {
        id: 'sq1b',
        label: '(b)',
        commandWord: 'Compare & Classify',
        marks: 3,
        prompt:
          'Using Fig. 1.1, describe two visible differences between Leaf A and Leaf D [2], and state whether Leaf D comes from a monocotyledon or a dicotyledon, giving a reason from the diagram [1].',
        solvingTip:
          'Always read directly from the diagram! Compare matching pairs of features (e.g. leaflet division vs single blade; net veins vs parallel veins). Then link parallel veins + narrow strap-like blade to monocotyledons.',
        markSchemePoints: [
          'Leaf A is compound (divided into separate leaflets), whereas Leaf D is a single simple leaf [1]',
          'Leaf D has parallel veins (and a long narrow shape), whereas Leaf A has broad oval leaflets (or branched/net-like arrangement) [1]',
          'Monocotyledon — because it has parallel veins (long, narrow leaf blade) [1]',
        ],
        modelAnswer:
          'Leaf A is divided into multiple small leaflets attached along a central stalk, whereas Leaf D is a single unbranched, long narrow blade. Leaf D also has parallel veins running straight from base to tip. Therefore, Leaf D belongs to a monocotyledon because monocots characteristically have leaves with parallel veins.',
      },
      {
        id: 'sq1c',
        label: '(c)',
        commandWord: 'State',
        marks: 2,
        prompt:
          'Both insects and arachnids belong to the arthropod phylum. State two visible structural features that distinguish an arachnid (such as a spider) from an insect (such as a honeybee).',
        solvingTip:
          'Think of the standard 0610 arthropod table: count (1) pairs of legs, (2) body divisions, (3) antennae, and (4) wings. Give clear comparative statements (e.g., "4 pairs of legs vs 3 pairs").',
        markSchemePoints: [
          'Arachnids have 4 pairs (8) of jointed legs, whereas insects have 3 pairs (6) of jointed legs [1]',
          'Arachnids have 2 body segments (cephalothorax + abdomen) and NO antennae/wings, whereas insects have 3 body segments (head, thorax, abdomen), 1 pair of antennae, and usually wings [1]',
        ],
        modelAnswer:
          'Arachnids have four pairs (8) of walking legs, whereas insects have three pairs (6) of legs. Arachnids also have two main body parts (cephalothorax and abdomen) and no antennae or wings, whereas insects have three body parts (head, thorax, abdomen) and one pair of antennae.',
      },
      {
        id: 'sq1d',
        label: '(d)',
        commandWord: 'State & Define',
        marks: 2,
        prompt:
          'State one characteristic of all living organisms involved in obtaining energy from glucose [1], and define the term excretion [1].',
        solvingTip:
          'Do not confuse breathing (gas exchange) with respiration (chemical reactions in cells releasing energy), and do not confuse egestion (faeces) with excretion (metabolic waste).',
        markSchemePoints: [
          'Respiration — chemical reactions in cells that break down nutrient molecules (glucose) and release energy for metabolism [1]',
          'Excretion — removal of waste products of metabolism (and substances in excess of requirements / toxic materials) from organisms [1]',
        ],
        modelAnswer:
          'The characteristic that releases energy from glucose inside cells is respiration. Excretion is the removal from organisms of toxic materials, waste products of metabolism, and substances in excess of requirements.',
      },
    ],
  },

  {
    id: 'sq2',
    number: 2,
    topic: 2,
    topicName: '2. Cell Structure & Organisation',
    syllabusRef: '0610 Syllabus 2.1 – 2.3',
    totalMarks: 10,
    title: 'Cell Ultrastructure, Magnification Calculations & Specialised Cells',
    contextIntro:
      'Cells contain membrane-bound organelles visible under light and electron microscopes. Magnification formulae allow biologists to calculate true organelle dimensions.',
    stimulus: {
      id: 'svg_magnification_ruler',
      caption: 'Fig. 2.1: Drawing of a chloroplast observed under a microscope at ×4000 magnification.',
    },
    subParts: [
      {
        id: 'sq2a',
        label: '(a)',
        commandWord: 'Calculate',
        marks: 3,
        prompt:
          'Using the data in Fig. 2.1, calculate the actual length of the chloroplast in micrometres (μm). Show your working clearly.',
        solvingTip:
          'Step 1: Recall the triangle I = A × M, so A = I ÷ M. Step 2: Convert Image length (32 mm) to micrometres FIRST by multiplying by 1000 (32 × 1000 = 32 000 μm), OR divide 32 ÷ 4000 = 0.008 mm then × 1000. Step 3: Always include the unit μm!',
        markSchemePoints: [
          'Correct formula stated or used: Actual size = Image size ÷ Magnification (A = I / M) [1]',
          'Unit conversion shown: 32 mm × 1000 = 32 000 μm (or 32 ÷ 4000 = 0.008 mm) [1]',
          'Correct final answer with unit: 8 μm (32 000 ÷ 4000 = 8) [1]',
        ],
        modelAnswer:
          'Actual size = Image size ÷ Magnification.\nImage size = 32 mm = 32 × 1000 = 32 000 μm.\nActual length = 32 000 μm ÷ 4000 = 8 μm.',
      },
      {
        id: 'sq2b',
        label: '(b)',
        commandWord: 'Compare',
        marks: 3,
        prompt:
          'State two structures present in a plant palisade mesophyll cell that are absent from an animal cell [2], and name one structure present in both a plant cell and a prokaryotic bacterial cell [1].',
        solvingTip:
          'Remember: Plant cells uniquely have cellulose cell wall, permanent central vacuole, and chloroplasts. Both plant cells and bacteria share a cell wall (though different material!), cell membrane, cytoplasm, and ribosomes — never say nucleus for bacteria!',
        markSchemePoints: [
          'Any two from: cellulose cell wall / permanent large central vacuole / chloroplasts [2]',
          'Any one shared with bacteria: cell membrane / cytoplasm / ribosomes / cell wall [1]',
        ],
        modelAnswer:
          'Two structures found in a palisade mesophyll cell but absent in an animal cell are a cellulose cell wall and chloroplasts (or a permanent large central vacuole). One structure found in both a plant cell and a bacterial cell is ribosomes (or cytoplasm / cell membrane / cell wall).',
      },
      {
        id: 'sq2c',
        label: '(c)',
        commandWord: 'Explain',
        marks: 2,
        prompt:
          'Explain two ways in which a root hair cell is structurally adapted for its function in a flowering plant.',
        solvingTip:
          'Always pair a structural feature with its functional benefit ("what it has" + "why it helps"): e.g. long thin projection → large surface area for faster osmosis of water and active transport of mineral ions.',
        markSchemePoints: [
          'Long, thin hair-like extension provides a very large surface area [1]',
          '...for rapid absorption of water (by osmosis) and mineral ions (by active transport / many mitochondria for ATP) [1]',
        ],
        modelAnswer:
          'A root hair cell has a long, thin finger-like projection that provides a large surface area in contact with soil water, increasing the rate of water uptake by osmosis. It also has a thin cell wall for a short diffusion pathway and contains many mitochondria to supply ATP for active transport of mineral ions.',
      },
      {
        id: 'sq2d',
        label: '(d)',
        commandWord: 'Order & Define',
        marks: 2,
        prompt:
          'Arrange these levels of biological organisation from smallest to largest: organ, tissue, organism, cell, organ system [1]. Define the term tissue [1].',
        solvingTip:
          'Check direction carefully: "smallest to largest" starts with cell! A tissue definition must state "a group of cells with similar structures working together to perform a shared function".',
        markSchemePoints: [
          'Correct order: cell → tissue → organ → organ system → organism [1]',
          'Tissue: a group of cells with similar structures, working together to perform a shared function [1]',
        ],
        modelAnswer:
          'Smallest to largest: cell → tissue → organ → organ system → organism. A tissue is a group of cells with similar structures working together to perform a shared function.',
      },
    ],
  },

  {
    id: 'sq3',
    number: 3,
    topic: 3,
    topicName: '3. Movement of Substances',
    syllabusRef: '0610 Syllabus 3.1 – 3.3',
    totalMarks: 10,
    title: 'Osmosis Investigation in Potato Tissue & Animal vs Plant Cells',
    contextIntro:
      'Identical potato cylinders were weighed, immersed in sucrose solutions of different concentrations (0.0 to 1.0 mol/dm³) for 60 minutes, blotted dry, and reweighed.',
    stimulus: {
      id: 'svg_potato_osmosis_graph',
      caption: 'Fig. 3.1: Graph showing percentage change in mass of potato cylinders across sucrose concentrations.',
    },
    subParts: [
      {
        id: 'sq3a',
        label: '(a)',
        commandWord: 'Determine & Explain',
        marks: 2,
        prompt:
          'Use Fig. 3.1 to state the concentration of sucrose solution that has the same water potential as the potato cells [1], and explain why you chose this value [1].',
        solvingTip:
          'Look where the plotted curve crosses the 0% horizontal line! At 0% change in mass, water potential inside equals water potential outside (isotonic), so there is no net movement of water.',
        markSchemePoints: [
          '0.4 mol/dm³ (accept 0.38–0.42 mol/dm³) [1]',
          'Because there is 0% (no) change in mass, meaning no net movement of water into or out of the potato cells [1]',
        ],
        modelAnswer:
          'The concentration is 0.4 mol/dm³. At this point the percentage change in mass is 0%, which shows that the water potential inside the potato cells equals the external solution, so there is no net movement of water.',
      },
      {
        id: 'sq3b',
        label: '(b)',
        commandWord: 'Explain',
        marks: 3,
        prompt:
          'Explain why the potato cylinder gained about 18% mass when placed in 0.0 mol/dm³ (pure distilled water).',
        solvingTip:
          'Use all 3 required IGCSE 0610 keywords for osmosis marks: (1) higher water potential outside than inside potato cells, (2) water moves by osmosis across the partially permeable cell membrane, (3) down a water potential gradient into the cells, increasing cell mass/turgor.',
        markSchemePoints: [
          'Pure water has a higher water potential than the cytoplasm/cell sap inside the potato cells [1]',
          'Water molecules move into the potato cells by osmosis through the partially permeable cell membrane [1]',
          'Movement occurs down a water potential gradient, increasing the mass/volume of the cells [1]',
        ],
        modelAnswer:
          'Pure distilled water (0.0 mol/dm³) has a higher water potential than the vacuole and cytoplasm of the potato cells. Therefore, water molecules move into the cells by osmosis down a water potential gradient across the partially permeable cell membrane, increasing the mass of the potato cylinder.',
      },
      {
        id: 'sq3c',
        label: '(c)',
        commandWord: 'Compare & Explain',
        marks: 3,
        prompt:
          'Compare what happens to an animal red blood cell and a plant palisade mesophyll cell if both are placed in distilled water (hypotonic) for 20 minutes. Explain the difference.',
        solvingTip:
          'State the exact outcome for EACH cell first ("red blood cell swells and bursts/lyses; palisade cell swells and becomes turgid without bursting"), then give the structural reason ("palisade cell has a strong inelastic cellulose cell wall, whereas the red blood cell does not").',
        markSchemePoints: [
          'Water enters both cells by osmosis; the red blood cell swells and bursts (lysis / haemolysis) [1]',
          'The palisade mesophyll cell swells and becomes turgid, but does NOT burst [1]',
          'Explanation: the plant cell has a strong, rigid cellulose cell wall that resists expansion / creates turgor pressure, whereas animal red blood cells lack a cell wall [1]',
        ],
        modelAnswer:
          'Water enters both cells by osmosis. However, the red blood cell swells and bursts (lysis) because it has no cell wall to support its thin plasma membrane. By contrast, the palisade mesophyll cell swells and becomes turgid, but does not burst because its strong cellulose cell wall pushes back against the expanding vacuole.',
      },
      {
        id: 'sq3d',
        label: '(d)',
        commandWord: 'Contrast',
        marks: 2,
        prompt:
          'State two differences between osmosis and active transport.',
        solvingTip:
          'State two clear contrasts: (1) Energy/ATP (osmosis is passive; active transport requires ATP from respiration), (2) Gradient direction (osmosis is down a water potential gradient; active transport is against a concentration gradient), or (3) Particles transported (water only vs mineral ions/glucose via carrier proteins).',
        markSchemePoints: [
          'Active transport requires energy (ATP) from respiration, whereas osmosis is passive (requires no energy) [1]',
          'Active transport moves ions/molecules against a concentration gradient (low to high via carrier proteins), whereas osmosis moves water molecules down a water potential gradient [1]',
        ],
        modelAnswer:
          '1. Active transport requires energy (ATP) released by respiration, whereas osmosis is a passive process that needs no ATP.\n2. Active transport moves solutes such as mineral ions or glucose against a concentration gradient using membrane carrier proteins, whereas osmosis moves only water molecules down a water potential gradient.',
      },
    ],
  },

  {
    id: 'sq4',
    number: 4,
    topic: 4,
    topicName: '4. Biological Molecules & Food Tests',
    syllabusRef: '0610 Syllabus 4.1',
    totalMarks: 10,
    title: 'Food Test Analysis, Reducing Sugar Protocol & DNA Structure',
    contextIntro:
      'A food scientist tested an aqueous extract of an unknown balanced meal using four standard IGCSE biochemical reagents.',
    stimulus: {
      id: 'svg_food_test_panel',
      caption: 'Fig. 4.1: Observations obtained when four different reagents were added to samples of the meal extract.',
    },
    subParts: [
      {
        id: 'sq4a',
        label: '(a)',
        commandWord: 'Deduce',
        marks: 4,
        prompt:
          'Using Fig. 4.1, state which nutrients are present and which nutrient is absent in the meal extract for each of the four tests shown.',
        solvingTip:
          'Match each reagent one by one: Iodine blue-black = Starch present; Biuret lilac/purple = Protein present; Ethanol clear (no cloudy white emulsion) = Fats/Lipids ABSENT; DCPIP decolourised (turns colourless) = Vitamin C present.',
        markSchemePoints: [
          'Iodine turns blue-black → Starch is PRESENT [1]',
          'Biuret turns lilac / purple → Protein is PRESENT [1]',
          'Ethanol + water remains clear (no milky emulsion) → Fats / Lipids are ABSENT [1]',
          'DCPIP decolourises (turns colourless) → Vitamin C is PRESENT [1]',
        ],
        modelAnswer:
          '• Iodine test (blue-black): Starch is present.\n• Biuret test (lilac/purple): Protein is present.\n• Ethanol emulsion test (clear, no white emulsion): Lipids/fats are absent.\n• DCPIP test (colourless): Vitamin C is present.',
      },
      {
        id: 'sq4b',
        label: '(b)',
        commandWord: 'Describe',
        marks: 3,
        prompt:
          'Describe the practical procedure you would follow to test the meal extract for reducing sugars (such as glucose), including the expected positive colour change.',
        solvingTip:
          'Paper 6 examiners ALWAYS check for: (1) Name of reagent = Benedict’s solution, (2) Heating in a boiling/hot water bath (~80–100 °C) for safety instead of direct Bunsen flame on a flammable/bumping tube, (3) Colour change from blue to brick-red (or green/yellow/orange precipitate).',
        markSchemePoints: [
          'Add Benedict’s solution to the liquid extract in a test tube [1]',
          'Heat the mixture in a hot / boiling water bath (at 80–100 °C) [1]',
          'Positive result: solution changes from blue to green / yellow / orange / brick-red precipitate [1]',
        ],
        modelAnswer:
          'Add an equal volume of Benedict’s solution to the meal extract in a test tube and place it in a boiling water bath (80–100 °C) for 3–5 minutes (wearing goggles). If reducing sugars are present, the blue solution changes through green, yellow, or orange to form a brick-red precipitate.',
      },
      {
        id: 'sq4c',
        label: '(c)',
        commandWord: 'State & Explain',
        marks: 3,
        prompt:
          'DNA is another essential biological molecule. State the shape of a DNA molecule [1], name which bases pair together [1], and explain the significance of the base sequence along a strand of DNA [1].',
        solvingTip:
          'Keep it strictly to 0610 core/extended molecular biology: (1) Double helix made of two strands, (2) A pairs with T, and C pairs with G, (3) Sequence of bases determines the sequence of amino acids to build specific proteins.',
        markSchemePoints: [
          'Two strands coiled together to form a double helix [1]',
          'A (Adenine) pairs with T (Thymine), and C (Cytosine) pairs with G (Guanine) [1]',
          'The sequence of bases determines the sequence of amino acids used to make a specific protein (gene) [1]',
        ],
        modelAnswer:
          'A DNA molecule consists of two strands coiled together into a double helix. Across the strands, Adenine (A) always pairs with Thymine (T) and Cytosine (C) always pairs with Guanine (G). The order of bases forms a genetic code that determines the exact sequence of amino acids assembled into a protein.',
      },
    ],
  },

  {
    id: 'sq5',
    number: 5,
    topic: 5,
    topicName: '5. Enzymes',
    syllabusRef: '0610 Syllabus 5.1',
    totalMarks: 10,
    title: 'Enzyme Action, Temperature Kinetics & Denaturation',
    contextIntro:
      'Enzymes act as biological catalysts in all living organisms. Fig. 5.1 shows how temperature affects the rate of starch breakdown catalysed by human salivary amylase.',
    stimulus: {
      id: 'svg_enzyme_temp_curve',
      caption: 'Fig. 5.1: Effect of temperature on the rate of reaction of human salivary amylase (Points P, Q, and R).',
    },
    subParts: [
      {
        id: 'sq5a',
        label: '(a)',
        commandWord: 'Define',
        marks: 2,
        prompt: 'Define the term enzyme.',
        solvingTip:
          'Remember the exact two-part Cambridge definition: "A protein" [1] + "that functions as a biological catalyst (speeds up chemical reactions without being changed/used up)" [1].',
        markSchemePoints: [
          'A protein molecule [1]',
          '...that acts as a biological catalyst (speeds up the rate of a chemical reaction without being changed or used up) [1]',
        ],
        modelAnswer:
          'An enzyme is a protein that functions as a biological catalyst, speeding up chemical reactions in living organisms without being permanently altered or used up itself.',
      },
      {
        id: 'sq5b',
        label: '(b)',
        commandWord: 'State & Explain',
        marks: 3,
        prompt:
          'From Fig. 5.1, state the optimum temperature at point Q [1], and explain why the rate of reaction increases between point P (15 °C) and point Q [2].',
        solvingTip:
          'Never mention "denaturation" between P and Q! For rising temperature before the optimum, explain with particle theory: higher temperature → more kinetic energy → faster movement → more frequent effective collisions → more enzyme-substrate (ES) complexes per second.',
        markSchemePoints: [
          'Optimum temperature at Q = 37 °C [1]',
          'As temperature rises, enzyme and substrate molecules gain more kinetic energy and move faster [1]',
          'This increases the frequency of successful collisions between substrates and active sites (more enzyme-substrate complexes formed per unit time) [1]',
        ],
        modelAnswer:
          'The optimum temperature at point Q is 37 °C. Between 15 °C and 37 °C, raising the temperature gives enzyme and substrate molecules greater kinetic energy so they move faster, leading to more frequent effective collisions and faster enzyme-substrate complex formation.',
      },
      {
        id: 'sq5c',
        label: '(c)',
        commandWord: 'Explain',
        marks: 3,
        prompt:
          'Using your knowledge of active sites and the lock-and-key model, explain why the reaction rate drops steeply at point R and reaches zero above 60 °C.',
        solvingTip:
          'CRITICAL IGCSE RULE: Never say "the enzyme dies" or "is killed"! Enzymes are non-living proteins. Always say: "denatured", "active site changes shape", and "substrate is no longer complementary / cannot fit into the active site".',
        markSchemePoints: [
          'High temperatures cause the enzyme to become denatured (bonds holding its 3D structure break) [1]',
          'The shape of the active site changes irreversibly [1]',
          'The substrate molecule is no longer complementary and can no longer fit/bind into the active site to form enzyme-substrate complexes [1]',
        ],
        modelAnswer:
          'Above the optimum temperature, excessive thermal energy breaks bonds maintaining the enzyme’s specific shape, causing it to denature. As a result, the active site changes shape permanently so starch substrate molecules are no longer complementary and cannot bind into the active site, dropping the reaction rate to zero.',
      },
      {
        id: 'sq5d',
        label: '(d)',
        commandWord: 'Compare & Explain',
        marks: 2,
        prompt:
          'Tube 1 containing amylase and starch is kept at 5 °C for 10 minutes and then warmed to 37 °C. Tube 2 is heated to 70 °C for 10 minutes and then cooled to 37 °C. State what happens to the rate of reaction in each tube at 37 °C.',
        solvingTip:
          'Contrast reversible low-temperature inactivity against irreversible high-temperature denaturation.',
        markSchemePoints: [
          'Tube 1 (warmed from 5 °C to 37 °C): reaction rate increases to maximum because the enzyme was only inactive (low kinetic energy), not denatured [1]',
          'Tube 2 (cooled from 70 °C to 37 °C): reaction rate remains zero because denaturation at 70 °C irreversibly changed the active site shape [1]',
        ],
        modelAnswer:
          'In Tube 1, the rate rises to maximum at 37 °C because at 5 °C the amylase was merely inactive due to low kinetic energy, not denatured. In Tube 2, the rate remains zero at 37 °C because heating to 70 °C permanently denatured the active site.',
      },
    ],
  },

  {
    id: 'sq6',
    number: 6,
    topic: 6,
    topicName: '6. Human Digestive System',
    syllabusRef: '0610 Syllabus 7.1 – 7.5',
    totalMarks: 10,
    title: 'Alimentary Canal Organs, Chemical Digestion & Villus Absorption',
    contextIntro:
      'Fig. 6.1 shows a schematic diagram of parts of the human alimentary canal and associated organs (labelled P to U) responsible for digestion and absorption.',
    stimulus: {
      id: 'svg_alimentary_canal_letters',
      caption: 'Fig. 6.1: Schematic diagram of the human alimentary canal and accessory glands.',
    },
    subParts: [
      {
        id: 'sq6a',
        label: '(a)',
        commandWord: 'Identify',
        marks: 3,
        prompt:
          'Identify the organs labelled P, Q, and S on Fig. 6.1.',
        solvingTip:
          'Check the clues printed right beside each callout line: P produces acid and protease; Q makes bile (whereas R stores it); S secretes amylase, trypsin, and lipase.',
        markSchemePoints: [
          'P: Stomach [1]',
          'Q: Liver [1]',
          'S: Pancreas [1]',
        ],
        modelAnswer:
          'P is the stomach, Q is the liver, and S is the pancreas.',
      },
      {
        id: 'sq6b',
        label: '(b)',
        commandWord: 'Explain',
        marks: 3,
        prompt:
          'Explain the role of hydrochloric acid inside organ P [1], and describe two roles of bile (produced by Q and stored in R) in the duodenum [2].',
        solvingTip:
          'Remember: Bile is NOT an enzyme! Its two 0610 roles are: (1) alkaline bile salts neutralise acidic chyme from the stomach to provide optimum pH (~8) for pancreatic enzymes, and (2) emulsification — breaking large fat globules into tiny droplets to increase surface area for lipase.',
        markSchemePoints: [
          'HCl in stomach P: kills harmful bacteria/pathogens in food OR provides an acidic pH (~2) optimum for pepsin protease [1]',
          'Bile role 1: neutralises acidic chyme from the stomach (raising pH to ~8, optimum for pancreatic enzymes) [1]',
          'Bile role 2: emulsifies fats/lipids (breaks large fat globules into tiny droplets, increasing surface area for faster lipase action) [1]',
        ],
        modelAnswer:
          'Hydrochloric acid in the stomach (P) kills ingested pathogens and creates an acidic pH (~2) for optimum pepsin activity. Bile is alkaline, so it neutralises acidic chyme entering the duodenum to provide an alkaline optimum pH for pancreatic enzymes, and emulsifies large fat globules into small droplets to increase surface area for lipase.',
      },
      {
        id: 'sq6c',
        label: '(c)',
        commandWord: 'State',
        marks: 2,
        prompt:
          'State two enzymes secreted into the small intestine by organ S (pancreas), giving the exact substrate and product(s) for each.',
        solvingTip:
          'Write neat pairs: Pancreatic amylase (starch → maltose), Trypsin (protein → peptides/amino acids), or Lipase (lipids/fats → fatty acids + glycerol). Make sure substrates and products are accurate!',
        markSchemePoints: [
          'Enzyme 1 (e.g. Amylase: starch → maltose; OR Trypsin: proteins → peptides/amino acids; OR Lipase: fats/lipids → fatty acids + glycerol) [1]',
          'Enzyme 2 with correct substrate and product(s) [1]',
        ],
        modelAnswer:
          '1. Pancreatic amylase breaks down starch into maltose.\n2. Lipase breaks down fats (lipids) into fatty acids and glycerol (also accept trypsin breaking down protein into polypeptides/amino acids).',
      },
      {
        id: 'sq6d',
        label: '(d)',
        commandWord: 'Describe',
        marks: 2,
        prompt:
          'The inner wall of organ T (ileum) is folded into millions of villi. Describe two structural features of a villus that adapt it for efficient absorption of digested nutrients.',
        solvingTip:
          'Give structural feature + why it speeds up absorption: (1) microvilli / folded shape → huge surface area; (2) epithelium one cell thick → short diffusion distance; (3) dense blood capillary network → maintains steep concentration gradient for glucose & amino acids; (4) central lacteal → absorbs fatty acids & glycerol.',
        markSchemePoints: [
          'Feature 1 + explanation: e.g. outer epithelium is one cell thick to provide a short diffusion distance (or microvilli give a huge surface area) [1]',
          'Feature 2 + explanation: e.g. rich network of blood capillaries maintains a steep concentration gradient for glucose/amino acids (or central lacteal absorbs fatty acids and glycerol) [1]',
        ],
        modelAnswer:
          'Each villus has microvilli on its epithelial cells that greatly increase the surface area for faster diffusion and active transport, and a wall that is only one cell thick to give a short diffusion distance. It also contains a dense network of blood capillaries to carry away absorbed glucose and amino acids, maintaining a steep concentration gradient.',
      },
    ],
  },
];
