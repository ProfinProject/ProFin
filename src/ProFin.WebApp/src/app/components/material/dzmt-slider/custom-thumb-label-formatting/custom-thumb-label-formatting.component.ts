import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-custom-thumb-label-formatting',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './custom-thumb-label-formatting.component.html',
  styleUrl: './custom-thumb-label-formatting.component.css'
})
export class CustomThumbLabelFormattingComponent {

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
