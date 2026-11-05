import { OrganInfo, StageInfo, EnzymeInfo, QuizQuestion, FoodType, FoodTypeInfo, OrganId } from '../types/digestive';

export const STAGES: StageInfo[] = [
  {
    id: 'ingestion',
    name: '1. Ingestion',
    definition: 'Taking substances into the body through the mouth.',
    keySite: 'Mouth / Buccal Cavity',
    igcseNote: 'Cambridge 0610 definition: "The taking in of substances, e.g. food and drink, into the body through the mouth".'
  },
  {
    id: 'digestion',
    name: '2. Digestion',
    definition: 'The breakdown of large, insoluble food molecules into small, water-soluble molecules so they can be absorbed.',
    keySite: 'Mouth, Stomach, Duodenum, Ileum',
    igcseNote: 'Divided into Physical Digestion (mechanical breakdown without chemical change, e.g., teeth, churning, bile) and Chemical Digestion (enzymes breaking bonds).'
  },
  {
    id: 'absorption',
    name: '3. Absorption',
    definition: 'The movement of small digested food molecules and ions through the wall of the intestine into the blood or lymph.',
    keySite: 'Small Intestine (Ileum)',
    igcseNote: 'Adapted villi and microvilli provide a massive surface area and short diffusion distance.'
  },
  {
    id: 'assimilation',
    name: '4. Assimilation',
    definition: 'The movement of digested food molecules into the cells of the body where they are used, becoming part of the cells.',
    keySite: 'Body Cells (via Liver & Hepatic Portal Vein)',
    igcseNote: 'Example: Amino acids absorbed by cells to synthesise enzymes or muscle proteins; glucose used in cellular respiration.'
  },
  {
    id: 'egestion',
    name: '5. Egestion',
    definition: 'The passing out of food that has not been digested or absorbed, as faeces, through the anus.',
    keySite: 'Anus',
    igcseNote: 'CRITICAL EXAM DISTINCTION: Egestion is NOT excretion! Excretion is the removal of metabolic waste made inside cells (e.g., urea, CO2). Egestion is food that never entered body cells.'
  }
];

