import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicSelectComponent } from './basic-select/basic-select.component';
import { CustomErrorStateMatcherComponent } from './custom-error-state-matcher/custom-error-state-matcher.component';
import { CustomPanelStylingComponent } from './custom-panel-styling/custom-panel-styling.component';
import { CustomTriggerTextComponent } from './custom-trigger-text/custom-trigger-text.component';
import { DisabledSelectComponent } from './disabled-select/disabled-select.component';
import { InitialValueNoFormComponent } from './initial-value-no-form/initial-value-no-form.component';
import { MultipleSelectionComponent } from './multiple-selection/multiple-selection.component';
import { NoOptionRippleComponent } from './no-option-ripple/no-option-ripple.component';
import { OptionGroupsComponent } from './option-groups/option-groups.component';
import { SelectFormFieldFeaturesComponent } from './select-form-field-features/select-form-field-features.component';
import { SelectInFormComponent } from './select-in-form/select-in-form.component';
import { SelectInReactiveFormComponent } from './select-in-reactive-form/select-in-reactive-form.component';
import { SelectWithResetOptionComponent } from './select-with-reset-option/select-with-reset-option.component';
import { TwoWayValueBindingComponent } from './two-way-value-binding/two-way-value-binding.component';

@Component({
  selector: 'app-dzmt-select',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicSelectComponent,
    CustomErrorStateMatcherComponent,
    CustomPanelStylingComponent,
    CustomTriggerTextComponent,
    DisabledSelectComponent,
    InitialValueNoFormComponent,
    MultipleSelectionComponent,
    NoOptionRippleComponent,
    OptionGroupsComponent,
    SelectFormFieldFeaturesComponent,
    SelectInFormComponent,
    SelectInReactiveFormComponent,
    SelectWithResetOptionComponent,
    TwoWayValueBindingComponent
  ],
  templateUrl: './dzmt-select.component.html',
  styleUrl: './dzmt-select.component.css'
})
export class DzmtSelectComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Select',
  }
}
