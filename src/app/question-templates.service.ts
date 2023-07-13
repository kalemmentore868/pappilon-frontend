import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionFormValue } from 'src/types';
import { API_URL } from '../config';

@Injectable({
  providedIn: 'root',
})
export class QuestionTemplatesService {
  constructor(private http: HttpClient) {}

  createQuestionTemplate(questionFormValue: QuestionFormValue) {
    return this.http.post(`${API_URL}/question_templates`, questionFormValue);
  }
}
