import { Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoryAppComponent } from './category.app.component';


export const CategoryRoutes: Routes = [
  {
    path: '',
    component: CategoryAppComponent,
    children: [
      { path: '', component: ListCategoryComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: 'edit/:id', component: EditCategoryComponent }
    ]
  }
];
