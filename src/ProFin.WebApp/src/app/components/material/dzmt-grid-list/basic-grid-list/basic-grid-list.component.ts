import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-basic-grid-list',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './basic-grid-list.component.html',
  styleUrl: './basic-grid-list.component.css'
})
export class BasicGridListComponent {

}
