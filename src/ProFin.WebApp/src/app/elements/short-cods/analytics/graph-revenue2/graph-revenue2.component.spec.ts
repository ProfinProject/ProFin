import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphRevenue2Component } from './graph-revenue2.component';

describe('GraphRevenue2Component', () => {
  let component: GraphRevenue2Component;
  let fixture: ComponentFixture<GraphRevenue2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphRevenue2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphRevenue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
