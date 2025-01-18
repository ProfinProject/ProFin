import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicExpansionPanelComponent } from './basic-expansion-panel/basic-expansion-panel.component';
import { ExpandCollapseAllTogglesComponent } from './expand-collapse-all-toggles/expand-collapse-all-toggles.component';
import { ExpansionAsAccordionComponent } from './expansion-as-accordion/expansion-as-accordion.component';

@Component({
  selector: 'app-dzmt-expansion',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicExpansionPanelComponent,
    ExpandCollapseAllTogglesComponent,
    ExpansionAsAccordionComponent
  ],
  templateUrl: './dzmt-expansion.component.html',
  styleUrl: './dzmt-expansion.component.css'
})
export class DzmtExpansionComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Expansion Panel',
  }
}
