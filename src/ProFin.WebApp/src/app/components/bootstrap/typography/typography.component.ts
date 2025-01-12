import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css'
})
export class TypographyComponent {
  breadcrumbList = {
    subTitle: 'ui-typography',
    menu_path: 'Bootstrap',
    currentURL: 'ui-typography',
  }
}
