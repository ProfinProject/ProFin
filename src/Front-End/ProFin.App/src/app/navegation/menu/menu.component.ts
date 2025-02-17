import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,

  templateUrl: './menu.component.html'
})
export class MenuComponent {
  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }
}
