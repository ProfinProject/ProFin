import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportsService } from '../services/reports.service';
import { CategoryService } from '../../category/services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryTransactionReport, TransactionReport } from '../models/transaction-report';
import { GroupedReports } from '../models/grouped-reports';
import { ValueFormater } from '../../pipes/ValueFormater.pipe';

@Component({
  selector: 'app-categories-report',
  standalone: false,
  templateUrl: './categories-report.component.html',
  providers: [
    ValueFormater
  ]
})
export class CategoriesReportComponent implements OnInit {

  chartData: { category: string, totalValue: number }[] = [];
  pieChartData: any;
  chartLabels: string[] = [];
  chartValues: number[] = [];
  public pieChartType: ChartType = 'pie';

  pieChartOptions: ChartOptions = {
    responsive: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            console.log("test");

            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed);
            }
            return label;
          }
        }
      }
    }
  };

  groupedReports: { [key: string]: { category: CategoryTransactionReport; transactions: TransactionReport[]; totalValue: number } } = {};
  startedDate: string;

  constructor(
    private reportsService: ReportsService
  ) {
    this.startedDate = this.getStartedDate();
  }

  private getStartedDate() {
    const dateSixMonthsAgo = new Date();
    dateSixMonthsAgo.setMonth(dateSixMonthsAgo.getMonth() - 6);
    const formattedDate = dateSixMonthsAgo.toISOString().split('T')[0];
    return formattedDate;
  }

  ngOnInit(): void {
    const dateSixMonthsAgo = new Date();
    dateSixMonthsAgo.setMonth(dateSixMonthsAgo.getMonth() - 6);
    const formattedDate = dateSixMonthsAgo.toISOString().split('T')[0];

    this.reportsService.getTransactionsSince(formattedDate)
      .subscribe({
        next: (response) => this.processTransactions(response),
        error: (error) => this.processFail(error)
      })
  }

  processFail(error: any): void { }

  processTransactions(response: TransactionReport[]): void {
    this.groupedReports = {};
    response.forEach(transaction => {
      const categoryName = transaction.categoryFinancialTransaction.name;

      if (!this.groupedReports[categoryName]) {
        this.groupedReports[categoryName] = {
          category: transaction.categoryFinancialTransaction,
          transactions: [],
          totalValue: 0
        };
      }

      this.groupedReports[categoryName].transactions.push(transaction);
      this.groupedReports[categoryName].totalValue += transaction.value;
    });

    this.generatePieChartData();
  }

  generatePieChartData(): void {
    for (const categoryName in this.groupedReports) {
      if (this.groupedReports.hasOwnProperty(categoryName)) {
        const report = this.groupedReports[categoryName];
        this.chartData.push({
          category: report.category.name,
          totalValue: report.totalValue
        });
      }
    }

    this.chartLabels = this.chartData.map(item => item.category);
    this.chartValues = this.chartData.map(item => item.totalValue);

    this.pieChartData = {
      labels: Object.keys(this.groupedReports).map((categoryName) => {
        const report = this.groupedReports[categoryName as keyof GroupedReports];
        return report.category.name;
      }),
      datasets: [{
        data: Object.keys(this.groupedReports).map((categoryName) => {
          const report = this.groupedReports[categoryName as keyof GroupedReports];
          return report.totalValue;
        }),
        backgroundColor: Object.keys(this.groupedReports).map(() => this.generateRandomColor()),
        hoverBackgroundColor: Object.keys(this.groupedReports).map(() => this.generateRandomColor())
      }]
    };
  }

  generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  onDateChange() {
    console.log(this.startedDate);

    this.reportsService.getTransactionsSince(this.startedDate)
      .subscribe({
        next: (response) => this.processTransactions(response),
        error: (error) => this.processFail(error)
      });
  }

  printPage() {
    window.print(); // Chama a impressão após o tempo para garantir a renderização
  }

  ngAfterViewInit() { }
}
