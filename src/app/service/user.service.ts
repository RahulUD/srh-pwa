import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { baseUser } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authUserSubject = new BehaviorSubject<baseUser | null>(null);
  authUser$: Observable<baseUser | null> = this.authUserSubject.asObservable();

  isLoggedIn$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.authUser$.pipe(map((user) => !!user));
  }

  setAuthUser(baseUser: baseUser){
    this.authUserSubject.next(baseUser)
  }
  deleteAuthUser(){
    this.authUserSubject.next(null)
  }
  
  getUser(email: string) {
    return this.http.get<baseUser>(`${environment.endPoints.users}/${email}`);
  }
  upsert(email: string, formData: baseUser) {
    return this.http.patch<baseUser>(`${environment.endPoints.users}/email/${email}`, formData);
  }
}
