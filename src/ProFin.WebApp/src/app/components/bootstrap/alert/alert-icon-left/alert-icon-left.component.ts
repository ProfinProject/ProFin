
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
interface Alert {
  type: string;
  typeMsg: string;
  icon: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    typeMsg: 'Success!',
    icon: `mdi mdi-account-search`,
    message: 'This is an success alert',
  }, {
    type: 'info',
    typeMsg: 'info!',
    icon: `mdi mdi-email`,
    message: 'This is an info alert',
  }, {
    type: 'warning',
    typeMsg: 'Warning!',
    icon: `mdi mdi-alert	`,
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    typeMsg: 'Danger!',
    icon: `mdi mdi-help`,
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    typeMsg: 'Primary!',
    icon: `mdi mdi-check`,
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    typeMsg: 'Secondary!',
    icon: `icon icon-bell-53`,
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    typeMsg: 'Light!',
    icon: `mdi mdi-cogs`,
    message: 'This is a light alert',
  }, {
    type: 'dark',
    typeMsg: 'Dark!',
    icon: `mdi mdi-settings	`,
    message: 'Message Sending failed.',
  }
];

@Component({
  selector: 'app-alert-icon-left',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './alert-icon-left.component.html',
  styleUrl: './alert-icon-left.component.css'
})
export class AlertIconLeftComponent {

  alerts: Alert[] = [];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
