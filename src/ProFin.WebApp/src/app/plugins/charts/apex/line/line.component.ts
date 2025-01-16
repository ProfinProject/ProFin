import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { BrushChartComponent } from './brush-chart/brush-chart.component';
import { DashedLineChartComponent } from './dashed-line-chart/dashed-line-chart.component';
import { GradientLineChartComponent } from './gradient-line-chart/gradient-line-chart.component';
import { MissingOrNullValuesComponent } from './missing-or-null-values/missing-or-null-values.component';
import { SteplineChartComponent } from './stepline-chart/stepline-chart.component';
import { SyncingChartsComponent } from './syncing-charts/syncing-charts.component';
import { ZoomableTimeseriesComponent } from './zoomable-timeseries/zoomable-timeseries.component';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicLineChartComponent,
    BrushChartComponent,
    DashedLineChartComponent,
    GradientLineChartComponent,
    MissingOrNullValuesComponent,
    SteplineChartComponent,
    SyncingChartsComponent,
    ZoomableTimeseriesComponent
  ],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Line Charts',
  }
}
