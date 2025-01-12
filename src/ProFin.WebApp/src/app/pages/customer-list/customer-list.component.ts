import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

export interface Dessert {
  cust_id?: string;
  join_date: string;
  customer_name: string;
  ticket_ordered: string;
  location: string;
  last_order: string;
  total_spent: string;
}


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    NgbModule,
    RouterLink,
    PaginationComponent,
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  breadcrumbList = {
    menu_path: 'Ticket',
    currentURL: 'All Ticket',
  }
  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  active = 1;
  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];

  boxActive: Boolean = false;


  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Cive Saluve",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$1,200"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Bella Simatupang",
    ticket_ordered: "The Powerfull Concert Festival London 2020",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$7,300"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Andrew Stevano",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$1,500"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Olivia Brownlee",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$4,500"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "James Roberto",
    ticket_ordered: "Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$1,700"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Kevin Hurt",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$1,700"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Sanuel Jakson",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$3,200"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Cive Saluve",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$100"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Sanuel Jakson",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$1,300"
    },
    {
    cust_id: "#0012451",
    join_date: '21/11/2017',
    customer_name: "Cive Slauw",
    ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
    location: "Medan Indonesia",
    last_order: "04/08/2020 12:34 AM",
    total_spent: "$1,300"
    },
    {
      cust_id: "#0012451",
      join_date: '21/11/2017',
      customer_name: "Cive Saluve",
      ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
      location: "Medan Indonesia",
      last_order: "04/08/2020 12:34 AM",
      total_spent: "$1,200"
      },
      {
      cust_id: "#0012451",
      join_date: '21/11/2017',
      customer_name: "Bella Simatupang",
      ticket_ordered: "The Powerfull Concert Festival London 2020",
      location: "Medan Indonesia",
      last_order: "04/08/2020 12:34 AM",
      total_spent: "$7,300"
      },
      {
      cust_id: "#0012451",
      join_date: '21/11/2017',
      customer_name: "Andrew Stevano",
      ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
      location: "Medan Indonesia",
      last_order: "04/08/2020 12:34 AM",
      total_spent: "$1,500"
      },
      {
      cust_id: "#0012451",
      join_date: '21/11/2017',
      customer_name: "Olivia Brownlee",
      ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
      location: "Medan Indonesia",
      last_order: "04/08/2020 12:34 AM",
      total_spent: "$4,500"
      },
      {
      cust_id: "#0012451",
      join_date: '21/11/2017',
      customer_name: "James Roberto",
      ticket_ordered: "Danaou Taba (Musical Drama)",
      location: "Medan Indonesia",
      last_order: "04/08/2020 12:34 AM",
      total_spent: "$1,700"
      },
      {
      cust_id: "#0012451",
      join_date: '21/11/2017',
      customer_name: "Kevin Hurt",
      ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
      location: "Medan Indonesia",
      last_order: "04/08/2020 12:34 AM",
      total_spent: "$1,700"
      },
      {
      cust_id: "#0012451",
      join_date: '21/11/2017',
      customer_name: "Sanuel Jakson",
      ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
      location: "Medan Indonesia",
      last_order: "04/08/2020 12:34 AM",
      total_spent: "$3,200"
      }
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
        case 'ticket_ordered': return compare(a.ticket_ordered, b.ticket_ordered, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'last_order': return compare(a.last_order, b.last_order, isAsc);
        case 'total_spent': return compare(a.total_spent, b.total_spent, isAsc);
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
  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
