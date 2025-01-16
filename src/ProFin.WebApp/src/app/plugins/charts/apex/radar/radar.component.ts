import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { RadarBasicComponent } from './radar-basic/radar-basic.component';
import { RadarMultipleSeriesComponent } from './radar-multiple-series/radar-multiple-series.component';
import { RadarPolygonFillComponent } from './radar-polygon-fill/radar-polygon-fill.component';

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RadarBasicComponent,
    RadarMultipleSeriesComponent,
    RadarPolygonFillComponent
  ],
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.css'
})
export class RadarComponent {
breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Radar Charts',
  }
}
