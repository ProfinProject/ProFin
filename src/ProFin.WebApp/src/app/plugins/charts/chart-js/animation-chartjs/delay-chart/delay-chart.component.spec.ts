import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayChartComponent } from './delay-chart.component';

describe('DelayChartComponent', () => {
  let component: DelayChartComponent;
  let fixture: ComponentFixture<DelayChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