export const ORGANS: OrganInfo[] = [
  {
    id: 'mouth',
    name: 'Mouth (Buccal Cavity)',
    stage: 'ingestion',
    description: 'Food is ingested here. Mechanical digestion begins with chewing (teeth) and chemical digestion begins with salivary amylase.',
    positionInPath: 0,
    mechanicalDigestion: [
      'Teeth bite, tear, and grind food into smaller pieces (increasing surface area for enzymes).',
      'Tongue shapes food and saliva into a soft ball called a bolus for swallowing.'
    ],
    chemicalDigestion: [
      'Salivary amylase breaks down starch into simpler reducing sugars (maltose).'
    ],
    secretions: ['Saliva (contains water, mucus for lubrication, and salivary amylase)'],
    optimumPh: 'Neutral to slightly alkaline (~pH 6.8 - 7.2)',
    enzymes: ['Salivary Amylase'],
    igcseKeyPoints: [
      'Site of ingestion.',
      'Mechanical digestion increases surface area of food.',
      'Saliva lubricates the bolus to ease swallowing through the oesophagus.'
    ],
    examinerTip: 'Do not say amylase digests starch into glucose in the mouth! Salivary amylase breaks starch down into maltose (a disaccharide), not glucose.',
    commonMistake: 'Thinking that chemical digestion starts in the stomach. It begins right in the mouth!',
    svgHighlightId: 'organ-mouth'
  },
  {
    id: 'salivary_glands',
    name: 'Salivary Glands',
    stage: 'digestion',
    description: 'Three pairs of glands (parotid, submandibular, sublingual) that produce saliva containing salivary amylase.',
    positionInPath: -1,
    isAccessory: true,
    connectedTo: ['mouth'],
    mechanicalDigestion: ['Produces fluid to wet and soften dry food.'],
    chemicalDigestion: ['Supplies amylase for starch hydrolysis.'],
    secretions: ['Saliva with salivary amylase and mucus'],
    optimumPh: '~pH 7.0',
    enzymes: ['Salivary Amylase'],
    igcseKeyPoints: [
      'Exocrine glands with ducts delivering saliva directly into the mouth.',
      'Mucus helps stick food particles together into a slippery bolus.'
    ],
    examinerTip: 'Recognise salivary glands in the head/jaw region on anatomical diagrams.',
    commonMistake: 'Confusing salivary glands with endocrine hormone glands.',
    svgHighlightId: 'organ-salivary'
  },
  {
    id: 'oesophagus',
    name: 'Oesophagus (Gullet)',
    stage: 'digestion',
    description: 'Muscular tube connecting the mouth to the stomach. Propels the bolus downward via involuntary muscular contractions called peristalsis.',
    positionInPath: 1,
    mechanicalDigestion: [
      'Peristalsis: Antagonistic muscles (circular and longitudinal) contract and relax in waves.'
    ],
    chemicalDigestion: [
      'No new enzymes secreted; salivary amylase continues working inside the bolus until stomach acid denatures it.'
    ],
    secretions: ['Mucus (lubricates passage of food)'],
    optimumPh: '~pH 7.0',
    enzymes: ['None (secretes only mucus)'],
    igcseKeyPoints: [
      'Peristalsis moves food downward even against gravity.',
      'Circular muscles contract behind bolus to squeeze it forward.',
      'Longitudinal muscles contract in front to shorten the tube.'
    ],
    examinerTip: 'IGCSE frequently asks you to describe peristalsis in terms of circular and longitudinal muscles. Remember: behind the bolus, circular muscles contract and longitudinal relax!',
    commonMistake: 'Claiming gravity is responsible for food reaching the stomach. Peristalsis pushes food, which is why astronauts can swallow in space.',
    svgHighlightId: 'organ-oesophagus'
  },
  {
    id: 'stomach',
    name: 'Stomach',
    stage: 'digestion',
    description: 'An elastic, muscular J-shaped bag that stores food, churns it into acidic chyme, and begins protein digestion.',
    positionInPath: 2,
    mechanicalDigestion: [
      'Muscular churning: strong contractions of stomach wall physically break down food and thoroughly mix it with gastric juice.'
    ],
    chemicalDigestion: [
      'Pepsin (a protease) hydrolyses large, insoluble proteins into smaller peptides/polypeptides.'
    ],
    secretions: [
      'Hydrochloric Acid (HCl): creates acidic pH ~1.5 - 2.0 and kills bacteria.',
      'Pepsin (protease enzyme).',
      'Mucus (forms protective lining so stomach acid does not digest stomach wall).'
    ],
    optimumPh: 'Acidic (~pH 1.5 - 2.0)',
    enzymes: ['Pepsin (Protease)'],
    igcseKeyPoints: [
      'Hydrochloric acid has two crucial roles: 1. Kills pathogens by denaturing their enzymes; 2. Provides optimum acidic pH for pepsin.',
      'Pepsin digests proteins into peptides.',
      'Food turns into a creamy liquid called chyme.'
    ],
    examinerTip: 'Always state BOTH roles of hydrochloric acid: kills bacteria AND provides the acidic pH required for pepsin.',
    commonMistake: 'Saying stomach acid "burns" or "digests" food directly. Acid does NOT chemically digest food; it provides the correct pH for enzymes and kills pathogens.',
    svgHighlightId: 'organ-stomach'
  },
  {
    id: 'liver',
    name: 'Liver',
    stage: 'digestion',
    description: 'The largest internal organ. Produces bile which is vital for neutralising stomach acid and emulsifying fats. Also stores glycogen and assimilates nutrients.',
    positionInPath: -1,
    isAccessory: true,
    connectedTo: ['gall_bladder', 'duodenum'],
    mechanicalDigestion: [
      'Synthesises bile to emulsify fats (physical digestion, breaking large fat droplets into tiny droplets).'
    ],
    chemicalDigestion: [
      'Bile contains NO enzymes! It acts mechanically by increasing lipid surface area.'
    ],
    secretions: ['Bile (yellow-green alkaline fluid containing bile salts and pigments)'],
    optimumPh: 'Alkaline',
    enzymes: ['None in bile'],
    igcseKeyPoints: [
      'Liver PRODUCES bile (gall bladder only stores it).',
      'Bile is alkaline: neutralises acidic chyme coming from stomach.',
      'Bile emulsifies fats: increases surface area for lipase action.',
      'Receives absorbed nutrients from ileum via the hepatic portal vein.'
    ],
    examinerTip: 'A classic 2-mark question: State two functions of bile. 1: Neutralises acidic chyme. 2: Emulsifies fats (increases surface area for lipase).',
    commonMistake: 'Saying bile digests fats chemically or contains lipase. Bile is NOT an enzyme!',
    svgHighlightId: 'organ-liver'
  },
  {
    id: 'gall_bladder',
    name: 'Gall Bladder',
    stage: 'digestion',
    description: 'Small pouch situated under the liver that stores and concentrates bile before releasing it into the duodenum via the bile duct.',
    positionInPath: -1,
    isAccessory: true,
    connectedTo: ['liver', 'duodenum'],
    mechanicalDigestion: ['Releases concentrated bile into duodenum during a meal.'],
    chemicalDigestion: ['None'],
    secretions: ['Bile (via the bile duct)'],
    optimumPh: 'Alkaline',
    enzymes: ['None'],
    igcseKeyPoints: [
      'Stores bile produced by liver.',
      'Contracts to squirt bile along the bile duct into the duodenum.'
    ],
    examinerTip: 'Distinguish between the liver (makes bile) and gall bladder (stores bile).',
    commonMistake: 'Thinking gall bladder makes bile.',
    svgHighlightId: 'organ-gallbladder'
  },
  {
    id: 'pancreas',
    name: 'Pancreas',
    stage: 'digestion',
    description: 'Glandular organ positioned behind the stomach. Secretes pancreatic juice containing all three main digestive enzyme types plus alkaline hydrogencarbonate.',
    positionInPath: -1,
    isAccessory: true,
    connectedTo: ['duodenum'],
    mechanicalDigestion: ['None'],
    chemicalDigestion: [
      'Pancreatic Amylase: digests remaining starch → maltose.',
      'Trypsin (Protease): digests proteins and peptides → amino acids/peptides.',
      'Pancreatic Lipase: digests lipids (fats & oils) → fatty acids + glycerol.'
    ],
    secretions: [
      'Pancreatic juice containing amylase, trypsin, lipase, and sodium hydrogencarbonate (alkaline).'
    ],
    optimumPh: 'Alkaline (~pH 7.5 - 8.5)',
    enzymes: ['Pancreatic Amylase', 'Trypsin (Protease)', 'Lipase'],
    igcseKeyPoints: [
      'Secretes pancreatic juice along pancreatic duct into the duodenum.',
      'Alkaline hydrogencarbonate neutralises acidic stomach chyme.',
      'Provides enzymes for all three major macronutrients: carbohydrates, proteins, and fats.'
    ],
    examinerTip: 'Pancreas produces all three: Amylase, Trypsin (protease), and Lipase. Remember the acronym "ATL"!',
    commonMistake: 'Forgetting that trypsin requires an alkaline environment, unlike stomach pepsin which needs acid.',
    svgHighlightId: 'organ-pancreas'
  },
  {
    id: 'duodenum',
    name: 'Duodenum (First Part of Small Intestine)',
    stage: 'digestion',
    description: 'The first C-shaped loop of the small intestine. Receives acidic chyme from the stomach, bile from gall bladder, and pancreatic juice from the pancreas.',
    positionInPath: 3,
    mechanicalDigestion: [
      'Bile emulsifies fats into smaller droplets, increasing surface area for lipase.'
    ],
    chemicalDigestion: [
      'Pancreatic amylase breaks starch into maltose.',
      'Trypsin breaks proteins into peptides and amino acids.',
      'Lipase breaks fats into fatty acids and glycerol.'
    ],
    secretions: ['Receives bile and pancreatic juice'],
    optimumPh: 'Slightly alkaline (~pH 7.5 - 8.0)',
    enzymes: ['Amylase', 'Trypsin', 'Lipase (from pancreas)'],
    igcseKeyPoints: [
      'Site of intense chemical digestion.',
      'Acidic chyme is neutralised by alkaline secretions from bile and pancreas.',
      'Provides optimum alkaline pH for pancreatic enzymes to function.'
    ],
    examinerTip: 'Make sure you can locate the duodenum: it is the first segment of the small intestine right after the stomach sphincter.',
    commonMistake: 'Calling the whole small intestine the ileum. The duodenum is the first portion; the ileum is the longer subsequent portion.',
    svgHighlightId: 'organ-duodenum'
  },
  {
    id: 'ileum',
    name: 'Ileum (Second Part of Small Intestine & Villi)',
    stage: 'absorption',
    description: 'Longest section of the small intestine. Chemical digestion finishes here, and nearly all soluble nutrients and water are absorbed into the bloodstream and lymph.',
    positionInPath: 4,
    mechanicalDigestion: [
      'Peristaltic mixing keeps digested molecules in close contact with villi for absorption.'
    ],
    chemicalDigestion: [
      'Maltase (on epithelial cell membranes): breaks maltose → glucose.',
      'Peptidases: break remaining peptides into amino acids.'
    ],
    secretions: ['Intestinal enzymes bound to microvilli membranes'],
    optimumPh: 'Alkaline (~pH 7.5 - 8.0)',
    enzymes: ['Maltase', 'Peptidases'],
    igcseKeyPoints: [
      'Main site of absorption of digested food molecules and water.',
      'Lined with millions of microscopic finger-like projections called villi.',
      'Villi have microvilli on epithelial cells, creating an immense surface area.',
      'Glucose & amino acids absorb into blood capillaries → Hepatic Portal Vein to liver.',
      'Fatty acids and glycerol absorb into the central lacteal (lymphatic vessel).'
    ],
    examinerTip: 'Four key adaptations of villi for exam questions: 1. Millions of villi & microvilli give huge surface area; 2. Wall is one cell thick for short diffusion path; 3. Dense capillary network maintains steep concentration gradient; 4. Lacteals absorb fatty acids and glycerol.',
    commonMistake: 'Saying all nutrients enter the blood capillaries. Fatty acids and glycerol enter the lacteals first, which join the lymph system!',
    svgHighlightId: 'organ-ileum'
  },
  {
    id: 'colon',
    name: 'Colon (Large Intestine)',
    stage: 'absorption',
    description: 'Wide tube framing the small intestine. Absorbs most of the remaining water, mineral salts, and vitamins from undigested material, leaving semi-solid faeces.',
    positionInPath: 5,
    mechanicalDigestion: ['Slow peristaltic contractions compact waste material into faeces.'],
    chemicalDigestion: ['No digestive enzymes secreted. Beneficial gut bacteria ferment some fibre.'],
    secretions: ['Mucus (protects gut wall and binds faeces)'],
    optimumPh: '~pH 6.5 - 7.5',
    enzymes: ['None secreted by colon'],
    igcseKeyPoints: [
      'Primary function: reabsorption of remaining water and mineral ions.',
      'Compact undigested matter, cellulose fibre, dead cells, and bacteria into faeces.',
      'Note: Most water is actually absorbed in the small intestine, but the colon absorbs the remainder to prevent dehydration.'
    ],
    examinerTip: 'IGCSE asks: "Name the organ where most remaining water is absorbed from undigested food." -> Colon (or Large Intestine).',
    commonMistake: 'Thinking digestion of food happens in the colon. No human digestive enzymes are secreted here.',
    svgHighlightId: 'organ-colon'
  },
  {
    id: 'rectum',
    name: 'Rectum',
    stage: 'egestion',
    description: 'Final 12-15 cm straight section of the large intestine. Stores faeces temporarily until they are egested.',
    positionInPath: 6,
    mechanicalDigestion: ['Stretch receptors signal when the rectum is full, triggering defecation reflex.'],
    chemicalDigestion: ['None'],
    secretions: ['Mucus'],
    optimumPh: 'Neutral',
    enzymes: ['None'],
    igcseKeyPoints: [
      'Temporary storage site for faeces prior to egestion.'
    ],
    examinerTip: 'Do not confuse the rectum (storage) with the anus (muscular ring opening).',
    commonMistake: 'Stating egestion happens in the rectum. The rectum only stores faeces; egestion occurs when faeces pass through the anus.',
    svgHighlightId: 'organ-rectum'
  },
  {
    id: 'anus',
    name: 'Anus',
    stage: 'egestion',
    description: 'The terminal muscular sphincter of the alimentary canal. Relaxes to allow egestion of faeces.',
    positionInPath: 7,
    mechanicalDigestion: ['Sphincter muscle ring controls the release of faeces.'],
    chemicalDigestion: ['None'],
    secretions: ['None'],
    optimumPh: 'N/A',
    enzymes: ['None'],
    igcseKeyPoints: [
      'Site where egestion occurs.',
      'Anal sphincter relaxes to release undigested waste (faeces).',
      'Faeces consists of: undigested food (mainly cellulose/fibre), dead gut cells, bacteria, and water.'
    ],
    examinerTip: 'State the difference between egestion and excretion: Egestion is the removal of undigested food as faeces through the anus. Excretion is the removal of metabolic toxic waste (urea, CO2) produced by cells.',
    commonMistake: 'Calling defecation/egestion "excretion". This is penalised in IGCSE Biology!',
    svgHighlightId: 'organ-anus'
  }
];

