import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperHeaderPositionComponent } from './stepper-header-position.component';

describe('StepperHeaderPositionComponent', () => {
  let component: StepperHeaderPositionComponent;
  let fixture: ComponentFixture<StepperHeaderPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperHeaderPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperHeaderPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
