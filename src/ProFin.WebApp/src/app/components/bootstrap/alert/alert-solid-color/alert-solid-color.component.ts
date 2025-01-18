import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  typeMsg: string;
  icon: any;
  message: string;
}

@Component({
  selector: 'app-alert-solid-color',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './alert-solid-color.component.html',
  styleUrl: './alert-solid-color.component.css'
})
export class AlertSolidColorComponent {

  alerts: Alert[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.reset();
   }

  reset() {
    this.alerts = Array.from(this.ALERTS);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  ALERTS: Alert[] = [
    {
      type: 'success',
      typeMsg: 'Success!',
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>'),
      message: 'This is an success alert',
    }, {
      type: 'info',
      typeMsg: 'info!',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`),
      message: 'This is an info alert',
    }, {
      type: 'warning',
      typeMsg: 'Warning!',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>	`),
      message: 'This is a warning alert',
    }, {
      type: 'danger',
      typeMsg: 'Danger!',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`),
      message: 'This is a danger alert',
    }, {
      type: 'primary',
      typeMsg: 'Primary!',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`),
      message: 'This is a primary alert',
    }, {
      type: 'secondary',
      typeMsg: 'Secondary!',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`),
      message: 'This is a secondary alert',
    }, {
      type: 'light',
      typeMsg: 'Light!',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`),
      message: 'This is a light alert',
    }, {
      type: 'dark',
      typeMsg: 'Dark!',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`),
      message: 'Message Sending failed.',
    }
  ];

}
