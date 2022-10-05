import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { baseCategory } from 'src/types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<baseCategory> {
  constructor(private categoriesService: CategoryService) {}
  requestObj = {fields : '_id,title,description,cat1,cat2,cat3'}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.categoriesService.getCategories(this.requestObj)
  }
}
