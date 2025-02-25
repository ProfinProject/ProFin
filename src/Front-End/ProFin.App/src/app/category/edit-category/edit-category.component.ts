import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChildren } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../../category/services/categories.service';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../Utils/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  templateUrl: './edit-category.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class EditCategoryComponent implements OnInit, AfterViewInit{

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  public category: Category;
  editionForm!: FormGroup;
  id!: string;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};
  errorMessage: string = '';
  private route = inject(ActivatedRoute);

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
    this.editionForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    let paramId = this.route.snapshot.paramMap.get('id');
    if(paramId != null && paramId != undefined)
    {
        this.category.id = this.id = paramId.toString();
        this.loadCategory();
    }
  }

  loadCategory(): void{
    this.categoryService.getCategoryById(this.id)
    .subscribe({
      next: response => {
        this.editionForm = this.fb.group({
          name: [response.name, Validators.required],
          description: [response.description, Validators.required]
        });
      },
      error: e => {
        if(e.status === 401)
          this.router.navigate(['/account/login']); 
        else{
          console.error('Erro ao carregar categoria:', e);
          this.errorMessage = 'Erro ao carregar categoria.';
        }
      }
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.editionForm);
    });
  }

  editCategory(){
    if (this.editionForm.dirty && this.editionForm.valid) {
      this.category = Object.assign({}, this.category, this.editionForm.value);
      this.updateCategory();
    }
  }

  updateCategory(){
    this.categoryService.updateCategory(this.category)
      .subscribe({
        next: response => {
          console.log('success');
          this.router.navigateByUrl('/category');
        },
        error: e => {
          console.log(e.error.errors[0]);
          this.errorMessage = e.error.errors[0];
        }
      })
  }
}
