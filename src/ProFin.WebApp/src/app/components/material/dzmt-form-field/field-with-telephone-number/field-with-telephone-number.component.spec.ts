import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithTelephoneNumberComponent } from './field-with-telephone-number.component';

describe('FieldWithTelephoneNumberComponent', () => {
  let component: FieldWithTelephoneNumberComponent;
  let fixture: ComponentFixture<FieldWithTelephoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldWithTelephoneNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldWithTelephoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
