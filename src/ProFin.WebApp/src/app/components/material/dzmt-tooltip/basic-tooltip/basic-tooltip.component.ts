import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-basic-tooltip',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './basic-tooltip.component.html',
  styleUrl: './basic-tooltip.component.css'
})
export class BasicTooltipComponent {

}
