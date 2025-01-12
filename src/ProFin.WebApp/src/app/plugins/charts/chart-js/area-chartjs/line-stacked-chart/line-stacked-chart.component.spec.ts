import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStackedChartComponent } from './line-stacked-chart.component';

describe('LineStackedChartComponent', () => {
  let component: LineStackedChartComponent;
  let fixture: ComponentFixture<LineStackedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineStackedChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
