import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTicketsComponent } from './report-tickets.component';

describe('ReportTicketsComponent', () => {
  let component: ReportTicketsComponent;
  let fixture: ComponentFixture<ReportTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
