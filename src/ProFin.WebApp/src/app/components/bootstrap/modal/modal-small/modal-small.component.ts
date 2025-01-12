import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-small',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './modal-small.component.html',
  styleUrl: './modal-small.component.css'
})
export class ModalSmallComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'sm' });
	}
}
