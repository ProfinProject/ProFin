import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropChartComponent } from './drop-chart.component';

describe('DropChartComponent', () => {
  let component: DropChartComponent;
  let fixture: ComponentFixture<DropChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
