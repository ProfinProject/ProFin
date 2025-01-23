import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicPaginatorComponent } from './basic-paginator/basic-paginator.component';
import { ConfigurablePaginatorComponent } from './configurable-paginator/configurable-paginator.component';

@Component({
  selector: 'app-dzmt-paginator',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicPaginatorComponent,
    ConfigurablePaginatorComponent
  ],
  templateUrl: './dzmt-paginator.component.html',
  styleUrl: './dzmt-paginator.component.css'
})
export class DzmtPaginatorComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Paginator',
  }
}
