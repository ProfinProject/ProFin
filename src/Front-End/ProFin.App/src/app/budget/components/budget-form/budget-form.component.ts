import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';
import { CategoryTransaction } from '../../models/category-transaction.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class BudgetFormComponent implements OnInit {
  budgetForm: FormGroup;
  isEditing = false;
  budgetId: string | null = null;
  categories: CategoryTransaction[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private budgetService: BudgetService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.budgetForm = this.fb.group({
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
      this.budgetId = id;
      this.loadBudget(this.budgetId);
    }
  }

  private loadCategories(): void {
    this.budgetService.getCategories().subscribe({
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

  private loadBudget(id: string): void {
    this.budgetService.getBudgetById(id).subscribe({
      next: (budget) => {
        this.budgetForm.patchValue({
          categoryTransactionId: budget.categoryTransactionId,
          limit: budget.limit,
          currentSpending: budget.currentSpending
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

      if (this.isEditing && this.budgetId) {
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
            this.router.navigate(['/budget']);
          },
          error: (error) => {
            console.error('Erro ao criar orçamento:', error);
            this.errorMessage = 'Erro ao criar orçamento. Por favor, tente novamente.';
          }
        });
      }
    }
  }
}
