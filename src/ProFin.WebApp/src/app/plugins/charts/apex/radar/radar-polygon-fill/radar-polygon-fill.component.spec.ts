import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarPolygonFillComponent } from './radar-polygon-fill.component';

describe('RadarPolygonFillComponent', () => {
  let component: RadarPolygonFillComponent;
  let fixture: ComponentFixture<RadarPolygonFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarPolygonFillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadarPolygonFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
