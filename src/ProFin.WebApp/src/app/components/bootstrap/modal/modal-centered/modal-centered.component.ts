import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-centered',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './modal-centered.component.html',
  styleUrl: './modal-centered.component.css'
})
export class ModalCenteredComponent {
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
}
