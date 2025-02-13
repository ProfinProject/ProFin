import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BaseGuard } from '../../services/base.guard';
import { TransactionsReportComponent } from '../transactions-report/transactions-report.component';

@Injectable()
export class ReportsGuard extends BaseGuard implements CanActivate {

    constructor(protected override router: Router) { super(router); }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return super.validateClaims(route);
    }


}