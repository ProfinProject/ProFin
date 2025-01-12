import { Component } from '@angular/core';
import { AutosizeSidenavComponent } from './autosize-sidenav/autosize-sidenav.component';
import { T } from '@angular/cdk/keycodes';
import { DrawerExplicitBackdropSettingComponent } from './drawer-explicit-backdrop-setting/drawer-explicit-backdrop-setting.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dzmt-sidenav',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AutosizeSidenavComponent,
    DrawerExplicitBackdropSettingComponent
  ],
  templateUrl: './dzmt-sidenav.component.html',
  styleUrl: './dzmt-sidenav.component.css'
})
export class DzmtSidenavComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Sidenav',
  }
}
