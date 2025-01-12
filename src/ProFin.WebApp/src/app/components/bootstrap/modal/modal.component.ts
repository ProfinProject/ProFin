import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { ModalCenteredComponent } from './modal-centered/modal-centered.component';
import { ModalGridComponent } from './modal-grid/modal-grid.component';
import { ModalLargeComponent } from './modal-large/modal-large.component';
import { ModalLongCententComponent } from './modal-long-centent/modal-long-centent.component';
import { ModalSmallComponent } from './modal-small/modal-small.component';
import { ModalWithTooltipComponent } from './modal-with-tooltip/modal-with-tooltip.component';
import { ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ModalBasicComponent,
    ModalCenteredComponent,
    ModalGridComponent,
    ModalLargeComponent,
    ModalLongCententComponent,
    ModalSmallComponent,
    ModalWithTooltipComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  breadcrumbList = {
    subTitle: 'Modal',
    menu_path: 'Bootstrap',
    currentURL: 'Modal',
  }
}
