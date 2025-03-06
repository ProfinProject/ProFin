import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
      userId: ['']
    }
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
      next: (response: any) => {
        if (response.success) {
          const budget = response.data;
          this.budgetForm.patchValue({
            categoryTransactionId: budget.categoryTransactionId,
            limit: budget.limit,
            userId: budget.userId
          });
        } else {
          this.errorMessage = 'Erro ao carregar orçamento.';
        }
      },
      error: (error) => {
        console.error('Erro ao carregar orçamento:', error);
        this.errorMessage = error.error.errors.join(', '); // Define a mensagem de erro
      }
    });
  }

  onSubmit(): void {
    if (this.budgetForm.valid) {
      const budgetData = {
        ...this.budgetForm.value,
        categoryTransactionId: this.budgetForm.get('categoryTransactionId')?.value,
        userId: this.budgetForm.get('userId')?.value
      };

      if (this.isEditing && this.budgetId) {
        budgetData.id = this.budgetId;
        budgetData.userId = budgetData.userId;
        this.budgetService.updateBudget(this.budgetId, budgetData).subscribe({
          next: () => {
            console.log('Orçamento atualizado com sucesso');
            this.router.navigate(['/budget']);
          },
          error: (error) => {
            console.error('Erro ao atualizar orçamento:', error);
            this.errorMessage = error.error.errors.join(', '); // Define a mensagem de erro
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
}
