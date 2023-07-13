export interface QuestionFormValue {
  status: string;
  subject: string;
  name: string;
  description: string;
  csecSection: string;
  objectives: string[];
  questionFormat: string;
  questionType: string;
  difficulty: string;
}

export interface QuestionTemplateInsertResponse {
  inserted_id: string;
}

export interface Subject {
  _id: {
    $oid: string;
  };
  name: string;
  sections: string[];
}

export interface CSECSection {
  _id: {
    $oid: string;
  };
  name: string;
  objectives: string[];
  subject_id: string;
}

export interface QuestionDetails {
  question_template_id: string;
  question_text_template: string;
  question_image: string;
  developer_note: string;
}

export interface QuestionSolutions {
  question_formula: string;
  question_hint: string;
  video_solution: string;
  image_solution: string;
  question_template_id: string;
}

export interface TemplateFilters {
  subject: string;
  name: string;
}
