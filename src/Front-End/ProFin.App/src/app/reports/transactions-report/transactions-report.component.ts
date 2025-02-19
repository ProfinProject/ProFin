import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionReport } from '../models/transaction-report';
import { ReportsService } from '../services/reports.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Category } from '../../category/category';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from "chart.js";
import { CategoryService } from '../../category/services/categories.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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


  displayedColumns: string[] = ['description', 'value', 'createdDate'];
  dataSource = new MatTableDataSource<TransactionReport>([]);

  filteredTransactions = [...this.transactions];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSelectionChange(event: any) {
    console.log('Opção selecionada:', this.selectedOption);
  }

  processTransactions(transactions: TransactionReport[]) {
    if (Array.isArray(transactions))
      this.transactions = transactions;
    else
      this.transactions = [];

    this.filteredTransactions = [...this.transactions];

    this.loadData();
  }

  loadData() {
    this.dataSource.data = this.filteredTransactions;

    this.lineChartData.labels = this.filteredTransactions.map(item => item.description);
    this.lineChartData.datasets[0].data = this.filteredTransactions.map(item => item.value);
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

  onDateChange(event: any) {
    const selectedDate = event.target.value;

    // Filtra os dados com base na data
    if (selectedDate) {
      const filterDate = new Date(selectedDate)

      this.filteredTransactions = this.transactions.filter(item => {
        const itemDateParts = item.createdDate.split(" ")[0].split("/"); // Separa "DD/MM/YYYY HH:mm:ss"
        const itemDate = new Date(
          Number(itemDateParts[2]), // Ano
          Number(itemDateParts[1]) - 1, // Mês (base 0)
          Number(itemDateParts[0]) // Dia
        );

        return itemDate >= filterDate; // Comparação entre objetos Date
      });
    } else {
      this.filteredTransactions = [...this.transactions]; // Exibe todos os dados se nenhuma data for selecionada
    }

    this.loadData();

  }
}


export class DataPoint {
  constructor(
    public data: string,  // Ex: '2023-02-01'
    public valor: number,  // Ex: 200
    public nome: string    // Ex: 'Produto A'
  ) { }
}