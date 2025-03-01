import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionReport } from '../models/transaction-report';
import { ReportsService } from '../services/reports.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { ChartConfiguration, ChartData, ChartOptions, ChartType, TimeScale } from "chart.js";
import { CategoryService } from '../../category/services/categories.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from '../../category/models/category';

@Component({
  selector: 'app.transactions.report',
  standalone: false,
  templateUrl: './transactions-report.component.html',
  styleUrls: ['./transactions-report.component.css']
})
export class TransactionsReportComponent implements OnInit {

  isPrinting = false; // Flag para saber se está em modo de impressão

  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        position: 'nearest',
        mode: 'nearest',
        intersect: false,
        external: function (context) {
          // Exemplo de função externa para sempre exibir o tooltip em um lugar fixo ou na posição de um ponto específico
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipModel.opacity = 1; // Garantir que o tooltip esteja sempre visível
          }
          // Aqui você pode manipular a posição do tooltip ou fazer outras personalizações
        },
        callbacks: {
          label: function (tooltipItem) {
            const point = tooltipItem.dataset.data[tooltipItem.dataIndex];
            if (point) { // Verifique se o ponto existe
              const value = tooltipItem.raw;
              console.log(point);
              const description = point.toLocaleString;
              return `${tooltipItem.label}: ${value} - ${description}`;  // Exibe o valor e a descrição
            }
            return tooltipItem.label; // Se não houver ponto, apenas retorna o label
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
  startedDate: string;


  displayedColumns: string[] = ['description', 'value', 'createdDate', 'categoryDescription', 'transactionType'];
  dataSource = new MatTableDataSource<TransactionReport>([]);

  filteredTransactions = [...this.transactions];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private reportsService: ReportsService,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    this.selectedOption = '';
    this.startedDate = this.getStartedDate();
  }

  ngOnInit(): void {

    const formattedDate = this.getStartedDate();

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

  private getStartedDate() {
    const dateSixMonthsAgo = new Date();
    dateSixMonthsAgo.setMonth(dateSixMonthsAgo.getMonth() - 6);
    const formattedDate = dateSixMonthsAgo.toISOString().split('T')[0];
    return formattedDate;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSelectionChange(event: any) {
    console.log('Opção selecionada:', this.selectedOption);

    this.filterByCategory();
    this.loadData();
  }

  filterByCategory() {
    if (!this.selectedOption || this.selectedOption.trim() === '') {
      this.filteredTransactions = [...this.transactions];
      return;
    }

    const value = this.selectedOption;
    this.filteredTransactions = this.transactions.filter(item => {
      return item.categoryFinancialTransaction.id == value;
    });
  }

  processTransactions(transactions: TransactionReport[]) {
    if (Array.isArray(transactions)) {
      this.transactions = transactions;
    }
    else
      this.transactions = [];

    console.log(this.transactions);
    // Ordena as transações pela data (do mais antigo para o mais recente)
    this.transactions.sort((a, b) => {
      const dateA = new Date(this.convertToISODate(a.createdDate)).getTime();
      const dateB = new Date(this.convertToISODate(b.createdDate)).getTime();
      return dateA - dateB;
    });

    this.filterByCategory();
    this.loadData();
  }

  convertToISODate(dateStr: string): string {
    const [day, month, yearTime] = dateStr.split('/');
    const [year, time] = yearTime.split(' ');

    const isoDate = `${year}-${month}-${day}T${time}`;
    return isoDate;
  }

  loadData() {
    this.dataSource.data = this.filteredTransactions;

    this.lineChartData.labels = this.filteredTransactions.map(item => item.createdDate.slice(0, 10));
    this.lineChartData.datasets = [
      {
        label: "Entradas",
        data: this.filteredTransactions.map(item => this.IsIncome(item) == true ? item.value : null),
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.2)',
        borderWidth: 2,
        spanGaps: true

      },
      {
        label: "Saídas",
        data: this.filteredTransactions.map(item => this.IsIncome(item) == false ? item.value : null),
        borderColor: "red",
        backgroundColor: "red",
        borderWidth: 2,
        spanGaps: true

      }
    ]

    this.lineChartOptions.plugins = this.lineChartOptions.plugins || {}; // Certifica-se de que o objeto plugins existe
    this.lineChartOptions.plugins.tooltip = {
      callbacks: {
        label: (tooltipItem) => {
          const datasetIndex = tooltipItem.datasetIndex;
          const dataIndex = tooltipItem.dataIndex;
          const transaction = this.filteredTransactions[dataIndex];

          // Verifica se o valor é um número antes de formatar
          const value = tooltipItem.raw;
          let formattedValue = '';

          if (typeof value === 'number') {
            formattedValue = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(value);
          } else {
            formattedValue = 'Valor inválido';
          }

          return `Descrição: ${transaction.description} - Valor: ${formattedValue}`;
        }
      }
    };
  }


  IsIncome(transaction: TransactionReport): boolean {
    return transaction.transactionType !== "S";
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

  printPage() {
    this.isPrinting = true; // Ativa o modo de impressão
    setTimeout(() => {
      window.print(); // Chama a impressão após o tempo para garantir a renderização
      this.isPrinting = false; // Desativa o modo de impressão após a impressão ser chamada
    }, 100);
  }

  onDateChange() {
    this.reportsService.getTransactionsSince(this.startedDate)
      .subscribe({
        next: (response) => this.processTransactions(response),
        error: (error) => this.processFail(error) // Passa o erro para processFail
      })

    this.loadData();
  }
}