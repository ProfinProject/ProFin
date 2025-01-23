
import { Component, NgModule, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

interface type {
  icon: string;
}

@Component({
  selector: 'app-flat-icons',
  standalone: true,
  imports: [ NgbModule, BreadcrumbComponent ],
  templateUrl: './flat-icons.component.html',
  styleUrl: './flat-icons.component.css'
})
export class FlatIconsComponent {
  breadcrumbList = {
    menu_path: 'Icons',
    currentURL: 'Flaticon Icons',
  }

  private modalService = inject(NgbModal);

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  public iconData: type[] = [
    { icon: 'flaticon-381-add' },
    { icon: 'flaticon-381-add-1' },
    { icon: 'flaticon-381-add-2' },
    { icon: 'flaticon-381-add-3' },
    { icon: 'flaticon-381-alarm-clock' },
    { icon: 'flaticon-381-alarm-clock-1' },
    { icon: 'flaticon-381-album' },
    { icon: 'flaticon-381-album-1' },
    { icon: 'flaticon-381-album-2' },
    { icon: 'flaticon-381-album-3' },
    { icon: 'flaticon-381-app' },
    { icon: 'flaticon-381-archive' },
    { icon: 'flaticon-381-back' },
    { icon: 'flaticon-381-back-1' },
    { icon: 'flaticon-381-back-2' },
    { icon: 'flaticon-381-background' },
    { icon: 'flaticon-381-background-1' },
    { icon: 'flaticon-381-battery' },
    { icon: 'flaticon-381-battery-1' },
    { icon: 'flaticon-381-battery-2' },
    { icon: 'flaticon-381-battery-3' },
    { icon: 'flaticon-381-battery-4' },
    { icon: 'flaticon-381-battery-5' },
    { icon: 'flaticon-381-battery-6' },
    { icon: 'flaticon-381-battery-7' },
    { icon: 'flaticon-381-battery-8' },
    { icon: 'flaticon-381-battery-9' },
    { icon: 'flaticon-381-binoculars' },
    { icon: 'flaticon-381-blueprint' },
    { icon: 'flaticon-381-bluetooth' },
    { icon: 'flaticon-381-bluetooth-1' },
    { icon: 'flaticon-381-book' },
    { icon: 'flaticon-381-bookmark' },
    { icon: 'flaticon-381-bookmark-1' },
    { icon: 'flaticon-381-box' },
    { icon: 'flaticon-381-box-1' },
    { icon: 'flaticon-381-box-2' },
    { icon: 'flaticon-381-briefcase' },
    { icon: 'flaticon-381-broken-heart' },
    { icon: 'flaticon-381-broken-link' },
    { icon: 'flaticon-381-calculator' },
    { icon: 'flaticon-381-calculator-1' },
    { icon: 'flaticon-381-calendar' },
    { icon: 'flaticon-381-calendar-1' },
    { icon: 'flaticon-381-calendar-2' },
    { icon: 'flaticon-381-calendar-3' },
    { icon: 'flaticon-381-calendar-4' },
    { icon: 'flaticon-381-calendar-5' },
    { icon: 'flaticon-381-calendar-6' },
    { icon: 'flaticon-381-calendar-7' },
    { icon: 'flaticon-381-clock' },
    { icon: 'flaticon-381-clock-1' },
    { icon: 'flaticon-381-clock-2' },
    { icon: 'flaticon-381-close' },
    { icon: 'flaticon-381-cloud' },
    { icon: 'flaticon-381-cloud-computing' },
    { icon: 'flaticon-381-command' },
    { icon: 'flaticon-381-compact-disc' },
    { icon: 'flaticon-381-compact-disc-1' },
    { icon: 'flaticon-381-compact-disc-2' },
    { icon: 'flaticon-381-compass' },
    { icon: 'flaticon-381-compass-1' },
    { icon: 'flaticon-381-compass-2' },
    { icon: 'flaticon-381-controls' },
    { icon: 'flaticon-381-controls-1' },
    { icon: 'flaticon-381-controls-2' },
    { icon: 'flaticon-381-controls-3' },
    { icon: 'flaticon-381-controls-4' },
    { icon: 'flaticon-381-switch-4' },
    { icon: 'flaticon-381-controls-5' },
    { icon: 'flaticon-381-controls-6' },
    { icon: 'flaticon-381-database' },
    { icon: 'flaticon-381-database-1' },
    { icon: 'flaticon-381-diamond' },
    { icon: 'flaticon-381-diploma' },
    { icon: 'flaticon-381-dislike' },
    { icon: 'flaticon-381-divide' },
    { icon: 'flaticon-381-earth-globe' },
    { icon: 'flaticon-381-earth-globe-1' },
    { icon: 'flaticon-381-division' },
    { icon: 'flaticon-381-division-1' },
    { icon: 'flaticon-381-download' },
    { icon: 'flaticon-381-edit' },
    { icon: 'flaticon-381-edit-1' },
    { icon: 'flaticon-381-eject' },
    { icon: 'flaticon-381-eject-1' },
    { icon: 'flaticon-381-enter' },
    { icon: 'flaticon-381-equal' },
    { icon: 'flaticon-381-equal-1' },
    { icon: 'flaticon-381-equal-2' },
    { icon: 'flaticon-381-error' },
    { icon: 'flaticon-381-exit' },
    { icon: 'flaticon-381-exit-1' },
    { icon: 'flaticon-381-exit-2' },
    { icon: 'flaticon-381-fast-forward' },
    { icon: 'flaticon-381-fast-forward-1' },
    { icon: 'flaticon-381-file' },
    { icon: 'flaticon-381-file-1' },
    { icon: 'flaticon-381-file-2' },
    { icon: 'flaticon-381-background-1' },
    { icon: 'flaticon-381-controls-7' },
    { icon: 'flaticon-381-controls-8' },
  ];
  
}
