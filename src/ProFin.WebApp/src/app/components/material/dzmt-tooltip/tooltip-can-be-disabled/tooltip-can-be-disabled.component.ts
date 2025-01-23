import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-tooltip-can-be-disabled',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tooltip-can-be-disabled.component.html',
  styleUrl: './tooltip-can-be-disabled.component.css'
})
export class TooltipCanBeDisabledComponent {
  disabled = new FormControl(false);

}
