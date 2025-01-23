import { Component } from '@angular/core';

@Component({
  selector: 'app-table-heading-with-background',
  standalone: true,
  imports: [],
  templateUrl: './table-heading-with-background.component.html',
  styleUrl: './table-heading-with-background.component.css'
})
export class TableHeadingWithBackgroundComponent {
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
    }
  ]
}
