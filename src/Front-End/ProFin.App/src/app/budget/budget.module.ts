import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BudgetRoutes } from './budget.route';
import { BudgetAppComponent } from './budget.app.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { BudgetService } from './services/budget.service';
import { BudgetsGuard } from './services/budgets.guard';

@NgModule({
  declarations: [
    BudgetAppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(BudgetRoutes),
    BudgetListComponent,
    BudgetFormComponent
  ],
  providers: [
    BudgetService,
    BudgetsGuard
  ]
})
export class BudgetModule { }
