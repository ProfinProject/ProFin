import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { LocalStorageUtils } from '../Utils/localstorage';


export abstract class BaseGuard {

    private localStorageUtils = new LocalStorageUtils();

    constructor(protected router: Router) { }

    protected validateClaims(routeAc: ActivatedRouteSnapshot): boolean {

        if (!this.localStorageUtils.getUserToken()) {
            this.router.navigate(['/account/login/'], { queryParams: { returnUrl: this.router.url } });
        }

        let user = this.localStorageUtils.getUser();

        let claim: any = routeAc.data[0];
        if (claim !== undefined) {
            let claim = routeAc.data[0]['claim'];

            if (claim) {
                if (!user.claims) {
                    this.navegateNotAllowed();
                }

                let userClaims = user.claims.find((x: { type: string; value: string }) => x.type === claim.nome);

                if (!userClaims) {
                    this.navegateNotAllowed();
                }

                let valoresClaim = userClaims.value as string;

                if (!valoresClaim.includes(claim.valor)) {
                    this.navegateNotAllowed();
                }
            }
        }

        return true;
    }

    private navegateNotAllowed() {
        this.router.navigate(['/not-allowed']);
    }
}