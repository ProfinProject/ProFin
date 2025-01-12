import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { PieDonutComponent } from './pie-donut/pie-donut.component';
import { PieDonutWithPatternComponent } from './pie-donut-with-pattern/pie-donut-with-pattern.component';
import { PieGradientDonutComponent } from './pie-gradient-donut/pie-gradient-donut.component';
import { PieMonochromeComponent } from './pie-monochrome/pie-monochrome.component';
import { PieSemiDonutComponent } from './pie-semi-donut/pie-semi-donut.component';
import { PieSimpleComponent } from './pie-simple/pie-simple.component';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    PieDonutComponent,
    PieDonutWithPatternComponent,
    PieGradientDonutComponent,
    PieMonochromeComponent,
    PieSemiDonutComponent,
    PieSimpleComponent
  ],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {
breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Pie Charts',
  }
}
