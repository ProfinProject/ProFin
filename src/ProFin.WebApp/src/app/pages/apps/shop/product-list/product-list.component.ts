import { Component } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass } from '@angular/common';
interface type {
  image: string;
  title: string;
  url: string;
  reviews: number;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgClass, NgbModule, CurrencyPipe, BreadcrumbComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  breadcrumbList = {
    menu_path: 'Shop',
    currentURL: 'Product List',
  }

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { centered: false });
  }


  productList: type[] = [
    {
      image: "assets/images/product/2.jpg",
      title: "Solid Color Black Jumpsuit",
      url: "ecom-product-detail",
      price: 350,
      reviews: 34,
      rating: 3
    },
    {
      image: "assets/images/product/3.jpg",
      title: "Deep Neck Solid White Dress",
      url: "ecom-product-detail",
      price: 320,
      reviews: 50,
      rating: 3
    },
    {
      image: "assets/images/product/4.jpg",
      title: "Boat-Neck Black and Red Dress",
      url: "ecom-product-detail",
      price: 520,
      reviews: 60,
      rating: 5
    },
    {
      image: "assets/images/product/5.jpg",
      title: "Women's Boat-neck White One Piece",
      url: "ecom-product-detail",
      price: 380,
      reviews: 40,
      rating: 2
    },
    {
      image: "assets/images/product/6.jpg",
      title: "Black Body Fit Offshoulder Dress",
      url: "ecom-product-detail",
      price: 280,
      reviews: 30,
      rating: 5
    },
    {
      image: "assets/images/product/7.jpg",
      title: "Women's Solid One Piece",
      url: "ecom-product-detail",
      price: 680,
      reviews: 48,
      rating: 2
    }
  ]

}
