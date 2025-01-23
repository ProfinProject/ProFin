import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { SparklinesBasicComponent } from './sparklines-basic/sparklines-basic.component';

@Component({
  selector: 'app-sparklines',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    SparklinesBasicComponent
  ],
  templateUrl: './sparklines.component.html',
  styleUrl: './sparklines.component.css'
})
export class SparklinesComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Sparklines Charts',
  }
}
