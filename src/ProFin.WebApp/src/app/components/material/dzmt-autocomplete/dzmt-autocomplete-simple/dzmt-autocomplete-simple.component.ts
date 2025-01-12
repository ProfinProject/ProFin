import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dzmt-autocomplete-simple',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dzmt-autocomplete-simple.component.html',
  styleUrl: './dzmt-autocomplete-simple.component.css'
})
export class DzmtAutocompleteSimpleComponent {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
