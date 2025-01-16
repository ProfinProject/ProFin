import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { CurrencyPipe, NgClass } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../elements/pagination/pagination.component';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';

export interface Dessert {
  order_id?: string;
  order_date: string;
  event_name: string;
  customer_name: string;
  location: string;
  sold_ticket: string;
  available: string;
  refund: string;
  totle_revenue: string;
}
@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    NgClass,
    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    PaginationComponent,
    NgbModule,
    RouterLink,
    DropdownComponent
  ],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  dropdownYear = {
    select: 'Daily',
    formControl: true,
    value: ['Daily', 'Newest', 'Old']
  }
  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  active = 1;
  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];


  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  breadcrumbList = {
    menu_path: 'Customers',
    currentURL: 'Customers List',
  }

  desserts: Dessert[] = [
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "London, US",
      sold_ticket: "1 pcs",
      available: "567k left",
      refund: "NO",
      totle_revenue: "$125,70",
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "Medan, Indonesia",
      sold_ticket: "2 pcs",
      available: "567k left",
      refund: "NO",
      totle_revenue: "$536,00",
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "Jakarta, Indonesia",
      sold_ticket: "3 pcs",
      available: "567k left",
      refund: "Refund",
      totle_revenue: "$536,00",
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "Sydney, Australia",
      sold_ticket: "1 pcs",
      available: "567k left",
      refund: "NO",
      totle_revenue: "$65,22"
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "London,US",
      sold_ticket: "5 pcs",
      available: "567k left",
      refund: "NO",
      totle_revenue: "$44,00"
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "London,US",
      sold_ticket: "6 pcs",
      available: "567k left",
      refund: "Refund",
      totle_revenue: "$51,50"
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "Jakarta, Indonesia",
      sold_ticket: "3 pcs",
      available: "567k left",
      refund: "Refund",
      totle_revenue: "$124,55"
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "Penang, Malaysia",
      sold_ticket: "4 pcs",
      available: "567k left",
      refund: "NO",
      totle_revenue: "$536,00"
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "Sydney, Australia",
      sold_ticket: "1 pcs",
      available: "567k left",
      refund: "NO",
      totle_revenue: "$65,22"
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "London,US",
      sold_ticket: "5 pcs",
      available: "567k left",
      refund: "NO",
      totle_revenue: "$44,00"
    },
    {
      order_id: "#0012451",
      order_date: "04/08/2024 12:34 AM",
      event_name: 'The Story Of Danaou Taba (Musical Drama)',
      customer_name: "Bella Simatupang",
      location: "London,US",
      sold_ticket: "5 pcs",
      available: "567k left",
      refund: "Refund",
      totle_revenue: "$51,50"
    },
  ];

  orderData: Dessert[];
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'customer_name': return compare(a.customer_name, b.customer_name, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'sold_ticket': return compare(a.sold_ticket, b.sold_ticket, isAsc);
        case 'available': return compare(a.available, b.available, isAsc);
        case 'refund': return compare(a.refund, b.refund, isAsc);
        case 'totle_revenue': return compare(a.totle_revenue, b.totle_revenue, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}