export const ENZYMES: EnzymeInfo[] = [
  {
    name: 'Salivary Amylase',
    type: 'Carbohydrase',
    producedBy: ['Salivary Glands'],
    secretedInto: ['Mouth'],
    substrate: 'Starch (insoluble polysaccharide)',
    products: 'Maltose (soluble disaccharide reducing sugar)',
    optimumPh: 7.0,
    phRange: '6.5 - 7.5',
    igcseSummary: 'Begins starch breakdown in the mouth. Denatured once it reaches the acidic stomach.'
  },
  {
    name: 'Pepsin',
    type: 'Protease',
    producedBy: ['Gastric glands in stomach wall'],
    secretedInto: ['Stomach lumen'],
    substrate: 'Proteins (polypeptide chains)',
    products: 'Peptides / smaller polypeptides',
    optimumPh: 2.0,
    phRange: '1.5 - 2.5',
    igcseSummary: 'Adapted to work in strongly acidic conditions provided by hydrochloric acid (HCl).'
  },
  {
    name: 'Pancreatic Amylase',
    type: 'Carbohydrase',
    producedBy: ['Pancreas'],
    secretedInto: ['Duodenum (via pancreatic duct)'],
    substrate: 'Remaining Starch',
    products: 'Maltose',
    optimumPh: 8.0,
    phRange: '7.5 - 8.5',
    igcseSummary: 'Finishes starch digestion in the slightly alkaline duodenum.'
  },
  {
    name: 'Trypsin',
    type: 'Protease',
    producedBy: ['Pancreas'],
    secretedInto: ['Duodenum (via pancreatic duct)'],
    substrate: 'Proteins and Peptides',
    products: 'Peptides and Amino Acids',
    optimumPh: 8.0,
    phRange: '7.5 - 8.5',
    igcseSummary: 'Works in alkaline conditions neutralised by bile and pancreatic hydrogencarbonate.'
  },
  {
    name: 'Lipase',
    type: 'Lipase',
    producedBy: ['Pancreas'],
    secretedInto: ['Duodenum (via pancreatic duct)'],
    substrate: 'Lipids (Fats and Oils)',
    products: 'Fatty Acids and Glycerol (1 glycerol + 3 fatty acids)',
    optimumPh: 8.0,
    phRange: '7.5 - 8.5',
    igcseSummary: 'Breaks ester bonds in triglycerides. Rate is vastly accelerated when bile has emulsified fats into tiny droplets!'
  },
  {
    name: 'Maltase',
    type: 'Carbohydrase',
    producedBy: ['Epithelial cells of small intestine'],
    secretedInto: ['Ileum cell membrane (brush border)'],
    substrate: 'Maltose (disaccharide)',
    products: 'Glucose (monosaccharide)',
    optimumPh: 7.5,
    phRange: '7.0 - 8.0',
    igcseSummary: 'Final step in carbohydrate digestion. Yields glucose for cellular respiration and absorption.'
  }
];

