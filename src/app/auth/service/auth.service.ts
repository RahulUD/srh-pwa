import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { environment } from 'src/environments/environment';
import { baseUser, signUpFormData } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUserSubject = new BehaviorSubject<baseUser | null>(null);
  authUser$: Observable<baseUser | null> = this.authUserSubject.asObservable();
  isLoggedIn$: Observable<boolean>;

  setAuthUser(baseUser: baseUser) {
    this.authUserSubject.next(baseUser);
  }

  constructor(private http: HttpClient, private localStorageService : LocalstorageService) {
    this.isLoggedIn$ = this.authUser$.pipe(map((user) => !!user));
  }

  signIn(email: string, password: string) {
    return this.http.post<baseUser>(`${environment.endPoints.users}/signIn`, {
      email,
      password,
    });
  }
  singUp(signUpFormData : signUpFormData){
    return this.http.post<baseUser>(`${environment.endPoints.users}/signUp`,signUpFormData);
  }
  logout(){
    this.authUserSubject.next(null)
    this.localStorageService.removeData(this.localStorageService.authuser)
  }
}
