import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-chips-stacked',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './chips-stacked.component.html',
  styleUrl: './chips-stacked.component.css'
})
export class ChipsStackedComponent {
  availableColors: ChipColor[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];
}
