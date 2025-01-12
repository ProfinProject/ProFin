import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAltComponent } from './alert-alt.component';

describe('AlertAltComponent', () => {
  let component: AlertAltComponent;
  let fixture: ComponentFixture<AlertAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertAltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
