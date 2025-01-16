import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination-color',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './pagination-color.component.html',
  styleUrl: './pagination-color.component.css'
})
export class PaginationColorComponent {
  page1 = 2;
  page = 1;
}
