import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../category/category";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService {

constructor(private http: HttpClient){ }

    protected ProFinApi: string = "https://localhost:7092/api/";

    getCategories() : Observable<Category[]>{
        return this.http.get<Category[]>("https://localhost:7092/api/CategoryTransaction");
    }
}