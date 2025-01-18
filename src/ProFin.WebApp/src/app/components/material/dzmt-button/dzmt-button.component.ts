import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DzmtButtonBasicComponent } from './dzmt-button-basic/dzmt-button-basic.component';
import { DzmtButtonVarietiesComponent } from './dzmt-button-varieties/dzmt-button-varieties.component';

@Component({
  selector: 'app-dzmt-button',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DzmtButtonBasicComponent,
    DzmtButtonVarietiesComponent
  ],
  templateUrl: './dzmt-button.component.html',
  styleUrl: './dzmt-button.component.css'
})
export class DzmtButtonComponent {
  breadcrumbList = {
    menu_path: 'Material',    
    currentURL: 'Button',
  }
}
