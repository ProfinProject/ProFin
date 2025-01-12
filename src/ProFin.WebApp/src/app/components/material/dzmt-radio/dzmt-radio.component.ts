import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { RadiosWithNgModelComponent } from './radios-with-ng-model/radios-with-ng-model.component';
import { RadiosBasicComponent } from './radios-basic/radios-basic.component';

@Component({
  selector: 'app-dzmt-radio',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RadiosBasicComponent,
    RadiosWithNgModelComponent
  ],
  templateUrl: './dzmt-radio.component.html',
  styleUrl: './dzmt-radio.component.css'
})
export class DzmtRadioComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Radio',
  }
}
