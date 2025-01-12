import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnLoadedChartComponent } from './column-loaded-chart.component';

describe('ColumnLoadedChartComponent', () => {
  let component: ColumnLoadedChartComponent;
  let fixture: ComponentFixture<ColumnLoadedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnLoadedChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnLoadedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
