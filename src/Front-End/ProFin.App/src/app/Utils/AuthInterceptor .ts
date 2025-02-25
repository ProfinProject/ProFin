import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageUtils } from './localstorage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    private localStorage = new LocalStorageUtils();


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.localStorage.getUserToken(); // Recupera o token do serviço de autenticação
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }

        return next.handle(req).pipe(
            catchError((error) => {
                if (error.status === 401) { // Verifica se o erro é relacionado à autorização (token inválido)
                    this.localStorage.cleanLocalDataUser(); // Faz o logout do usuário
                    this.router.navigate(['/account/login']); // Redireciona para a página de login
                }
                throw error;
            })
        );
    }
}
