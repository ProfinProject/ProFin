import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanelDetailComponent } from '../panel-detail/panel-detail.component';

@Component({
  selector: 'app-panel-home',
  standalone: true,
  templateUrl: './panel-home.component.html',
  imports: [CommonModule, RouterLink, PanelDetailComponent]
})

export class PanelHomeComponent {
    
}
