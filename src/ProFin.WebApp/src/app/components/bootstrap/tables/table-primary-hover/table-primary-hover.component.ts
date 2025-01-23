import { Component } from '@angular/core';

@Component({
  selector: 'app-table-primary-hover',
  standalone: true,
  imports: [],
  templateUrl: './table-primary-hover.component.html',
  styleUrl: './table-primary-hover.component.css'
})
export class TablePrimaryHoverComponent {
  items = [
    {
      first:'Mark',
      last: 'Otto',
      handle: '@mdo'
    },
    {
      first:'Jacob',
      last: 'Thornton',
      handle: '@fat'
    },
    {
      first:'Larry',
      last: 'the Bird',
      handle: '@twitter'
    },
    {
      first:'Larry',
      last: 'Thornton',
      handle: '@fat'
    },
    {
      first:'Larry',
      last: 'the Bird',
      handle: '@twitter'
    },
    {
      first:'Larry',
      last: 'the Bird',
      handle: '@twitter'
    }
  ]
}
