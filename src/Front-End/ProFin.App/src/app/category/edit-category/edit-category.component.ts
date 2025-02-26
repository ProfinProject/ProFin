import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChildren } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../../category/services/categories.service';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../Utils/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBaseComponent } from '../../base-components/form-base.component';

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

export class EditCategoryComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  public category: Category;
  editionForm!: FormGroup;
  id!: string;
  errorMessage: string = '';
  private route = inject(ActivatedRoute);

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
    super();
    this.category = new Category();
    this.validationMessages = {
      name: {
        required: 'The name is required',
      },
      description: {
        required: 'The description is required',
      },
    };

    super.configureValidationMessagesBase(this.validationMessages);
  }

  ngOnInit(): void {
    this.editionForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    let paramId = this.route.snapshot.paramMap.get('id');
    if (paramId != null && paramId != undefined) {
      this.category.id = this.id = paramId.toString();
      this.loadCategory();
    }
  }

  loadCategory(): void {
    this.categoryService.getCategoryById(this.id)
      .subscribe({
        next: response => {
          this.editionForm = this.fb.group({
            name: [response.name, Validators.required],
            description: [response.description, Validators.required]
          });
        },
        error: e => {
          if (e.status === 401)
            this.router.navigate(['/account/login']);
          else {
            console.error('Erro ao carregar categoria:', e);
            this.errorMessage = 'Erro ao carregar categoria.';
          }
        }
      });
  }

  ngAfterViewInit(): void {
    super.configureFormValidationBase(this.formInputElements, this.editionForm);
  }

  editCategory() {
    if (this.editionForm.dirty && this.editionForm.valid) {
      this.category = Object.assign({}, this.category, this.editionForm.value);
      this.updateCategory();
    }
  }

  updateCategory() {
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

    this.unsavedChanges = false;
  }
}
