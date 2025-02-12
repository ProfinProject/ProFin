import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


import { AccountRoutingModule } from './account.route';
import { AccountAppComponent } from './account.app.component';
import { AccountService } from './services/account.service';
import { AccountGuard } from './services/account.guard';

@NgModule({
  declarations: [
    AccountAppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    AccountService,
    AccountGuard]
})
export class AccountModule { }
