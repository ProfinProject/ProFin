import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-radios-with-ng-model',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './radios-with-ng-model.component.html',
  styleUrl: './radios-with-ng-model.component.css'
})
export class RadiosWithNgModelComponent {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}

