import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from '../../services/base.service';

@Injectable()
export class AccountService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    register(user: User): Observable<User> {
        let response = this.http
            .post(this.UrlServiceV1 + 'register', user, this.getHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    login(user: User): Observable<User> {
        let response = this.http
            .post(this.UrlServiceV1 + 'login', user, this.getHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }
}