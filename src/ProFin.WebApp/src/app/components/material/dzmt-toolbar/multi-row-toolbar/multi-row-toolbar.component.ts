import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-multi-row-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './multi-row-toolbar.component.html',
  styleUrl: './multi-row-toolbar.component.css'
})
export class MultiRowToolbarComponent {

}
