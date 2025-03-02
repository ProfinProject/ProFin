import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FinancialTransactionService } from '../../services/financial-transaction.service';
import { FinancialTransaction } from '../../models/financial-transaction.model';
import { Alert } from '../../models/alert.model';
import { ApiResponse } from '../../../Utils/api-response-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from '../../../category/services/categories.service';
import { CategoryTransaction } from '../../models/category-transaction.model';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-financial-transaction-list',
  templateUrl: './financial-transaction-list.component.html',
  styleUrls: ['./financial-transaction-list.component.scss'],
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule]
})
export class FinancialTransactionListComponent implements OnInit {
  filterForm: FormGroup;
  financialTransactions: FinancialTransaction[] = [];
  alerts: Alert[] = [];
  errorMessage: string = '';
  categories: CategoryTransaction[] = [];

  constructor(
    private fb: FormBuilder,
    private financialTransactionService: FinancialTransactionService,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.filterForm = this.fb.group({
      filterByCategoryFinancialTransactionId: '',
      filterByType: '',
      filterByTransactionDate: ""
      // value: [0]
    });
  }

  ngOnInit(): void {
    this.loadFinancialTransactions();
    this.loadAlerts();
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        if (categories.length === 0) {
          this.errorMessage = 'Nenhuma categoria encontrada.';
        }
      },
      error: (error) => {
        console.error('Erro ao carregar categorias:', error);
        this.errorMessage = 'Erro ao carregar categorias. Por favor, tente novamente.';
      }
    });
  }

  loadFinancialTransactions(): void {
    this.financialTransactionService.getFinancialTransactions().subscribe({
      next: (response: ApiResponse<FinancialTransaction[]>) => {
        if (response.success) {
          this.financialTransactions = response.data;
          console.log(response.data)
        } else {
          console.error("Erro na resposta da API:", response);
        }
      },
      error: (error) => {
        if (error.status === 401) {
          this.router.navigate(['/account/login']);
        } else {
          this.errorMessage = 'Erro ao carregar transações financeiras.';
        }
      }
    });
  }

  loadAlerts(): void {
    this.financialTransactionService.getAlerts().subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  onEdit(id: string): void {
    this.router.navigate(['/financial-transaction/edit', id]);
  }

  onDelete(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta transação financeira?')) {
      this.financialTransactionService.deleteFinancialTransaction(id).subscribe({
        next: () => {
          this.loadFinancialTransactions(); // Recarrega a lista após excluir
        },
        error: (error) => {
          console.error('Erro ao excluir transação financeira:', error);
          this.errorMessage = 'Erro ao excluir transação financeira. Por favor, tente novamente.';
        }
      });
    }
  }

  onAdd(): void {
    this.router.navigate(['/financial-transaction/create']);
  }

  clearFilters() {
    this.filterForm.reset();
    this.filterForm = this.fb.group({
      filterByCategoryFinancialTransactionId: '',
      filterByType: '',
      filterByTransactionDate: ''
    });
    this.loadFinancialTransactions();
  }

  searchFinancialTransactions() {
    const filterFormParams = {
      ...this.filterForm.value,
    };

    console.log("PARAMNS", filterFormParams);

    this.financialTransactionService.searchFinancialTransaction(filterFormParams).subscribe({
      next: (response: ApiResponse<FinancialTransaction[]>) => {
        if (response.success) {
          this.financialTransactions = response.data;
          console.log(response.data)
        } else {
          console.error("Erro na resposta da API:", response);
        }
      },
      error: (error) => {
        if (error.status === 401) {
          this.router.navigate(['/account/login']);
        } else {
          this.errorMessage = 'Erro ao carregar transações financeiras.';
        }
      }
    });
  }

}
