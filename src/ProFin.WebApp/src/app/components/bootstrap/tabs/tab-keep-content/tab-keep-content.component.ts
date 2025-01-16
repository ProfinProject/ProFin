import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab-keep-content',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './tab-keep-content.component.html',
  styleUrl: './tab-keep-content.component.css'
})
export class TabKeepContentComponent {
  active = 1;

}
