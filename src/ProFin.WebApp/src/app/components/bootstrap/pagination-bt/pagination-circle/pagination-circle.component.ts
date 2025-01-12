import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination-circle',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './pagination-circle.component.html',
  styleUrl: './pagination-circle.component.css'
})
export class PaginationCircleComponent {
  page= 3; 
}
