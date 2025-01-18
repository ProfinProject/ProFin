import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { Select2Data, Select2Module } from 'ng-select2-component';


export interface Dessert {
  name: string;
  email: string;
  gender: string;
  userType: string;
  registerDate: string;
  expireDate: string;
  status: string;
}
@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    PaginationComponent,
    NgbModule,
    Select2Module,
    FormsModule,
    RouterLink,
    BreadcrumbComponent
  ],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent {
  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  active = 1;
  page: any = 1;
  limit: number = 10;
  totalPage: any = 0;
  allData: any = [];

  boxActive: Boolean = false;


  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.limit);
    this.totalPage = this.allData.total_pages;
  }

  breadcrumbList = {
    menu_path: 'Customers',
    currentURL: 'Customers List',
  }

  desserts: Dessert[] = [
    {
      name: 'Timothy L. Brodbeck',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Customer',
      registerDate: '15 Mar, 2024',
      expireDate: '17 Mar, 2024',
      status: 'Active',
    },
    {
      name: 'Louis Jovanny',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Guest',
      registerDate: '15 Mar, 2024',
      expireDate: '17 Jun, 2024',
      status: 'Active',
    },
    {
      name: 'Cindy Hawkins',
      email: 'customer@gmail.com',
      gender: 'Female',
      userType: 'Guest',
      registerDate: '15 Feb, 2024',
      expireDate: '17 Mar, 2024',
      status: 'Active',
    },
    {
      name: 'Glee Smiley',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Customer',
      registerDate: '14 Jun, 2024',
      expireDate: '16 March, 2024',
      status: 'Active',
    },
    {
      name: 'Timothy L. Brodbeck',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Guest',
      registerDate: '15 Mar, 2024',
      expireDate: '17 Jun, 2024',
      status: 'Active',
    },
    {
      name: 'Louis Jovanny',
      email: 'customer@gmail.com',
      gender: 'Female',
      userType: 'Customer',
      registerDate: '15 Mar, 2024',
      expireDate: '14 Mar, 2024',
      status: 'Active',
    },
    {
      name: 'Louis Jovanny',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Customer',
      registerDate: '1 Jun, 2024',
      expireDate: '16 March, 2024',
      status: 'Inactive',
    },
    {
      name: 'Timothy L. Brodbeck',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Customer',
      registerDate: '5 Feb, 2024',
      expireDate: '20 Jun, 2024',
      status: 'Inactive',
    },
    {
      name: 'Cindy Hawkins',
      email: 'customer@gmail.com',
      gender: 'Female',
      userType: 'Guest',
      registerDate: '15 Feb, 2024',
      expireDate: '17 Mar, 2024',
      status: 'Active',
    },
    {
      name: 'Glee Smiley',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Customer',
      registerDate: '14 Jun, 2024',
      expireDate: '16 March, 2024',
      status: 'Active',
    },
    {
      name: 'Cindy Hawkins',
      email: 'customer@gmail.com',
      gender: 'Female',
      userType: 'Guest',
      registerDate: '9 Feb, 2024',
      expireDate: '17 Mar, 2024',
      status: 'Active',
    },
    {
      name: 'Timothy L. Brodbeck',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Guest',
      registerDate: '15 Mar, 2024',
      expireDate: '17 Jun, 2024',
      status: 'Active',
    },
    {
      name: 'Louis Jovanny',
      email: 'customer@gmail.com',
      gender: 'Female',
      userType: 'Customer',
      registerDate: '15 Mar, 2024',
      expireDate: '14 Mar, 2024',
      status: 'Active',
    },
    {
      name: 'Cindy Hawkins',
      email: 'customer@gmail.com',
      gender: 'Female',
      userType: 'Guest',
      registerDate: '9 Feb, 2024',
      expireDate: '17 Mar, 2024',
      status: 'Active',
    },
    {
      name: 'Louis Jovanny',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Customer',
      registerDate: '1 Jun, 2024',
      expireDate: '16 March, 2024',
      status: 'Inactive',
    },
    {
      name: 'Timothy L. Brodbeck',
      email: 'customer@gmail.com',
      gender: 'Male',
      userType: 'Customer',
      registerDate: '5 Feb, 2024',
      expireDate: '20 Jun, 2024',
      status: 'Inactive',
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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'gender': return compare(a.gender, b.gender, isAsc);
        case 'userType': return compare(a.userType, b.userType, isAsc);
        case 'registerDate': return compare(a.registerDate, b.registerDate, isAsc);
        case 'expireDate': return compare(a.expireDate, b.expireDate, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.limit);
  }

  searchText:string = '';
  searchKey(data: string) {     //  Search  funcation   ---------
    let dat = this.transformFilter(this.desserts, data);
    this.allData = this.paginator(dat, this.page, this.limit);
  }

  transformFilter(items: any[], searchText: string): any {
    if (!items) return [];

    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText)
            || it.gender.toLowerCase().includes(searchText)
            || it.userType.toLowerCase().includes(searchText)
            || it.status.toLowerCase().includes(searchText);
    });
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.limit);
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
  selectLimit(event: any) {
    this.limit = event.value;
    this.allData = this.paginator(this.orderData, this.page, this.limit);
    this.pageChange(1);
  }

  data: Select2Data = [
    {
      value: 5,
      label: 'Limit',
      data: { name: 5 }
    },
    {
      value: 10,
      label: 'Limit',
      data: { name: 10 }
    },
    {
      value: 50,
      label: 'Limit',
      data: { name: 50 }
    },
    {
      value: 100,
      label: 'Limit',
      data: { name: 100 }
    }
  ]
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
