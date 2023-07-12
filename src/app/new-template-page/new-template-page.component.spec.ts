import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTemplatePageComponent } from './new-template-page.component';

describe('NewTemplatePageComponent', () => {
  let component: NewTemplatePageComponent;
  let fixture: ComponentFixture<NewTemplatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTemplatePageComponent]
    });
    fixture = TestBed.createComponent(NewTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
