import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-sales',
  standalone: true,
  imports: [],
  templateUrl: './recent-sales.component.html',
  styleUrl: './recent-sales.component.css'
})
export class RecentSalesComponent {
  @Input() data:any;
}
