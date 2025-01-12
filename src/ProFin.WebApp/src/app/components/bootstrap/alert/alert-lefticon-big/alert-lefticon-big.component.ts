import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
interface Alert {
  type: string;
  typeMsg: string;
  iconUrl:string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'primary',
    typeMsg: 'Welcome to your account, Dear user!',
    iconUrl: 'mdi mdi-email-alert',
    message: 'Please confirm your email address: email@example.com',
  }, {
    type: 'warning',
    typeMsg: 'Pending!',
    iconUrl: 'mdi mdi-help-circle-outline',
    message: 'You message sending failed.',
  }, {
    type: 'success',
    typeMsg: 'Congratulations!',
    iconUrl: 'mdi mdi-check-circle-outline',
    message: 'You have successfully created a account.',
  }, {
    type: 'danger',
    typeMsg: 'Loading failed!',
    iconUrl: 'mdi mdi-alert',
    message: 'Again upload your server',
  }
];
@Component({
  selector: 'app-alert-lefticon-big',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './alert-lefticon-big.component.html',
  styleUrl: './alert-lefticon-big.component.css'
})
export class AlertLefticonBigComponent {

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

  ngOnInit(): void {
  }
}
