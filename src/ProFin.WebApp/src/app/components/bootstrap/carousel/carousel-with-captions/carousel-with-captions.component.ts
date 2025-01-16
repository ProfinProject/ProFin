import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-with-captions',
  standalone: true,
  imports: [
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './carousel-with-captions.component.html',
  styleUrl: './carousel-with-captions.component.css'
})
export class CarouselWithCaptionsComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
  images = ['assets/images/big/img2.jpg', 'assets/images/big/img3.jpg', 'assets/images/big/img4.jpg'];

}
