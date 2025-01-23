import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dzmt-button-basic',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './dzmt-button-basic.component.html',
  styleUrl: './dzmt-button-basic.component.css'
})
export class DzmtButtonBasicComponent {

}
