import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-long-centent',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './modal-long-centent.component.html',
  styleUrl: './modal-long-centent.component.css'
})
export class ModalLongCententComponent {
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg' });
	}
}