export const IGCSE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
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
    id: 'q2',
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
    id: 'q3',
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
    id: 'q4',
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
    id: 'q5',
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
    id: 'q6',
    type: 'multiple-choice',
    syllabusRef: '0610 Topic 7.1',
    question: 'What is the crucial difference between egestion and excretion?',
    options: [
      'Egestion removes metabolic cellular waste; excretion removes undigested food',
      'Egestion is the removal of undigested food as faeces; excretion is the removal of metabolic waste produced by cells',
      'Both terms mean the exact same process in the human body',
      'Egestion only happens in plants, excretion in animals'
    ],
    correctIndex: 1,
    explanation: 'Egestion is the passing out of undigested, unabsorbed material (faeces) via the anus. Excretion is the removal of toxic substances and waste products of cellular metabolism (such as urea from deamination and CO2 from respiration).',
    examTip: 'Never use the word excretion when describing faeces! Faeces is egested.'
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    syllabusRef: '0610 Topic 7.3',
    question: 'Which enzyme, substrate, and product combination is correct for the small intestine?',
    options: [
      'Pepsin digests starch into glucose',
      'Amylase digests protein into amino acids',
      'Maltase digests maltose into glucose',
      'Lipase digests glycogen into maltose'
    ],
    correctIndex: 2,
    explanation: 'Maltase is bound to the membranes of epithelial cells in the small intestine, hydrolysing maltose into glucose molecules.',
    examTip: 'Maltase substrate = Maltose, product = Glucose.'
  },
  {
    id: 'q8',
    type: 'multiple-choice',
    syllabusRef: '0610 Topic 7.2',
    question: 'During peristalsis in the oesophagus, what occurs behind the food bolus to push it along?',
    options: [
      'Circular muscles contract and longitudinal muscles relax',
      'Circular muscles relax and longitudinal muscles contract',
      'Both muscle layers relax simultaneously',
      'Cilia beat upwards to reverse movement'
    ],
    correctIndex: 0,
    explanation: 'Peristalsis is caused by antagonistic muscle pairs. Behind the bolus, circular muscles contract (narrowing the lumen) and longitudinal muscles relax, forcing the food downward.',
    examTip: 'Behind bolus: Circular contract, lumen narrows. In front of bolus: Circular relax, longitudinal contract.'
  }
];

