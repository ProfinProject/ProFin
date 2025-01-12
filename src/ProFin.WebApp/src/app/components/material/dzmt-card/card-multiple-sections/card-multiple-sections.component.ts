import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-card-multiple-sections',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-multiple-sections.component.html',
  styleUrl: './card-multiple-sections.component.css'
})
export class CardMultipleSectionsComponent {

}
