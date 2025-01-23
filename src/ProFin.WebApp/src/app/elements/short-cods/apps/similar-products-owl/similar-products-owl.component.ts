import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-similar-products-owl',
  standalone: true,
  imports: [
	RouterLink,
    CarouselModule,
    FormsModule,
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './similar-products-owl.component.html',
  styleUrl: './similar-products-owl.component.css'
})
export class SimilarProductsOwlComponent {
  @Input() carousel_item: any = '';

	customOptions: any = {
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,

		slideSpeed: 3000,
		paginationSpeed: 3000,
		dots: false,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			390: {
				items: 3
			},
      600: {
				items: 4
			},
			991: {
				items: 5
			}
		}
	}
}
