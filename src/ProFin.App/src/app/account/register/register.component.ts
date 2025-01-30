import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '@narik/custom-validators';
import { ToastrService } from 'ngx-toastr'; import { FormBaseComponent } from '../../base-components/form-base.component';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html'
})
export class RegisterComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  errors: any[] = [];
  registerForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) {

    super();

    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    super.configureValidationMessagesBase(this.validationMessages);
  }

  ngOnInit(): void {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: senhaConfirm
    });
  }

  ngAfterViewInit(): void {
    super.configureFormValidationBase(this.formInputElements, this.registerForm);
  }

  addAccount() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);

      this.accountService.register(this.user)
        .subscribe({
          next: () => { this.processSuccess(this) },
          error: () => this.processFail(this)
        });

      this.unsavedChanges = false;
    }
  }

  processSuccess(response: any) {
    this.registerForm.reset();
    this.errors = [];

    this.accountService.LocalStorage.saveLocalDataUser(response);

    let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  processFail(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
