import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { PolarAreaBasicComponent } from './polar-area-basic/polar-area-basic.component';
import { PolarAreaMonochromeComponent } from './polar-area-monochrome/polar-area-monochrome.component';

@Component({
  selector: 'app-polar-area',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    PolarAreaBasicComponent,
    PolarAreaMonochromeComponent
  ],
  templateUrl: './polar-area.component.html',
  styleUrl: './polar-area.component.css'
})
export class PolarAreaComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Polar Area',
  }
}
