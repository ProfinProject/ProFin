import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-large',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './modal-large.component.html',
  styleUrl: './modal-large.component.css'
})
export class ModalLargeComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}
}
