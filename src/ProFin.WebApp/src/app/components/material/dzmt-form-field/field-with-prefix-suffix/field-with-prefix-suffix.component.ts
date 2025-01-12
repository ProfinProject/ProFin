import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-field-with-prefix-suffix',
  standalone: true,
  imports:[MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './field-with-prefix-suffix.component.html',
  styleUrl: './field-with-prefix-suffix.component.css'
})
export class FieldWithPrefixSuffixComponent {
  hide = true;
}
