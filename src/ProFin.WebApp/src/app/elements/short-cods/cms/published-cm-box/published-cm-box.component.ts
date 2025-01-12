import { Component } from '@angular/core';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Component } from '../../../../plugins/select2/select2.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-published-cm-box',
  standalone: true,
  imports: [FormsModule, NgbModule, Select2Component],
  templateUrl: './published-cm-box.component.html',
  styleUrl: './published-cm-box.component.css'
})
export class PublishedCmBoxComponent {
  select2Data = [
    {
      name: 'Select Status',
    },
    {
      name: 'Published',
    },
    {
      name: 'Draft',
    },
    {
      name: 'Private',
    },
    {
      name: 'Pending',
    },
  ];


  navigation = 'arrows';
  outsideDays = 'visible';

  model: NgbDateStruct | undefined;
}
