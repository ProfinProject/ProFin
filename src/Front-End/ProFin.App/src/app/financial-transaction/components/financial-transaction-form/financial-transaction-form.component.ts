import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialTransactionService } from '../../services/financial-transaction.service';
import { FinancialTransaction } from '../../models/financial-transaction.model';
import { CategoryTransaction } from '../../models/category-transaction.model';

@Component({
  selector: 'app-financial-transaction-root',
  templateUrl: './financial-transaction-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FinancialTransactionFormComponent implements OnInit {
  financialTransactionForm: FormGroup;
  isEditing = false;
  financialTransactionId: string | null = null;
  categories: CategoryTransaction[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private financialTransactionService: FinancialTransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.financialTransactionForm = this.fb.group({
      categoryTransactionId: ['', Validators.required],
      limit: ['', [Validators.required, Validators.min(0)]],
      currentSpending: [0]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.financialTransactionId = id;
      this.loadFinancialTransaction(this.financialTransactionId);
    }
  }

  private loadCategories(): void {
    this.financialTransactionService.getCategories().subscribe({
      next: (categories) => {
        console.log('Categorias carregadas:', categories);
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

  private loadFinancialTransaction(id: string): void {
    this.financialTransactionService.getFinancialTransactionById(id).subscribe({
      next: (financialTransaction) => {
        this.financialTransactionForm.patchValue({
          categoryTransactionId: financialTransaction.categoryTransactionId,
          limit: financialTransaction.limit,
          currentSpending: financialTransaction.currentSpending
        });
      },
      error: (error) => {
        console.error('Erro ao carregar transação financeira:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.financialTransactionForm.valid) {
      const financialTransactionData = {
        ...this.financialTransactionForm.value,
        categoryTransactionId: this.financialTransactionForm.get('categoryTransactionId')?.value
      };

      if (this.isEditing && this.financialTransactionId) {
        this.financialTransactionService.updateFinancialTransaction(this.financialTransactionId, financialTransactionData).subscribe({
          next: () => {
            console.log('Orçamento atualizado com sucesso');
            this.router.navigate(['/budget']);
          },
          error: (error) => {
            console.error('Erro ao atualizar orçamento:', error);
            this.errorMessage = 'Erro ao atualizar orçamento. Por favor, tente novamente.';
          }
        });
      } else {
        this.financialTransactionService.createFinancialTransaction(financialTransactionData).subscribe({
          next: () => {
            console.log('Transação financeira criado com sucesso');
            this.router.navigate(['/budget']);
          },
          error: (error) => {
            console.error('Erro ao criar transação financeira:', error);
            this.errorMessage = 'Erro ao criar transação financeira. Por favor, tente novamente.';
          }
        });
      }
    }
  }
}
