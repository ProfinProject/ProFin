import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu-positioning',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './menu-positioning.component.html',
  styleUrl: './menu-positioning.component.css'
})
export class MenuPositioningComponent {
  direction: any;
  ngDoCheck() {
    if(document.body.getAttribute('direction') == 'rtl'){
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
