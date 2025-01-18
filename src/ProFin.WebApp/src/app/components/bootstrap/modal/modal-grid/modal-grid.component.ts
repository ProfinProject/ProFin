import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-grid',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './modal-grid.component.html',
  styleUrl: './modal-grid.component.css'
})
export class ModalGridComponent {
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}
}
