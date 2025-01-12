import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { RadialbarBasicComponent } from './radialbar-basic/radialbar-basic.component';
import { RadialbarCustomAngleCircleComponent } from './radialbar-custom-angle-circle/radialbar-custom-angle-circle.component';
import { RadialbarGradientComponent } from './radialbar-gradient/radialbar-gradient.component';
import { RadialbarMultipleComponent } from './radialbar-multiple/radialbar-multiple.component';
import { RadialbarSemiCircleGaugeComponent } from './radialbar-semi-circle-gauge/radialbar-semi-circle-gauge.component';
import { RadialbarStrokedAngularGaugeComponent } from './radialbar-stroked-angular-gauge/radialbar-stroked-angular-gauge.component';

@Component({
  selector: 'app-radialbar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RadialbarBasicComponent,
    RadialbarCustomAngleCircleComponent,
    RadialbarGradientComponent,
    RadialbarMultipleComponent,
    RadialbarSemiCircleGaugeComponent,
    RadialbarStrokedAngularGaugeComponent
  ],
  templateUrl: './radialbar.component.html',
  styleUrl: './radialbar.component.css'
})
export class RadialbarComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Radialbar Charts',
  }
}
