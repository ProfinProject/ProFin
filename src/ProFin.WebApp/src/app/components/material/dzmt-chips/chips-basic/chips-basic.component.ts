import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-chips-basic',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './chips-basic.component.html',
  styleUrl: './chips-basic.component.css'
})
export class ChipsBasicComponent {

}
