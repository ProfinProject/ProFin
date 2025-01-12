import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesWithReactiveFormsComponent } from './checkboxes-with-reactive-forms.component';

describe('CheckboxesWithReactiveFormsComponent', () => {
  let component: CheckboxesWithReactiveFormsComponent;
  let fixture: ComponentFixture<CheckboxesWithReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxesWithReactiveFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxesWithReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
