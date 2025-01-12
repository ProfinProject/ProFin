import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicGridListComponent } from './basic-grid-list/basic-grid-list.component';
import { DynamicGridListComponent } from './dynamic-grid-list/dynamic-grid-list.component';

@Component({
  selector: 'app-dzmt-grid-list',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicGridListComponent,
    DynamicGridListComponent
  ],
  templateUrl: './dzmt-grid-list.component.html',
  styleUrl: './dzmt-grid-list.component.css'
})
export class DzmtGridListComponent {
  breadcrumbList = {
    menu_path: 'Material',    
    currentURL: 'Grid List',
  }
}
