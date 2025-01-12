import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { LineDatasetsChartComponent } from './line-datasets-chart/line-datasets-chart.component';
import { LineDrawTimeChartComponent } from './line-draw-time-chart/line-draw-time-chart.component';
import { LineStackedChartComponent } from './line-stacked-chart/line-stacked-chart.component';

@Component({
  selector: 'app-area-chartjs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    LineDatasetsChartComponent,
    LineDrawTimeChartComponent,
    LineStackedChartComponent
  ],
  templateUrl: './area-chartjs.component.html',
  styleUrl: './area-chartjs.component.css'
})
export class AreaChartjsComponent {
  breadcrumbList = {
    menu_path: 'Chart-js',
    currentURL: 'Area Chart',
  }
}
