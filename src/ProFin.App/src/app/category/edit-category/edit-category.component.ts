import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChildren } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../../category/services/categories.service';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../Utils/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
})

export class EditCategoryComponent implements OnInit, AfterViewInit{

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  public category: Category;
  editionForm!: FormGroup;
  id!: string;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};
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
        console.log(e);
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
      //to do a toaster of success
    }
    else{
      //to do a toaster of error
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
          console.log(e);
        }
      })
  }
}
