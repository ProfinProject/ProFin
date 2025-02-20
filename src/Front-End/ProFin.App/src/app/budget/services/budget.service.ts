import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap, catchError, throwError } from 'rxjs';
import { Budget } from '../models/budget.model';
import { Alert } from '../models/alert.model';
import { CategoryTransaction } from '../models/category-transaction.model';
import { environment } from '../../../environments/environment';
import { LocalStorageUtils } from '../../Utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = `${environment.apiUrlv1}Budget`;
  private budgets = new BehaviorSubject<Budget[]>([]);
  private alertsSubject = new BehaviorSubject<Alert[]>([]);
  private localStorage = new LocalStorageUtils();

  constructor(private http: HttpClient) {
    this.checkBudgetLimits();
  }

  private getAuthHeaders() {
    const token = this.localStorage.getUserToken();
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.apiUrl, this.getAuthHeaders());
  }

  getBudgetById(id: string): Observable<Budget> {
    return this.http.get<Budget>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  createBudget(budget: Budget): Observable<Budget> {
    console.log('Dados enviados:', budget);
    return this.http.post<Budget>(this.apiUrl, budget, this.getAuthHeaders())
      .pipe(
        tap(response => console.log('Resposta do create:', response)),
        catchError(error => {
          console.error('Erro ao criar budget:', error);
          return throwError(() => error);
        })
      );
  }

  updateBudget(id: string, budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.apiUrl}/${id}`, budget, this.getAuthHeaders());
  }

  deleteBudget(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  getAlerts(): Observable<Alert[]> {
    return this.alertsSubject.asObservable();
  }

  getCategories(): Observable<CategoryTransaction[]> {
    const token = this.localStorage.getUserToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    console.log('Token:', token);
    console.log('Headers:', headers);
    console.log('URL:', `${environment.apiUrlv1}/CategoryTransaction`);

    return this.http.get<CategoryTransaction[]>(
      `${environment.apiUrlv1}/CategoryTransaction`,
      { headers }
    ).pipe(
      tap(response => console.log('Resposta da API:', response)),
      catchError(error => {
        console.error('Erro na requisição:', error);
        return throwError(() => error);
      })
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
