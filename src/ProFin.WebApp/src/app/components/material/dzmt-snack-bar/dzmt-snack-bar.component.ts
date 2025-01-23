import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicSnackBarComponent } from './basic-snack-bar/basic-snack-bar.component';
import { SnackBarConfigurableComponent } from './snack-bar-configurable/snack-bar-configurable.component';
import { SnackBarCustomComponentComponent } from './snack-bar-custom-component/snack-bar-custom-component.component';

@Component({
  selector: 'app-dzmt-snack-bar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicSnackBarComponent,
    SnackBarConfigurableComponent,
    SnackBarCustomComponentComponent
  ],
  templateUrl: './dzmt-snack-bar.component.html',
  styleUrl: './dzmt-snack-bar.component.css'
})
export class DzmtSnackBarComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Snack Bar',
  }
}
