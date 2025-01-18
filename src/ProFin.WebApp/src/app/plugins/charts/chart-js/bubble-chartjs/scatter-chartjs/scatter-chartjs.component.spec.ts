import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterChartjsComponent } from './scatter-chartjs.component';

describe('ScatterChartjsComponent', () => {
  let component: ScatterChartjsComponent;
  let fixture: ComponentFixture<ScatterChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScatterChartjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScatterChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
