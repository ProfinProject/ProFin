import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from '../../Utils/localstorage';
//import { LocalStorageUtils } from 'src/app/utils/localStorage';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  standalone: false
})
export class MenuLoginComponent {

  token: string = "";
  user: any;
  email: string = "";
  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) { }

  usuarioLogado(): boolean {
    this.token = this.localStorageUtils.getUserToken();
    this.user = this.localStorageUtils.getUser();

    if (this.user)
      this.email = this.user.email;

    return this.token !== "";
  }

  logout() {
    this.localStorageUtils.cleanLocalDataUser();
    this.router.navigate(['/home']);
  }
}
