import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { BasicChartComponent } from './basic-chart/basic-chart.component';
import { InterpolationChartComponent } from './interpolation-chart/interpolation-chart.component';
import { LineStylingComponent } from './line-styling/line-styling.component';
import { MultiAxisLineChartComponent } from './multi-axis-line-chart/multi-axis-line-chart.component';
import { PointChartComponent } from './point-chart/point-chart.component';
import { SteppedChartComponent } from './stepped-chart/stepped-chart.component';

@Component({
  selector: 'app-line-chartjs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicChartComponent,
    InterpolationChartComponent,
    LineStylingComponent,
    MultiAxisLineChartComponent,
    PointChartComponent,
    SteppedChartComponent
  ],
  templateUrl: './line-chartjs.component.html',
  styleUrl: './line-chartjs.component.css'
})
export class LineChartjsComponent {
breadcrumbList = {
    menu_path: 'Chart-js',
    currentURL: 'Line Chart',
  }
}
