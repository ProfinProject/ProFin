import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-determinate-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './determinate-progress-bar.component.html',
  styleUrl: './determinate-progress-bar.component.css'
})
export class DeterminateProgressBarComponent {

}
