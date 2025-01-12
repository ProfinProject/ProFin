import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination-default',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './pagination-default.component.html',
  styleUrl: './pagination-default.component.css'
})
export class PaginationDefaultComponent {
  page = 3;
}
