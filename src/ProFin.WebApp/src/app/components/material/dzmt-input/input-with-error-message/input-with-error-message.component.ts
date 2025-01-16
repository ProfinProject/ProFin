import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input-with-error-message',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './input-with-error-message.component.html',
  styleUrl: './input-with-error-message.component.css'
})
export class InputWithErrorMessageComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
