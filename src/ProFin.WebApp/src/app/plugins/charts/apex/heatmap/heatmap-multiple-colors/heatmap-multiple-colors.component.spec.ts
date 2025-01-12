import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapMultipleColorsComponent } from './heatmap-multiple-colors.component';

describe('HeatmapMultipleColorsComponent', () => {
  let component: HeatmapMultipleColorsComponent;
  let fixture: ComponentFixture<HeatmapMultipleColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapMultipleColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeatmapMultipleColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
