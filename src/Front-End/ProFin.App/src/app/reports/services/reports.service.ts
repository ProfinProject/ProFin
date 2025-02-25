
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../services/base.service';
import { catchError, map, Observable } from 'rxjs';
import { TransactionReport } from '../models/transaction-report';


@Injectable()
export class ReportsService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    //TODO filtrar por data e usuario
    getTransactionsSince(date: string): Observable<TransactionReport[]> {
        return this.http
            .get<any[]>(this.UrlServiceV1 + "FinancialTransaction", this.getAuthHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));
    }
}