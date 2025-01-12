import { Component } from '@angular/core';
import { Select2Component } from '../../../../plugins/select2/select2.component';

@Component({
  selector: 'app-select-size',
  standalone: true,
  imports: [ Select2Component ],
  templateUrl: './select-size.component.html',
  styleUrl: './select-size.component.css'
})
export class SelectSizeComponent {
  selectData1 = [
    {
      name: 'Option 1',
    },
    {
      name: 'Option 2',
    },
    {
      name: 'Option 3',
    }
  ];
}
