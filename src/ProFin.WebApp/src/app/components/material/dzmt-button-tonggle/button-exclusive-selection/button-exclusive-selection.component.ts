import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-button-exclusive-selection',
  standalone: true,
  imports: [MatButtonToggleModule, MatIconModule],
  templateUrl: './button-exclusive-selection.component.html',
  styleUrl: './button-exclusive-selection.component.css'
})
export class ButtonExclusiveSelectionComponent {

}
