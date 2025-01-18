import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-injecting-data',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './injecting-data.component.html',
  styleUrl: './injecting-data.component.css'
})
export class InjectingDataComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  direction: any;
  ngDoCheck() {
    if (document.body.getAttribute('direction') == 'rtl') {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
