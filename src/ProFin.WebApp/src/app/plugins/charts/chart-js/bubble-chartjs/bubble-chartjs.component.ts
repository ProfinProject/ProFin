import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { BasicBubbleComponent } from './basic-bubble/basic-bubble.component';
import { ScatterChartjsComponent } from './scatter-chartjs/scatter-chartjs.component';

@Component({
  selector: 'app-bubble-chartjs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicBubbleComponent,
    ScatterChartjsComponent
  ],
  templateUrl: './bubble-chartjs.component.html',
  styleUrl: './bubble-chartjs.component.css'
})
export class BubbleChartjsComponent {
  breadcrumbList = {
    menu_path: 'Chart-js',
    currentURL: 'Bubble Chart',
  }
}
