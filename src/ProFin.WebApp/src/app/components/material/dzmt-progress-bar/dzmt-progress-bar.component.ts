import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BufferProgressBarComponent } from './buffer-progress-bar/buffer-progress-bar.component';
import { ConfigurableProgressBarComponent } from './configurable-progress-bar/configurable-progress-bar.component';
import { DeterminateProgressBarComponent } from './determinate-progress-bar/determinate-progress-bar.component';
import { IndeterminateProgressBarComponent } from './indeterminate-progress-bar/indeterminate-progress-bar.component';
import { QueryProgressBarComponent } from './query-progress-bar/query-progress-bar.component';

@Component({
  selector: 'app-dzmt-progress-bar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BufferProgressBarComponent,
    ConfigurableProgressBarComponent,
    DeterminateProgressBarComponent,
    IndeterminateProgressBarComponent,
    QueryProgressBarComponent
  ],
  templateUrl: './dzmt-progress-bar.component.html',
  styleUrl: './dzmt-progress-bar.component.css'
})
export class DzmtProgressBarComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Progress Bar',
  }
}
