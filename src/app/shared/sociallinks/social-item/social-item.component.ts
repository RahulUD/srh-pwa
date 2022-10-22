import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss']
})
export class SocialItemComponent implements OnInit {

  constructor() { }
  
  @Input()
  social : any

  @Input()
  isWhiteAndBlack = false

  ngOnInit(): void {
  }

}
