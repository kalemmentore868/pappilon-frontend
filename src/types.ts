export interface QuestionFormValue {
  status: string;
  subject: string;
  name: string;
  description: string;
  csecSection: string;
  objectives: string[];
  format: string;
  type: string;
  difficulty: string;
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
