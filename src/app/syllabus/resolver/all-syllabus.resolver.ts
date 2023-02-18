import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SyllabusService } from 'src/app/service/syllabus.service';
import { baseSyllabus } from 'src/types/syllabus';

@Injectable({
  providedIn: 'root'
})
export class AllSyllabusResolver implements Resolve<any> {
  constructor(private modelService: SyllabusService) {}
  requestObj = {fields : 'title, markdown'}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    return this.modelService.get(this.requestObj)
  }
}
