import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDismissableComponent } from './alert-dismissable.component';

describe('AlertDismissableComponent', () => {
  let component: AlertDismissableComponent;
  let fixture: ComponentFixture<AlertDismissableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDismissableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertDismissableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
