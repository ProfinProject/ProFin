import { CommonModule, NgClass, TitleCasePipe } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WgNotificationsComponent } from '../widget/list/wg-notifications/wg-notifications.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
    WgNotificationsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() dashboardTitle: any;

  fullScreenClass: boolean = false;
  toggleMode: any;
  elementValue: any;
  localData: any = '';
  currentTitle: string = '';
  scheduleEvent: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.theme == 'dark' || params.theme == 'light') {
        localStorage.setItem("data-theme-version", params.theme);
      }
    });
  }

  ngAfterContentChecked() {
    if (this.router.url == '/admin') {
      this.currentTitle = 'DashBoard';
    } else {
      this.currentTitle = this.dashboardTitle ? this.dashboardTitle : 'DashBoard';
    }
  }

  ngDoCheck() {
    this.themeMode2();
    if (
      this.router.url == '/admin' ||
      this.router.url.includes('/admin/index')
    ) {
      this.scheduleEvent = true;
      if ((window.innerWidth) > 1400) {
        document.getElementById("eventSidebar")?.classList.add("active");
      }
    } else {
      this.scheduleEvent = false;
    }
  }

  themeMode2() {    // Theme mode dark - light
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData != null) {
      document.body.setAttribute('data-theme-version', this.localData);
    }
  }

  themeMode() {     // Theme mode dark - light
    this.elementValue = document.body.getAttribute('data-theme-version');
    this.localData = localStorage.getItem('data-theme-version');

    if (this.elementValue == 'light' && this.localData == 'light') {
      this.toggleMode = 'dark';
    } else {
      this.toggleMode = 'light';
    }
    localStorage.setItem("data-theme-version", this.toggleMode);
    this.localData = localStorage.getItem('data-theme-version');
    document.body.setAttribute('data-theme-version', this.localData);
  }

  chatboxActive() { // Chatbox manage
    document.getElementById("chatBox")?.setAttribute("class", "chatbox active");
  }

  urlActive(url: any) {
    if (url == '/admin') {
      this.currentTitle = 'Dashboard';
    } else {
      this.currentTitle = url.split('/admin/')[1].split('?')[0].replace('-', ' ');
    }
  }

  eventSidebarActive() { // Event Sidebar manage
    if (document.getElementById("eventSidebar")?.getAttribute('class') == 'event-sidebar dz-scroll') {
      document.getElementById("eventSidebar")?.classList.add("active");
    } else {
      document.getElementById("eventSidebar")?.classList.remove("active");
    }
  }

  // Only Event Sidebar manage Setting -----
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (
      this.router.url == '/admin' ||
      this.router.url.includes('/admin/index')
    ) {
      if (event.target.innerWidth > 1400) {
        document.getElementById("eventSidebar")?.classList.add("active");
      } else {
        document.getElementById("eventSidebar")?.classList.remove("active");
      }
    }
  }
}
