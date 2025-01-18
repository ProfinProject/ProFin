import { Component, TemplateRef, VERSION } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { LightgalleryModule } from 'lightgallery/angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-profile-sid-menu',
  standalone: true,
  imports: [LightgalleryModule, RouterLink],
  templateUrl: './profile-sid-menu.component.html',
  styleUrl: './profile-sid-menu.component.css'
})
export class ProfileSidMenuComponent {
  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
  modal_data: any = [];
  openModalBox(item: any) {
    this.modal_data = [{
      title: 'pass'
    }]
  }
  our_latest_item = [
    {
      img: 'assets/images/profile/5.jpg',
      title: `Empower Your Team to With Us`,
      href: '/admin/post-details',
      decs: 'I shared this on my fb wall a few months back, and I thought.'
    },
    {
      img: 'assets/images/profile/6.jpg',
      title: 'Simplify Ticket Management',
      href: '/admin/post-details',
      decs: 'I shared this on my fb wall a few months back, and I thought.'
    },
    {
      img: 'assets/images/profile/7.jpg',
      title: 'Drive Productivity and Accountability',
      href: '/admin/post-details',
      decs: 'I shared this on my fb wall a few months back, and I thought.'
    }
  ]

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };
}
