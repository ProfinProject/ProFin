import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  breadcrumbList = {
    subTitle: 'Badge',
    menu_path: 'Bootstrap',
    currentURL: 'Badge',
  }
}

