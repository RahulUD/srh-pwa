import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  constructor( public sharedService: SharedService) { }
  
  

  width = '40px'
  height = '40px'

  ngOnInit(): void {
  }

}
