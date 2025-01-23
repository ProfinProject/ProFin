import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLeftBodyComponent } from './email-left-body.component';

describe('EmailLeftBodyComponent', () => {
  let component: EmailLeftBodyComponent;
  let fixture: ComponentFixture<EmailLeftBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailLeftBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailLeftBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
