import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DialogElementsComponent } from './dialog-elements/dialog-elements.component';
import { DialogFromManuComponent } from './dialog-from-manu/dialog-from-manu.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { HeaderScrollbarActionComponent } from './header-scrollbar-action/header-scrollbar-action.component';
import { InjectingDataComponent } from './injecting-data/injecting-data.component';
import { DialogAnimationsComponent } from './dialog-animations/dialog-animations.component';

@Component({
  selector: 'app-dzmt-dialog',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DialogElementsComponent,
    DialogFromManuComponent,
    DialogOverviewComponent,
    HeaderScrollbarActionComponent,
    InjectingDataComponent,
    DialogAnimationsComponent
  ],
  templateUrl: './dzmt-dialog.component.html',
  styleUrl: './dzmt-dialog.component.css'
})
export class DzmtDialogComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Dialog',
  }
}
