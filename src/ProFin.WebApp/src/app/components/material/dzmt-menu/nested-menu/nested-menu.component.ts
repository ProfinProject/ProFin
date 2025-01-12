import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-nested-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './nested-menu.component.html',
  styleUrl: './nested-menu.component.css'
})
export class NestedMenuComponent {
  direction: any;
  ngDoCheck() {
    if(document.body.getAttribute('direction') == 'rtl'){
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
