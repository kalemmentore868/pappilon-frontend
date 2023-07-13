import { TestBed } from '@angular/core/testing';

import { QuestionDetailsService } from './question-details.service';

describe('QuestionDetailsService', () => {
  let service: QuestionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
