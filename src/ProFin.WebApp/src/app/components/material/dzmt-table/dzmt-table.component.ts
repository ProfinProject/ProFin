import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTableSortingPaginationFilteringComponent } from './data-table-sorting-pagination-filtering/data-table-sorting-pagination-filtering.component';
import { DynamicallyChangingColumnsDisplayedComponent } from './dynamically-changing-columns-displayed/dynamically-changing-columns-displayed.component';
import { FooterRowTableComponent } from './footer-row-table/footer-row-table.component';
import { MultipleHeaderFooterRowsComponent } from './multiple-header-footer-rows/multiple-header-footer-rows.component';
import { TableContextPropertiesComponent } from './table-context-properties/table-context-properties.component';
import { TableExpandableRowsComponent } from './table-expandable-rows/table-expandable-rows.component';
import { TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent } from './table-flex-with-toggle-able-sticky-headers-footers-columns/table-flex-with-toggle-able-sticky-headers-footers-columns.component';
import { TableStickyFooterComponent } from './table-sticky-footer/table-sticky-footer.component';
import { TableStickyHeaderComponent } from './table-sticky-header/table-sticky-header.component';
import { TableWithConfigurationsInterfaceComponent } from './table-with-configurations-interface/table-with-configurations-interface.component';
import { TableWithDisplayFlexComponent } from './table-with-display-flex/table-with-display-flex.component';
import { TableWithFilteringComponent } from './table-with-filtering/table-with-filtering.component';
import { TableWithPaginationComponent } from './table-with-pagination/table-with-pagination.component';
import { TableWithReOrderableColumnsComponent } from './table-with-re-orderable-columns/table-with-re-orderable-columns.component';
import { TableWithSelectionComponent } from './table-with-selection/table-with-selection.component';
import { TableWithSimpleTextHeaderFooterComponent } from './table-with-simple-text-header-footer/table-with-simple-text-header-footer.component';
import { TableWithSortingComponent } from './table-with-sorting/table-with-sorting.component';
import { TableWithStickyColumnsComponent } from './table-with-sticky-columns/table-with-sticky-columns.component';
import { TableWithAddingRemovingComponent } from './table-with-adding-removing/table-with-adding-removing.component';

@Component({
  selector: 'app-dzmt-table',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicTableComponent,
    DataTableSortingPaginationFilteringComponent,
    DynamicallyChangingColumnsDisplayedComponent,
    FooterRowTableComponent,
    MultipleHeaderFooterRowsComponent,
    TableContextPropertiesComponent,
    TableExpandableRowsComponent,
    TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent,
    TableStickyFooterComponent,
    TableStickyHeaderComponent,
    TableWithConfigurationsInterfaceComponent,
    TableWithDisplayFlexComponent,
    TableWithFilteringComponent,
    TableWithPaginationComponent,
    TableWithReOrderableColumnsComponent,
    TableWithSelectionComponent,
    TableWithSimpleTextHeaderFooterComponent,
    TableWithSortingComponent,
    TableWithStickyColumnsComponent,
    TableWithAddingRemovingComponent
  ],
  templateUrl: './dzmt-table.component.html',
  styleUrl: './dzmt-table.component.css'
})
export class DzmtTableComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Table',
  }
}
