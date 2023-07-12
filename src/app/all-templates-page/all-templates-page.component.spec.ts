import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTemplatesPageComponent } from './all-templates-page.component';

describe('AllTemplatesPageComponent', () => {
  let component: AllTemplatesPageComponent;
  let fixture: ComponentFixture<AllTemplatesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTemplatesPageComponent]
    });
    fixture = TestBed.createComponent(AllTemplatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
