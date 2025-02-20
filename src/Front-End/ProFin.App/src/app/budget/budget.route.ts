import { Routes } from '@angular/router';
import { BudgetAppComponent } from './budget.app.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';

export const BudgetRoutes: Routes = [
  {
    path: '',
    component: BudgetAppComponent,
    children: [
      { path: '', component: BudgetListComponent },
      { path: 'create', component: BudgetFormComponent },
      { path: 'edit/:id', component: BudgetFormComponent }
    ]
  }
];
