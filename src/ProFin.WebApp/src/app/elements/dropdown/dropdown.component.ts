import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() dropdown: any | undefined;
  getValue: any = '';
  selectValue: string = '';
  formControl: boolean = false;
  ngOnInit() {
    this.getValue = this.dropdown.value;
    this.formControl = this.dropdown.formControl;
    this.selectValue = this.dropdown.select;
  }
  getValueDrop(get: any) {
    this.selectValue = get.item;
  }
}
