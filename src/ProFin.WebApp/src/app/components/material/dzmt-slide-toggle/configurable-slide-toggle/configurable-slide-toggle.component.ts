import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-configurable-slide-toggle',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule],
  templateUrl: './configurable-slide-toggle.component.html',
  styleUrl: './configurable-slide-toggle.component.css'
})
export class ConfigurableSlideToggleComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
