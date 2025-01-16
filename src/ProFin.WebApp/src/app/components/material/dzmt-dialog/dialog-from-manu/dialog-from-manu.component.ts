import { Component, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-from-manu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './dialog-from-manu.component.html',
  styleUrl: './dialog-from-manu.component.css'
})
export class DialogFromManuComponent {

  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogFromMenuExampleDialog {
  direction: any;
  ngDoCheck() {
    if (document.body.getAttribute('direction') == 'rtl') {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
 }
