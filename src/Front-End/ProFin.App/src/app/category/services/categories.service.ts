import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../category";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class CategoryService {

constructor(private http: HttpClient){ }


    getCategories() : Observable<Category[]>{
        return this.http.get<Category[]>(environment.apiUrlv1 + "CategoryTransaction");
    }

    insertCategory(Category: Category){
        return this.http.post(environment.apiUrlv1 + "CategoryTransaction", Category);
    }

    getCategoryById(Id: string) : Observable<Category>{
        return this.http.get<Category>(environment.apiUrlv1 + "CategoryTransaction/" + Id);
    }

    updateCategory(Category: Category){
        return this.http.put(environment.apiUrlv1  + "CategoryTransaction", Category);
    }

}