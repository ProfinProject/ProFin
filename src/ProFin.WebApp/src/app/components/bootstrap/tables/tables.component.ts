import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { TableBorderedComponent } from './table-bordered/table-bordered.component';
import { TableBordered2Component } from './table-bordered2/table-bordered2.component';
import { TableContextuatComponent } from './table-contextuat/table-contextuat.component';
import { TableExamToppersComponent } from './table-exam-toppers/table-exam-toppers.component';
import { TableHeadingWithBackgroundComponent } from './table-heading-with-background/table-heading-with-background.component';
import { TableHoverComponent } from './table-hover/table-hover.component';
import { TableHover2Component } from './table-hover2/table-hover2.component';
import { TablePaymentsComponent } from './table-payments/table-payments.component';
import { TablePrimaryComponent } from './table-primary/table-primary.component';
import { TablePrimaryHoverComponent } from './table-primary-hover/table-primary-hover.component';
import { TableStripedComponent } from './table-striped/table-striped.component';
import { TableStripped2Component } from './table-stripped2/table-stripped2.component';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TableBasicComponent,
    TableBorderedComponent,
    TableBordered2Component,
    TableContextuatComponent,
    TableExamToppersComponent,
    TableHeadingWithBackgroundComponent,
    TableHoverComponent,
    TableHover2Component,
    TablePaymentsComponent,
    TablePrimaryComponent,
    TablePrimaryHoverComponent,
    TableStripedComponent,
    TableStripped2Component,
    TableResponsiveComponent
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  breadcrumbList = {
    subTitle: 'Your business dashboard template',
    menu_path: 'Bootstrap',
    currentURL: 'Table',
  }
}
