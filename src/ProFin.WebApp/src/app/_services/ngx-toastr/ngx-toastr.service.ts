import { Component, Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NgxToastrService {

  constructor(private toastr: ToastrService) { }

  success(msg: any, position: any) {
    this.toastr.success('This Is success Message!', msg, { positionClass: position });
  }
  error(msg: any, position: any) {
    this.toastr.error('This Is error Message !', msg, { positionClass: position });
  }
  warning(msg: any, position: any) {
    this.toastr.warning('This Is warning Message!', msg, { positionClass: position });
  }
  info(msg: any, position: any) {
    this.toastr.info('This Is Info Message !', msg, { positionClass: position });
  }
}
