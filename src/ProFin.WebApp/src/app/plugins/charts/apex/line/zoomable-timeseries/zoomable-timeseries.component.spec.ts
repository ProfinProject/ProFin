import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableTimeseriesComponent } from './zoomable-timeseries.component';

describe('ZoomableTimeseriesComponent', () => {
  let component: ZoomableTimeseriesComponent;
  let fixture: ComponentFixture<ZoomableTimeseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomableTimeseriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoomableTimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
