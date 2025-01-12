import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-card-basic',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-basic.component.html',
  styleUrl: './card-basic.component.css'
})
export class CardBasicComponent {

}
