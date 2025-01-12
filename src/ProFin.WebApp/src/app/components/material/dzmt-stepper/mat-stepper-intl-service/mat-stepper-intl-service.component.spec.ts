import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStepperIntlServiceComponent } from './mat-stepper-intl-service.component';

describe('MatStepperIntlServiceComponent', () => {
  let component: MatStepperIntlServiceComponent;
  let fixture: ComponentFixture<MatStepperIntlServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatStepperIntlServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatStepperIntlServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
