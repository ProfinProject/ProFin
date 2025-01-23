import { Component } from '@angular/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [NgxMaterialTimepickerModule],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.css'
})
export class TimePickerComponent {

}
