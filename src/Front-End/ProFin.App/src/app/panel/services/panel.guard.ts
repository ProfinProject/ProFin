import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BaseGuard } from '../../services/base.guard';
import { PanelHomeComponent } from '../components/panel-home/panel-home.component';

@Injectable()
export class PanelGuard extends BaseGuard implements CanActivate {

    constructor(protected override router: Router) { super(router); }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return super.validateClaims(route);
    }


}