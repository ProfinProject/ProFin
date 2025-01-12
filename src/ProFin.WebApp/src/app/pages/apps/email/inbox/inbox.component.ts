import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { EmailLeftBodyComponent } from '../../../../elements/short-cods/apps/email-left-body/email-left-body.component';
import { NgClass } from '@angular/common';

export interface type {
  message: string;
  time: string;
}

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [ NgClass, BreadcrumbComponent, EmailLeftBodyComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {
  breadcrumbList = {
    subTitle: 'Email',
    menu_path: 'Email',
    currentURL: 'Inbox',
  }

  isVisited:boolean = false;
  activeStarArray: any = [];
  contantHead = {
    title: 'Inbox',
    title_path: 'Email'
  }
  public inboxMSG: type[] = [
    {
      message: 'Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture',
      time: '11:49 am'
    },
    {
      message: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of',
      time: '11:49 am'
    },
    {
      message: 'Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture',
      time: '11:49 am'
    },
    {
      message: 'Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of',
      time: '11:49 am'
    },
    {
      message: 'Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      time: '11:49 am'
    },
    {
      message: 'Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of',
      time: '11:49 am'
    },
    {
      message: 'Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture',
      time: '11:49 am'
    },
    {
      message: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of',
      time: '11:49 am'
    },
    {
      message: 'Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of',
      time: '11:49 am'
    },
    {
      message: 'Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      time: '11:49 am'
    },
    {
      message: 'Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture',
      time: '11:49 am'
    },
    {
      message: 'Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture',
      time: '11:49 am'
    },
    {
      message: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of',
      time: '11:49 am'
    },
    {
      message: 'Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of',
      time: '11:49 am'
    },
    {
      message: 'Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      time: '11:49 am'
    },
    {
      message: 'Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture',
      time: '11:49 am'
    },
  ]

  starActive(item: any) {
    let index = this.activeStarArray.indexOf(item);
    if (index == -1) {
      this.activeStarArray.push(item);
    } else {
      this.activeStarArray.splice(index, 1);
    }
  }
  checkUncheckAll(event: any) {
    var checkboxes = document.getElementsByTagName('input');
    if (event.target.checked) {
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          checkboxes[i].checked = true;
        }
      }
    } else {
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          checkboxes[i].checked = false;
        }
      }
    }
  }
  resetButton() {
    this.activeStarArray.length = 0;
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox') {
        checkboxes[i].checked = false;
      }
    }
  }

  inboxSidebar() {
    this.isVisited = !this.isVisited;
  }

}
