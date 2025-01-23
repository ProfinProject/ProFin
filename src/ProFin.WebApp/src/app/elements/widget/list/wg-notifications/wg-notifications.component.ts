import { Component } from '@angular/core';
interface type {
  img?: string;
  img_null?: string;
  name: string;
  date: string;
  icon?: string;
  btn_class?: string;
}
@Component({
  selector: 'app-wg-notifications',
  standalone: true,
  imports: [],
  templateUrl: './wg-notifications.component.html',
  styleUrl: './wg-notifications.component.css'
})
export class WgNotificationsComponent {
  items: type[] = [
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Dr sultads Send you Photo',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'primary'
    },
    {
      img_null: 'KG',
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
      img: 'assets/images/avatar/1.jpg',
      name: 'Dr sultads Send you Photo',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'primary'
    },
    {
      img_null: 'KG',
      name: 'Resport created successfully',
      date: '30 July 2024 - 02:26 PM',
      btn_class: 'danger'
    }
  ]
}
