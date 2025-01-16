import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAvailableTicketComponent } from './graph-available-ticket.component';

describe('GraphAvailableTicketComponent', () => {
  let component: GraphAvailableTicketComponent;
  let fixture: ComponentFixture<GraphAvailableTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphAvailableTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphAvailableTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
