import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionSolutions } from 'src/types';
import { API_URL } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionSolutionsService {
  constructor(private http: HttpClient) {}

  createQuestionSolutions(
    questionSolutions: QuestionSolutions
  ): Observable<any> {
    return this.http.post(`${API_URL}/question_solutions`, questionSolutions);
  }
}
