import { Component } from '@angular/core';
interface type {
  name: string;
  date: string;
  btn_class?: string;
}
@Component({
  selector: 'app-wg-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './wg-todo-list.component.html',
  styleUrl: './wg-todo-list.component.css'
})
export class WgTodoListComponent {
  items: type[] = [
    {
      name: 'Get up',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'success'
    },
    {
      name: 'Stand up',
      date: '01 July 2024 - 02:26 PM',
      btn_class: 'warning'
    },
    {
      name: `Don't give up the fight.`,
      date: '20 July 2024 - 03:16 PM',
      btn_class: 'primary'
    },
    {
      name: 'Do something else',
      date: '20 January 2024 - 02:23 PM',
      btn_class: 'info'
    },
    {
      name: 'Get up',
      date: '01 July 2024 - 03:46 PM',
      btn_class: 'success'
    },
    {
      name: 'Stand up',
      date: '01 July 2024 - 01:26 PM',
      btn_class: 'warning'
    }
  ]
}
