import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerSelectedValueComponent } from './datepicker-selected-value.component';

describe('DatepickerSelectedValueComponent', () => {
  let component: DatepickerSelectedValueComponent;
  let fixture: ComponentFixture<DatepickerSelectedValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerSelectedValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerSelectedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
