import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BaseGuard } from '../../services/base.guard';
import { FinancialTransactionFormComponent } from '../components/financial-transaction-form/financial-transaction-form.component';
import { FinancialTransactionListComponent } from '../components/financial-transaction-list/financial-transaction-list.component';

@Injectable()
export class FinancialTransactionsGuard extends BaseGuard implements CanActivate {

    constructor(protected override router: Router) { super(router); }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return super.validateClaims(route);

    }


}