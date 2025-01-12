import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-custom-panel-styling',
  templateUrl: './custom-panel-styling.component.html',
  styleUrl: './custom-panel-styling.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class CustomPanelStylingComponent {
  panelColor = new FormControl('red');
}
