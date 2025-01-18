import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-elements',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog-elements.component.html',
  styleUrl: './dialog-elements.component.css'
})
export class DialogElementsComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog { 
  direction: any;
  ngDoCheck() {
    if (document.body.getAttribute('direction') == 'rtl') {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
