import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dzmt-badge',
  standalone: true,
  imports: [
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    BreadcrumbComponent,],
  templateUrl: './dzmt-badge.component.html',
  styleUrl: './dzmt-badge.component.css'
})
export class DzmtBadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Badge',
  }
}