export const FOOD_TYPES: Record<FoodType, FoodTypeInfo> = {
  carbohydrates: {
    id: 'carbohydrates',
    name: 'Carbohydrates',
    icon: '🥖',
    color: 'amber',
    glowColor: '#f59e0b',
    breakdownSummary: 'Starch → Maltose (Amylase) → Glucose (Maltase)',
    finalAbsorbedUnit: 'Glucose',
    absorptionDestination: 'Blood Capillaries → Hepatic Portal Vein → Liver',
  },
  proteins: {
    id: 'proteins',
    name: 'Proteins',
    icon: '🥩',
    color: 'rose',
    glowColor: '#e11d48',
    breakdownSummary: 'Proteins → Polypeptides (Pepsin) → Peptides (Trypsin) → Amino Acids (Peptidases)',
    finalAbsorbedUnit: 'Amino Acids',
    absorptionDestination: 'Blood Capillaries → Hepatic Portal Vein → Liver',
  },
  fats: {
    id: 'fats',
    name: 'Fats / Lipids',
    icon: '🥑',
    color: 'emerald',
    glowColor: '#10b981',
    breakdownSummary: 'Large Fat Droplets → Emulsified by Bile → Fatty Acids & Glycerol (Lipase)',
    finalAbsorbedUnit: 'Fatty Acids & Glycerol',
    absorptionDestination: 'Central Lacteal (Lymphatic system)',
  },
};

