import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../../category/services/categories.service';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../Utils/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-category',
  standalone: true,
  templateUrl: './create-category.component.html',
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule
  ]
})

export class CreateCategoryComponent implements OnInit, AfterViewInit{

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  public category: Category;
  creationForm!: FormGroup;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};
  errorMessage: string = '';

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
      this.category = new Category();
      this.validationMessages = {
        name: {
          required: 'The name is required',
        },
        description: {
          required: 'The description is required',
        },
      };
  
      this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.creationForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.creationForm);
    });
  }

  addCategory(){
    if (this.creationForm.dirty && this.creationForm.valid) {
      this.category = Object.assign({}, this.category, this.creationForm.value);
      this.category.id = Guid.create().toString();
      this.saveCategory();
      
      //to do a toaster of success
    }
    else{
      //to do a toaster of error
    }
  }

  saveCategory(){
    this.categoryService.insertCategory(this.category)
      .subscribe({
        next: response => {
          console.log('success');
          this.category = new Category();
          this.router.navigateByUrl('/category');
        },
        error: e => {
          console.log(e.error.errors[0]);
          this.errorMessage = e.error.errors[0];
        }
      })
  }
}
