import { TestBed } from '@angular/core/testing';

import { QuestionIdServiceService } from './question-id-service.service';

describe('QuestionIdServiceService', () => {
  let service: QuestionIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
