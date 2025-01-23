import { Component } from '@angular/core';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [
    Select2Component,
    CKEditorModule,
    BreadcrumbComponent
  ],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.css'
})
export class CreateTicketComponent {
  breadcrumbList = {
    menu_path: 'Ticket',
    currentURL: 'Create Ticket',
  }

  public Editor = ClassicEditor;

  selectSingle = [
    {
      name: 'Alabama',
    },
    {
      name: 'Wyoming',
    }
  ];
}
