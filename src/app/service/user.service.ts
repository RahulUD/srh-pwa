import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { baseUser } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<baseUser>
  _user = new Subject<baseUser>();

  constructor(private http: HttpClient) {
    this.user$ = this._user.asObservable();
  }
  
  getUser(email: string) {
    return this.http.get<baseUser>(`${environment.endPoints.users}/${email}`);
  }
  upsert(email: string, formData: baseUser) {
    return this.http.patch<baseUser>(`${environment.endPoints.users}/email/${email}`, formData);
  }
}