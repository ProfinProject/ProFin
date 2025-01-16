import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { ScatterBasicComponent } from './scatter-basic/scatter-basic.component';
import { ScatterDatetimeComponent } from './scatter-datetime/scatter-datetime.component';
import { ScatterImagesComponent } from './scatter-images/scatter-images.component';

@Component({
  selector: 'app-scatter',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ScatterBasicComponent,
    ScatterDatetimeComponent,
    ScatterImagesComponent
  ],
  templateUrl: './scatter.component.html',
  styleUrl: './scatter.component.css'
})
export class ScatterComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Scatter Charts',
  }
}
