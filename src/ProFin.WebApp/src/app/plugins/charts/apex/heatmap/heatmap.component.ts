import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { HeatmapBasicComponent } from './heatmap-basic/heatmap-basic.component';
import { HeatmapColorRangeComponent } from './heatmap-color-range/heatmap-color-range.component';
import { HeatmapMultipleColorsComponent } from './heatmap-multiple-colors/heatmap-multiple-colors.component';
import { HeatmapRoundedComponent } from './heatmap-rounded/heatmap-rounded.component';

@Component({
  selector: 'app-heatmap',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    HeatmapBasicComponent,
    HeatmapColorRangeComponent,
    HeatmapMultipleColorsComponent,
    HeatmapRoundedComponent
  ],
  templateUrl: './heatmap.component.html',
  styleUrl: './heatmap.component.css'
})
export class HeatmapComponent {
 breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Heatmap Charts',
  }
}
