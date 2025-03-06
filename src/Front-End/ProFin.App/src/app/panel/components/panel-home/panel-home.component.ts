import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanelDetailComponent } from '../panel-detail/panel-detail.component';
import { PanelAlertComponent } from '../panel-alert/panel-alert.component';
import { PanelService } from '../../services/panel.service';
import { Panel } from '../models/panel.model';
import { PanelAlert } from '../models/panel-alert.model';

@Component({
  selector: 'app-panel-home',
  standalone: true,
  templateUrl: './panel-home.component.html',
  imports: [CommonModule, PanelDetailComponent, PanelAlertComponent]
})

export class PanelHomeComponent implements OnInit {
  panels: Panel[] = [];
  alerts: PanelAlert[] = [];

  constructor(private panelService: PanelService) {}

  ngOnInit(): void {
    this.loadPanels();
    this.loadAlerts();
  }

  loadAlerts(): void{
    this.panelService.getAlerts()
    .subscribe({
      next: result =>
      {
        this.alerts = result;
      },
      error: e=> {
        console.log(e);
      }
    });
  }

  loadPanels(): void{
    this.panelService.getPanels()
    .subscribe({
      next: result =>
      {
        this.panels = result;
      },
      error: e=> {
        console.log(e);
      }
    });
  }
}
