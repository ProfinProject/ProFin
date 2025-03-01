import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { CategoryTransaction } from '../../models/category-transaction.model';
import { CategoryService } from '../../../category/services/categories.service';
import { FormBaseComponent } from '../../../base-components/form-base.component';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxCurrencyDirective
  ]
})
export class BudgetFormComponent extends FormBaseComponent implements OnInit {
  budgetForm: FormGroup;
  isEditing = false;
  budgetId: string | null = null;
  categories: CategoryTransaction[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private budgetService: BudgetService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    super();
    this.budgetForm = this.fb.group({
      categoryTransactionId: ['', Validators.required],
      limit: ['', [Validators.required, Validators.min(0)]],
    },
      { validator: this.currentSpendingLimitValidator }
    );
  }

  ngOnInit(): void {
    this.loadCategories();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.budgetId = id;
      this.loadBudget(this.budgetId);
    }

    this.unsavedChanges = true;
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

  private loadBudget(id: string): void {
    this.budgetService.getBudgetById(id).subscribe({
      next: (budget) => {
        this.budgetForm.patchValue({
          categoryTransactionId: budget.categoryTransactionId,
          limit: budget.limit,
          currentSpending: budget.currentSpending,
        });
      },
      error: (error) => {
        console.error('Erro ao carregar orçamento:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.budgetForm.valid) {
      const budgetData = {
        ...this.budgetForm.value,
        categoryTransactionId: this.budgetForm.get('categoryTransactionId')?.value
      };

      console.log("test");
      if (this.isEditing && this.budgetId) {
        budgetData.id = this.budgetId;
        this.budgetService.updateBudget(this.budgetId, budgetData).subscribe({
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
        this.budgetService.createBudget(budgetData).subscribe({
          next: () => {
            console.log('Orçamento criado com sucesso');
            this.errorMessage = '';
            this.router.navigate(['/budget']);
          },
          error: (error) => {
            console.error('Erro ao criar orçamento', error);
            this.errorMessage = error.error.errors.join(', '); // Define a mensagem de erro
          }
        });
      }

      this.unsavedChanges = false;
    }
  }

  currentSpendingLimitValidator(form: AbstractControl): ValidationErrors | null {
    const limit = form.get('limit')?.value;
    const currentSpending = form.get('currentSpending')?.value;

    if (limit !== null && currentSpending !== null && currentSpending > limit) {
      return { currentSpendingExceeded: true }; // Define um erro no form
    }

    return null; // Se não houver erro, retorna null
  }
}
