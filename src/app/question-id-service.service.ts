import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionIdService {
  private _responseId: string = '';

  get responseId(): string {
    return this._responseId;
  }

  set responseId(value: string) {
    this._responseId = value;
  }
}
