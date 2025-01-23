import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Invoice',
  }

  invoiceData = [
    {
      item: 'Origin License',
      desc: 'Extended License',
      unitCost: '$999,00',
      qty: '1',
      total: '$999,00'
    },
    {
      item: 'Custom Services',
      desc: 'Instalation and Customization (cost per hour)',
      unitCost: '$150,00',
      qty: '20',
      total: '$3.000,00'
    },
    {
      item: 'Hosting',
      desc: '1 year subcription',
      unitCost: '$499,00',
      qty: '1',
      total: '$499,00'
    },
    {
      item: 'Platinum Support',
      desc: '1 year subcription 24/7',
      unitCost: '$3.999.00',
      qty: '1',
      total: '$3.999,00'
    }
  ]
}
