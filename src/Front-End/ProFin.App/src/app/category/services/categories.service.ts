import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()
export class CategoryService extends BaseService {
    constructor(private http: HttpClient) { super(); }


    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(environment.apiUrlv1 + "CategoryTransaction", this.getAuthHeaderJson());
    }

    insertCategory(Category: Category) {
        return this.http.post(environment.apiUrlv1 + "CategoryTransaction", Category, this.getAuthHeaderJson());
    }

    getCategoryById(Id: string): Observable<Category> {
        return this.http.get<Category>(environment.apiUrlv1 + "CategoryTransaction/" + Id, this.getAuthHeaderJson());
    }

    updateCategory(Category: Category) {
        return this.http.put(environment.apiUrlv1 + "CategoryTransaction/" + Category.id, Category, this.getAuthHeaderJson());
    }

    deleteCategory(id: string) {
        return this.http.delete(environment.apiUrlv1 + "CategoryTransaction/" + id, this.getAuthHeaderJson());
    }

    hasTransactions(id: string) : Observable<boolean> {
        return this.http.get<boolean>(environment.apiUrlv1 + "CategoryTransaction/HasTransaction/" + id, this.getAuthHeaderJson());
    }
}