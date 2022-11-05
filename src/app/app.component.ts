import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './service/localstorage.service';
import { NotificationService } from './service/notification.service';
import { SharedService } from './service/shared.service';
import { UserService } from './service/user.service';

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
    private userServices: UserService,
    private messagingService: NotificationService
  ) {}
  ngOnInit(): void {
    const authData = this.localStorageService.getData(
      this.localStorageService.authuser
    );

    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;

    if (authData) {
      this.userServices.setAuthUser(authData);
    }
  }
}
