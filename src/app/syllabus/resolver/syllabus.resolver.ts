import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SyllabusService } from 'src/app/service/syllabus.service';

@Injectable({
  providedIn: 'root'
})
export class SyllabusResolver implements Resolve<boolean> {
  constructor(private modelService: SyllabusService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.modelService.getById(route.params['_id'])
  }
}
