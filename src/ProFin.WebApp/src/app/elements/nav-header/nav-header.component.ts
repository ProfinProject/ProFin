import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  toggleVal: any = false;
  elementValue: any;
  sidebarStyle: string = '';
  localData: any = '';

  @Output() sidebarToggle = new EventEmitter<{ toggleVal: boolean }>(); // event emitter
  @Output() emailOpne = new EventEmitter<{ emailval: boolean }>(); // event emitter
  ngOnInit() {
    this.localData = localStorage.getItem('data-sidebar-style');
    // if (this.localData != null) {
    //   document.body.setAttribute('data-sidebar-style', this.localData);
    // }
  }

  toggleSidebar() {   // Sidebar show hide
    if (this.toggleVal) {
      this.toggleVal = false;
    } else {
      this.toggleVal = true;
    }
    this.sidebarToggle.emit({ toggleVal: this.toggleVal });
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.localData = localStorage.getItem('data-sidebar-style');
    this.elementValue = document.body.getAttribute('data-sidebar-style');
    if (event.target.innerWidth < 1200 && event.target.innerWidth > 766) {
      this.toggleVal = true;
      this.sidebarStyle = 'mini';
    } else if (event.target.innerWidth <= 766) {
      this.toggleVal = false;
      this.sidebarStyle = 'overlay';
    } else {
      this.toggleVal = false;
      this.sidebarStyle = this.localData ? this.localData : 'full';
    }
    this.sidebarToggle.emit({ toggleVal: this.toggleVal });
    document.body.setAttribute('data-sidebar-style', this.sidebarStyle);
  }
}
