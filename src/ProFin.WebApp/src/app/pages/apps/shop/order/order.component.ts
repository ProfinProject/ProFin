import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { CurrencyPipe } from '@angular/common';
interface type {
  order_id: string;
  name: string;
  email: string;
  date: string;
  ship_to: string;
  status: string;
  status_class: string,
  amount: number;
}
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ CurrencyPipe, BreadcrumbComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  boxActive: Boolean = false;
  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Product Order',
  }

  checkAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
  orderData: type[] = [
    {
      order_id: '#181',
      name: 'Ricky Antony',
      email: 'ricky@example.com',
      date: '20/04/2024',
      ship_to: 'Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149',
      status: 'Completed',
      status_class: 'success',
      amount: 99
    },
    {
      order_id: '#182',
      name: 'Kin Rossow',
      email: 'kin@example.com',
      date: '20/04/2024',
      ship_to: 'Kin Rossow, 1 Hollywood Blvd,Beverly Hills, California 90210',
      status: 'Processing',
      status_class: 'primary',
      amount: 120
    },
    {
      order_id: '#183',
      name: 'Merry Diana',
      email: 'merry@example.com',
      date: '20/04/2024',
      ship_to: 'Merry Diana, 2392 Main Avenue, Penasauka, New Jersey 02149',
      status: 'On Hold',
      status_class: 'secondary',
      amount: 70
    },
    {
      order_id: '#184',
      name: 'Bucky Robert',
      email: 'bucky@example.com',
      date: '20/04/2024',
      ship_to: 'Bucky Robert, 1 Hollywood Blvd,Beverly Hills, California 90210',
      status: 'Pending',
      status_class: 'warning',
      amount: 80
    },
    {
      order_id: '#185',
      name: 'Rocky Zampa',
      email: 'rocky@example.com',
      date: '20/04/2024',
      ship_to: 'Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149',
      status: 'On Hold',
      status_class: 'secondary',
      amount: 200
    },
    {
      order_id: '#186',
      name: 'Ricky John',
      email: 'ricky@example.com',
      date: '20/04/2024',
      ship_to: 'Ricky John, 1 Hollywood Blvd,Beverly Hills, California 90210',
      status: 'Processing',
      status_class: 'primary',
      amount: 120
    },
    {
      order_id: '#183',
      name: 'Cristofer Henric',
      email: 'cristofer@example.com',
      date: '20/04/2024',
      ship_to: 'Cristofer Henric, 2392 Main Avenue, Penasauka, New Jersey 02149',
      status: 'Completed',
      status_class: 'success',
      amount: 70
    },
    {
      order_id: '#184',
      name: 'Brate Lee',
      email: 'bucky@example.com',
      date: '20/04/2024',
      ship_to: 'Brate Lee, 1 Hollywood Blvd,Beverly Hills, California 90210',
      status: 'On Hold',
      status_class: 'secondary',
      amount: 80
    },
    {
      order_id: '#184',
      name: 'Bucky Robert',
      email: 'bucky@example.com',
      date: '20/04/2024',
      ship_to: 'Bucky Robert, 1 Hollywood Blvd,Beverly Hills, California 90210',
      status: 'Pending',
      status_class: 'warning',
      amount: 80
    },
    {
      order_id: '#181',
      name: 'Ricky Antony',
      email: 'ricky@example.com',
      date: '20/04/2024',
      ship_to: 'Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149',
      status: 'Completed',
      status_class: 'success',
      amount: 99
    }
  ]
}
