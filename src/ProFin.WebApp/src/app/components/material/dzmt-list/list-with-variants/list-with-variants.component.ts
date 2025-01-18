import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list-with-variants',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './list-with-variants.component.html',
  styleUrl: './list-with-variants.component.css'
})
export class ListWithVariantsComponent {

}
