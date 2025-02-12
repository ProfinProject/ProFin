import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '@narik/custom-validators';
import { ToastrService } from 'ngx-toastr';
import { FormBaseComponent } from '../../base-components/form-base.component';
import { registerUser } from '../models/registerUser';
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
  user!: registerUser;

  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) {

    super();

    this.validationMessages = {
      firstName: {
        required: 'Informe o nome do usuário',
        rangeLength: 'O campo nome deve possuir entre 2 e 100 caracteres '
      },
      lastName: {
        required: 'Informe o sobrenome do usuário',
        rangeLength: 'O campo sobrenome deve possuir entre 2 e 100 caracteres'
      },
      birthdate: {
        required: 'Informe o a data de nascimento',
        underage: 'O usuário de deve possuir mais de 18 anos'
      },
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
      firstName: ['', [Validators.required, CustomValidators.rangeLength([2, 15])]],
      lastName: ['', [Validators.required, CustomValidators.rangeLength([2, 15])]],
      birthdate: ['', [Validators.required, this.minimumAgeValidator(18)]],
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: senhaConfirm
    });
  }

  minimumAgeValidator(minAge: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const birthDate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      const isUnderage = age < minAge || (age === minAge && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)));

      return isUnderage ? { underage: true } : null;
    };
  }

  ngAfterViewInit(): void {
    super.configureFormValidationBase(this.formInputElements, this.registerForm);
  }

  addAccount() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);

      this.accountService.register(this.user)
        .subscribe({
          next: (response) => this.processSuccess(response), // Passa o retorno do register
          error: (error) => this.processFail(error) // Passa o erro para processFail
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
