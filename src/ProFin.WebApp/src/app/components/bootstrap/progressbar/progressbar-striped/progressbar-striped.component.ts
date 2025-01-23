import { Component } from '@angular/core';
import { NgbModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar-striped',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './progressbar-striped.component.html',
  styleUrl: './progressbar-striped.component.css'
})
export class ProgressbarStripedComponent {
  constructor(private config: NgbProgressbarConfig) {
		config.animated = true;
	}
}
