import { Component } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-slides-only',
  standalone: true,
  imports: [
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './carousel-slides-only.component.html',
  styleUrl: './carousel-slides-only.component.css'
})
export class CarouselSlidesOnlyComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images = ['assets/images/big/img3.jpg', 'assets/images/big/img4.jpg', 'assets/images/big/img5.jpg'];

}
