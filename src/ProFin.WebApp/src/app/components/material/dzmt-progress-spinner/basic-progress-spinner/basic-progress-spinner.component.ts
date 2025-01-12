import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-basic-progress-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './basic-progress-spinner.component.html',
  styleUrl: './basic-progress-spinner.component.css'
})
export class BasicProgressSpinnerComponent {

}
