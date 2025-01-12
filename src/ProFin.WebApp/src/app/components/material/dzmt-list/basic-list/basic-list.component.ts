import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-basic-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './basic-list.component.html',
  styleUrl: './basic-list.component.css'
})
export class BasicListComponent {

}
