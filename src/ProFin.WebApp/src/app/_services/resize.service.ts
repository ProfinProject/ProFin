import { Injectable } from '@angular/core';
declare var $: any; // Declare jQuery to use within the component
@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  constructor() { }

  handleMinHeight() {
    const win_h = window.outerHeight;
    if (win_h > 0 ? win_h : screen.height) {
      $(".content-body").css("min-height", (window.innerHeight - 60) + "px");
      if (($('body').attr('data-sidebar-style') === "mini") && ($('.deznav .metismenu').height() > (window.innerHeight - 60))) {
        $(".content-body").css("min-height", ($('.deznav .metismenu').height() + 60) + "px");
      }
    }
  }
}
