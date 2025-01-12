import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { FilterCmContentBoxComponent } from '../../../elements/short-cods/cms/filter-cm-content-box/filter-cm-content-box.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
export interface type {
  id: number,
  title: string,
  status: string,
  date: string
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgClass, 
    RouterLink, 
    BreadcrumbComponent, 
    FilterCmContentBoxComponent,
    PaginationComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Content',
  }
  page: any = 1;
  totalRows: number = 4;
  totalPage: any = 0;
  allData: any = [];


  activeToggleArray = [1, 2]
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.allData = this.paginator(this.contentsData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }
  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.contentsData, this.page, this.totalRows);
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
  contentsData: type[] = [
    {
      id: 1,
      title: 'About Us',
      status: 'Published',
      date: '18 Feb, 2024'
    },
    {
      id: 2,
      title: 'FAQ',
      status: 'Published',
      date: '13 Jan, 2024'
    },
    {
      id: 3,
      title: 'Pricing',
      status: 'Published',
      date: '13 Jan, 2024'
    },
    {
      id: 4,
      title: 'Schedule',
      status: 'Published',
      date: '13 June, 2024'
    },
    {
      id: 5,
      title: 'Under Maintenance',
      status: 'Published',
      date: '13 Apr, 2024'
    },
    {
      id: 6,
      title: 'Pricing',
      status: 'Published',
      date: '13 Jan, 2024'
    }
  ]
}
