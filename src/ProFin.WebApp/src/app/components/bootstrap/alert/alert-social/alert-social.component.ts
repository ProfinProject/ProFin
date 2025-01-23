import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
interface Alert {
  type: string;
  typeMsg: string;
  iconUrl:string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'facebook',
    typeMsg: 'Facebook',
    iconUrl: 'mdi mdi-facebook',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'twitter',
    typeMsg: 'Twitter',
    iconUrl: 'mdi mdi-twitter',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'linkedin',
    typeMsg: 'Linkedin',
    iconUrl: 'mdi mdi-linkedin',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'google-plus',
    typeMsg: 'Google Plus',
    iconUrl: 'mdi mdi-google-plus',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }
];
@Component({
  selector: 'app-alert-social',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './alert-social.component.html',
  styleUrl: './alert-social.component.css'
})
export class AlertSocialComponent {

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
