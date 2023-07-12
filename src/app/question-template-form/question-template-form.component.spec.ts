import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTemplateFormComponent } from './question-template-form.component';

describe('QuestionTemplateFormComponent', () => {
  let component: QuestionTemplateFormComponent;
  let fixture: ComponentFixture<QuestionTemplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionTemplateFormComponent]
    });
    fixture = TestBed.createComponent(QuestionTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
