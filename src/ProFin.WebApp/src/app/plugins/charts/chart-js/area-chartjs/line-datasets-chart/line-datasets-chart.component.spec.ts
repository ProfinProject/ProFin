import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDatasetsChartComponent } from './line-datasets-chart.component';

describe('LineDatasetsChartComponent', () => {
  let component: LineDatasetsChartComponent;
  let fixture: ComponentFixture<LineDatasetsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineDatasetsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineDatasetsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
