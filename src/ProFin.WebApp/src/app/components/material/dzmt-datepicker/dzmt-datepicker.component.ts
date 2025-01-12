import { Component } from '@angular/core';
import { BasicDateRangeComponent } from './basic-date-range/basic-date-range.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicDatepickerComponent } from './basic-datepicker/basic-datepicker.component';
import { ComparisonRangesComponent } from './comparison-ranges/comparison-ranges.component';
import { DatepickerActionButtonsComponent } from './datepicker-action-buttons/datepicker-action-buttons.component';
import { DatepickerCustomCalendarHeaderComponent } from './datepicker-custom-calendar-header/datepicker-custom-calendar-header.component';
import { DatepickerCustomDateClassesComponent } from './datepicker-custom-date-classes/datepicker-custom-date-classes.component';
import { DatepickerFilterValidationComponent } from './datepicker-filter-validation/datepicker-filter-validation.component';
import { DatepickerMinMaxValidationComponent } from './datepicker-min-max-validation/datepicker-min-max-validation.component';
import { DatepickerOpenMethodComponent } from './datepicker-open-method/datepicker-open-method.component';
import { DatepickerPaletteColorsComponent } from './datepicker-palette-colors/datepicker-palette-colors.component';
import { DatepickerSelectedValueComponent } from './datepicker-selected-value/datepicker-selected-value.component';
import { DatepickerStartDateComponent } from './datepicker-start-date/datepicker-start-date.component';
import { DatepickerTouchUiComponent } from './datepicker-touch-ui/datepicker-touch-ui.component';
import { DisabledDatepickerComponent } from './disabled-datepicker/disabled-datepicker.component';
import { FormsIntegrationComponent } from './forms-integration/forms-integration.component';
import { InputChangeEventsComponent } from './input-change-events/input-change-events.component';
import { RangeCustomSelectionStrategyComponent } from './range-custom-selection-strategy/range-custom-selection-strategy.component';

@Component({
  selector: 'app-dzmt-datepicker',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicDateRangeComponent,
    BasicDatepickerComponent,
    ComparisonRangesComponent,
    DatepickerActionButtonsComponent,
    DatepickerCustomCalendarHeaderComponent,
    DatepickerCustomDateClassesComponent,
    DatepickerFilterValidationComponent,
    DatepickerMinMaxValidationComponent,
    DatepickerOpenMethodComponent,
    DatepickerPaletteColorsComponent,
    DatepickerSelectedValueComponent,
    DatepickerStartDateComponent,
    DatepickerTouchUiComponent,
    DisabledDatepickerComponent,
    FormsIntegrationComponent,
    InputChangeEventsComponent,
    RangeCustomSelectionStrategyComponent
  ],
  templateUrl: './dzmt-datepicker.component.html',
  styleUrl: './dzmt-datepicker.component.css'
})
export class DzmtDatepickerComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Datepicker',
  }
}
