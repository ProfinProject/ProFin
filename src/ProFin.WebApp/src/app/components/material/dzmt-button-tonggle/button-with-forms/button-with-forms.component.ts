import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@Component({
  selector: 'app-button-with-forms',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './button-with-forms.component.html',
  styleUrl: './button-with-forms.component.css'
})
export class ButtonWithFormsComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
