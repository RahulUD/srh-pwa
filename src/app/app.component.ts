import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { LocalstorageService } from './service/localstorage.service';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pwa';
  message: any;
  constructor(
    public sharedService: SharedService,
    private localStorageService: LocalstorageService,
    private authServices: AuthService,
  ) {}
  ngOnInit(): void {
    const authData = this.localStorageService.getData(
      this.localStorageService.authuser
    );

    if (authData) {
      this.authServices.setAuthUser(authData);
    }
  }
}
