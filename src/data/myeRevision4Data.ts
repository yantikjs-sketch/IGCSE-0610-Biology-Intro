import { MyeSqQuestion } from '../types/mye';

/**
 * Cambridge IGCSE Biology (0610) — MYE Revision 4
 * Paper 4 Style Structured Questions (6 Questions × 10 Marks = 60 Total Marks)
 * Fresh question bank covering all 6 Semester 1 Topics (10 marks per topic) with solving tips and mark schemes.
 */
export const MYE_REVISION_4_SQ: MyeSqQuestion[] = [
  {
    id: 'sq4_1',
    number: 1,
    topic: 1,
    topicName: '1. Characteristics & Classification',
    syllabusRef: '0610 Syllabus 1.1 – 1.3',
    totalMarks: 10,
    title: 'Arthropods, Vertebrates, Five Kingdoms & MRS GREN Definitions',
    contextIntro:
      'Fig. 1.1 shows two marine arthropods (a lobster and a crab) collected from a rocky shore habitat for classification.',
    stimulus: {
      id: 'img_crustacean',
      caption: 'Fig. 1.1: External morphology of a lobster and a crab observed in a marine biology survey.',
    },
    subParts: [
      {
        id: 'sq4_1a',
        label: '(a)',
        commandWord: 'Identify & State',
        marks: 3,
        prompt:
          'Name the arthropod class to which the lobster and crab in Fig. 1.1 belong [1], and state two visible structural features that distinguish this class from insects [2].',
        solvingTip:
          'Look closely at the pairs of antennae, number of legs, and hard shell: Crustaceans have 2 pairs of antennae and usually 5 or more pairs of jointed legs (often with pincers/chelae and a calcified carapace), whereas insects have 1 pair of antennae and 3 pairs of legs.',
        markSchemePoints: [
          'Crustaceans (Crustacea) [1]',
          'Two pairs of antennae (whereas insects have one pair) [1]',
          'More than 4 pairs / 5 pairs of jointed legs (or hard chalky carapace / gills / no wings) whereas insects have 3 pairs of legs [1]',
        ],
        modelAnswer:
          'They belong to the class Crustaceans. Two distinguishing features are that crustaceans have two pairs of antennae (insects have one pair) and usually five or more pairs of jointed legs with a hard carapace (insects have three pairs of legs and three distinct body regions: head, thorax, abdomen).',
      },
      {
        id: 'sq4_1b',
        label: '(b)',
        commandWord: 'Compare & State',
        marks: 4,
        prompt:
          'Compare amphibians and reptiles in terms of their skin covering and egg-laying environment [2]. State two features of organisms in the Fungus kingdom that distinguish them from plants [2].',
        solvingTip:
          'For vertebrates, pair each feature cleanly: Amphibians = moist, smooth skin without scales + jelly-coated eggs laid in water; Reptiles = dry, scaly waterproof skin + leathery-shelled eggs laid on land. For Fungi vs Plants: fungi have NO chloroplasts/chlorophyll (heterotrophic/saprotrophic), hyphae/mycelium, and cell walls made of chitin (not cellulose).',
        markSchemePoints: [
          'Amphibians have smooth moist skin without scales, whereas reptiles have dry scaly skin [1]',
          'Amphibians lay jelly-coated eggs in water, whereas reptiles lay eggs with leathery waterproof shells on land [1]',
          'Fungi lack chloroplasts / chlorophyll (cannot photosynthesise; feed saprotrophically/parasitically) [1]',
          'Fungi have cell walls made of chitin (not cellulose) / body made of hyphae (threads) [1]',
        ],
        modelAnswer:
          'Amphibians have moist, smooth skin without scales and lay jelly-coated eggs in water, whereas reptiles have dry, scaly skin and lay eggs with leathery shells on land. Fungi differ from plants because they have no chlorophyll/chloroplasts (so they cannot photosynthesise) and their cell walls are made of chitin rather than cellulose (and most grow as hyphae).',
      },
      {
        id: 'sq4_1c',
        label: '(c)',
        commandWord: 'Define',
        marks: 3,
        prompt:
          'Define the terms sensitivity [1] and growth [2] as characteristics of all living organisms.',
        solvingTip:
          'Recall exact 0610 definitions! Sensitivity = ability to detect and respond to changes in the internal or external environment. Growth = permanent increase in size and dry mass [2 marks: 1 for permanent increase in size/dry mass, 1 for by an increase in cell number or cell size or both].',
        markSchemePoints: [
          'Sensitivity: the ability to detect and respond to changes in the internal or external environment (stimuli) [1]',
          'Growth: a permanent increase in size and dry mass [1]',
          '...by an increase in cell number or cell size (or both) [1]',
        ],
        modelAnswer:
          'Sensitivity is the ability to detect and respond to changes in the internal or external environment. Growth is a permanent increase in size and dry mass by an increase in cell number, cell size, or both.',
      },
    ],
  },

  {
    id: 'sq4_2',
    number: 2,
    topic: 2,
    topicName: '2. Cell Structure & Organisation',
    syllabusRef: '0610 Syllabus 2.1 – 2.3',
    totalMarks: 10,
    title: 'Prokaryotic Bacterial Structure, Magnification & Specialised Cells',
    contextIntro:
      'Fig. 2.1 shows a 3D cutaway diagram of a prokaryotic bacterial cell.',
    stimulus: {
      id: 'img_bacterial_cell',
      caption: 'Fig. 2.1: Cutaway model of a bacterial cell showing internal and external structures.',
    },
    subParts: [
      {
        id: 'sq4_2a',
        label: '(a)',
        commandWord: 'Identify & Compare',
        marks: 3,
        prompt:
          'Name the two DNA-containing structures visible inside the cytoplasm of the bacterial cell in Fig. 2.1 [2], and state one structure shown in Fig. 2.1 that is absent from animal cells [1].',
        solvingTip:
          'Bacteria have NO nucleus! Their DNA is a single large circular loop free in the cytoplasm PLUS small circular rings called plasmids. Structures absent in animal cells include: cell wall, plasmids, and flagellum (or slime capsule).',
        markSchemePoints: [
          'Single circular loop of DNA (bacterial chromosome) [1]',
          'Plasmids (small circular rings of DNA) [1]',
          'Cell wall (or plasmids / flagellum) — absent from animal cells [1]',
        ],
        modelAnswer:
          'The two DNA-containing structures are the circular DNA loop (free in the cytoplasm) and small circular rings called plasmids. A structure present in Fig. 2.1 that is absent from animal cells is the bacterial cell wall (also accept plasmids or flagellum).',
      },
      {
        id: 'sq4_2b',
        label: '(b)',
        commandWord: 'Calculate',
        marks: 3,
        prompt:
          'An electron micrograph of a bacterial cell shows its measured image length as 50 mm. Its actual length is 2.5 μm. Calculate the magnification of the micrograph. Show your working clearly.',
        solvingTip:
          'Use M = I ÷ A. FIRST convert Image length (50 mm) into micrometres (μm) by multiplying by 1000 so both I and A share the exact same unit! 50 × 1000 = 50 000 μm. Then divide 50 000 ÷ 2.5 = ×20 000. Remember: magnification has NO units (write ×20 000).',
        markSchemePoints: [
          'Formula stated or implied: Magnification = Image size ÷ Actual size (M = I / A) [1]',
          'Unit conversion: 50 mm = 50 × 1000 = 50 000 μm (or 2.5 μm = 0.0025 mm) [1]',
          'Correct answer: ×20 000 (20000) [1]',
        ],
        modelAnswer:
          'Magnification = Image size ÷ Actual size\nImage size = 50 mm × 1000 = 50 000 μm\nMagnification = 50 000 μm ÷ 2.5 μm = ×20 000',
      },
      {
        id: 'sq4_2c',
        label: '(c)',
        commandWord: 'Explain',
        marks: 4,
        prompt:
          'Explain how ciliated epithelial cells and goblet cells work together in the trachea to protect the lungs [2]. State two structural adaptations of a human sperm cell for fertilisation [2].',
        solvingTip:
          'For airway defence: Goblet cells secrete sticky mucus to trap dust and pathogens; cilia beat rhythmically to sweep mucus up towards the throat. For sperm adaptations: pick any two clear structure-function pairs (tail/flagellum for swimming, many mitochondria in midpiece for ATP energy, acrosome containing digestive enzymes to penetrate the egg jelly coat, haploid nucleus).',
        markSchemePoints: [
          'Goblet cells secrete sticky mucus that traps dust particles and bacteria/pathogens [1]',
          'Cilia beat rhythmically to sweep/waft the mucus upward out of the airways towards the throat [1]',
          'Any two sperm adaptations with function: flagellum/tail for swimming toward the egg [1]; many mitochondria to release ATP energy for swimming (or acrosome with enzymes to digest egg jelly coat / haploid nucleus) [1]',
        ],
        modelAnswer:
          'Goblet cells secrete mucus to trap inhaled dust and bacteria, and the cilia on ciliated epithelial cells beat rhythmically to sweep the mucus upward away from the lungs. A sperm cell is adapted by having a long flagellum (tail) to swim toward the egg cell, packed mitochondria in its midpiece to supply ATP for movement, and an acrosome containing enzymes to digest the egg’s outer jelly layer.',
      },
    ],
  },

  {
    id: 'sq4_3',
    number: 3,
    topic: 3,
    topicName: '3. Movement of Substances',
    syllabusRef: '0610 Syllabus 3.1 – 3.3',
    totalMarks: 10,
    title: 'Turgor vs Plasmolysis, Diffusion & Active Transport',
    contextIntro:
      'Fig. 3.1 shows two identical plant cells (Cell X and Cell Y) viewed under a light microscope after immersion in two different liquids for 30 minutes.',
    stimulus: {
      id: 'svg_osmosis_turgid_plasmolysed',
      caption: 'Fig. 3.1: Appearance of Plant Cell X and Plant Cell Y after 30 minutes in different external solutions.',
    },
    subParts: [
      {
        id: 'sq4_3a',
        label: '(a)',
        commandWord: 'State',
        marks: 3,
        prompt:
          'State the osmotic condition of Plant Cell X [1] and Plant Cell Y [1] shown in Fig. 3.1. State whether Cell Y was placed in a solution of higher or lower water potential than its cell sap [1].',
        solvingTip:
          'Look at the vacuole and cell membrane: Cell X has a swollen vacuole pressing the membrane tightly against the cell wall (Turgid). Cell Y has a shrunken vacuole and membrane pulled away from the wall (Plasmolysed), meaning water left the cell into a solution of LOWER water potential.',
        markSchemePoints: [
          'Cell X: Turgid [1]',
          'Cell Y: Plasmolysed [1]',
          'Cell Y was placed in a solution with a LOWER water potential (more concentrated/hypertonic) than its cell sap [1]',
        ],
        modelAnswer:
          'Plant Cell X is turgid and Plant Cell Y is plasmolysed. Cell Y was placed in an external solution with a lower water potential (higher solute concentration) than its own cell sap.',
      },
      {
        id: 'sq4_3b',
        label: '(b)',
        commandWord: 'Identify & Explain',
        marks: 3,
        prompt:
          'Identify what fills Gap Z between the cell wall and the cell membrane in Plant Cell Y [1], and explain why this space forms using the permeability of both layers [2].',
        solvingTip:
          'Classic 0610 Paper 4 trap! Gap Z is NOT a vacuum or air — the cellulose cell wall is FULLY permeable, so the external concentrated sugar/salt solution passes freely through the cell wall to fill Gap Z while the cell membrane is only partially permeable.',
        markSchemePoints: [
          'Gap Z is filled with the external solution (concentrated sucrose/salt solution) [1]',
          'The cellulose cell wall is fully permeable (allows dissolved solute molecules and water through freely) [1]',
          'The cell membrane is partially permeable, so water leaves the vacuole/cytoplasm by osmosis and the membrane shrinks away from the rigid wall [1]',
        ],
        modelAnswer:
          'Gap Z is filled with the external concentrated solution. Because the cellulose cell wall is fully permeable, the external solution passes straight through it into the gap as water leaves the vacuole by osmosis across the partially permeable cell membrane, causing the cytoplasm and membrane to shrink away from the wall.',
      },
      {
        id: 'sq4_3c',
        label: '(c)',
        commandWord: 'Define & Explain',
        marks: 4,
        prompt:
          'Define the term diffusion [2]. Give one named example of active transport in plants or mammals and explain why energy is required [2].',
        solvingTip:
          'Diffusion definition requires: net movement of particles from higher concentration to lower concentration, down a concentration gradient, as a result of random kinetic movement. For active transport: root hair cells absorbing nitrate/magnesium ions from dilute soil water (or ileum epithelial cells absorbing glucose) against a concentration gradient using energy from respiration.',
        markSchemePoints: [
          'Net movement of particles/molecules/ions from a region of their higher concentration to a region of their lower concentration (down a concentration gradient) [1]',
          '...as a result of their random movement (kinetic energy) [1]',
          'Named example: uptake of mineral ions (e.g. nitrates) by root hair cells from soil OR uptake of glucose by epithelial cells in the small intestine/kidney [1]',
          'Energy (ATP from respiration) is needed by carrier proteins to move ions/molecules against a concentration gradient (from lower to higher concentration) [1]',
        ],
        modelAnswer:
          'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration (down a concentration gradient) as a result of their random movement. An example of active transport is the uptake of nitrate ions by plant root hair cells from dilute soil water: ATP from respiration is needed by membrane carrier proteins to pump ions against their concentration gradient.',
      },
    ],
  },

  {
    id: 'sq4_4',
    number: 4,
    topic: 4,
    topicName: '4. Biological Molecules & Food Tests',
    syllabusRef: '0610 Syllabus 4.1',
    totalMarks: 10,
    title: 'Semi-Quantitative Benedict’s Test, Lipid Emulsion & Biological Roles of Water',
    contextIntro:
      'Four liquid food samples (Samples 1, 2, 3, and 4) of equal volume were tested with excess Benedict’s solution and heated in a boiling water bath for 5 minutes. The final colours are shown in Fig. 4.1.',
    stimulus: {
      id: 'svg_food_test_tubes_benedict',
      caption: 'Fig. 4.1: Benedict’s test results for four unknown food samples after heating at 90 °C.',
    },
    subParts: [
      {
        id: 'sq4_4a',
        label: '(a)',
        commandWord: 'Deduce',
        marks: 2,
        prompt:
          'List Samples 1, 2, 3, and 4 in order from the lowest to the highest concentration of reducing sugar [1]. State which sample contains no reducing sugar [1].',
        solvingTip:
          'Benedict’s is semi-quantitative! Colour progression with increasing reducing sugar concentration is: Blue (none) → Green (trace/low) → Yellow/Orange (moderate) → Brick-Red (high).',
        markSchemePoints: [
          'Order from lowest to highest: Sample 1 → Sample 2 → Sample 3 → Sample 4 [1]',
          'No reducing sugar present: Sample 1 (remains blue) [1]',
        ],
        modelAnswer:
          'From lowest to highest reducing sugar concentration: Sample 1 → Sample 2 → Sample 3 → Sample 4. Sample 1 contains no reducing sugar because the Benedict’s solution remained blue.',
      },
      {
        id: 'sq4_4b',
        label: '(b)',
        commandWord: 'Describe & State',
        marks: 5,
        prompt:
          'Describe how you would test Sample 1 for the presence of fats/lipids, including the expected positive result [3]. State the chemical elements found in fats [1] and name their two molecular building-block subunits [1].',
        solvingTip:
          'Ethanol emulsion test steps: (1) Shake sample with ethanol to dissolve any lipid, (2) Pour or add cold/distilled water, (3) Positive result = cloudy white (milky) emulsion forms. Remember: fats contain C, H, and O, made from 1 glycerol + 3 fatty acids.',
        markSchemePoints: [
          'Add ethanol to the sample and shake thoroughly (to dissolve any lipids) [1]',
          'Pour the mixture into an equal volume of cold/distilled water (or add water and shake) [1]',
          'Positive result: a cloudy white / milky emulsion forms [1]',
          'Chemical elements: carbon (C), hydrogen (H), and oxygen (O) [1]',
          'Subunits: fatty acids and glycerol [1]',
        ],
        modelAnswer:
          'To test Sample 1 for lipids, add ethanol and shake thoroughly so any fats dissolve, then pour the mixture into cold distilled water. A positive result produces a cloudy white emulsion. Fats contain the elements carbon, hydrogen, and oxygen, and each fat molecule is built from glycerol joined to three fatty acids.',
      },
      {
        id: 'sq4_4c',
        label: '(c)',
        commandWord: 'Explain',
        marks: 3,
        prompt:
          'Water makes up around 70% of cell mass. Explain three distinct biological reasons why water is essential as a solvent in living organisms.',
        solvingTip:
          'Remember the three 0610 syllabus processes requiring water as a solvent: (1) Digestion — hydrolysing/dissolving large food molecules & enzymes; (2) Transport — dissolving glucose, amino acids, mineral ions, urea in blood plasma (and sucrose/mineral ions in phloem/xylem); (3) Excretion — dissolving urea/salts in urine.',
        markSchemePoints: [
          'Metabolic reactions / cytoplasm: dissolves enzymes and reactants so chemical reactions can occur inside cells [1]',
          'Transport: dissolves soluble nutrients (glucose, amino acids, mineral ions) in blood plasma or xylem/phloem sap [1]',
          'Digestion / Excretion: dissolves digestive enzymes/food in the gut OR dissolves waste urea and excess mineral ions to be excreted in urine [1]',
        ],
        modelAnswer:
          '1. Inside cells, water dissolves enzymes and substrates in the cytoplasm so metabolic reactions can take place.\n2. In transport systems, blood plasma dissolves glucose, amino acids, hormones, and mineral ions (and xylem water transports dissolved mineral ions in plants).\n3. In excretion and digestion, water dissolves toxic metabolic wastes such as urea for removal in urine and helps break down food molecules.',
      },
    ],
  },

  {
    id: 'sq4_5',
    number: 5,
    topic: 5,
    topicName: '5. Enzymes',
    syllabusRef: '0610 Syllabus 5.1',
    totalMarks: 10,
    title: 'Effect of pH & Substrate Concentration on Enzyme Activity',
    contextIntro:
      'Fig. 5.1 shows the effect of pH on the rate of reaction of two human digestive enzymes, Enzyme X and Enzyme Y, both measured at 37 °C.',
    stimulus: {
      id: 'svg_enzyme_ph_curves',
      caption: 'Fig. 5.1: Activity profiles of two human digestive enzymes (X and Y) across pH 1–12 at 37 °C.',
    },
    subParts: [
      {
        id: 'sq4_5a',
        label: '(a)',
        commandWord: 'State & Identify',
        marks: 4,
        prompt:
          'From Fig. 5.1, state the optimum pH of Enzyme X [1] and Enzyme Y [1]. Name a specific human enzyme represented by Enzyme X [1] and state the organ where it works [1].',
        solvingTip:
          'Read the peak of each curve directly from the x-axis: Enzyme X peaks at pH 2 (acidic stomach protease = pepsin); Enzyme Y peaks at pH 8 (alkaline pancreatic enzyme in the duodenum/small intestine such as trypsin or pancreatic lipase/amylase).',
        markSchemePoints: [
          'Optimum pH of Enzyme X = pH 2 (accept 1.5 – 2.5) [1]',
          'Optimum pH of Enzyme Y = pH 8 (accept 7.8 – 8.2) [1]',
          'Identity of Enzyme X: Pepsin (stomach protease) [1]',
          'Organ where Enzyme X acts: Stomach [1]',
        ],
        modelAnswer:
          'The optimum pH of Enzyme X is pH 2 and the optimum pH of Enzyme Y is pH 8. Enzyme X is pepsin (a protease), which functions inside the human stomach.',
      },
      {
        id: 'sq4_5b',
        label: '(b)',
        commandWord: 'Explain',
        marks: 3,
        prompt:
          'Using Fig. 5.1 and your knowledge of enzyme structure, explain why Enzyme Y shows zero activity at pH 2.',
        solvingTip:
          'Link extreme pH to bond disruption just like high temperature: extreme acidity (pH 2) alters charges/breaks ionic and hydrogen bonds holding Enzyme Y’s 3D shape → active site changes shape (denaturation) → substrate is no longer complementary and cannot bind.',
        markSchemePoints: [
          'At pH 2 (far below its optimum pH 8), Enzyme Y becomes denatured [1]',
          'The shape of its active site changes [1]',
          'The substrate is no longer complementary to the active site and cannot bind to form enzyme-substrate complexes [1]',
        ],
        modelAnswer:
          'At pH 2, the strongly acidic conditions disrupt bonds maintaining Enzyme Y’s shape, causing it to denature. Its active site changes shape so the substrate molecule is no longer complementary and cannot fit into the active site, resulting in zero reaction rate.',
      },
      {
        id: 'sq4_5c',
        label: '(c)',
        commandWord: 'Explain',
        marks: 3,
        prompt:
          'In another experiment at constant optimum pH and 37 °C, a fixed concentration of Enzyme Y is mixed with increasing concentrations of its substrate. Explain why the rate of reaction increases at first and then levels off (reaches a plateau).',
        solvingTip:
          'Explain using collision theory and limiting factors: (1) At low substrate concentration, substrate is the limiting factor — more substrate causes more frequent collisions with free active sites; (2) At high substrate concentration, ALL active sites are occupied/saturated at any instant, so enzyme concentration becomes the limiting factor and rate plateaus.',
        markSchemePoints: [
          'Initially, increasing substrate concentration causes more frequent collisions between substrate molecules and active sites, increasing rate [1]',
          'Eventually all enzyme active sites are occupied / saturated at any given moment [1]',
          'Enzyme concentration becomes the limiting factor, so the rate reaches a maximum plateau [1]',
        ],
        modelAnswer:
          'At low concentrations, adding more substrate increases the frequency of collisions with unoccupied active sites, so the reaction rate rises. Once every enzyme active site is occupied (saturated) at any instant, enzyme concentration becomes the limiting factor, so adding further substrate cannot increase the rate and the curve levels off.',
      },
    ],
  },

  {
    id: 'sq4_6',
    number: 6,
    topic: 6,
    topicName: '6. Human Digestive System',
    syllabusRef: '0610 Syllabus 7.1 – 7.5',
    totalMarks: 10,
    title: 'Tooth Structure, Dental Decay & Nutrient Absorption Pathways',
    contextIntro:
      'Physical digestion begins in the mouth as teeth cut and grind food into smaller pieces. Fig. 6.1 shows a vertical section through a human molar tooth.',
    stimulus: {
      id: 'svg_human_tooth_structure',
      caption: 'Fig. 6.1: Vertical section through a human molar tooth (structures A, B, C, and D).',
    },
    subParts: [
      {
        id: 'sq4_6a',
        label: '(a)',
        commandWord: 'Identify',
        marks: 4,
        prompt:
          'Identify the structures labelled A, B, C, and D on Fig. 6.1.',
        solvingTip:
          'Work from outside to inside: A = hardest outer white layer (Enamel); B = bone-like middle layer (Dentine); C = living centre with nerves and blood vessels (Pulp cavity); D = bone-like layer anchoring the root in the socket/gum (Cement).',
        markSchemePoints: [
          'A: Enamel [1]',
          'B: Dentine [1]',
          'C: Pulp / Pulp cavity [1]',
          'D: Cement [1]',
        ],
        modelAnswer:
          'A is enamel, B is dentine, C is the pulp cavity, and D is cement.',
      },
      {
        id: 'sq4_6b',
        label: '(b)',
        commandWord: 'Explain',
        marks: 3,
        prompt:
          'Explain how eating frequent sugary foods and failing to brush teeth can lead to dental decay in structure A and structure B.',
        solvingTip:
          'State the exact biological chain: (1) Bacteria in plaque on teeth respire sugars, (2) producing acid as waste, (3) acid dissolves calcium salts in hard enamel (A) and then softer dentine (B), creating a cavity.',
        markSchemePoints: [
          'Bacteria in dental plaque feed on / respire the sugars left on teeth [1]',
          'The bacteria produce acid as a metabolic waste product [1]',
          'The acid dissolves the calcium mineral salts in enamel (A) and subsequently erodes softer dentine (B) [1]',
        ],
        modelAnswer:
          'Bacteria living in plaque on the tooth surface feed on and respire the trapped sugars, releasing acid as a waste product. This acid dissolves the mineral salts of the enamel (A) and eventually penetrates into the softer dentine (B), forming a cavity.',
      },
      {
        id: 'sq4_6c',
        label: '(c)',
        commandWord: 'Define & Distinguish',
        marks: 3,
        prompt:
          'Once food is digested and absorbed in the ileum, nutrients enter the body tissues. Define assimilation [1], and state which specific villus vessel absorbs glucose/amino acids [1] and which absorbs fatty acids/glycerol [1].',
        solvingTip:
          'Remember: Assimilation = uptake and use of nutrients by cells (e.g. amino acids built into proteins, glucose respired). Water-soluble molecules (glucose, amino acids) enter blood capillaries (→ hepatic portal vein → liver); lipid digestion products (fatty acids + glycerol) enter the central lacteal (lymphatic system).',
        markSchemePoints: [
          'Assimilation: uptake and use of absorbed nutrients by cells (becoming part of the cells / used in metabolism) [1]',
          'Glucose and amino acids are absorbed into blood capillaries (and transported to the liver via the hepatic portal vein) [1]',
          'Fatty acids and glycerol are absorbed into the central lacteal (lymphatic vessel) [1]',
        ],
        modelAnswer:
          'Assimilation is the uptake and use of absorbed food molecules by body cells. Inside each intestinal villus, glucose and amino acids are absorbed into the blood capillaries, whereas fatty acids and glycerol are absorbed into the central lacteal.',
      },
    ],
  },
];
