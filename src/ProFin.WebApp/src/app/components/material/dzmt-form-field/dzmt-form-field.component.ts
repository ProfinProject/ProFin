import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AppearanceVariantsComponent } from './appearance-variants/appearance-variants.component';
import { FieldThemingComponent } from './field-theming/field-theming.component';
import { FieldWithErrorMessagesComponent } from './field-with-error-messages/field-with-error-messages.component';
import { FieldWithHintsComponent } from './field-with-hints/field-with-hints.component';
import { FieldWithLabelComponent } from './field-with-label/field-with-label.component';
import { SimpleFormFieldComponent } from './simple-form-field/simple-form-field.component';
import { FieldWithPrefixSuffixComponent } from './field-with-prefix-suffix/field-with-prefix-suffix.component';
import { FieldWithTelephoneNumberComponent } from './field-with-telephone-number/field-with-telephone-number.component';

@Component({
  selector: 'app-dzmt-form-field',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AppearanceVariantsComponent,
    FieldThemingComponent,
    FieldWithErrorMessagesComponent,
    FieldWithHintsComponent,
    FieldWithLabelComponent,
    SimpleFormFieldComponent,
    FieldWithPrefixSuffixComponent,
    FieldWithTelephoneNumberComponent
  ],
  templateUrl: './dzmt-form-field.component.html',
  styleUrl: './dzmt-form-field.component.css'
})
export class DzmtFormFieldComponent {
  breadcrumbList = {
    menu_path: 'Material',    
    currentURL: 'Form Field',
  }
}
