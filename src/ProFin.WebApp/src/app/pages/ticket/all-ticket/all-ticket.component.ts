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
  title: string;
  priority: string;
  category: string;
  expireDate: string;
  status: string;
  lastReply: string;
}
@Component({
  selector: 'app-all-ticket',
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
  templateUrl: './all-ticket.component.html',
  styleUrl: './all-ticket.component.css'
})
export class AllTicketComponent {
  breadcrumbList = {
    menu_path: 'Ticket',
    currentURL: 'All Ticket',
  }
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

  desserts: Dessert[] = [
    {
      name: 'System Architect',
      title: 'Edinburgh',
      priority: '61',
      category: 'molestiae',
      expireDate: '2015/04/25',
      status: 'Inprogress',
      lastReply: '9 years ago',
    },
    {
      name: 'Accountant',
      title: 'Tokyo',
      priority: '63',
      category: 'perferendis',
      expireDate: '2018/07/25',
      status: 'Re-Open',
      lastReply: '6 years ago',
    },
    {
      name: 'Junior Technical Author',
      title: 'San Francisco',
      priority: '66',
      category: 'commodi',
      expireDate: '2024/02/10',
      status: 'New',
      lastReply: '1 years ago',
    },
    {
      name: 'Senior Javascript Developer',
      title: 'Edinburgh',
      priority: '22',
      category: 'perferendis',
      expireDate: '2010/04/25',
      status: 'Inprogress',
      lastReply: '14 years ago',
    },
    {
      name: 'Accountant',
      title: 'Tokyo',
      priority: '33',
      category: 'repudiandae',
      expireDate: '2022/02/20',
      status: 'Inprogress',
      lastReply: '3 years ago',
    },
    {
      name: 'Integration Specialist',
      title: 'New York',
      priority: '61',
      category: 'commodi',
      expireDate: '2021/01/10',
      status: 'On-Hold',
      lastReply: '3 years ago',
    },
    {
      name: 'Sales Assistant',
      title: 'San Francisco',
      priority: '59',
      category: 'repudiandae',
      expireDate: '2010/04/25',
      status: 'Inprogress',
      lastReply: '14 years ago',
    },
    {
      name: 'Accountant',
      title: 'Tokyo',
      priority: '63',
      category: 'perferendis',
      expireDate: '2018/07/25',
      status: 'Re-Open',
      lastReply: '6 years ago',
    },
    {
      name: 'Junior Technical Author',
      title: 'San Francisco',
      priority: '66',
      category: 'commodi',
      expireDate: '2024/02/10',
      status: 'New',
      lastReply: '1 years ago',
    },
    {
      name: 'Integration Specialist',
      title: 'Tokyo',
      priority: '55',
      category: 'molestiae',
      expireDate: '2022/02/20',
      status: 'Inprogress',
      lastReply: '3 years ago',
    },
    {
      name: 'Javascript Developer',
      title: 'San Francisco',
      priority: '39',
      category: 'repudiandae',
      expireDate: '2021/01/10',
      status: 'Inprogress',
      lastReply: '3 years ago',
    },
    {
      name: 'Accountant',
      title: 'Tokyo',
      priority: '33',
      category: 'repudiandae',
      expireDate: '2022/02/20',
      status: 'Inprogress',
      lastReply: '3 years ago',
    },
    {
      name: 'Sales Assistant',
      title: 'San Francisco',
      priority: '59',
      category: 'repudiandae',
      expireDate: '2010/04/25',
      status: 'Inprogress',
      lastReply: '14 years ago',
    },
    {
      name: 'Integration Specialist',
      title: 'New York',
      priority: '61',
      category: 'commodi',
      expireDate: '2021/01/10',
      status: 'On-Hold',
      lastReply: '3 years ago',
    },
    {
      name: 'Sales Assistant',
      title: 'San Francisco',
      priority: '59',
      category: 'repudiandae',
      expireDate: '2010/04/25',
      status: 'Inprogress',
      lastReply: '14 years ago',
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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'title': return compare(a.title, b.title, isAsc);
        case 'priority': return compare(a.priority, b.priority, isAsc);
        case 'category': return compare(a.category, b.category, isAsc);
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
            || it.priority.toLowerCase().includes(searchText)
            || it.category.toLowerCase().includes(searchText)
            || it.expireDate.toLowerCase().includes(searchText)
            || it.status.toLowerCase().includes(searchText) ;
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
