import { Component, TemplateRef} from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgbDateStruct, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-sidebar',
  standalone: true,
  imports: [FormsModule, NgbModule, NgClass, RouterLink],
  templateUrl: './event-sidebar.component.html',
  styleUrl: './event-sidebar.component.css'
})
export class EventSidebarComponent {
  isCollapsed = false;
  model: NgbDateStruct | undefined;
  navigation = 'arrows';
	outsideDays = 'visible';
	date: { year: number; month: number; } | undefined;

  time = { hour: 13, minute: 30 };
	meridian = true;

  constructor(private modalService: NgbModal) {}
  
  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: false });
  }
}
