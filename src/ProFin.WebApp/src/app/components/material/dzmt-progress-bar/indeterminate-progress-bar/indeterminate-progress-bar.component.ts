import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-indeterminate-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './indeterminate-progress-bar.component.html',
  styleUrl: './indeterminate-progress-bar.component.css'
})
export class IndeterminateProgressBarComponent {

}
