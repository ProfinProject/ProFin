import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAnimationsComponent } from './stepper-animations.component';

describe('StepperAnimationsComponent', () => {
  let component: StepperAnimationsComponent;
  let fixture: ComponentFixture<StepperAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperAnimationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
