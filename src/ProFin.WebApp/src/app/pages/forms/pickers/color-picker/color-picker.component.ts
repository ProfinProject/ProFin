import { Component } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [ColorPickerModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css'
})
export class ColorPickerComponent {
  public color1: string = '#7ab2fa';
  public color2: string = 'hsl(0,83%,70%)';
  public color3: string = 'rgba(85,154,5,0.73)';
}