export interface FoodStageDetails {
  state: string;
  chemicalAction: string;
  enzyme: string;
  phNote: string;
  igcseTip: string;
}

export const FOOD_JOURNEY_DETAILS: Record<FoodType, Record<OrganId, FoodStageDetails>> = {
  carbohydrates: {
    mouth: {
      state: 'Starch Digestion Begins',
      chemicalAction: 'Salivary amylase breaks starch down into maltose',
      enzyme: 'Salivary Amylase',
      phNote: 'Neutral pH 6.8–7.2',
      igcseTip: 'Salivary amylase is produced by salivary glands; requires neutral pH.',
    },
    salivary_glands: {
      state: 'Amylase Secretion',
      chemicalAction: 'Secretes amylase enzyme and mucus into mouth',
      enzyme: 'Salivary Amylase',
      phNote: 'Neutral pH ~7',
      igcseTip: 'Secretes saliva to moisten food and begin starch hydrolysis.',
    },
    oesophagus: {
      state: 'Peristalsis Transit',
      chemicalAction: 'Bolus pushed down by peristalsis; amylase continues briefly inside bolus',
      enzyme: 'Salivary Amylase (residual)',
      phNote: 'Neutral pH',
      igcseTip: 'Antagonistic circular and longitudinal muscles push food bolus.',
    },
    stomach: {
      state: 'Amylase Denatured (Paused)',
      chemicalAction: 'Stomach HCl (pH 1.5–2.0) denatures salivary amylase; starch digestion stops',
      enzyme: 'None (Amylase denatured)',
      phNote: 'Very Acidic pH 1.5–2.0',
      igcseTip: 'Key exam point: Amylase active site is permanently altered by low pH.',
    },
    liver: {
      state: 'Glucose Processing Hub',
      chemicalAction: 'Prepares to receive absorbed glucose from hepatic portal vein',
      enzyme: 'Insulin/Glucagon pathways',
      phNote: 'Physiological pH',
      igcseTip: 'Excess glucose converted to glycogen for storage.',
    },
    gall_bladder: {
      state: 'Acid Neutralisation',
      chemicalAction: 'Stores bile (no enzymes for carbohydrates)',
      enzyme: 'None',
      phNote: 'Alkaline',
      igcseTip: 'Bile neutralises stomach acid so pancreatic amylase can work.',
    },
    pancreas: {
      state: 'Pancreatic Amylase Secretion',
      chemicalAction: 'Produces pancreatic amylase and hydrogen carbonate to neutralise acid',
      enzyme: 'Pancreatic Amylase',
      phNote: 'Alkaline pH ~8',
      igcseTip: 'Secretes enzymes into duodenum via the pancreatic duct.',
    },
    duodenum: {
      state: 'Major Starch Hydrolysis',
      chemicalAction: 'Pancreatic amylase digests all remaining starch into maltose',
      enzyme: 'Pancreatic Amylase',
      phNote: 'Alkaline pH 7.5–8.2',
      igcseTip: 'Bile salts neutralise chyme so pancreatic amylase functions at optimum pH.',
    },
    ileum: {
      state: 'Final Digestion & Absorption',
      chemicalAction: 'Maltase on epithelial membrane hydrolyses maltose → Glucose; absorbed into blood capillaries',
      enzyme: 'Maltase (on brush border microvilli)',
      phNote: 'Alkaline pH 7.5–8.0',
      igcseTip: 'Glucose diffuses and is actively co-transported into blood capillaries.',
    },
    colon: {
      state: 'Fibre Formation',
      chemicalAction: 'Indigestible cellulose (dietary fibre) absorbs water, adding bulk',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Humans lack cellulase to digest plant fibre; it prevents constipation.',
    },
    rectum: {
      state: 'Faeces Storage',
      chemicalAction: 'Stores undigested plant fibre, bacteria, and dead cells',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Egestion: removal of undigested dietary fibre.',
    },
    anus: {
      state: 'Egestion',
      chemicalAction: 'Sphincter relaxes to pass out undigested carbohydrate fibre',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Egestion is distinct from excretion (metabolic waste).',
    },
  },
  proteins: {
    mouth: {
      state: 'Physical Mastication',
      chemicalAction: 'Teeth bite and grind protein fibres into smaller pieces; no chemical digestion',
      enzyme: 'None',
      phNote: 'Neutral pH ~7',
      igcseTip: 'Increases surface area for pepsin in the stomach.',
    },
    salivary_glands: {
      state: 'Lubrication Only',
      chemicalAction: 'Secretes mucus to bind protein fragments into a cohesive bolus',
      enzyme: 'None for protein',
      phNote: 'Neutral pH',
      igcseTip: 'Saliva contains amylase but NO proteases.',
    },
    oesophagus: {
      state: 'Peristalsis Transit',
      chemicalAction: 'Protein bolus pushed smoothly down to stomach by peristalsis',
      enzyme: 'None',
      phNote: 'Neutral pH',
      igcseTip: 'Muscular contractions push bolus without chemical change.',
    },
    stomach: {
      state: 'Protein Digestion Begins',
      chemicalAction: 'Pepsin digests long protein molecules into shorter polypeptides',
      enzyme: 'Pepsin (activated from pepsinogen)',
      phNote: 'Acidic pH 1.5–2.0 (HCl)',
      igcseTip: 'HCl provides optimum acidic pH for pepsin and kills bacteria.',
    },
    liver: {
      state: 'Deamination Site',
      chemicalAction: 'Prepares to deaminate excess absorbed amino acids into urea',
      enzyme: 'Deamination enzymes',
      phNote: 'Physiological pH',
      igcseTip: 'Nitrogenous part of amino acids converted to urea (excretion).',
    },
    gall_bladder: {
      state: 'Acid Neutralisation',
      chemicalAction: 'Bile neutralises acidic chyme entering the duodenum',
      enzyme: 'None',
      phNote: 'Alkaline',
      igcseTip: 'Essential so that alkaline pancreatic proteases (trypsin) are not denatured.',
    },
    pancreas: {
      state: 'Trypsin Secretion',
      chemicalAction: 'Synthesises and secretes trypsin into pancreatic juice',
      enzyme: 'Trypsin',
      phNote: 'Alkaline pH ~8',
      igcseTip: 'Trypsin is a protease secreted in alkaline conditions.',
    },
    duodenum: {
      state: 'Polypeptide Digestion',
      chemicalAction: 'Trypsin breaks down polypeptides into smaller peptide fragments',
      enzyme: 'Trypsin',
      phNote: 'Alkaline pH 7.5–8.5',
      igcseTip: 'Protease in small intestine operates at pH 8, in contrast to pepsin in stomach at pH 2.',
    },
    ileum: {
      state: 'Final Digestion & Absorption',
      chemicalAction: 'Peptidases digest peptides into Amino Acids; absorbed into blood capillaries',
      enzyme: 'Peptidases / Proteases',
      phNote: 'Alkaline pH ~8',
      igcseTip: 'Amino acids absorbed into blood capillary network and carried via Hepatic Portal Vein.',
    },
    colon: {
      state: 'Water Absorption',
      chemicalAction: 'Reabsorbs water; tiny amounts of unabsorbed peptides pass through',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'No protein digestion in the large intestine.',
    },
    rectum: {
      state: 'Faeces Storage',
      chemicalAction: 'Holds faeces containing bacteria and unabsorbed residues',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Egestion storage.',
    },
    anus: {
      state: 'Egestion',
      chemicalAction: 'Undigested remnants expelled as faeces',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Egestion of undigested matter.',
    },
  },
  fats: {
    mouth: {
      state: 'Warming & Mechanical Chewing',
      chemicalAction: 'Teeth crush fat globules into smaller chunks; saliva lubricates with mucus',
      enzyme: 'None',
      phNote: 'Neutral pH ~7',
      igcseTip: 'No chemical lipid digestion occurs in the human mouth.',
    },
    salivary_glands: {
      state: 'Lubrication Only',
      chemicalAction: 'Secretes mucus to lubricate fat-containing bolus',
      enzyme: 'None for fats',
      phNote: 'Neutral pH',
      igcseTip: 'Saliva lubricates swallowing.',
    },
    oesophagus: {
      state: 'Peristalsis Transit',
      chemicalAction: 'Peristaltic contraction waves move fat-containing bolus down',
      enzyme: 'None',
      phNote: 'Neutral pH',
      igcseTip: 'Mucus prevents abrasion.',
    },
    stomach: {
      state: 'Mechanical Churning',
      chemicalAction: 'Strong muscular contractions churn fats into a warm emulsion suspension in chyme',
      enzyme: 'Negligible',
      phNote: 'Acidic pH 1.5–2.0',
      igcseTip: 'Physical mixing only; main lipid digestion occurs in duodenum.',
    },
    liver: {
      state: 'Bile Production',
      chemicalAction: 'Synthesises bile salts from cholesterol (mechanical emulsifier)',
      enzyme: 'None (Bile is NOT an enzyme)',
      phNote: 'Alkaline',
      igcseTip: 'CRITICAL EXAM TRAP: Bile contains NO enzymes! It is physical emulsification.',
    },
    gall_bladder: {
      state: 'Bile Storage & Release',
      chemicalAction: 'Stores and concentrates bile, releasing it into duodenum upon fatty chyme arrival',
      enzyme: 'None',
      phNote: 'Alkaline',
      igcseTip: 'Bile duct delivers concentrated bile into the duodenum.',
    },
    pancreas: {
      state: 'Lipase Secretion',
      chemicalAction: 'Synthesises pancreatic lipase and sends it into duodenum',
      enzyme: 'Pancreatic Lipase',
      phNote: 'Alkaline pH ~8',
      igcseTip: 'Lipase is the enzyme that breaks down lipids into fatty acids and glycerol.',
    },
    duodenum: {
      state: 'Emulsification & Lipase Digestion',
      chemicalAction: 'Bile emulsifies large fat droplets into tiny droplets (increasing surface area); Lipase digests them into Fatty Acids & Glycerol',
      enzyme: 'Pancreatic Lipase + Bile salts (emulsifier)',
      phNote: 'Alkaline pH 7.5–8.2',
      igcseTip: 'Emulsification is physical digestion (greater surface area for lipase to act).',
    },
    ileum: {
      state: 'Fat Absorption into Lacteal',
      chemicalAction: 'Lipase completes digestion; Fatty Acids & Glycerol absorbed across microvilli into the Central Lacteal',
      enzyme: 'Intestinal Lipase',
      phNote: 'Alkaline pH ~8',
      igcseTip: 'Fats enter the green central LACTEAL (lymphatic system), NOT blood capillaries!',
    },
    colon: {
      state: 'Water Reabsorption',
      chemicalAction: 'Absorbs water and mineral ions; any unabsorbed lipids contribute to faecal bulk',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Colon absorbs remaining water.',
    },
    rectum: {
      state: 'Faeces Storage',
      chemicalAction: 'Holds faecal matter prior to expulsion',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Storage in rectum.',
    },
    anus: {
      state: 'Egestion',
      chemicalAction: 'Faeces containing any unabsorbed lipid residues passed out',
      enzyme: 'None',
      phNote: 'Neutral',
      igcseTip: 'Egestion through the anal sphincters.',
    },
  },
};
