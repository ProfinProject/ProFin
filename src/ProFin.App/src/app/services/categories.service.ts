import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../category/category";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService {

constructor(private http: HttpClient){ }

    protected ProFinApi: string = "https://localhost:7092/api/";

    getCategories() : Observable<Category[]>{
        return this.http.get<Category[]>(this.ProFinApi + "CategoryTransaction");
    }

    insertCategory(Category: Category){
        return this.http.post(this.ProFinApi  + "CategoryTransaction", Category);
    }

    getCategoryById(Id: string) : Observable<Category>{
        return this.http.get<Category>(this.ProFinApi + "CategoryTransaction/" + Id);
    }

    updateCategory(Category: Category){
        return this.http.put(this.ProFinApi  + "CategoryTransaction", Category);
    }

}