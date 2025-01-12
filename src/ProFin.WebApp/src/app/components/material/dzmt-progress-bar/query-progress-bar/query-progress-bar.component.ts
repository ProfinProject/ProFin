import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-query-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './query-progress-bar.component.html',
  styleUrl: './query-progress-bar.component.css'
})
export class QueryProgressBarComponent {

}
