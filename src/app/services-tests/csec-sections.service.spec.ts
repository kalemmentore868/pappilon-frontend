import { TestBed } from '@angular/core/testing';

import { CsecSectionsService } from '../services/csec-sections.service';

describe('CsecSectionsService', () => {
  let service: CsecSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsecSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
