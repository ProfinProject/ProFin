import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRoundedComponent } from './alert-rounded.component';

describe('AlertRoundedComponent', () => {
  let component: AlertRoundedComponent;
  let fixture: ComponentFixture<AlertRoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertRoundedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
