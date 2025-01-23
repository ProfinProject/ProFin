import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicProgressSpinnerComponent } from './basic-progress-spinner/basic-progress-spinner.component';
import { ConfigurableProgressSpinnerComponent } from './configurable-progress-spinner/configurable-progress-spinner.component';

@Component({
  selector: 'app-dzmt-progress-spinner',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicProgressSpinnerComponent,
    ConfigurableProgressSpinnerComponent
  ],
  templateUrl: './dzmt-progress-spinner.component.html',
  styleUrl: './dzmt-progress-spinner.component.css'
})
export class DzmtProgressSpinnerComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Progress Spinner',
  }
}
