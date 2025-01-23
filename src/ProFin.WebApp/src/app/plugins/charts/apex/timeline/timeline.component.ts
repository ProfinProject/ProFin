import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { TimelineAdvancedComponent } from './timeline-advanced/timeline-advanced.component';
import { TimelineBasicComponent } from './timeline-basic/timeline-basic.component';
import { TimelineDistributedComponent } from './timeline-distributed/timeline-distributed.component';
import { TimelineDumbbellComponent } from './timeline-dumbbell/timeline-dumbbell.component';
import { TimelineMultiSeriesComponent } from './timeline-multi-series/timeline-multi-series.component';
import { TimelineMultipleSeriesComponent } from './timeline-multiple-series/timeline-multiple-series.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TimelineAdvancedComponent,
    TimelineBasicComponent,
    TimelineDistributedComponent,
    TimelineDumbbellComponent,
    TimelineMultiSeriesComponent,
    TimelineMultipleSeriesComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Timeline Charts',
  }
}
