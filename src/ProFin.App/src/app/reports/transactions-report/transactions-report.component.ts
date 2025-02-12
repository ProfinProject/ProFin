import { Component, OnInit } from '@angular/core';
import { TransactionReport } from '../models/transaction-report';
import { ReportsService } from '../services/reports.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Category } from '../../category/category';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-transactions-report',
  standalone: false,
  templateUrl: './transactions-report.component.html',
})
export class TransactionsReportComponent implements OnInit {

  public transactions: TransactionReport[] = [];
  public categories: Category[] = [];
  errors: any[] = [];
  selectedOption: string;

  constructor(
    private reportsService: ReportsService,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    this.selectedOption = '';
  }

  ngOnInit(): void {
    const dateSixMonthsAgo = new Date();
    dateSixMonthsAgo.setMonth(dateSixMonthsAgo.getMonth() - 6);
    const formattedDate = dateSixMonthsAgo.toISOString().split('T')[0];

    this.categoryService.getCategories()
      .subscribe({
        next: (response) => this.processCategories(response),
        error: (error) => this.processFail(error) // Passa o erro para processFail
      })

    this.reportsService.getTransactionsSince(formattedDate)
      .subscribe({
        next: (response) => this.processTransactions(response),
        error: (error) => this.processFail(error) // Passa o erro para processFail
      })
  }

  onSelectionChange(event: any) {
    console.log('Opção selecionada:', this.selectedOption);
  }

  processTransactions(transactions: TransactionReport[]) {
    if (Array.isArray(transactions))
      this.transactions = transactions;
    else
      this.transactions = [];
  }

  processCategories(categories: Category[]) {
    if (Array.isArray(categories))
      this.categories = categories;
    else
      this.categories = [];
  }

  processFail(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
