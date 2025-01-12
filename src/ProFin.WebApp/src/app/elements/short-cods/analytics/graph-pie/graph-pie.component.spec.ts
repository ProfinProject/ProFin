import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPieComponent } from './graph-pie.component';

describe('GraphPieComponent', () => {
  let component: GraphPieComponent;
  let fixture: ComponentFixture<GraphPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
