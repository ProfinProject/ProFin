import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-with-prefixes-suffixes',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './input-with-prefixes-suffixes.component.html',
  styleUrl: './input-with-prefixes-suffixes.component.css'
})
export class InputWithPrefixesSuffixesComponent {

}
