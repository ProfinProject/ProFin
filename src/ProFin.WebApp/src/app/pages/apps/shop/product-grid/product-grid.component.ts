import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface type {
  img: string,
  title: string,
  discount: number,
  price: number,
  rating: number
}
@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [NgClass, CurrencyPipe, RouterLink, BreadcrumbComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Product Grid',
  }

  productItems: type[] = [
    {
      img: 'assets/images/product/1.jpg',
      title: 'Bonorum et Malorum',
      discount: 761,
      price: 761,
      rating: 3
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Striped Dress',
      discount: 610,
      price: 159,
      rating: 4
    },
    {
      img: 'assets/images/product/3.jpg',
      title: 'BBow polka-dot',
      discount: 501,
      price: 357,
      rating: 5
    },
    {
      img: 'assets/images/product/4.jpg',
      title: 'Z Product 360',
      discount: 661,
      price: 654,
      rating: 3
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Chair Grey',
      discount: 862,
      price: 369,
      rating: 5
    },
    {
      img: 'assets/images/product/6.jpg',
      title: 'fox sake withe',
      discount: 450,
      price: 245,
      rating: 2
    },
    {
      img: 'assets/images/product/7.jpg',
      title: 'Back Bag',
      discount: 131,
      price: 364,
      rating: 5
    },
    {
      img: 'assets/images/product/1.jpg',
      title: 'FLARE DRESS',
      discount: 110,
      price: 548,
      rating: 3
    },
  ]
}
