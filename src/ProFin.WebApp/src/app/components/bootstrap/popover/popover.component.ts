import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [NgbModule, BreadcrumbComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css'
})
export class PopoverComponent {
  breadcrumbList = {
    subTitle: 'Popover',
    menu_path: 'Bootstrap',
    currentURL: 'Popover',
  }
}
