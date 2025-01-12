import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalChartjsComponent } from './horizontal-chartjs.component';

describe('HorizontalChartjsComponent', () => {
  let component: HorizontalChartjsComponent;
  let fixture: ComponentFixture<HorizontalChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalChartjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
