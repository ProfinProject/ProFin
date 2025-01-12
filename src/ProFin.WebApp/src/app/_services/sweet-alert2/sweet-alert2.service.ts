import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlert2Service {

  constructor() { }

  alertMsg(itme: any) {
    Swal.fire(itme);
  }
  wrongAlert(title: any, text: any, footer: any) {
    Swal.fire({
      icon: "error",
      title: title,
      text: text,
      footer: footer
    });
  }
  textAlert(title: any, text: any) {
    Swal.fire({
      title: title,
      text: text,
    });
  }
  successAlert(itme: any, text: any) {
    Swal.fire({
      title: itme,
      text: text,
      icon: "success"
    });
  }
  confirmAlert(itme: any, text: any) {
    Swal.fire({
      title: itme,
      text: text,
      showCancelButton: true,
      confirmButtonColor: "#ff5c00",
      cancelButtonColor: "#6e7881",
      confirmButtonText: "Yes, delete it!"
    })
  }
  imageAlert(itme: any, text: any, img: any) {
    Swal.fire({
      title: itme,
      text: text,
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }
  autoAlert(itme: any, html: any) {
    Swal.fire({
      title: "Auto close alert!",
      html: html,
      timer: 2000,
      timerProgressBar: true,
    })
  }
  promptAlert(itme: any, text: any) {
    Swal.fire({
      title: itme,
      text: text,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#6e7881",
      confirmButtonText: "ok"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  ajexAlert(itme: any, text: any) {
    Swal.fire({
      title: itme,
      text: text,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#6e7881",
      confirmButtonText: "ok"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}

