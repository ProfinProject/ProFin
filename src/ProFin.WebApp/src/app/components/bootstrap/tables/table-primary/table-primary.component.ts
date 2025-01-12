import { Component } from '@angular/core';

@Component({
  selector: 'app-table-primary',
  standalone: true,
  imports: [],
  templateUrl: './table-primary.component.html',
  styleUrl: './table-primary.component.css'
})
export class TablePrimaryComponent {
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
