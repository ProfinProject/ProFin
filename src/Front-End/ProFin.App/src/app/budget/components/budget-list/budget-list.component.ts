import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';
import { Alert } from '../../models/alert.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];
  alerts: Alert[] = [];
  errorMessage: string = '';

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBudgets();
    this.loadAlerts();
  }

  loadBudgets(): void {
    this.budgetService.getBudgets().subscribe({
      next: (budgets: Budget[]) => {
        this.budgets = budgets;
        console.log(this.budgets);
      },
      error: (error) => {
        if (error.status == 401)
          this.router.navigate(['/account/login']);
        else {
          console.error('Erro ao carregar orçamentos:', error);
          this.errorMessage = 'Erro ao carregar orçamentos.';
        }
      }
    });
  }

  loadAlerts(): void {
    this.budgetService.getAlerts().subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  onEdit(id: string): void {
    this.router.navigate(['/budget/edit', id]);
  }

  onDelete(id: string): void {
    if (confirm('Tem certeza que deseja excluir este orçamento?')) {
      this.budgetService.deleteBudget(id).subscribe({
        next: () => {
          console.log('Orçamento excluído com sucesso');
          this.loadBudgets(); // Recarrega a lista após excluir
        },
        error: (error) => {
          console.error('Erro ao excluir orçamento:', error);
          this.errorMessage = 'Erro ao excluir orçamento. Por favor, tente novamente.';
        }
      });
    }
  }

  onAdd(): void {
    this.router.navigate(['/budget/create']);
  }
}
