import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgChartComponent } from './wg-chart.component';

describe('WgChartComponent', () => {
  let component: WgChartComponent;
  let fixture: ComponentFixture<WgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
