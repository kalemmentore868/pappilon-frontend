import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CSECSection } from 'src/types';
import { API_URL } from '../config';

@Injectable({
  providedIn: 'root',
})
export class CsecSectionsService {
  constructor(private http: HttpClient) {}

  getCSECSectionsBySubject(subjectId: string): Observable<CSECSection[]> {
    return this.http.get<CSECSection[]>(
      `${API_URL}/csec_sections/by_subject/${subjectId}`
    );
  }
}
