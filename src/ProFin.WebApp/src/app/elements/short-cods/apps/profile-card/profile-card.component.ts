import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  @Input() profileDetail: any = '';
  name: string = '';
  email: string = '';
  ngOnInit() {
    this.name = this.profileDetail.name;
    this.email = this.profileDetail.email;
  }
  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  blockProfileAlert(itme: any) {
    const text = "Are you sure you want to block profile";
    Swal.fire({
      title: itme,
      text: text,
      showCancelButton: true,
      confirmButtonColor: "#ff5c00",
      cancelButtonColor: "#6e7881",
      confirmButtonText: "Block"
    })
  }

  modalGroup = [
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Archie Parker',
      status: 'Kalid is online'
    },
    {
      img: 'assets/images/avatar/2.jpg',
      name: 'Alfie Mason',
      status: 'Kalid is online'
    },
    {
      img: 'assets/images/avatar/3.jpg',
      name: 'Bashid Samim',
      status: 'Kalid is online'
    },
    {
      img: 'assets/images/avatar/4.jpg',
      name: 'Jack Ronan',
      status: 'Kalid is online'
    },
    {
      img: 'assets/images/avatar/5.jpg',
      name: 'Oliver Acker',
      status: 'Kalid is online'
    }
  ]
}
