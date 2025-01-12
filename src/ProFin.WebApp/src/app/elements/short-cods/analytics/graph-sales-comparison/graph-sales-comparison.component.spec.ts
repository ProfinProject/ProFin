import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSalesComparisonComponent } from './graph-sales-comparison.component';

describe('GraphSalesComparisonComponent', () => {
  let component: GraphSalesComparisonComponent;
  let fixture: ComponentFixture<GraphSalesComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphSalesComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphSalesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
