import { Component } from '@angular/core';
import { DzmtAutocompleteDisplayComponent } from './dzmt-autocomplete-display/dzmt-autocomplete-display.component';
import { DzmtAutocompleteFilterComponent } from './dzmt-autocomplete-filter/dzmt-autocomplete-filter.component';
import { DzmtAutocompleteFirstActiveComponent } from './dzmt-autocomplete-first-active/dzmt-autocomplete-first-active.component';
import { DzmtAutocompleteOptgroupComponent } from './dzmt-autocomplete-optgroup/dzmt-autocomplete-optgroup.component';
import { DzmtAutocompleteOverviewComponent } from './dzmt-autocomplete-overview/dzmt-autocomplete-overview.component';
import { DzmtAutocompletePlaneComponent } from './dzmt-autocomplete-plane/dzmt-autocomplete-plane.component';
import { DzmtAutocompleteSimpleComponent } from './dzmt-autocomplete-simple/dzmt-autocomplete-simple.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DzmtAutocompleteRequireComponent } from './dzmt-autocomplete-require/dzmt-autocomplete-require.component';

@Component({
  selector: 'app-dzmt-autocomplete',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DzmtAutocompleteDisplayComponent,
    DzmtAutocompleteFilterComponent,
    DzmtAutocompleteFirstActiveComponent,
    DzmtAutocompleteOptgroupComponent,
    DzmtAutocompleteOverviewComponent,
    DzmtAutocompletePlaneComponent,
    DzmtAutocompleteSimpleComponent,
    DzmtAutocompleteRequireComponent
  ],
  templateUrl: './dzmt-autocomplete.component.html',
  styleUrl: './dzmt-autocomplete.component.css'
})
export class DzmtAutocompleteComponent {
  breadcrumbList = {
    menu_path: 'Material',    
    currentURL: 'Autocomplete',
  }
}
