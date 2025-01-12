import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTicketComponent } from './all-ticket.component';

describe('AllTicketComponent', () => {
  let component: AllTicketComponent;
  let fixture: ComponentFixture<AllTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
