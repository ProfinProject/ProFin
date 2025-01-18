import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-no-option-ripple',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './no-option-ripple.component.html',
  styleUrl: './no-option-ripple.component.css'
})
export class NoOptionRippleComponent {

}
