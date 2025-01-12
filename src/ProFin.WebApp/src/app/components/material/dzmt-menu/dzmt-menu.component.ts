import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicMenuComponent } from './basic-menu/basic-menu.component';
import { MenuPositioningComponent } from './menu-positioning/menu-positioning.component';
import { MenuWithIconComponent } from './menu-with-icon/menu-with-icon.component';
import { NestedMenuComponent } from './nested-menu/nested-menu.component';

@Component({
  selector: 'app-dzmt-menu',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicMenuComponent,
    MenuPositioningComponent,
    MenuWithIconComponent,
    NestedMenuComponent
  ],
  templateUrl: './dzmt-menu.component.html',
  styleUrl: './dzmt-menu.component.css'
})
export class DzmtMenuComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Menu',
  }
}
