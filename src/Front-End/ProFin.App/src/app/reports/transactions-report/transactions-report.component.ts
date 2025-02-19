import { Component, OnInit } from '@angular/core';
import { TransactionReport } from '../models/transaction-report';
import { ReportsService } from '../services/reports.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Category } from '../../category/category';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from "chart.js";
import { CategoryService } from '../../category/services/categories.service';

@Component({
  selector: 'app.transactions.report',
  standalone: false,
  templateUrl: './transactions-report.component.html',
})
export class TransactionsReportComponent implements OnInit {


  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Gastos',
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.2)',
        fill: true,
      }
    ]
  };


  public lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            let value = tooltipItem.raw as number;
            return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return `R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          }
        }
      }
    }
  };

  public lineChartLegend = true;


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

    this.lineChartData.labels = transactions.map(item => item.description);
    this.lineChartData.datasets[0].data = transactions.map(item => item.value);
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


export class DataPoint {
  constructor(
    public data: string,  // Ex: '2023-02-01'
    public valor: number,  // Ex: 200
    public nome: string    // Ex: 'Produto A'
  ) { }
}