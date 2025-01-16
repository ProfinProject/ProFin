import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-card-with-media-size',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-with-media-size.component.html',
  styleUrl: './card-with-media-size.component.css'
})
export class CardWithMediaSizeComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
