import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FinancialTransactionService } from '../../services/financial-transaction.service';
import { FinancialTransaction } from '../../models/financial-transaction.model';
import { Alert } from '../../models/alert.model';

@Component({
  selector: 'app-financial-transaction-root',
  templateUrl: './financial-transaction-list.component.html',
  styleUrls: ['./financial-transaction-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FinancialTransactionListComponent implements OnInit {
  financialTransactions: FinancialTransaction[] = [];
  alerts: Alert[] = [];
  errorMessage: string = '';

  constructor(
    private financialTransactionService: FinancialTransactionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadFinancialTransactions();
    this.loadAlerts();
  }

  loadFinancialTransactions(): void {
    this.financialTransactionService.getFinancialTransactions().subscribe({
      next: (financialTransactions: FinancialTransaction[]) => {
        this.financialTransactions = financialTransactions;
      },
      error: (error) => {
        console.error('Erro ao carregar transações financeiras:', error);
        this.errorMessage = 'Erro ao carregar transações financeiras.';
      }
    });
  }

  loadAlerts(): void {
    this.financialTransactionService.getAlerts().subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  onEdit(id: string): void {
    this.router.navigate(['/financial-transactions/edit', id]);
  }

  onDelete(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta transação financeira?')) {
      this.financialTransactionService.deleteFinancialTransaction(id).subscribe({
        next: () => {
          console.log('Orçamento excluído com sucesso');
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
}
