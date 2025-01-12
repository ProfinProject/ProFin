import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ConfigurableSliderComponent } from './configurable-slider/configurable-slider.component';
import { CustomThumbLabelFormattingComponent } from './custom-thumb-label-formatting/custom-thumb-label-formatting.component';
import { SliderBasicComponent } from './slider-basic/slider-basic.component';
import { ValueSliderComponent } from './value-slider/value-slider.component';

@Component({
  selector: 'app-dzmt-slider',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ConfigurableSliderComponent,
    CustomThumbLabelFormattingComponent,
    SliderBasicComponent,
    ValueSliderComponent
  ],
  templateUrl: './dzmt-slider.component.html',
  styleUrl: './dzmt-slider.component.css'
})
export class DzmtSliderComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Slider',
  }
}
