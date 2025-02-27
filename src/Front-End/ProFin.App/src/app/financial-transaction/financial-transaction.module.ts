import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FinancialTransactionRoutes } from './financial-transaction.route';
import { FinancialTransactionAppComponent } from './financial-transaction.app.component';
import { FinancialTransactionListComponent } from './components/financial-transaction-list/financial-transaction-list.component';
import { FinancialTransactionFormComponent } from './components/financial-transaction-form/financial-transaction-form.component';
import { FinancialTransactionService } from './services/financial-transaction.service';
import { FinancialTransactionsGuard } from './services/financial-transactions.guard';
import { NgxCurrencyDirective, NgxCurrencyInputMode, provideEnvironmentNgxCurrency } from 'ngx-currency';

@NgModule({
  declarations: [
    FinancialTransactionAppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(FinancialTransactionRoutes),
    FinancialTransactionListComponent,
    FinancialTransactionFormComponent
  ],
  providers: [
    FinancialTransactionService,
    FinancialTransactionsGuard
  ]
})
export class FinancialTransactionModule { }
