import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryService } from './services/categories.service';
import { CategoryAppComponent } from './category.app.component';
import { CategoryRoutes } from './category.route';
import { CategoriesGuard } from './services/categories.guard';

@NgModule({
  declarations: [
    CategoryAppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(CategoryRoutes),
    ListCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent
  ],
  providers: [
    CategoryService,
    CategoriesGuard
  ]
})
export class CategoryModule { }
