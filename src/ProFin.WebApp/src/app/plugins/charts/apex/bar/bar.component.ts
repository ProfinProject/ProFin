import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { BarBasicComponent } from './bar-basic/bar-basic.component';
import { BarCustomDataLabelsComponent } from './bar-custom-data-labels/bar-custom-data-labels.component';
import { BarGroupedComponent } from './bar-grouped/bar-grouped.component';
import { BarImagesComponent } from './bar-images/bar-images.component';
import { BarNegativeValuesComponent } from './bar-negative-values/bar-negative-values.component';
import { BarReversedComponent } from './bar-reversed/bar-reversed.component';
import { BarStackedComponent } from './bar-stacked/bar-stacked.component';
import { BarStacked100Component } from './bar-stacked100/bar-stacked100.component';
import { BarPatternedComponent } from './bar-patterned/bar-patterned.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BarBasicComponent,
    BarCustomDataLabelsComponent,
    BarGroupedComponent,
    BarImagesComponent,
    BarNegativeValuesComponent,
    BarPatternedComponent,
    BarReversedComponent,
    BarStackedComponent,
    BarStacked100Component,
  ],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Bar chart',
  }
}
