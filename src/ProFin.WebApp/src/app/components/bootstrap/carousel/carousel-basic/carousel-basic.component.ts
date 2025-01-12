import { Component } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-basic',
  standalone: true,
  imports: [
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './carousel-basic.component.html',
  styleUrl: './carousel-basic.component.css'
})
export class CarouselBasicComponent {
  images = ['assets/images/big/img1.jpg', 'assets/images/big/img2.jpg', 'assets/images/big/img3.jpg'];
}
