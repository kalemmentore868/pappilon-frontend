import { TestBed } from '@angular/core/testing';

import { QuestionIdService } from '../services/question-id-service.service';

describe('QuestionIdServiceService', () => {
  let service: QuestionIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
