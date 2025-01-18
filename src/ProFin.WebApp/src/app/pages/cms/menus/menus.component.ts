import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

export interface type {
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [
    NgClass, 
    RouterLink, 
    DragDropModule, 
    FormsModule, 
    Select2Component, 
    ReactiveFormsModule, 
    BreadcrumbComponent, 
    NgbModule,
  ],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {

  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Menu',
  }

  activeToggleArray = [1, 2, 3, 4];
  movies = [
    { key: 'collapseOne', value: 'Contact Us' },
    { key: 'collapseTwo', value: 'Privacy Policy' },
    { key: 'collapseThree', value: 'Terms and Conditions' },
    { key: 'collapseFour', value: 'About Us' },
    { key: 'collapseFive', value: 'Important Information' },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  allComplete: boolean = false;
  pagesArr: type[] = [
    { title: 'Privacy Policy ', completed: false },
    { title: ' Contact Us ', completed: false },
    { title: 'Important Information', completed: false },
    { title: 'About Us', completed: false },
    { title: ' Dummy Co', completed: false },
  ]
  setAll() {
    for (var i in this.pagesArr) {
      if (!this.pagesArr[i].completed) {
        this.pagesArr[i].completed = true;
      }
    }
  }
  deselectAll() {
    for (var i in this.pagesArr) {
      if (this.pagesArr[i].completed) {
        this.pagesArr[i].completed = false;
      }
    }
  }
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  select2Data = [
    {
      name: 'Select Menu',
    },
    {
      name: 'India',
    },
    {
      name: 'Information',
    },
    {
      name: 'New Menu',
    },
    {
      name: 'Page Menu',
    },
  ];
}
