import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-initial-value-no-form',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './initial-value-no-form.component.html',
  styleUrl: './initial-value-no-form.component.css'
})
export class InitialValueNoFormComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  cars: Car[] = [
    { value: 'ford', viewValue: 'Ford' },
    { value: 'chevrolet', viewValue: 'Chevrolet' },
    { value: 'dodge', viewValue: 'Dodge' },
  ];
  selectedFood = this.foods[2].value;
  selectedCar = this.cars[0].value;

  selectCar(event: Event) {
    this.selectedCar = (event.target as HTMLSelectElement).value;
  }
}
