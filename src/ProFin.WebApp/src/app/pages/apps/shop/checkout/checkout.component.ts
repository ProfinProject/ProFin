import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { Select2Component } from '../../../../plugins/select2/select2.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [BreadcrumbComponent, Select2Component],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Checkout',
  }

  selectCountry = [
    {
      name: 'Choose...',
    },
    {
      name: 'United States',
    }
  ];
  selectState = [
    {
      name: 'Choose...',
    },
    {
      name: 'California',
    }
  ];

  orderList = [
    {
      product: 'Product name',
      desc: 'Brief description',
      price: 12
    },
    {
      product: 'Second product',
      desc: 'Brief description',
      price: 8
    },
    {
      product: 'Third item',
      desc: 'Brief description',
      price: 5
    },
    {
      product: 'Promo code',
      desc: 'EXAMPLECODE',
      price: -5
    }
  ]
}
