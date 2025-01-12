import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ButtonExclusiveSelectionComponent } from './button-exclusive-selection/button-exclusive-selection.component';
import { ButtonToggleAppearanceComponent } from './button-toggle-appearance/button-toggle-appearance.component';
import { ButtonWithFormsComponent } from './button-with-forms/button-with-forms.component';
import { DzmtBasicTonggleComponent } from './dzmt-basic-tonggle/dzmt-basic-tonggle.component';

@Component({
  selector: 'app-dzmt-button-tonggle',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ButtonExclusiveSelectionComponent,
    ButtonToggleAppearanceComponent,
    ButtonWithFormsComponent,
    DzmtBasicTonggleComponent
  ],
  templateUrl: './dzmt-button-tonggle.component.html',
  styleUrl: './dzmt-button-tonggle.component.css'
})
export class DzmtButtonTonggleComponent {
  breadcrumbList = {
    menu_path: 'Material',    
    currentURL: 'Button Tonggle',
  }
}
