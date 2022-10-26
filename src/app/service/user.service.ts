import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { baseUser } from 'src/types/user';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authUserSubject = new BehaviorSubject<baseUser | null>(null);
  authUser$: Observable<baseUser | null> = this.authUserSubject.asObservable();

  isLoggedIn$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private localstorageService: LocalstorageService
  ) {
    this.isLoggedIn$ = this.authUser$
    .pipe(tap(user=>this.localstorageService.saveData(this.localstorageService.authuser, user)))
    .pipe(map((user) => !!user))
  }

  setAuthUser(baseUser: baseUser) {
    this.authUserSubject.next(baseUser);
  }
  deleteAuthUser() {
    this.authUserSubject.next(null);
    this.localstorageService.removeData(this.localstorageService.authuser)
  }

  getUser(email: string) {
    return this.http.get<baseUser>(`${environment.endPoints.users}/${email}`);
  }
  upsert(email: string, formData: baseUser) {
    return this.http.patch<baseUser>(
      `${environment.endPoints.users}/email/${email}`,
      formData
    );
  }
  signIn(email: string, password: string){
    return this.http.post<baseUser>(`${environment.endPoints.users}/signIn`,{email, password});
  }
}
