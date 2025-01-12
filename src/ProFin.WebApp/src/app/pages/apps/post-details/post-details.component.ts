import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileSidMenuComponent } from '../../../elements/short-cods/apps/profile-sid-menu/profile-sid-menu.component';
import { ProfileCardComponent } from '../../../elements/short-cods/apps/profile-card/profile-card.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    ProfileCardComponent,
    BreadcrumbComponent,
    ProfileSidMenuComponent
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  breadcrumbList = {
    subTitle: 'Post Details',
    menu_path: 'App',
    currentURL: 'Post Details',
  }
  profileDetailArray = {
    name: 'Mitchell C. Shay',
    email: 'hello@email.com'
  }
}
