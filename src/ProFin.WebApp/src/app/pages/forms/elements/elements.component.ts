import { Component } from '@angular/core';
import { SelectSizeComponent } from './select-size/select-size.component';
import { SelectListComponent } from './select-list/select-list.component';
import { VerticalFormComponent } from './vertical-form/vertical-form.component';
import { HorizontalFormComponent } from './horizontal-form/horizontal-form.component';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { CustomSelect1Component } from './custom-select1/custom-select1.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    Select2Component,  
    SelectSizeComponent, 
    SelectListComponent, 
    CustomSelect1Component, 
    VerticalFormComponent, 
    HorizontalFormComponent
  ],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css'
})
export class ElementsComponent {
  breadcrumbList = {
    menu_path: 'Form',
    currentURL: 'Element',
  }
  select2Data = [
    {
      name: 'Choose...',
    },
    {
      name: 'One',
    },
    {
      name: 'Two',
    },
    {
      name: 'Three',
    }
  ];
}
