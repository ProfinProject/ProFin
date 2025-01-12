import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-buffer-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './buffer-progress-bar.component.html',
  styleUrl: './buffer-progress-bar.component.css'
})
export class BufferProgressBarComponent {

}
