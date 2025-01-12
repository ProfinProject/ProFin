import { Component } from '@angular/core';
import { Select2Component } from '../../../../plugins/select2/select2.component';

@Component({
  selector: 'app-select-list',
  standalone: true,
  imports: [Select2Component],
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.css'
})
export class SelectListComponent {
  selectData1 = [
    {
      name: '1',
    },
    {
      name: '2',
    },
    {
      name: '3',
    },
    {
      name: '4',
    }
  ];
}
