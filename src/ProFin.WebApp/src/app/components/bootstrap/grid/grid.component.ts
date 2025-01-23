import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { GridOptionsComponent } from './grid-options/grid-options.component';
import { GridColumnComponent } from './grid-column/grid-column.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    GridOptionsComponent,
    GridColumnComponent,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  breadcrumbList = {
    subTitle: 'Grid',
    menu_path: 'Bootstrap',
    currentURL: 'Grid',
  }
}
