import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';

interface type {
  name: string;
  email: string;
  img: string;
  phone: string;
  address: string;
  joined: string;
}

@Component({
  selector: 'app-ecom-customers',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './ecom-customers.component.html',
  styleUrl: './ecom-customers.component.css'
})
export class EcomCustomersComponent {

  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Customers',
  }

  boxActive: Boolean = false;

  checkAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }

  customers: type[] = [
    {
      img: 'assets/images/avatar/5.png',
      name: 'Ricky Antony',
      email: 'info@example.com',
      phone: '(201) 200-1851',
      address: '2392 Main Avenue, Penasauka',
      joined: '30/03/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Emma Watson',
      email: 'emma@example.com',
      phone: '(212) 228-8403',
      address: '2289 5th Avenue, New York',
      joined: '11/07/2024'
    },
    {
      img: 'assets/images/avatar/5.png',
      name: 'Rowen Atkinson',
      email: 'info@example.com',
      phone: '(201) 200-1851',
      address: '112 Bostwick Avenue, Jersey City',
      joined: '15/05/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Antony Hopkins',
      email: 'emma@example.com',
      phone: '(901) 324-3127',
      address: '3448 Ile De France St #242,',
      joined: '11/10/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Jennifer Schramm',
      email: 'info@example.com',
      phone: '(201) 200-5111',
      address: '659 Hannah Street, Charlotte',
      joined: '20/03/2024'
    },
    {
      img: 'assets/images/avatar/5.png',
      name: 'Raymond Mims',
      email: 'info@example.com',
      phone: '(212) 228-8403',
      address: '2298 Locust Court, Artesia',
      joined: '11/07/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Michael Jenkins',
      email: 'info@example.com',
      phone: '(302) 613-8829',
      address: '4678 Maud Street, Philadelphia',
      joined: '15/05/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Kristine Cadena',
      email: 'emma@example.com',
      phone: '(901) 324-3127',
      address: '3412 Crestview Manor, Indianapolis',
      joined: '01/02/2024'
    },
    {
      img: 'assets/images/avatar/5.png',
      name: 'Rowen Atkinson',
      email: 'info@example.com',
      phone: '(201) 200-1851',
      address: '112 Bostwick Avenue, Jersey City',
      joined: '15/05/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Antony Hopkins',
      email: 'emma@example.com',
      phone: '(901) 324-3127',
      address: '3448 Ile De France St #242,',
      joined: '11/10/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Jennifer Schramm',
      email: 'info@example.com',
      phone: '(201) 200-5111',
      address: '659 Hannah Street, Charlotte',
      joined: '20/03/2024'
    },
    {
      img: 'assets/images/avatar/5.png',
      name: 'Ricky Antony',
      email: 'info@example.com',
      phone: '(201) 200-1851',
      address: '2392 Main Avenue, Penasauka',
      joined: '30/03/2024'
    },
    {
      img: 'assets/images/avatar/1.png',
      name: 'Emma Watson',
      email: 'emma@example.com',
      phone: '(212) 228-8403',
      address: '2289 5th Avenue, New York',
      joined: '11/07/2024'
    }
  ]
}
