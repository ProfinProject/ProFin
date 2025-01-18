import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAltSolidComponent } from './alert-alt-solid.component';

describe('AlertAltSolidComponent', () => {
  let component: AlertAltSolidComponent;
  let fixture: ComponentFixture<AlertAltSolidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertAltSolidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertAltSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
