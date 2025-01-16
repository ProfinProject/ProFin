import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartJsComponent } from './doughnut-chart-js.component';

describe('DoughnutChartJsComponent', () => {
  let component: DoughnutChartJsComponent;
  let fixture: ComponentFixture<DoughnutChartJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoughnutChartJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoughnutChartJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
