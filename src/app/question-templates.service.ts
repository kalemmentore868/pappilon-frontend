import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionFormValue } from 'src/types';
import { API_URL } from '../config';
import { QuestionTemplateResponse } from 'src/responseTypes';

@Injectable({
  providedIn: 'root',
})
export class QuestionTemplatesService {
  constructor(private http: HttpClient) {}

  getQuestionTemplates(): Observable<QuestionTemplateResponse[]> {
    return this.http.get<QuestionTemplateResponse[]>(
      `${API_URL}/question_templates`
    );
  }

  createQuestionTemplate(questionFormValue: QuestionFormValue) {
    return this.http.post(`${API_URL}/question_templates`, questionFormValue);
  }
}
