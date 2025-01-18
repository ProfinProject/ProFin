import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-with-tooltip',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './modal-with-tooltip.component.html',
  styleUrl: './modal-with-tooltip.component.css'
})
export class ModalWithTooltipComponent {
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}
}
