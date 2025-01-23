import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css'
})
export class ButtonGroupComponent {
  breadcrumbList = {
    subTitle: 'Button Group',
    menu_path: 'Bootstrap',
    currentURL: 'Button Group',
  }
}
