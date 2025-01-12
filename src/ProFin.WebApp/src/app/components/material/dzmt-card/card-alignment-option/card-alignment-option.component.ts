import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-card-alignment-option',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card-alignment-option.component.html',
  styleUrl: './card-alignment-option.component.css'
})
export class CardAlignmentOptionComponent {

}
