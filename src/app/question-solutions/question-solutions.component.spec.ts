import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSolutionsComponent } from './question-solutions.component';

describe('QuestionSolutionsComponent', () => {
  let component: QuestionSolutionsComponent;
  let fixture: ComponentFixture<QuestionSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionSolutionsComponent]
    });
    fixture = TestBed.createComponent(QuestionSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
