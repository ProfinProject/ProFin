import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chips-drag-drop',
  standalone: true,
  imports: [MatChipsModule, CdkDropList, CdkDrag],
  templateUrl: './chips-drag-drop.component.html',
  styleUrl: './chips-drag-drop.component.css'
})
export class ChipsDragDropComponent {


  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
