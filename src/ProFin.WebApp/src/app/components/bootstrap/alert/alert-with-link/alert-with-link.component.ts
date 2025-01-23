import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
interface Alert {
  type: string;
  typeMsg: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    typeMsg: 'WOW! Eveything looks OK.',
    message: 'Please check this one as well',
  }, {
    type: 'info',
    typeMsg: 'Hey! Take a quick look.',
    message: 'My birthday party',
  }, {
    type: 'warning',
    typeMsg: 'Warning! Why you did it to me!',
    message: ' Check this out',
  }, {
    type: 'danger',
    typeMsg: 'Error! ',
    message: 'Something Went wrong Click here for details.',
  }, {
    type: 'primary',
    typeMsg: 'WOW! Eveything looks OK.',
    message: 'Please check this one as well',
  }, {
    type: 'secondary',
    typeMsg: 'Error!',
    message: ' Something Went wrong Click here for details.',
  }, {
    type: 'light',
    typeMsg: 'Error! ',
    message: 'Something Went wrong Click here for details.',
  }, {
    type: 'dark',
    typeMsg: 'Dark!',
    message: 'Message Sending failed.',
  }
];
@Component({
  selector: 'app-alert-with-link',
  standalone: true,
  imports: [NgbModule, RouterLink],
  templateUrl: './alert-with-link.component.html',
  styleUrl: './alert-with-link.component.css'
})
export class AlertWithLinkComponent {

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
