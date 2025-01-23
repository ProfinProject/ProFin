import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lock-screen',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './lock-screen.component.html',
  styleUrl: './lock-screen.component.css'
})
export class LockScreenComponent {
  hide_show: boolean = false;
  passwordHide(){
    this.hide_show = !this.hide_show;
  }
  url = '/admin/index'
}
