import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../../category/services/categories.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-category',
  standalone: true,
  templateUrl: './list-category.component.html',
  imports: [CommonModule, RouterLink]
})

export class ListCategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService, private router:Router) {}

  public categories: Category[] = [];
  errorMessage: string = '';
  ngOnInit(): void {
   this.loadCategories();
  }

  loadCategories(): void{
    this.categoryService.getCategories()
    .subscribe({
      next: result => 
        { 
          this.categories = result,
          console.log(result);
        },
        error : e => {
          if(e.status === 401)
            this.router.navigate(['/account/login']); 
          else{
            console.error('Erro ao carregar categoria:', e);
            this.errorMessage = 'Erro ao carregar categorias.';
          }
        }
  });
  }

  onDelete(id: string): void {
    this.categoryService.hasTransactions(id).subscribe({
      next: (hasTransaction) => {
        if(hasTransaction)
        {
          if (confirm('Essa categoria possui transações, se você deletar as transações serão movidas para a categoria "Outros" deseja continuar?')) {
            this.delete(id);
          };
        }
      },
      error: (error) => {
        console.error('Erro ao excluir categoria:', error);
        this.errorMessage = 'Erro ao excluir categoria:' + error;
      }
    })

  
  }

  popupDeleQuestion(id: string): void{
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
        this.delete(id);
      };
   }

    delete(id: string): void{
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          console.log('Categoria excluído com sucesso');
          this.loadCategories(); // Recarrega a lista após excluir
        },
        error: (error) => {
          console.error('Erro ao excluir categoria:', error);
          this.errorMessage = 'Erro ao excluir categoria:' + error;
        }
      });
    }
}
