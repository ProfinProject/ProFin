import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { DelayChartComponent } from './delay-chart/delay-chart.component';
import { DropChartComponent } from './drop-chart/drop-chart.component';
import { LoopChartComponent } from './loop-chart/loop-chart.component';
import { ProgressiveLineComponent } from './progressive-line/progressive-line.component';

@Component({
  selector: 'app-animation-chartjs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DelayChartComponent,
    DropChartComponent,
    LoopChartComponent,
    ProgressiveLineComponent
  ],
  templateUrl: './animation-chartjs.component.html',
  styleUrl: './animation-chartjs.component.css'
})
export class AnimationChartjsComponent {
  breadcrumbList = {
    menu_path: 'Chart-js',
    currentURL: 'Animation Chart',
  }
}
