import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap, catchError, throwError } from 'rxjs';
import { FinancialTransaction } from '../models/financial-transaction.model';
import { Alert } from '../models/alert.model';
import { CategoryTransaction } from '../models/category-transaction.model';
import { environment } from '../../../environments/environment';
import { LocalStorageUtils } from '../../Utils/localstorage';

@Injectable({
  providedIn: 'root'
})
export class FinancialTransactionService {
  private apiUrl = `${environment.apiUrlv1}FinancialTransaction`;
  private financialTransactions = new BehaviorSubject<FinancialTransaction[]>([]);
  private alertsSubject = new BehaviorSubject<Alert[]>([]);
  private localStorage = new LocalStorageUtils();

  constructor(private http: HttpClient) {
    //this.checkFinancialTransactionsLimits();
  }

  private getAuthHeaders() {
    const token = this.localStorage.getUserToken();
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }

  getFinancialTransactions(): Observable<FinancialTransaction[]> {
    return this.http.get<FinancialTransaction[]>(this.apiUrl, this.getAuthHeaders());
  }

  getFinancialTransactionById(id: string): Observable<FinancialTransaction> {
    return this.http.get<FinancialTransaction>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  createFinancialTransaction(financialTransaction: FinancialTransaction): Observable<FinancialTransaction> {
    console.log('Dados enviados:', financialTransaction);
    return this.http.post<FinancialTransaction>(this.apiUrl, financialTransaction, this.getAuthHeaders())
      .pipe(
        tap(response => console.log('Resposta do create:', response)),
        catchError(error => {
          console.error('Erro ao criar transação financeira:', error);
          return throwError(() => error);
        })
      );
  }

  updateFinancialTransaction(id: string, financialTransaction: FinancialTransaction): Observable<FinancialTransaction> {
    return this.http.put<FinancialTransaction>(`${this.apiUrl}/${id}`, financialTransaction, this.getAuthHeaders());
  }

  deleteFinancialTransaction(id: string): Observable<void> {
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

  // private checkFinancialTransactionsLimits() {
  //   this.getFinancialTransactions().subscribe(financialTransactions => {
  //     const alerts: Alert[] = [];

  //     financialTransactions.forEach(financialTransaction => {
  //       const percentageUsed = (financialTransaction.currentSpending / financialTransaction.limit) * 100;

  //       if (percentageUsed >= 100) {
  //         alerts.push({
  //           type: 'danger',
  //           message: `Orçamento ultrapassado na categoria ${financialTransaction.categoryTransactionId}!`,
  //           timestamp: new Date()
  //         });
  //       } else if (percentageUsed >= 80) {
  //         alerts.push({
  //           type: 'warning',
  //           message: `Categoria ${financialTransaction.categoryTransactionId} está próxima do limite (${percentageUsed.toFixed(1)}%)`,
  //           timestamp: new Date()
  //         });
  //       }
  //     });

  //     this.alertsSubject.next(alerts);
  //   });
  // }
}
