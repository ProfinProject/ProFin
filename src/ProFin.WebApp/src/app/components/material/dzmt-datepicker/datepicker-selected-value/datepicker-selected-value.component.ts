import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-datepicker-selected-value',
  templateUrl: './datepicker-selected-value.component.html',
  styleUrl: './datepicker-selected-value.component.css',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DatepickerSelectedValueComponent {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
