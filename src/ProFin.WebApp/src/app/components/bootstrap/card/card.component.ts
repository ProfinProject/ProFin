import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { NgClass } from '@angular/common';

interface type {
  title: string;
  decs: string;
  time: string;
  class: string;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass,
    BreadcrumbComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  breadcrumbList = {
    subTitle: 'Card',
    menu_path: 'Bootstrap',
    currentURL: 'Card',
  }

  solidCard: type[] = [
    {
      title: 'Primary card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'primary'
    },
    {
      title: 'Secondary card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'secondary'
    },
    {
      title: 'Success card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'success'
    },
    {
      title: 'Danger card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'danger'
    },
    {
      title: 'Warning card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'warning'
    },
    {
      title: 'Info card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'info'
    },
    {
      title: 'Light card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'light'
    },
    {
      title: 'Dark card Title',
      decs: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      time: 'Last updateed 3 min ago',
      class: 'dark'
    }
  ]
}
