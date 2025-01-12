import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { EmailLeftBodyComponent } from '../../../../elements/short-cods/apps/email-left-body/email-left-body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [
    NgbModule,
    BreadcrumbComponent, 
    EmailLeftBodyComponent
  ],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {
  isVisited:boolean = false;
  email: string = 'info@example.com';
  
  breadcrumbList = {
    subTitle: 'Email',
    menu_path: 'Email',
    currentURL: 'Read',
  }

  inboxSidebar() {
    this.isVisited = !this.isVisited;
  }
}
