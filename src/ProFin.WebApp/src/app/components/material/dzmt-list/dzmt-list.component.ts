import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { ListWithSectionsComponent } from './list-with-sections/list-with-sections.component';
import { ListWithSelectionComponent } from './list-with-selection/list-with-selection.component';
import { ListWithSingleSelectionComponent } from './list-with-single-selection/list-with-single-selection.component';
import { ListWithVariantsComponent } from './list-with-variants/list-with-variants.component';

@Component({
  selector: 'app-dzmt-list',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicListComponent,
    ListWithSectionsComponent,
    ListWithSelectionComponent,
    ListWithSingleSelectionComponent,
    ListWithVariantsComponent
  ],
  templateUrl: './dzmt-list.component.html',
  styleUrl: './dzmt-list.component.css'
})
export class DzmtListComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'List',
  }
}
