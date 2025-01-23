import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { CurrencyPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../pagination/pagination.component';

export interface Dessert {
  image?: string;
  user: string;
  date: string;
  event_name: string;
  description: string;
  rating: number;
  status: string;
}

@Component({
  selector: 'app-reviews-list',
  standalone: true,
  imports: [
    NgbModule,
    CommonModule,
    MatFormFieldModule,
    MatSortModule,
    CurrencyPipe,
    RouterLink,
    PaginationComponent,
  ],
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.css'
})
export class ReviewsListComponent {

  @Input() data_nav:any;

  publishe_boxActive: Boolean = false;
  deleted_boxActive: Boolean = false;

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];

  boxActive: Boolean = false;
  // productList: any = [];

  ngOnInit(): void {
    this.orderData = this.desserts.filter(item => {
      return this.data_nav === 'allList' ? item : item.status === this.data_nav;
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
      image: "assets/images/avatar/1.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "I've used Karciz for almost ten years. From small general admission church shows to complete turn key ticketing services at Jakarta. I use them for marketing and ticketing on every show. No questions.",
      rating: 4,
      status: 'published'
    },
    {
      image: "assets/images/avatar/2.jpg",
      user: "John Doe",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: 2,
      status: 'allList'
    },
    {
      image: "assets/images/avatar/3.jpg",
      user: "Margaretha Thomp",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Thank you so much. I love the contact information for marketing purposes especially in case we do this event again in the future. This was my first event running ticketing for STAR, and Karciz was amazing to work with. So helpful, fast to answer any questions, and super easy!",
      rating: 5,
      status: 'Published'
    },
    {
      image: "assets/images/avatar/4.jpg",
      user: "Louis Jovanny",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "I've used Karciz for almost ten years. From small general admission church shows to complete turn key ticketing services at Jakarta. I use them for marketing and ticketing on every show. No questions.",
      rating: 4,
      status: 'Published'
    },
    {
      image: "assets/images/avatar/5.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "iTickets has been great from starting up our account to setting up the event. They are always there for questions and have the answers to those questions. ",
      rating: 2,
      status: 'published'
    },
    {
      image: "assets/images/avatar/6.jpg",
      user: "Glee Smiley",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful,",
      rating: 3,
      status: 'Published'
    },
    {
      image: "assets/images/avatar/3.jpg",
      user: "Margaretha Thomp",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Thank you so much. I love the contact information for marketing purposes especially in case we do this event again in the future. This was my first event running ticketing for STAR, and Karciz was amazing to work with. So helpful, fast to answer any questions, and super easy!",
      rating: 4,
      status: 'deleteList'
    },
    {
      image: "assets/images/avatar/6.jpg",
      user: "Glee Smiley",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful,",
      rating: 3,
      status: 'Published'
    },
    {
      image: "assets/images/avatar/1.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "I've used Karciz for almost ten years. From small general admission church shows to complete turn key ticketing services at Jakarta. I use them for marketing and ticketing on every show. No questions.",
      rating: 2,
      status: 'deleteList'
    },
    {
      image: "assets/images/avatar/2.jpg",
      user: "John Doe",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: 4,
      status: 'deleteList'
    },
    {
      image: "assets/images/avatar/4.jpg",
      user: "Louis Jovanny",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "I've used Karciz for almost ten years. From small general admission church shows to complete turn key ticketing services at Jakarta. I use them for marketing and ticketing on every show. No questions.",
      rating: 4,
      status: 'published'
    },
    {
      image: "assets/images/avatar/5.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "iTickets has been great from starting up our account to setting up the event. They are always there for questions and have the answers to those questions. ",
      rating: 4,
      status: 'deleteList'
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
        case 'user': return compare(a.user, b.user, isAsc);
        case 'event_name': return compare(a.event_name, b.event_name, isAsc);
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

  checkUncheckAll(item: any) {
    if (item == 'allList') {
      if (this.boxActive) {
        this.boxActive = false;
      } else {
        this.boxActive = true;
      }
    } else if (item == 'publisheList') {
      if (this.publishe_boxActive) {
        this.publishe_boxActive = false;
      } else {
        this.publishe_boxActive = true;
      }
    } else if (item == 'deleteList') {
      if (this.deleted_boxActive) {
        this.deleted_boxActive = false;
      } else {
        this.deleted_boxActive = true;
      }
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
