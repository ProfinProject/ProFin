import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-media-object',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './media-object.component.html',
  styleUrl: './media-object.component.css'
})
export class MediaObjectComponent {
  breadcrumbList = {
    subTitle: 'Your business dashboard template',
    menu_path: 'Bootstrap',
    currentURL: 'Media Object',
  }
}
