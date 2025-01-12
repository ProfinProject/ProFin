import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { NgClass } from '@angular/common';
import { Select2Component } from '../../../plugins/select2/select2.component';

@Component({
  selector: 'app-customers-add',
  standalone: true,
  imports: [
    NgClass,
    Select2Component,
    BreadcrumbComponent
  ],
  templateUrl: './customers-add.component.html',
  styleUrl: './customers-add.component.css'
})
export class CustomersAddComponent {
  breadcrumbList = {
    menu_path: 'Customers',
    currentURL: 'Add Customers',
  }
  hide_show: boolean = false;
  passwordHide(){
    this.hide_show = !this.hide_show;
  }
  selectGender = [
    {
      name: 'Please select',
    },
    {
      name: 'Male',
    },
    {
      name: 'Female',
    }
  ];
}
