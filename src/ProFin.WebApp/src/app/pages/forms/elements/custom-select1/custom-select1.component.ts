import { Component } from '@angular/core';
import { Select2Component } from '../../../../plugins/select2/select2.component';

@Component({
  selector: 'app-custom-select1',
  standalone: true,
  imports: [ Select2Component ],
  templateUrl: './custom-select1.component.html',
  styleUrl: './custom-select1.component.css'
})
export class CustomSelect1Component {
  selectData1 = [
    {
      name: 'Choose...',
    },
    {
      name: 'One',
    },
    {
      name: 'two',
    }
  ];
}
