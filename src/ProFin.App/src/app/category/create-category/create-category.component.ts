import { Component } from '@angular/core';

@Component({
  selector: 'app-create-category',
  standalone: false,
  templateUrl: './create-category.component.html',
})
export class CreateCategoryComponent {

  public name: string = '';

  saveCategory(){
      alert(this.name);
  }
}
