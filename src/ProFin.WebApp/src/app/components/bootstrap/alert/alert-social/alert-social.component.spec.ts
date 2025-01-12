import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSocialComponent } from './alert-social.component';

describe('AlertSocialComponent', () => {
  let component: AlertSocialComponent;
  let fixture: ComponentFixture<AlertSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
