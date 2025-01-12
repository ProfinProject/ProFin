import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { FloatingBarComponent } from './floating-bar/floating-bar.component';
import { HorizontalChartjsComponent } from './horizontal-chartjs/horizontal-chartjs.component';
import { StackedChartjsComponent } from './stacked-chartjs/stacked-chartjs.component';

@Component({
  selector: 'app-bar-chartjs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BorderRadiusComponent,
    FloatingBarComponent,
    HorizontalChartjsComponent,
    StackedChartjsComponent
  ],
  templateUrl: './bar-chartjs.component.html',
  styleUrl: './bar-chartjs.component.css'
})
export class BarChartjsComponent {
  breadcrumbList = {
    menu_path: 'Chart-js',
    currentURL: 'Bar Chart',
  }
}
