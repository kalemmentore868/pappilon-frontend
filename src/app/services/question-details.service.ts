import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionDetails } from 'src/types';
import { API_URL } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionDetailsService {
  constructor(private http: HttpClient) {}

  createQuestionDetails(questionDetails: QuestionDetails): Observable<any> {
    return this.http.post(`${API_URL}/question_details`, questionDetails);
  }
}
