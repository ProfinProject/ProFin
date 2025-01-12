import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { CurrencyPipe, NgClass } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { SimilarProductsOwlComponent } from '../../../../elements/short-cods/apps/similar-products-owl/similar-products-owl.component';

interface type {
  img: string;
  title: string;
  discount: number;
  price: number;
  rating: number
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    NgbModule,
    CurrencyPipe,
    BreadcrumbComponent,
    SimilarProductsOwlComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  active = 1;

  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Product Detail',
  }

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { centered: false });
  }

  carouselData: type[] = [
    {
      img: 'assets/images/product/1.jpg',
      title: 'Bonorum et Malorum',
      discount: 761,
      price: 159,
      rating: 3
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Striped Dress',
      discount: 159,
      price: 159,
      rating: 5
    },
    {
      img: 'assets/images/product/3.jpg',
      title: 'BBow polka-dot',
      discount: 357,
      price: 159,
      rating: 5
    },
    {
      img: 'assets/images/product/4.jpg',
      title: 'Z Product 360',
      discount: 654,
      price: 159,
      rating: 3
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Chair Grey',
      discount: 369,
      price: 149,
      rating: 5
    },
    {
      img: 'assets/images/product/6.jpg',
      title: 'fox sake withe',
      discount: 240,
      price: 149,
      rating: 3
    },
    {
      img: 'assets/images/product/7.jpg',
      title: 'Back Bag',
      discount: 364,
      price: 159,
      rating: 2
    },
    {
      img: 'assets/images/product/1.jpg',
      title: 'FLARE DRESS',
      discount: 654,
      price: 159,
      rating: 4
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Sake et Malorum',
      discount: 369.00,
      price: 149,
      rating: 5
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Bonorum et Malorum',
      discount: 240,
      price: 149,
      rating: 3
    },
  ]

}
