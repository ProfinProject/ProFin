import { Component } from '@angular/core';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink,
    FormsModule,
    Select2Component,
    BreadcrumbComponent
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  breadcrumbList = {
    menu_path: 'App',
    currentURL: 'Edit Profile',
  }
  navigation = 'arrows';
  outsideDays = 'visible';

  model: NgbDateStruct | undefined;

  selectGender = [
    {
      name: 'Please select',
    },
    {
      name: 'Male',
    },
    {
      name: 'Female',
    },
    {
      name: 'other',
    }
  ];

  selectCountry = [
    {
      name: 'Please select',
    },
    {
      name: 'Russia',
    },
    {
      name: 'Canada',
    },
    {
      name: 'China',
    },
    {
      name: 'India',
    },
  ];

  selectCity = [
    {
      name: 'Please select',
    },
    {
      name: 'Krasnodar',
    },
    {
      name: 'Tyumen',
    },
    {
      name: 'Chelyabinsk',
    },
    {
      name: 'Moscow',
    },
  ];
}
