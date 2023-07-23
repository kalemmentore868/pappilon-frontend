import { TestBed } from '@angular/core/testing';

import { QuestionSolutionsService } from './services/question-solutions.service';

describe('QuestionSolutionsService', () => {
  let service: QuestionSolutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionSolutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
