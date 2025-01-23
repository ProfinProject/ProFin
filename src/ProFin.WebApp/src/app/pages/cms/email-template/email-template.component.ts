import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { FilterCmContentBoxComponent } from '../../../elements/short-cods/cms/filter-cm-content-box/filter-cm-content-box.component';
export interface type {
  id: number,
  title: string,
  status: string,
  date: string
}
@Component({
  selector: 'app-email-template',
  standalone: true,
  imports: [
    NgClass, 
    RouterLink, 
    BreadcrumbComponent, 
    FilterCmContentBoxComponent, 
    PaginationComponent
  ],
  templateUrl: './email-template.component.html',
  styleUrl: './email-template.component.css'
})
export class EmailTemplateComponent {

  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Email Template',
  }

  page: any = 1;
  totalRows: number = 4;
  totalPage: any = 0;
  allData: any = [];


  ngOnInit(): void {
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }
  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.emailTemplagtes, this.page, this.totalRows);
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

  activeToggleArray = [1, 2]
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  emailTemplagtes: type[] = [
    {
      id: 1,
      title: 'User Registration',
      status: 'Active',
      date: '03 Feb, 2024'
    },
    {
      id: 2,
      title: 'User Forgot Password',
      status: 'Inactive',
      date: '13 Jan, 2024'
    },
    {
      id: 3,
      title: 'User Activation',
      status: 'Active',
      date: '30 Jan, 2024'
    },
    {
      id: 4,
      title: 'User Login',
      status: 'Active',
      date: '25 June, 2024'
    },
    {
      id: 5,
      title: 'User Account Locked',
      status: 'Active',
      date: '15 Apr, 2024'
    },
    {
      id: 6,
      title: 'User Login',
      status: 'Inactive',
      date: '25 June, 2024'
    }
  ]
}
