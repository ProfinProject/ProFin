import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-basic',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './modal-basic.component.html',
  styleUrl: './modal-basic.component.css'
})
export class ModalBasicComponent {
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}
}
