import { Component } from '@angular/core';

@Component({
  selector: 'app-table-exam-toppers',
  standalone: true,
  imports: [],
  templateUrl: './table-exam-toppers.component.html',
  styleUrl: './table-exam-toppers.component.css'
})
export class TableExamToppersComponent {
  boxActive:Boolean = false;
  
  checkAll(){
    if(this.boxActive){
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
}
