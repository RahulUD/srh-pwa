import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './service/localstorage.service';
import { SharedService } from './service/shared.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pwa';
  constructor(
    public sharedService: SharedService,
    private localStorageService: LocalstorageService,
    private userServices: UserService
  ) {}
  ngOnInit(): void {
    const authData = this.localStorageService.getData(this.localStorageService.authuser)

    if(authData){
      this.userServices.setAuthUser(authData)
    }
  }
}
