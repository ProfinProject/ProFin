import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [NgbModule ,BreadcrumbComponent],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.css'
})
export class ListGroupComponent {
  breadcrumbList = {
    subTitle: 'List Group',
    menu_path: 'Bootstrap',
    currentURL: 'List Group',
  }
  active = 'home';
}
