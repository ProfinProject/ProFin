import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedChartjsComponent } from './stacked-chartjs.component';

describe('StackedChartjsComponent', () => {
  let component: StackedChartjsComponent;
  let fixture: ComponentFixture<StackedChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedChartjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackedChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
