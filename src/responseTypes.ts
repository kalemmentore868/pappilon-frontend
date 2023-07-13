export interface QuestionTemplateResponse {
  _id: {
    $oid: string;
  };
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
