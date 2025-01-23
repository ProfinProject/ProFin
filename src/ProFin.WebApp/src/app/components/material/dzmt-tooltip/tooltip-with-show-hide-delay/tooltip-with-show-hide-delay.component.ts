import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-tooltip-with-show-hide-delay',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './tooltip-with-show-hide-delay.component.html',
  styleUrl: './tooltip-with-show-hide-delay.component.css'
})
export class TooltipWithShowHideDelayComponent {

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
}
