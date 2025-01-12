import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { TreeWithDynamicDataComponent } from './tree-with-dynamic-data/tree-with-dynamic-data.component';
import { TreeWithFlatNodesComponent } from './tree-with-flat-nodes/tree-with-flat-nodes.component';
import { TreeWithNestedNodesComponent } from './tree-with-nested-nodes/tree-with-nested-nodes.component';
import { TreeWithPartiallyLoadedDataComponent } from './tree-with-partially-loaded-data/tree-with-partially-loaded-data.component';

@Component({
  selector: 'app-dzmt-tree',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TreeWithDynamicDataComponent,
    TreeWithFlatNodesComponent,
    TreeWithNestedNodesComponent,
    TreeWithPartiallyLoadedDataComponent
  ],
  templateUrl: './dzmt-tree.component.html',
  styleUrl: './dzmt-tree.component.css'
})
export class DzmtTreeComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Tree',
  }
}
