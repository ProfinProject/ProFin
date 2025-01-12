import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Data, Select2Module } from 'ng-select2-component';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validations',
  standalone: true,
  imports: [
    NgClass,
    NgbModule,
    FormsModule,
    TitleCasePipe,
    Select2Module,
    Select2Component,
    ReactiveFormsModule,
    BreadcrumbComponent],
  templateUrl: './form-validations.component.html',
  styleUrl: './form-validations.component.css'
})
export class FormValidationsComponent {

  breadcrumbList = {
    subTitle: 'Validation',
    menu_path: 'Form',
    currentURL: 'Validation',
  }
  hide: boolean = false;
  show_pass() {
    this.hide = !this.hide;
  }
  hidePsw: boolean = true;
  createForm: FormGroup;
  verticalForm: FormGroup;
  submitted: any = false;
  submitted_V: any = false;
  constructor(private fb: FormBuilder) {
    this.createForm = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      suggestions: ['', Validators.required],
      bestSkill: ['', Validators.required],
      currency: ['', Validators.required],
      website: ['', Validators.required],
      phone: ['', Validators.required],
      digits: ['', Validators.required],
      number: ['', Validators.required],
      range: ['', Validators.required],
      conditions: ['', Validators.required]
    });
    this.verticalForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      check_me: ['', Validators.required],
    });
  }
  get f() {
    return this.createForm.controls;
  }
  get vf() {
    return this.verticalForm.controls;
  }
  submit() {    // Submit Form 
    this.submitted = true;
    //  console.log('Submit Button Click', this.createForm.value);
  }
  verticalSubmit() {
    this.submitted_V = true;
    // console.log('Submit Button Click', this.verticalForm.value);
  }
  pswShowHide() {
    this.hidePsw = !this.hidePsw;
  }
  hide_show: boolean = false;
  passwordHide() {
    this.hide_show = !this.hide_show;
  }

  data: Select2Data = [
    {
      value: 'please select',
      label: 'Please select',
      data: { name: 'Please select' }
    },
    {
      value: 'html',
      label: 'HTML',
      data: { name: 'HTML' }
    },
    {
      value: 'css',
      label: 'CSS',
      data: { name: 'CSS' }
    },
    {
      value: 'JavaScript',
      label: 'JavaScript',
      data: { name: 'HTMJavaScriptL' }
    },
    {
      value: 'angular',
      label: 'Angular',
      data: { name: 'Angular' }
    },
    {
      value: 'react',
      label: 'React',
      data: { name: 'React' }
    },
    {
      value: 'Vue.js',
      label: 'Vue.js',
      data: { name: 'Vue.js' }
    },
    {
      value: 'ruby',
      label: 'Ruby',
      data: { name: 'Ruby' }
    },
    {
      value: 'php',
      label: 'PHP',
      data: { name: 'PHP' }
    },
    {
      value: 'ASP.NET',
      label: 'ASP.NET',
      data: { name: 'ASP.NET' }
    },
    {
      value: 'python',
      label: 'Python',
      data: { name: 'Python' }
    },
    {
      value: 'MySQL',
      label: 'MySQL',
      data: { name: 'MySQL' }
    },
  ]
}
