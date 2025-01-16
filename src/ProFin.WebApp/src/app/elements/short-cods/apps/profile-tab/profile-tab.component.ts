import { Component, TemplateRef } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Component } from '../../../../plugins/select2/select2.component';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface type {
  img: string,
  title: string,
  route: string,
  desc: string
}
@Component({
  selector: 'app-profile-tab',
  standalone: true,
  imports: [NgbModule, Select2Component, NgClass, RouterLink, NgClass],
  templateUrl: './profile-tab.component.html',
  styleUrl: './profile-tab.component.css'
})
export class ProfileTabComponent {
  active = 1;
  hide: boolean = false;

  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  show_pass() {
    this.hide = !this.hide;
  }

  select2Data = [
    {
      name: 'Choose...',
    },
    {
      name: 'Option 1',
    },
    {
      name: 'Option 2',
    },
    {
      name: 'Option 3',
    },
  ];

  uploadPost: type[] = [
    {
      img: 'assets/images/profile/8.jpg',
      title: 'Taste Is Main Priority Here',
      route: '/admin/post-details',
      desc: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
    },
    {
      img: 'assets/images/profile/9.jpg',
      title: 'Double Cheese Dacker Special Pizza ',
      route: '/admin/post-details',
      desc: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
    },
    {
      img: 'assets/images/profile/8.jpg',
      title: 'Are You Looking For,the best Pizza Place?',
      route: '/admin/post-details',
      desc: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
    }
  ]
}
