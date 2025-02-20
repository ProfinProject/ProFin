import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { BaseService } from "../../services/base.service";
import { LocalStorageUtils } from "../../Utils/localstorage";

@Injectable()
export class CategoryService extends BaseService {
    private localStorage = new LocalStorageUtils();
    constructor(private http: HttpClient) { super(); }

    private getAuthHeaders() {
    const token = this.localStorage.getUserToken();
        return {
            headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`
            })
        };
    }

    getCategories() : Observable<Category[]>{
        return this.http.get<Category[]>(environment.apiUrlv1 + "CategoryTransaction", this.getAuthHeaders());
    }

    insertCategory(Category: Category){
        return this.http.post(environment.apiUrlv1 + "CategoryTransaction", Category, this.getAuthHeaders());
    }

    getCategoryById(Id: string) : Observable<Category>{
        return this.http.get<Category>(environment.apiUrlv1 + "CategoryTransaction/" + Id, this.getAuthHeaders());
    }

    updateCategory(Category: Category){
        return this.http.put(environment.apiUrlv1  + "CategoryTransaction/" + Category.id, Category, this.getAuthHeaders());
    }

    deleteCategory(id: string){
        return this.http.delete(environment.apiUrlv1  + "CategoryTransaction/" + id, this.getAuthHeaders());
    }
}