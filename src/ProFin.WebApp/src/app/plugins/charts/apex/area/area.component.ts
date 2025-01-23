import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { AreaAreaStackedComponent } from './area-area-stacked/area-area-stacked.component';
import { AreaBasicComponent } from './area-basic/area-basic.component';
import { AreaIrregularTimeseriesComponent } from './area-irregular-timeseries/area-irregular-timeseries.component';
import { AreaMissingOrNullValuesComponent } from './area-missing-or-null-values/area-missing-or-null-values.component';
import { AreaNegativeComponent } from './area-negative/area-negative.component';
import { AreaSplineComponent } from './area-spline/area-spline.component';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AreaAreaStackedComponent,
    AreaBasicComponent,
    AreaIrregularTimeseriesComponent,
    AreaMissingOrNullValuesComponent,
    AreaNegativeComponent,
    AreaSplineComponent
  ],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Area chart',
  }
}
