import {Component, ViewEncapsulation} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tooltip-with-custom-class',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './tooltip-with-custom-class.component.html',
  styleUrl: './tooltip-with-custom-class.component.css'
})
export class TooltipWithCustomClassComponent {

}
