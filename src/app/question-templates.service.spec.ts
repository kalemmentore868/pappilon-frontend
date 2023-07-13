import { TestBed } from '@angular/core/testing';

import { QuestionTemplatesService } from './question-templates.service';

describe('QuestionTemplatesService', () => {
  let service: QuestionTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
