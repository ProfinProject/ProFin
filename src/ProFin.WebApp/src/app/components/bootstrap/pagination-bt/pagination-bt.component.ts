import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { PaginationCircleComponent } from './pagination-circle/pagination-circle.component';
import { PaginationColorComponent } from './pagination-color/pagination-color.component';
import { PaginationDefaultComponent } from './pagination-default/pagination-default.component';
import { PaginationGutterComponent } from './pagination-gutter/pagination-gutter.component';

@Component({
  selector: 'app-pagination-bt',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    PaginationCircleComponent,
    PaginationColorComponent,
    PaginationDefaultComponent,
    PaginationGutterComponent
  ],
  templateUrl: './pagination-bt.component.html',
  styleUrl: './pagination-bt.component.css'
})
export class PaginationBtComponent {
  breadcrumbList = {
    subTitle: 'Pagination',
    menu_path: 'Bootstrap',
    currentURL: 'Pagination',
  }
}
