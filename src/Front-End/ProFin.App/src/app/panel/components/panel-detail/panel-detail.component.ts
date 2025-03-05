import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Panel } from '../models/panel.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-panel-detail',
  standalone: true,
  templateUrl: './panel-detail.component.html',
  styleUrl: './panel-detail.component.css',
  imports: [RouterLink, CommonModule]
})

export class PanelDetailComponent implements OnInit {

  @Input()
  panel: Panel;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    
  }
}
