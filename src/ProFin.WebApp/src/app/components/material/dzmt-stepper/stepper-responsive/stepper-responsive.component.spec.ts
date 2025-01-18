import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperResponsiveComponent } from './stepper-responsive.component';

describe('StepperResponsiveComponent', () => {
  let component: StepperResponsiveComponent;
  let fixture: ComponentFixture<StepperResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperResponsiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
