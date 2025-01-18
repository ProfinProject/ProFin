import { Component } from '@angular/core';
interface type {
  img?: string;
  img_null?: string;
  name: string;
  date: string;
  icon?: string;
  status?: string;
  btn_class?: string;
}
@Component({
  selector: 'app-wg-notifications-2',
  standalone: true,
  imports: [],
  templateUrl: './wg-notifications-2.component.html',
  styleUrl: './wg-notifications-2.component.css'
})
export class WgNotifications2Component {
  items: type[] = [
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Dr sultads Send you Photo',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'primary'
    },
    {
      img_null: 'KG',
      status: 'warning',
      name: 'Resport created successfully',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'info'
    },
    {
      icon: 'fa fa-home',
      name: 'Reminder : Treatment Time!',
      date: '12 July 2024 - 02:26 PM',
      btn_class: 'success'
    },
    {
      status: 'danger',
      img: 'assets/images/avatar/1.jpg',
      name: 'Dr sultads Send you Photo',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'primary'
    },
    {
      status: 'success',
      img_null: 'KG',
      name: 'Resport created successfully',
      date: '30 July 2024 - 02:26 PM',
      btn_class: 'danger'
    }
  ]
}
