import { Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoryAppComponent } from './category.app.component';
import { CategoriesGuard } from './services/categories.guard';

export const CategoryRoutes: Routes = [
  {
    path: '',
    component: CategoryAppComponent,
    children: [
      { path: '', component: ListCategoryComponent, canActivate: [CategoriesGuard] },
      { path: 'create', component: CreateCategoryComponent, canActivate: [CategoriesGuard], canDeactivate: [CategoriesGuard] },
      { path: 'edit/:id', component: EditCategoryComponent, canActivate: [CategoriesGuard], canDeactivate: [CategoriesGuard] }
    ]
  }
];
