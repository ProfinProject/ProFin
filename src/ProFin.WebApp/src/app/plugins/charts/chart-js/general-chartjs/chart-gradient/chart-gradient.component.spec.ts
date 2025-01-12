import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGradientComponent } from './chart-gradient.component';

describe('ChartGradientComponent', () => {
  let component: ChartGradientComponent;
  let fixture: ComponentFixture<ChartGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
