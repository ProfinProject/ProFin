import { Routes } from '@angular/router';
import { FinancialTransactionAppComponent } from './financial-transaction.app.component';
import { FinancialTransactionListComponent } from './components/financial-transaction-list/financial-transaction-list.component';
import { FinancialTransactionFormComponent } from './components/financial-transaction-form/financial-transaction-form.component';
import { FinancialTransactionsGuard } from './services/financial-transactions.guard';

export const FinancialTransactionRoutes: Routes = [
  {
    path: '',
    component: FinancialTransactionAppComponent,
    children: [
      { path: '', component: FinancialTransactionListComponent, canActivate: [FinancialTransactionsGuard] },
      { path: 'create', component: FinancialTransactionFormComponent, canActivate: [FinancialTransactionsGuard], canDeactivate: [FinancialTransactionsGuard] },
      { path: 'edit/:id', component: FinancialTransactionFormComponent, canActivate: [FinancialTransactionsGuard], canDeactivate: [FinancialTransactionsGuard] }
    ]
  }
];
