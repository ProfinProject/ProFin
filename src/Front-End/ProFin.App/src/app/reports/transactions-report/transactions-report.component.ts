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

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  // Definindo a estrutura dos dados para o gráfico
  // lineChartData: ChartData<'line'> = {
  //   labels: [],  // Vai armazenar as datas
  //   datasets: [
  //     {
  //       label: 'Valor',
  //       data: [],  // Vai armazenar os valores
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1
  //     }
  //   ]
  // };

  // lineChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: 'Data'
  //       }
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: 'Valor'
  //       }
  //     }
  //   }
  // };

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
    this.loadData();

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

  loadData() {
    // Exemplo de dados que você poderia ter vindo de uma API
    const data: DataPoint[] = [
      new DataPoint('2023-01-01', 200, 'Produto A'),
      new DataPoint('2023-01-02', 300, 'Produto B'),
      new DataPoint('2023-01-03', 150, 'Produto C')
    ];

    // Preenche os dados no gráfico
    this.lineChartData.labels = data.map(dp => dp.data);  // Data
    this.lineChartData.datasets[0].data = data.map(dp => dp.valor);  // Valor
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


export class DataPoint {
  constructor(
    public data: string,  // Ex: '2023-02-01'
    public valor: number,  // Ex: 200
    public nome: string    // Ex: 'Produto A'
  ) { }
}