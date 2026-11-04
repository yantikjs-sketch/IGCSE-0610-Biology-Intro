export type OrganId =
  | 'mouth'
  | 'salivary_glands'
  | 'oesophagus'
  | 'stomach'
  | 'liver'
  | 'gall_bladder'
  | 'pancreas'
  | 'duodenum'
  | 'ileum'
  | 'colon'
  | 'rectum'
  | 'anus';

export type StageId =
  | 'ingestion'
  | 'digestion'
  | 'absorption'
  | 'assimilation'
  | 'egestion';

export type FoodType = 'carbohydrates' | 'proteins' | 'fats';

export interface FoodTypeInfo {
  id: FoodType;
  name: string;
  icon: string;
  color: string;
  glowColor: string;
  breakdownSummary: string;
  finalAbsorbedUnit: string;
  absorptionDestination: string;
}

export interface StageInfo {
  id: StageId;
  name: string;
  definition: string;
  keySite: string;
  igcseNote: string;
}

export interface OrganInfo {
  id: OrganId;
  name: string;
  stage: StageId;
  description: string;
  positionInPath: number; // 0 to 8 main pathway, or -1 for accessory organs
  isAccessory?: boolean;
  connectedTo?: OrganId[];
  mechanicalDigestion: string[];
  chemicalDigestion: string[];
  secretions: string[];
  optimumPh: string;
  enzymes: string[];
  igcseKeyPoints: string[];
  examinerTip: string;
  commonMistake: string;
  svgHighlightId: string;
}

export interface EnzymeInfo {
  name: string;
  type: 'Carbohydrase' | 'Protease' | 'Lipase';
  producedBy: string[];
  secretedInto: string[];
  substrate: string;
  products: string;
  optimumPh: number;
  phRange: string;
  igcseSummary: string;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'labeling';
  syllabusRef: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  examTip?: string;
}
