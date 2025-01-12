import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ConfigurableSlideToggleComponent } from './configurable-slide-toggle/configurable-slide-toggle.component';
import { SlideToggleBasicComponent } from './slide-toggle-basic/slide-toggle-basic.component';
import { SlideToggleWithFormsComponent } from './slide-toggle-with-forms/slide-toggle-with-forms.component';

@Component({
  selector: 'app-dzmt-slide-toggle',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ConfigurableSlideToggleComponent,
    SlideToggleBasicComponent,
    SlideToggleWithFormsComponent
  ],
  templateUrl: './dzmt-slide-toggle.component.html',
  styleUrl: './dzmt-slide-toggle.component.css'
})
export class DzmtSlideToggleComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Slide Toggle',
  }
}
