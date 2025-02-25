import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BaseGuard } from '../../services/base.guard';
import { BudgetFormComponent } from '../components/budget-form/budget-form.component';
import { BudgetListComponent } from '../components/budget-list/budget-list.component';

@Injectable()
export class BudgetsGuard extends BaseGuard implements CanActivate {

    constructor(protected override router: Router) { super(router); }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return super.validateClaims(route);
    }


}