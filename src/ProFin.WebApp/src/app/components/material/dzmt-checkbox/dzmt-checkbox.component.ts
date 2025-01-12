import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicCheckboxComponent } from './basic-checkbox/basic-checkbox.component';
import { ConfigurableCheckboxComponent } from './configurable-checkbox/configurable-checkbox.component';
import { CheckboxesWithReactiveFormsComponent } from './checkboxes-with-reactive-forms/checkboxes-with-reactive-forms.component';

@Component({
  selector: 'app-dzmt-checkbox',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicCheckboxComponent,
    ConfigurableCheckboxComponent,
    CheckboxesWithReactiveFormsComponent
  ],
  templateUrl: './dzmt-checkbox.component.html',
  styleUrl: './dzmt-checkbox.component.css'
})
export class DzmtCheckboxComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Checkbox',
  }
}
