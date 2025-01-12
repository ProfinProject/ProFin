import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarMultipleSeriesComponent } from './radar-multiple-series.component';

describe('RadarMultipleSeriesComponent', () => {
  let component: RadarMultipleSeriesComponent;
  let fixture: ComponentFixture<RadarMultipleSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarMultipleSeriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadarMultipleSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
