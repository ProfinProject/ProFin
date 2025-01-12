import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { FilterCmContentBoxComponent } from '../../../elements/short-cods/cms/filter-cm-content-box/filter-cm-content-box.component';
import { NgClass } from '@angular/common';
interface type {
  id: number,
  title: string,
  status: string,
  date: string
}
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NgClass,
    RouterLink, 
    BreadcrumbComponent, 
    FilterCmContentBoxComponent, 
    PaginationComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Blog',
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

  page: any = 1;
  totalRows: number = 4;
  totalPage: any = 0;
  allData: any = [];

  model: NgbDateStruct | undefined;
  navigation = 'arrows';

  ngOnInit(): void {
    this.allData = this.paginator(this.blogsData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
    console.log('get data', this.allData)
  }
  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.blogsData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
    console.log('get data22', this.allData)
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

  blogsData: type[] = [
    {
      id: 1,
      title: 'Title of first blog post entry',
      status: 'Published',
      date: '09 Jan, 2024'
    },
    {
      id: 2,
      title: 'Why Go For A VFX Course?',
      status: 'Published',
      date: '13 May, 2024'
    },
    {
      id: 3,
      title: 'Reasons To Choose Animation Courses',
      status: 'Published',
      date: '13 Apr, 2024'
    },
    {
      id: 4,
      title: 'Blue Screen Vs. Green Screen For VFX',
      status: 'Published',
      date: '13 June, 2024'
    },
    {
      id: 5,
      title: 'All About Animation',
      status: 'Published',
      date: '13 Apr, 2024'
    },
    {
      id: 6,
      title: 'Why Go For A VFX Course?',
      status: 'Published',
      date: '13 May, 2024'
    }
  ]

}
