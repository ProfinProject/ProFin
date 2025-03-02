import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDetailComponent } from '../panel-detail/panel-detail.component';
import { PanelAlertComponent } from '../panel-alert/panel-alert.component';

@Component({
  selector: 'app-panel-home',
  standalone: true,
  templateUrl: './panel-home.component.html',
  imports: [CommonModule, PanelDetailComponent, PanelAlertComponent]
})

export class PanelHomeComponent {

}
