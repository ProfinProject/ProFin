
import { Component } from '@angular/core';
interface type {
  img?: string;
  img_null?: string;
  name: string;
  date: string;
  decs: string;
  btn_class?: string;
}
@Component({
  selector: 'app-wg-message-1',
  standalone: true,
  imports: [],
  templateUrl: './wg-message-1.component.html',
  styleUrl: './wg-message-1.component.css'
})
export class WgMessage1Component {
  items: type[] = [
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Alfie Mason',
      date: '29 July 2024',
      decs: 'I shared this on my fb wall a few months back..',
      btn_class: 'primary'
    },
    {
      img_null: 'JT',
      name: 'Jacob Tucker',
      date: '01 July 2024',
      decs: 'I shared this on my fb wall a few months back..',
      btn_class: 'info'
    },
    {
      img: 'assets/images/avatar/2.jpg',
      name: 'Jack Ronan',
      date: '20 July 2024',
      decs: 'I shared this on my fb wall a few months back..',
      btn_class: 'success'
    },
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Noah Baldon',
      date: '20 January 2024',
      decs: 'I shared this on my fb wall a few months back..',
      btn_class: 'primary'
    },
    {
      img_null: 'TG',
      name: 'Thomas Grady',
      date: '01 July 2024',
      decs: 'I shared this on my fb wall a few months back..',
      btn_class: 'danger'
    }
  ]
}
