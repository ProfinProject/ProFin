import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomCalendarHeaderComponent } from './datepicker-custom-calendar-header.component';

describe('DatepickerCustomCalendarHeaderComponent', () => {
  let component: DatepickerCustomCalendarHeaderComponent;
  let fixture: ComponentFixture<DatepickerCustomCalendarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerCustomCalendarHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerCustomCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
