import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-svg-icons',
  standalone: true,
  imports: [ BreadcrumbComponent ],
  templateUrl: './svg-icons.component.html',
  styleUrl: './svg-icons.component.css'
})
export class SvgIconsComponent {
  breadcrumbList = {
    menu_path: 'Icons',
    currentURL: 'Svg Icons',
  }
}
