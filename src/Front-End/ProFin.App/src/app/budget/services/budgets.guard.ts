import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BaseGuard } from '../../services/base.guard';

@Injectable()
export class BudgetsGuard extends BaseGuard implements CanActivate {

    constructor(protected override router: Router) { super(router); }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return super.validateClaims(route);
    }
}