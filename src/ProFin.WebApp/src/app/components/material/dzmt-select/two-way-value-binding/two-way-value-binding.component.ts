import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-two-way-value-binding',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './two-way-value-binding.component.html',
  styleUrl: './two-way-value-binding.component.css'
})
export class TwoWayValueBindingComponent {

  selected = 'option2';
}
