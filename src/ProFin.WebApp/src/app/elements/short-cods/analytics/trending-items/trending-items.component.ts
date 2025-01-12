import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-items',
  standalone: true,
  imports: [],
  templateUrl: './trending-items.component.html',
  styleUrl: './trending-items.component.css'
})
export class TrendingItemsComponent {
  @Input() data:any;
}
