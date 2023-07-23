import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTemplatesComponent } from './display-templates.component';

describe('DisplayTemplatesComponent', () => {
  let component: DisplayTemplatesComponent;
  let fixture: ComponentFixture<DisplayTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTemplatesComponent]
    });
    fixture = TestBed.createComponent(DisplayTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
