import { Routes } from '@angular/router';
import { BudgetAppComponent } from './budget.app.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { buffer } from 'rxjs';
import { BudgetsGuard } from './services/budgets.guard';

export const BudgetRoutes: Routes = [
  {
    path: '',
    component: BudgetAppComponent,
    children: [
      { path: '', component: BudgetListComponent, canActivate: [BudgetsGuard] },
      { path: 'create', component: BudgetFormComponent, canActivate: [BudgetsGuard], canDeactivate: [BudgetsGuard] },
      { path: 'edit/:id', component: BudgetFormComponent, canActivate: [BudgetsGuard], canDeactivate: [BudgetsGuard] }
    ]
  }
];
