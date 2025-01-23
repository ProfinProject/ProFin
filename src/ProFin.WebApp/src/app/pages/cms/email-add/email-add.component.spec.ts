import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddComponent } from './email-add.component';

describe('EmailAddComponent', () => {
  let component: EmailAddComponent;
  let fixture: ComponentFixture<EmailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
