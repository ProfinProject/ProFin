import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrl: './custom-stepper.component.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class CustomStepperComponent {

  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    place: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    place: ['', Validators.required],
  });
  therdFormGroup = this._formBuilder.group({
    input1: ['9:00', Validators.required],
    input2: ['6:00', Validators.required]
  });
  isEditable = false;
}
