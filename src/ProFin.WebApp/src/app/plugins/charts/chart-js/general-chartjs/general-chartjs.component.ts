import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { ChartAnimationComponent } from './chart-animation/chart-animation.component';
import { ChartBasicLineComponent } from './chart-basic-line/chart-basic-line.component';
import { ChartBasicComponent } from './chart-basic/chart-basic.component';
import { ChartDoughnutComponent } from './chart-doughnut/chart-doughnut.component';
import { ChartDualLineComponent } from './chart-dual-line/chart-dual-line.component';
import { ChartGradientLineComponent } from './chart-gradient-line/chart-gradient-line.component';
import { ChartGradientComponent } from './chart-gradient/chart-gradient.component';
import { ChartMixedTypeComponent } from './chart-mixed-type/chart-mixed-type.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartPolarComponent } from './chart-polar/chart-polar.component';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';
import { ChartStalikedComponent } from './chart-staliked/chart-staliked.component';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-general-chartjs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ChartAnimationComponent,
    ChartBasicComponent,
    ChartBasicLineComponent,
    ChartDoughnutComponent,
    ChartDualLineComponent,
    ChartGradientComponent,
    ChartGradientLineComponent,
    ChartMixedTypeComponent,
    ChartPieComponent,
    ChartPolarComponent,
    ChartRadarComponent,
    ChartStalikedComponent
  ],
  templateUrl: './general-chartjs.component.html',
  styleUrl: './general-chartjs.component.css'
})
export class GeneralChartjsComponent {
  breadcrumbList = {
    menu_path: 'Chart-js',
    currentURL: 'General Charts',
  }
}
