import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-value-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './value-slider.component.html',
  styleUrl: './value-slider.component.css'
})
export class ValueSliderComponent {

}
