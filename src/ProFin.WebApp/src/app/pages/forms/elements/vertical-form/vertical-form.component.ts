import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-form',
  standalone: true,
  imports: [NgClass],
  templateUrl: './vertical-form.component.html',
  styleUrl: './vertical-form.component.css'
})
export class VerticalFormComponent {
  hide:boolean = false;
  show_pass(){
    this.hide = !this.hide;
  }
}
