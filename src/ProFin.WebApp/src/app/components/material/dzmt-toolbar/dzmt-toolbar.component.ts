import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicToolbarComponent } from './basic-toolbar/basic-toolbar.component';
import { MultiRowToolbarComponent } from './multi-row-toolbar/multi-row-toolbar.component';
import { ToolbarOverviewComponent } from './toolbar-overview/toolbar-overview.component';

@Component({
  selector: 'app-dzmt-toolbar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicToolbarComponent,
    MultiRowToolbarComponent,
    ToolbarOverviewComponent
  ],
  templateUrl: './dzmt-toolbar.component.html',
  styleUrl: './dzmt-toolbar.component.css'
})
export class DzmtToolbarComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Toolbar',
  }
}
