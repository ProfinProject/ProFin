import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radios-basic',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './radios-basic.component.html',
  styleUrl: './radios-basic.component.css'
})
export class RadiosBasicComponent {

}
