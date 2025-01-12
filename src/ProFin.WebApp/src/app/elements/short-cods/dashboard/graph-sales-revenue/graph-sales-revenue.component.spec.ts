import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSalesRevenueComponent } from './graph-sales-revenue.component';

describe('GraphSalesRevenueComponent', () => {
  let component: GraphSalesRevenueComponent;
  let fixture: ComponentFixture<GraphSalesRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphSalesRevenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphSalesRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
