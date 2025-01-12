import { Component } from '@angular/core';
import { Date1Component } from './date1/date1.component';
import { Date2Component } from './date2/date2.component';
import { Date3Component } from './date3/date3.component';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [Date1Component, Date2Component, Date3Component],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {

}
