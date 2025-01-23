import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from '../../elements/pagination/pagination.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReportEmployeesComponent } from '../../elements/short-cods/report/report-employees/report-employees.component';
import { ReportCustomersComponent } from '../../elements/short-cods/report/report-customers/report-customers.component';
import { ReportTicketsComponent } from '../../elements/short-cods/report/report-tickets/report-tickets.component';
import { FormsModule } from '@angular/forms';
import { Select2Data, Select2Module } from 'ng-select2-component';

export interface Dessert {
  sNo: number;
  employeeId: number;
  customerName: string;
  rating: number;
  replyCount: number;
}
@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    PaginationComponent,
    NgbModule,
    CommonModule,
    Select2Module,
    FormsModule,
    ReportEmployeesComponent,
    ReportCustomersComponent,
    ReportTicketsComponent,
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  active = 1;
  page: any = 1;
  limit: any = 5;
  totalPage: any = 0;
  allData: any = [];

  boxActive: Boolean = false;


  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.limit);
    this.totalPage = this.allData.total_pages;
  }

  contantHead = {
    title: 'Order List',
    desc: 'Lorem ipsum  dolor sit amet',
    title_path: 'Dashboard'
  }

  desserts: Dessert[] = [
    {
      sNo: 1,
      employeeId: 852,
      customerName: 'Timothy L. Brodbeck',
      rating: 5,
      replyCount: 2,
    },
    {
      sNo: 2,
      employeeId: 1052,
      customerName: 'Timothy L. Brodbeck',
      rating: 4,
      replyCount: 7,
    },
    {
      sNo: 3,
      employeeId: 2375,
      customerName: 'Timothy L. Brodbeck',
      rating: 2,
      replyCount: 4,
    },
    {
      sNo: 4,
      employeeId: 3052,
      customerName: 'Timothy L. Brodbeck',
      rating: 3,
      replyCount: 3,
    },
    {
      sNo: 5,
      employeeId: 3055,
      customerName: 'Timothy L. Brodbeck',
      rating: 2,
      replyCount: 6,
    },
    {
      sNo: 6,
      employeeId: 3055,
      customerName: 'Timothy L. Brodbeck',
      rating: 4,
      replyCount: 4,
    },
    {
      sNo: 7,
      employeeId: 3052,
      customerName: 'Timothy L. Brodbeck',
      rating: 3,
      replyCount: 0,
    },
    {
      sNo: 8,
      employeeId: 3056,
      customerName: 'Timothy L. Brodbeck',
      rating: 5,
      replyCount: 1,
    },
    {
      sNo: 9,
      employeeId: 3057,
      customerName: 'Timothy L. Brodbeck',
      rating: 3,
      replyCount: 5,
    },
    {
      sNo: 10,
      employeeId: 3058,
      customerName: 'Timothy L. Brodbeck',
      rating: 4,
      replyCount: 4,
    },
    {
      sNo: 11,
      employeeId: 3059,
      customerName: 'Timothy L. Brodbeck',
      rating: 3,
      replyCount: 6,
    },
    {
      sNo: 12,
      employeeId: 3060,
      customerName: 'Timothy L. Brodbeck',
      rating: 5,
      replyCount: 3,
    }
  ];

  orderData: Dessert[];
  sortData(sort: Sort) {          //  Sorting  funcation   ---------
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'sNo': return compare(a.sNo, b.sNo, isAsc);
        case 'employeeId': return compare(a.employeeId, b.employeeId, isAsc);
        case 'customerName': return compare(a.customerName, b.customerName, isAsc);
        case 'replyCount': return compare(a.replyCount, b.replyCount, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.limit);
  }
  searchText: string = '';
  searchKey(data: string) {     //  Search  funcation   ---------
    let dat = this.transformFilter(this.desserts, data);
    this.allData = this.paginator(dat, this.page, this.limit);
  }

  transformFilter(items: any[], searchText: string): any {
    if (!items) return [];

    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.customerName.toLowerCase().includes(searchText) || String(it.sNo).includes(searchText);
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
