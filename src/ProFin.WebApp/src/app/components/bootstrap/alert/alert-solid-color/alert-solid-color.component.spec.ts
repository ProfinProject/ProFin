import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSolidColorComponent } from './alert-solid-color.component';

describe('AlertSolidColorComponent', () => {
  let component: AlertSolidColorComponent;
  let fixture: ComponentFixture<AlertSolidColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertSolidColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertSolidColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
