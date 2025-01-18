import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperOverviewComponent } from './stepper-overview.component';

describe('StepperOverviewComponent', () => {
  let component: StepperOverviewComponent;
  let fixture: ComponentFixture<StepperOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
