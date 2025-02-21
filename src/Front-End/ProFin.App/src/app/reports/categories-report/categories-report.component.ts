import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportsService } from '../services/reports.service';
import { CategoryService } from '../../category/services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { TransactionReport } from '../models/transaction-report';


@Component({
  selector: 'app-categories-report',
  standalone: false,
  templateUrl: './categories-report.component.html'
})
export class CategoriesReportComponent implements OnInit {
  // Dados para o gráfico de pizza
  public pieChartData: ChartData<'pie'> = {
    labels: ['Red', 'Blue', 'Yellow'], // Rótulos de cada fatia
    datasets: [
      {
        data: [300, 500, 100], // Valores de cada fatia
        backgroundColor: ['#FF0000', '#0000FF', '#FFFF00'], // Cores do gráfico
      },
    ],
  };

  // Opções para personalização do gráfico
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Tipo do gráfico
  public pieChartType: ChartType = 'pie'; // Tipo de gráfico (pie)

  constructor(
    private reportsService: ReportsService,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    //this.selectedOption = '';
  }

  ngOnInit(): void {

    const dateSixMonthsAgo = new Date();
    dateSixMonthsAgo.setMonth(dateSixMonthsAgo.getMonth() - 6);
    const formattedDate = dateSixMonthsAgo.toISOString().split('T')[0];

    this.reportsService.getTransactionsSince(formattedDate)
      .subscribe({
        next: (response) => this.processTransactions(response),
        error: (error) => this.processFail(error) // Passa o erro para processFail
      })
  }
  processFail(error: any): void {
    throw new Error('Method not implemented.');
  }
  processTransactions(response: TransactionReport[]): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

}