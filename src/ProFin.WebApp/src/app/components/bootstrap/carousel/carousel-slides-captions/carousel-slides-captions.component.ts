import { Component } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-slides-captions',
  standalone: true,
  imports: [
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './carousel-slides-captions.component.html',
  styleUrl: './carousel-slides-captions.component.css'
})
export class CarouselSlidesCaptionsComponent {
  images = ['assets/images/big/img5.jpg', 'assets/images/big/img6.jpg', 'assets/images/big/img7.jpg'];
}
