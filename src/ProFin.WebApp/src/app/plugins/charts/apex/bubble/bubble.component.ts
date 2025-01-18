import { Component } from '@angular/core';
import { Bubble3DComponent } from './bubble3-d/bubble3-d.component';
import { BubbleSimpleComponent } from './bubble-simple/bubble-simple.component';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BubbleSimpleComponent,
    Bubble3DComponent
  ],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.css'
})
export class BubbleComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Bubble chart',
  }
}
