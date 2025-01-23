import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dzmt-ripple',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  templateUrl: './dzmt-ripple.component.html',
  styleUrl: './dzmt-ripple.component.css'
})
export class DzmtRippleComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Ripple',
  }

  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;
}
