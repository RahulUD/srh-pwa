import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { responseType } from 'src/types/user';

@Component({
  selector: 'response-notification',
  templateUrl: './response-notification.component.html',
  styleUrls: ['./response-notification.component.scss'],
})
export class ResponseNotificationComponent implements OnInit {
  responseStatus !: responseType | null

  constructor(private sharedService : SharedService) {
    this.sharedService.responseObser$.subscribe((response)=> {this.responseStatus = response})
  }

  ngOnInit(): void {}

 
}
