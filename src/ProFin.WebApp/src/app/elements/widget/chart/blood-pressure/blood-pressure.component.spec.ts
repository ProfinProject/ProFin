import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPressureComponent } from './blood-pressure.component';

describe('BloodPressureComponent', () => {
  let component: BloodPressureComponent;
  let fixture: ComponentFixture<BloodPressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodPressureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
