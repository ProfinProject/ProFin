import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dzmt-divider',
  standalone: true,
  imports: [BreadcrumbComponent, MatListModule, MatDividerModule],
  templateUrl: './dzmt-divider.component.html',
  styleUrl: './dzmt-divider.component.css'
})
export class DzmtDividerComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Divider',
  }
}
