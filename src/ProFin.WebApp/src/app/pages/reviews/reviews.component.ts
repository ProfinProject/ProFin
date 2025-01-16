
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsListComponent } from '../../elements/short-cods/reviews-list/reviews-list.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    NgbModule,
    ReviewsListComponent
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  active = 1;

  contantHead = {
    title: 'Reviews',
    desc: 'Lorem ipsum dolor sit amet',
    title_path: 'Customer'
  }
}


