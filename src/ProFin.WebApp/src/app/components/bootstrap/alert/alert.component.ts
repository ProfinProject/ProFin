import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AlertBasicComponent } from './alert-basic/alert-basic.component';
import { AlertSolidColorComponent } from './alert-solid-color/alert-solid-color.component';
import { AlertSquareComponent } from './alert-square/alert-square.component';
import { AlertRoundedComponent } from './alert-rounded/alert-rounded.component';
import { AlertDismissableComponent } from './alert-dismissable/alert-dismissable.component';
import { AlertAltComponent } from './alert-alt/alert-alt.component';
import { AlertAltSolidComponent } from './alert-alt-solid/alert-alt-solid.component';
import { AlertWithSolidComponent } from './alert-with-solid/alert-with-solid.component';
import { AlertWithLinkComponent } from './alert-with-link/alert-with-link.component';
import { AlertWithlinkSolidcolorComponent } from './alert-withlink-solidcolor/alert-withlink-solidcolor.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AlertIconLeftComponent } from './alert-icon-left/alert-icon-left.component';
import { OutlineComponent } from './outline/outline.component';
import { AlertSocialComponent } from './alert-social/alert-social.component';
import { MessageComponent } from './message/message.component';
import { MessageWithsolidComponent } from './message-withsolid/message-withsolid.component';
import { AlertLefticonBigComponent } from './alert-lefticon-big/alert-lefticon-big.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [ 
    BreadcrumbComponent,
    AlertBasicComponent,
    AlertSolidColorComponent,
    AlertSquareComponent,
    AlertRoundedComponent,
    AlertDismissableComponent,
    AlertAltComponent,
    AlertAltSolidComponent,
    AlertWithSolidComponent,
    AlertWithLinkComponent,
    AlertWithlinkSolidcolorComponent,
    NotificationsComponent,
    AlertIconLeftComponent,
    OutlineComponent,
    AlertSocialComponent,
    MessageComponent,
    MessageWithsolidComponent,
    AlertLefticonBigComponent
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  breadcrumbList = {
    subTitle: 'Your business dashboard template',
    menu_path: 'Bootstrap',
    currentURL: 'Alert',
  }
}
