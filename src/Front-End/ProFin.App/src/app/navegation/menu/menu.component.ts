import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }
}
