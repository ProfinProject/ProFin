import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { MixedLineAreaComponent } from './mixed-line-area/mixed-line-area.component';
import { MixedLineColumnComponent } from './mixed-line-column/mixed-line-column.component';
import { MixedLineColumnAreaComponent } from './mixed-line-column-area/mixed-line-column-area.component';
import { MixedMultipleYAxisComponent } from './mixed-multiple-y-axis/mixed-multiple-y-axis.component';

@Component({
  selector: 'app-mixed',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MixedLineAreaComponent,
    MixedLineColumnComponent,
    MixedLineColumnAreaComponent,
    MixedMultipleYAxisComponent
  ],
  templateUrl: './mixed.component.html',
  styleUrl: './mixed.component.css'
})
export class MixedComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Mixed Charts',
  }
}
