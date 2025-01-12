import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { CarouselSlidesCaptionsComponent } from './carousel-slides-captions/carousel-slides-captions.component';
import { CarouselSlidesIndicatorsComponent } from './carousel-slides-indicators/carousel-slides-indicators.component';
import { CarouselSlidesOnlyComponent } from './carousel-slides-only/carousel-slides-only.component';
import { CarouselWithCaptionsComponent } from './carousel-with-captions/carousel-with-captions.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CarouselBasicComponent,
    CarouselSlidesCaptionsComponent,
    CarouselSlidesIndicatorsComponent,
    CarouselSlidesOnlyComponent,
    CarouselWithCaptionsComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  breadcrumbList = {
    subTitle: 'Your business dashboard template',
    menu_path: 'Bootstrap',
    currentURL: 'Carousel',
  }
}
