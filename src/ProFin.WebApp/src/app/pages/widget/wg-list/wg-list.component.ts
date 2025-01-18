import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { WgTimeline1Component } from '../../../elements/widget/list/wg-timeline-1/wg-timeline-1.component';
import { WgNotificationsComponent } from '../../../elements/widget/list/wg-notifications/wg-notifications.component';
import { WgNotifications2Component } from '../../../elements/widget/list/wg-notifications-2/wg-notifications-2.component';
import { WgMessage1Component } from '../../../elements/widget/list/wg-message-1/wg-message-1.component';
import { WgTodoListComponent } from '../../../elements/widget/list/wg-todo-list/wg-todo-list.component';
import { WgRecentPayComponent } from '../../../elements/widget/list/wg-recent-pay/wg-recent-pay.component';

@Component({
  selector: 'app-wg-list',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    WgTimeline1Component,
    WgNotificationsComponent,
    WgNotifications2Component,
    WgMessage1Component,
    WgTodoListComponent,
    WgRecentPayComponent
  ],
  templateUrl: './wg-list.component.html',
  styleUrl: './wg-list.component.css'
})
export class WgListComponent {
  breadcrumbList = {
    subTitle: 'Statistics',
    menu_path: 'Widget',
    currentURL: 'Statistics',
  }

  items = [ 
    {
      key: 'Blood type ',
      value: 'O+'
    },
    {
      key: 'Allergies',
      value: 'Penicilin, peanuts'
    },
    {
      key: 'Pressure',
      value: '120/100 mmHG'
    },
    {
      key: 'Diseases',
      value: 'Diabetes'
    },
    {
      key: 'Temperture',
      value: '34 Degree'
    }
  ]
  items1 = [ 
    {
      key: 'Dr Theodore Handle',
      value: 'Dentist'
    },
    {
      key: 'Dr Valentino Morose',
      value: 'Surgeon'
    },
    {
      key: 'Dr Fleece Marigold',
      value: 'Clinical'
    },
    {
      key: 'Dr Eric Widget',
      value: 'Cardiology'
    }
  ]
  items2 = [ 
    {
      key: 'Stations',
      value: 'Capacity'
    },
    {
      key: 'Registartion',
      value: '1'
    },
    {
      key: 'Lab',
      value: '4'
    },
    {
      key: 'Xray',
      value: '1'
    },
    {
      key: 'Mri',
      value: '2'
    }
  ]
}
