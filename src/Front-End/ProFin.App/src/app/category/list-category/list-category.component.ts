import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../../category/services/categories.service';

@Component({
  selector: 'app-list-category',
  standalone: false,
  templateUrl: './list-category.component.html',
})
export class ListCategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  public categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe({
        next: result => 
          { 
            this.categories = result,
            console.log(result);
          },
          error : e => console.log(e)
    });
  }

  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
