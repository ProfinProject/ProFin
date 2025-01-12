import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { ChipsBasicComponent } from './chips-basic/chips-basic.component';
import { ChipsDragDropComponent } from './chips-drag-drop/chips-drag-drop.component';
import { ChipsStackedComponent } from './chips-stacked/chips-stacked.component';
import { ChipsWithInputComponent } from './chips-with-input/chips-with-input.component';
import { ChipsAvatarComponent } from './chips-avatar/chips-avatar.component';

@Component({
  selector: 'app-dzmt-chips',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ChipsAutocompleteComponent,
    ChipsBasicComponent,
    ChipsDragDropComponent,
    ChipsStackedComponent,
    ChipsWithInputComponent,
    ChipsAvatarComponent
  ],
  templateUrl: './dzmt-chips.component.html',
  styleUrl: './dzmt-chips.component.css'
})
export class DzmtChipsComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Chips',
  }
}
