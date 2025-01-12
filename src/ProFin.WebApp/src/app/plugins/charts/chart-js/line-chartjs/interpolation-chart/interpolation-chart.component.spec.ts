import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationChartComponent } from './interpolation-chart.component';

describe('InterpolationChartComponent', () => {
  let component: InterpolationChartComponent;
  let fixture: ComponentFixture<InterpolationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
