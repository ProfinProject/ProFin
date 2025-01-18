import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { ColumnBasicComponent } from './column-basic/column-basic.component';
import { ColumnDataLabelsComponent } from './column-data-labels/column-data-labels.component';
import { ColumnDistributedComponent } from './column-distributed/column-distributed.component';
import { ColumnDumbbellComponent } from './column-dumbbell/column-dumbbell.component';
import { ColumnLoadedChartComponent } from './column-loaded-chart/column-loaded-chart.component';
import { ColumnNegativeValuesComponent } from './column-negative-values/column-negative-values.component';
import { ColumnRangeComponent } from './column-range/column-range.component';
import { ColumnRotatedLabelsComponent } from './column-rotated-labels/column-rotated-labels.component';
import { ColumnStackedComponent } from './column-stacked/column-stacked.component';
import { ColumnStacked100Component } from './column-stacked100/column-stacked100.component';
import { ColumnWithMarkersComponent } from './column-with-markers/column-with-markers.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ColumnBasicComponent,
    ColumnDataLabelsComponent,
    ColumnDistributedComponent,
    ColumnDumbbellComponent,
    ColumnLoadedChartComponent,
    ColumnNegativeValuesComponent,
    ColumnRangeComponent,
    ColumnRotatedLabelsComponent,
    ColumnStackedComponent,
    ColumnStacked100Component,
    ColumnWithMarkersComponent
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
 breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Column Charts',
  }
}
