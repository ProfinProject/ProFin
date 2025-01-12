import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Select2Module, Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-select2',
  standalone: true,
  imports: [Select2Module, TitleCasePipe],
  templateUrl: './select2.component.html',
  styleUrl: './select2.component.css'
})
export class Select2Component {
  @Input() items: any = '';
  valueSet: any = 'Select Status';
  ngOnInit() {
    this.valueSet = this.items[0].name;
    this.items.map((item: any, ind: any) => {
      this.data.push(
        {
          value: item.name,
          label: item.name,
          data: { name: item.name }
        }
      )
    });
  }

  data: Select2Data = []
}
