import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, Router, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LocalStorageUtils } from '../../Utils/localstorage';
import { BaseGuard } from '../../services/base.guard';


@Injectable()
export class AccountGuard extends BaseGuard implements CanDeactivate<RegisterComponent>, CanActivate {

    constructor(override router: Router) {
        super(router);
    }

    canActivate() {
        if (this.localStorageUtils.getUserToken()) {
            this.router.navigate(['/home']);
        }

        return true;
    }

}