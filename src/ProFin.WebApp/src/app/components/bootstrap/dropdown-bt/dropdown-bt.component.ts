import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';
import { DropdownConfigComponent } from './dropdown-config/dropdown-config.component';
import { DropdownContainerComponent } from './dropdown-container/dropdown-container.component';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';
import { DropdownManualComponent } from './dropdown-manual/dropdown-manual.component';
import { DropdownNavbarComponent } from './dropdown-navbar/dropdown-navbar.component';
import { DropdownSplitComponent } from './dropdown-split/dropdown-split.component';

@Component({
  selector: 'app-dropdown-bt',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DropdownBasicComponent,
    DropdownConfigComponent,
    DropdownContainerComponent,
    DropdownFormComponent,
    DropdownManualComponent,
    DropdownNavbarComponent,
    DropdownSplitComponent
  ],
  templateUrl: './dropdown-bt.component.html',
  styleUrl: './dropdown-bt.component.css'
})
export class DropdownBtComponent {
  breadcrumbList = {
    subTitle: 'Dropdown',
    menu_path: 'Bootstrap',
    currentURL: 'Dropdown',
  }
}
