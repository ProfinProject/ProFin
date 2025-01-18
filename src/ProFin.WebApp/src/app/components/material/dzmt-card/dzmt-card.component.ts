import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { CardBasicComponent } from './card-basic/card-basic.component';
import { CardMultipleSectionsComponent } from './card-multiple-sections/card-multiple-sections.component';
import { CardAlignmentOptionComponent } from './card-alignment-option/card-alignment-option.component';
import { CardWithFooterComponent } from './card-with-footer/card-with-footer.component';
import { CardWithMediaSizeComponent } from './card-with-media-size/card-with-media-size.component';

@Component({
  selector: 'app-dzmt-card',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CardBasicComponent,
    CardMultipleSectionsComponent,
    CardAlignmentOptionComponent,
    CardWithFooterComponent,
    CardWithMediaSizeComponent
  ],
  templateUrl: './dzmt-card.component.html',
  styleUrl: './dzmt-card.component.css'
})
export class DzmtCardComponent {
  breadcrumbList = {
    menu_path: 'Material',    
    currentURL: 'Card',
  }
}
