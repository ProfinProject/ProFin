import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDrawTimeChartComponent } from './line-draw-time-chart.component';

describe('LineDrawTimeChartComponent', () => {
  let component: LineDrawTimeChartComponent;
  let fixture: ComponentFixture<LineDrawTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineDrawTimeChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineDrawTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
