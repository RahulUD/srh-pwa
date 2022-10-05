import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { baseCategory, categoryType } from 'src/types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService  {
  category$ : Observable<string[]> | undefined

  constructor(private http: HttpClient) {}
  getCategories(params: any) {
    return this.http.get<baseCategory[]>(environment.endPoints.categories, params);
  }
  getCat(cat_number: string, cat_title: string){
    return this.http.get<categoryType[]>(`${environment.endPoints.categories}/cat/${cat_number}/${cat_title}`);
  }
  postCategory(formData: any){
    return this.http.post<baseCategory>(environment.endPoints.categories, formData);
  }
  deleteCategory(id: string){
    return this.http.delete<baseCategory>(`${environment.endPoints.categories}/${id}`);
  }
}
