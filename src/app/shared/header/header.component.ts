import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { UserService } from 'src/app/service/user.service';
import { baseUser } from 'src/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: baseUser|null
  constructor(public sharedService : SharedService, public userService : UserService) { 
    this.userService.authUser$.subscribe((user)=> {this.user = user; console.log("xxxxx",user)})
    console.log(this.user)
  }

  ngOnInit(): void {
  
  }
}
