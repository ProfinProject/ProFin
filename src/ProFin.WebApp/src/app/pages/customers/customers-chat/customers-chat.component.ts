import { Component, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';

interface groupType {
  img: string,
  name: string,
  decs: string,
  time: string
}
@Component({
  selector: 'app-customers-chat',
  standalone: true,
  imports: [
    NgbModule,
    NgClass,
    BreadcrumbComponent
  ],
  templateUrl: './customers-chat.component.html',
  styleUrl: './customers-chat.component.css'
})
export class CustomersChatComponent {
  breadcrumbList = {
    menu_path: 'Customer',
    currentURL: 'Chats',
  }
  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: false });
  }

  groupsList: groupType[] = [
    {
      img: 'assets/images/avatar/4.jpg',
      name: 'Product Team',
      decs: 'Lorem ipsum dolor sit amet.',
      time: '12:45 PM'
    },
    {
      img: 'assets/images/avatar/3.jpg',
      name: 'Tony Soap',
      decs: 'Lorem ipsum dolor sit amet is the dummy text.',
      time: '12:41 PM'
    },
    {
      img: 'assets/images/avatar/2.jpg',
      name: 'Karen Hope',
      decs: 'Lorem ipsum dolor sit amet is the dummy text.',
      time: '12:50 PM'
    }
  ]

  chatList: groupType[] = [
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Design Team (32)',
      decs: 'Lorem ipsum dolor sit amet.',
      time: '12:45 PM'
    },
    {
      img: 'assets/images/avatar/8.jpg',
      name: 'Tony Soap',
      decs: 'Lorem ipsum dolor sit amet is the dummy text.',
      time: '12:41 PM'
    },
    {
      img: 'assets/images/avatar/7.jpg',
      name: 'Karen Hope',
      decs: 'Lorem ipsum dolor sit amet is the dummy text.',
      time: '12:50 PM'
    }
  ]
  lodingData: boolean = false;
  showMore() {
    this.lodingData = true;
    setTimeout(() => {
      this.lodingData = false;
    }, 2000)
  }


  userChat = [
    {
      mssgSend: true,
      img: 'assets/images/avatar/5.jpg',
      user_name: 'Jordan',
      time: '12:45 PM',
      mssgs: [
        'Hello Nella!',
        'Can you arrange schedule for next meeting?'
      ]
    },
    {
      mssgSend: false,
      img: 'assets/images/avatar/1.jpg',
      user_name: 'Natasha',
      time: '9.30 AM',
      mssgs: [
        'Hello Karen!',
        'Okay, I’ll arrange it soon. i noftify you when it’s done'
      ]
    },
    {
      mssgSend: false,
      img: 'assets/images/avatar/3.jpg',
      user_name: 'Natasha',
      time: '9.32 AM',
      mssgs: [
        'Okay, I’ll arrange it soon. i noftify you when it’s done',
        '+91-235 2574 2566',
        ' kk Sharma',
        'pan card eeer2063i',
      ]
    },
    {
      mssgSend: true,
      img: 'assets/images/avatar/3.jpg',
      user_name: 'Jordan',
      time: '12:45 PM',
      mssgs: [
        ' Hello Nella!',
        'Can you arrange schedule for next meeting?',
        'assets/images/avatar/4.jpg'
      ]
    }
  ]
}
