import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip-manually-show-hide',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './tooltip-manually-show-hide.component.html',
  styleUrl: './tooltip-manually-show-hide.component.css'
})
export class TooltipManuallyShowHideComponent {

}
