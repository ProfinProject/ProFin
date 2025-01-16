import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperLazyContentRenderingComponent } from './stepper-lazy-content-rendering.component';

describe('StepperLazyContentRenderingComponent', () => {
  let component: StepperLazyContentRenderingComponent;
  let fixture: ComponentFixture<StepperLazyContentRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperLazyContentRenderingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperLazyContentRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
