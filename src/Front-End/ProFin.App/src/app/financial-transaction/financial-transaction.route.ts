import { Routes } from '@angular/router';
import { FinancialTransactionAppComponent } from './financial-transaction.app.component';
import { FinancialTransactionListComponent } from './components/financial-transaction-list/financial-transaction-list.component';
import { FinancialTransactionFormComponent } from './components/financial-transaction-form/financial-transaction-form.component';

export const FinancialTransactionRoutes: Routes = [
  {
    path: '',
    component: FinancialTransactionListComponent,
    children: [
      { path: '', component: FinancialTransactionAppComponent },
      { path: 'create', component: FinancialTransactionFormComponent },
      { path: 'edit/:id', component: FinancialTransactionFormComponent }
    ]
  }
];
