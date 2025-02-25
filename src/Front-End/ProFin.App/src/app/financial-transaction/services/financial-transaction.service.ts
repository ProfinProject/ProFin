import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap, catchError, throwError } from 'rxjs';
import { FinancialTransaction } from '../models/financial-transaction.model';
import { Alert } from '../models/alert.model';
import { CategoryTransaction } from '../models/category-transaction.model';
import { environment } from '../../../environments/environment';
import { LocalStorageUtils } from '../../Utils/localstorage';
import { Category } from '../../category/models/category';
import { BaseService } from '../../services/base.service';

@Injectable({
  providedIn: 'root'
})
export class FinancialTransactionService extends BaseService {
  private apiUrl = `${environment.apiUrlv1}FinancialTransaction`;
  private financialTransactions = new BehaviorSubject<FinancialTransaction[]>([]);
  private alertsSubject = new BehaviorSubject<Alert[]>([]);

  constructor(private http: HttpClient) {
    super();
    //this.checkFinancialTransactionsLimits();
  }

  getFinancialTransactions(): Observable<FinancialTransaction[]> {
    return this.http.get<FinancialTransaction[]>(this.apiUrl, this.getAuthHeaderJson());
  }

  getFinancialTransactionById(id: string): Observable<FinancialTransaction> {
    return this.http.get<FinancialTransaction>(`${this.apiUrl}/${id}`, this.getAuthHeaderJson());
  }

  createFinancialTransaction(financialTransaction: FinancialTransaction): Observable<FinancialTransaction> {
    return this.http.post<FinancialTransaction>(this.apiUrl, financialTransaction, this.getAuthHeaderJson())
      .pipe(
        tap(response => console.log('Resposta do create:', response)),
        catchError(error => {
          console.error('Erro ao criar transação financeira:', error);
          return throwError(() => error);
        })
      );
  }

  updateFinancialTransaction(id: string, financialTransaction: FinancialTransaction): Observable<FinancialTransaction> {
    return this.http.put<FinancialTransaction>(`${this.apiUrl}/${id}`, financialTransaction, this.getAuthHeaderJson());
  }

  deleteFinancialTransaction(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getAuthHeaderJson());
  }

  getAlerts(): Observable<Alert[]> {
    return this.alertsSubject.asObservable();
  }

  getCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(
      `${environment.apiUrlv1}/CategoryTransaction`,
      this.getAuthHeaderJson()
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
