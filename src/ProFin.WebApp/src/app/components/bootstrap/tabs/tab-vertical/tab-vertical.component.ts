import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab-vertical',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './tab-vertical.component.html',
  styleUrl: './tab-vertical.component.css'
})
export class TabVerticalComponent {
  active = 'top';

}
