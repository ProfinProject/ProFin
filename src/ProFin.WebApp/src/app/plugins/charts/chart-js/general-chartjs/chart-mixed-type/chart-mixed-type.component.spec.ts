import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMixedTypeComponent } from './chart-mixed-type.component';

describe('ChartMixedTypeComponent', () => {
  let component: ChartMixedTypeComponent;
  let fixture: ComponentFixture<ChartMixedTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartMixedTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartMixedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
