import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-home',
  standalone: true,
  templateUrl: './panel-home.component.html',
  imports: [CommonModule, RouterLink]
})
export class PanelHomeComponent {

}
