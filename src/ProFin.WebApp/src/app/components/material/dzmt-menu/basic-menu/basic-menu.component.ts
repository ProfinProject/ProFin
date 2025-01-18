import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-basic-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './basic-menu.component.html',
  styleUrl: './basic-menu.component.css'
})
export class BasicMenuComponent {
  direction: any;
  ngDoCheck() {
    if (document.body.getAttribute('direction') == 'rtl') {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
