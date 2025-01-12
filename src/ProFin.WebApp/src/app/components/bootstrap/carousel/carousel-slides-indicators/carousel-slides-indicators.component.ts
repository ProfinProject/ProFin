import { Component } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-slides-indicators',
  standalone: true,
  imports: [
    NgbCarouselModule,
    NgbModule
  ],
  templateUrl: './carousel-slides-indicators.component.html',
  styleUrl: './carousel-slides-indicators.component.css'
})
export class CarouselSlidesIndicatorsComponent {
  images = ['assets/images/big/img4.jpg', 'assets/images/big/img5.jpg', 'assets/images/big/img6.jpg'];

}
