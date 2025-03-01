import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap, catchError, throwError } from 'rxjs';
import { Budget } from '../models/budget.model';
import { Alert } from '../models/alert.model';
import { CategoryTransaction } from '../models/category-transaction.model';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../services/base.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService extends BaseService {
  private apiUrl = `${environment.apiUrlv1}Budget`;
  private alertsSubject = new BehaviorSubject<Alert[]>([]);

  constructor(private http: HttpClient) {
    super();
    this.checkBudgetLimits();
  }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.apiUrl, this.getAuthHeaderJson())
      .pipe(
        catchError(this.serviceError)
      );
  }

  getBudgetById(id: string): Observable<Budget> {
    return this.http.get<Budget>(`${this.apiUrl}/${id}`, this.getAuthHeaderJson())
      .pipe(
        catchError(this.serviceError)
      );
  }

  createBudget(budget: Budget): Observable<Budget> {
    console.log('Dados enviados:', budget);
    return this.http.post<Budget>(this.apiUrl, budget, this.getAuthHeader())
      .pipe(
        tap(response => console.log('Resposta do create:', response)),
        catchError(this.serviceError)
      );
  }

  updateBudget(id: string, budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.apiUrl}/${id}`, budget, this.getAuthHeaderJson())
      .pipe(
        catchError(this.serviceError)
      );
  }

  deleteBudget(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getAuthHeaderJson())
      .pipe(
        catchError(this.serviceError)
      );
  }

  getAlerts(): Observable<Alert[]> {
    return this.alertsSubject.asObservable();
  }

  getCategories(): Observable<CategoryTransaction[]> {
    return this.http.get<CategoryTransaction[]>(
      `${environment.apiUrlv1}/CategoryTransaction`,
      this.getAuthHeaderJson()
    ).pipe(
      tap(response => console.log('Resposta da API:', response)),
      catchError(this.serviceError)
    );
  }

  private checkBudgetLimits() {
    this.getBudgets().subscribe(budgets => {
      const alerts: Alert[] = [];

      budgets.forEach(budget => {
        const percentageUsed = (budget.currentSpending / budget.limit) * 100;

        if (percentageUsed >= 100) {
          alerts.push({
            type: 'danger',
            message: `Orçamento ultrapassado na categoria ${budget.categoryTransactionId}!`,
            timestamp: new Date()
          });
        } else if (percentageUsed >= 80) {
          alerts.push({
            type: 'warning',
            message: `Categoria ${budget.categoryTransactionId} está próxima do limite (${percentageUsed.toFixed(1)}%)`,
            timestamp: new Date()
          });
        }
      });

      this.alertsSubject.next(alerts);
    });
  }
}
