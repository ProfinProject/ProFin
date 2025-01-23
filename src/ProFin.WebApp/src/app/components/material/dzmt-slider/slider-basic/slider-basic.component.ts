import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider-basic',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './slider-basic.component.html',
  styleUrl: './slider-basic.component.css'
})
export class SliderBasicComponent {

}
