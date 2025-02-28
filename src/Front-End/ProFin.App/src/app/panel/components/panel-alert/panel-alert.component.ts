import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PanelAlert } from '../models/panel-alert.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-panel-alert',
  standalone: true,
  templateUrl: './panel-alert.component.html',
  styleUrl: './panel-alert.component.css',
  imports: [RouterLink, CommonModule]
})

export class PanelAlertComponent implements OnInit {
  alert: PanelAlert;

    constructor(private router: Router) {
      this.alert = new PanelAlert();

    }

    ngOnInit(): void {

    }
}
