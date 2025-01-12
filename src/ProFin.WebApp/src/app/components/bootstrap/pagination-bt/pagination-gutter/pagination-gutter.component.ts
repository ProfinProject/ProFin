import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination-gutter',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './pagination-gutter.component.html',
  styleUrl: './pagination-gutter.component.css'
})
export class PaginationGutterComponent {
  page = 1;
}
