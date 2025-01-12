import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLatestSalesComponent } from './graph-latest-sales.component';

describe('GraphLatestSalesComponent', () => {
  let component: GraphLatestSalesComponent;
  let fixture: ComponentFixture<GraphLatestSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphLatestSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphLatestSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
