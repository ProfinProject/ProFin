import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTicketOrderedComponent } from './graph-ticket-ordered.component';

describe('GraphTicketOrderedComponent', () => {
  let component: GraphTicketOrderedComponent;
  let fixture: ComponentFixture<GraphTicketOrderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphTicketOrderedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphTicketOrderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
