
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../services/base.service';
import { catchError, map, Observable } from 'rxjs';
import { TransactionReport } from '../models/transaction-report';


@Injectable()
export class ReportsService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    getTransactionsSince(date: string): Observable<TransactionReport[]> {
        console.log(date);
        return this.http
            .get<any[]>(`${this.UrlServiceV1}FinancialTransaction/since/${date}`, this.getAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));
    }
}