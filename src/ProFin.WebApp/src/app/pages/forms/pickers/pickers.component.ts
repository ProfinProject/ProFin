import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-pickers',
  standalone: true,
  imports: [NgbModule, FormsModule, ReactiveFormsModule, ColorPickerComponent, DatePickerComponent, BreadcrumbComponent, TimePickerComponent],
  templateUrl: './pickers.component.html',
  styleUrl: './pickers.component.css'
})
export class PickersComponent {
  breadcrumbList = {
    subTitle: 'Pickers',
    menu_path: 'Form',
    currentURL: 'Pickers',
  }

  navigation = 'arrows';
  outsideDays = 'visible';

  model: NgbDateStruct | undefined;
}
