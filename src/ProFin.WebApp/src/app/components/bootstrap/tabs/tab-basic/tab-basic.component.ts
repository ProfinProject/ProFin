import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab-basic',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './tab-basic.component.html',
  styleUrl: './tab-basic.component.css'
})
export class TabBasicComponent {
  active = 1; 
}
