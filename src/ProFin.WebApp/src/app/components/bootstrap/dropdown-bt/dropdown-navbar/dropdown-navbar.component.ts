import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-navbar',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './dropdown-navbar.component.html',
  styleUrl: './dropdown-navbar.component.css'
})
export class DropdownNavbarComponent {
  collapsed = true;
}
