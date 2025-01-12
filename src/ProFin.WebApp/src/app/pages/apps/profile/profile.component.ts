import { Component } from '@angular/core';
import { ProfileTabComponent } from '../../../elements/short-cods/apps/profile-tab/profile-tab.component';
import { ProfileSidMenuComponent } from '../../../elements/short-cods/apps/profile-sid-menu/profile-sid-menu.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileCardComponent } from '../../../elements/short-cods/apps/profile-card/profile-card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileTabComponent, 
    ProfileSidMenuComponent, 
    BreadcrumbComponent, 
    ProfileCardComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  breadcrumbList = {
    menu_path: 'App',
    currentURL: 'Profile',
  }
  profileDetailArray = {
    name:'Mitchell C. Shay',
    email: 'info@example.com'
  }
  
}
