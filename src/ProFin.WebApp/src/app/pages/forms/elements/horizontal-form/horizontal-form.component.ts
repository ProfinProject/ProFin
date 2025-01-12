import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Select2Component } from '../../../../plugins/select2/select2.component';

@Component({
  selector: 'app-horizontal-form',
  standalone: true,
  imports: [NgClass, Select2Component],
  templateUrl: './horizontal-form.component.html',
  styleUrl: './horizontal-form.component.css'
})
export class HorizontalFormComponent {
  hide:boolean = false;
  show_pass(){
    this.hide = !this.hide;
  }

  select2Data = [
    {
      name: 'Choose...',
    },
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
