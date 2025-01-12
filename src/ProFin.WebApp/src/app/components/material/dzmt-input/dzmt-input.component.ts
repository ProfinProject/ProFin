import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { InputBasicComponent } from './input-basic/input-basic.component';
import { InputErrorStateMatcherComponent } from './input-error-state-matcher/input-error-state-matcher.component';
import { InputInFormComponent } from './input-in-form/input-in-form.component';
import { InputWithClearButtonComponent } from './input-with-clear-button/input-with-clear-button.component';
import { InputWithErrorMessageComponent } from './input-with-error-message/input-with-error-message.component';
import { InputWithHintsComponent } from './input-with-hints/input-with-hints.component';
import { InputWithPrefixesSuffixesComponent } from './input-with-prefixes-suffixes/input-with-prefixes-suffixes.component';

@Component({
  selector: 'app-dzmt-input',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    InputBasicComponent,
    InputErrorStateMatcherComponent,
    InputInFormComponent,
    InputWithClearButtonComponent,
    InputWithErrorMessageComponent,
    InputWithHintsComponent,
    InputWithPrefixesSuffixesComponent
  ],
  templateUrl: './dzmt-input.component.html',
  styleUrl: './dzmt-input.component.css'
})
export class DzmtInputComponent {
  breadcrumbList = {
    menu_path: 'Material',    
    currentURL: 'Input',
  }
}
