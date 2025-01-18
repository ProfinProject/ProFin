import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppedChartComponent } from './stepped-chart.component';

describe('SteppedChartComponent', () => {
  let component: SteppedChartComponent;
  let fixture: ComponentFixture<SteppedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteppedChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteppedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
