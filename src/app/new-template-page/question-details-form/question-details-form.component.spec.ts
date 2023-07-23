import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailsFormComponent } from './question-details-form.component';

describe('QuestionDetailsFormComponent', () => {
  let component: QuestionDetailsFormComponent;
  let fixture: ComponentFixture<QuestionDetailsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDetailsFormComponent]
    });
    fixture = TestBed.createComponent(QuestionDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
