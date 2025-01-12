import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { TreemapBasicComponent } from './treemap-basic/treemap-basic.component';
import { TreemapColorRangeComponent } from './treemap-color-range/treemap-color-range.component';
import { TreemapDistributedComponent } from './treemap-distributed/treemap-distributed.component';
import { TreemapMultipleSeriesComponent } from './treemap-multiple-series/treemap-multiple-series.component';

@Component({
  selector: 'app-treemap',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TreemapBasicComponent,
    TreemapColorRangeComponent,
    TreemapDistributedComponent,
    TreemapMultipleSeriesComponent
  ],
  templateUrl: './treemap.component.html',
  styleUrl: './treemap.component.css'
})
export class TreemapComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Treemap Charts',
  }
}
