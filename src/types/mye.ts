export type MyeTopicId = 1 | 2 | 3 | 4 | 5 | 6;

export type MyeStimulusId =
  // 3D Biological Assets
  | 'img_plant_cell'
  | 'img_animal_cell'
  | 'img_bacterial_cell'
  | 'img_dna_helix'
  | 'img_ciliated_cell'
  | 'img_root_hair_cell'
  | 'img_xylem_vessel'
  | 'img_phloem_cell'
  | 'img_palisade_cell'
  | 'img_guard_cells'
  | 'img_red_blood_cell'
  | 'img_motor_neurone'
  | 'img_sperm_cell'
  | 'img_egg_cell'
  | 'img_muscle_cell'
  | 'img_insect'
  | 'img_crustacean'
  | 'img_arachnid'
  | 'img_myriapod'
  | 'img_annelid'
  | 'img_nematode'
  | 'img_mollusc'
  | 'img_fish'
  | 'img_amphibian'
  | 'img_reptile'
  | 'img_bird'
  | 'img_mammal'
  | 'img_rbc_hypotonic'
  | 'img_rbc_isotonic'
  | 'img_rbc_hypertonic'
  | 'img_palisade_hypotonic'
  | 'img_palisade_isotonic'
  | 'img_palisade_hypertonic'
  | 'img_digestive_anatomy'
  | 'img_peristalsis_wave'
  | 'img_villus_cutaway'
  // Cambridge Paper 2 / Paper 4 Experimental & Schematic SVG Figures
  | 'svg_dichotomous_leaves'
  | 'svg_magnification_ruler'
  | 'svg_visking_osmosis'
  | 'svg_potato_osmosis_graph'
  | 'svg_osmosis_turgid_plasmolysed'
  | 'svg_food_test_tubes_benedict'
  | 'svg_food_test_panel'
  | 'svg_enzyme_temp_curve'
  | 'svg_enzyme_ph_curves'
  | 'svg_enzyme_lock_key'
  | 'svg_enzyme_substrate_curve'
  | 'svg_human_tooth_structure'
  | 'svg_alimentary_canal_letters'
  | 'svg_villus_labelled_letters'
  | 'svg_digestive_ph_profile';

export interface MyeMcqQuestion {
  id: string;
  number: number;
  topic: MyeTopicId;
  topicName: string;
  syllabusRef: string;
  stimulus?: {
    id: MyeStimulusId;
    caption: string;
  };
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  solvingTip: string;
  explanation: string;
}

export interface MyeSqSubPart {
  id: string;
  label: string; // e.g. "(a)(i)"
  commandWord: string; // e.g. "State", "Define", "Calculate", "Explain", "Describe"
  marks: number;
  prompt: string;
  solvingTip: string;
  markSchemePoints: string[];
  modelAnswer: string;
}

export interface MyeSqQuestion {
  id: string;
  number: number;
  topic: MyeTopicId;
  topicName: string;
  syllabusRef: string;
  totalMarks: number;
  title: string;
  contextIntro: string;
  stimulus?: {
    id: MyeStimulusId;
    caption: string;
  };
  subParts: MyeSqSubPart[];
}
