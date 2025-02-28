import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Panel } from '../models/panel.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-panel-detail',
  standalone: true,
  templateUrl: './panel-detail.component.html',
  styleUrl: './panel-detail.component.css',
  imports: [RouterLink]
})

export class PanelDetailComponent implements OnInit {
  panel: Panel;

    constructor(private router: Router) {

      this.panel = new Panel();

    }

    ngOnInit(): void {

    }
}
