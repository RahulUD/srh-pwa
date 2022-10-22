import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sociallinks',
  templateUrl: './sociallinks.component.html',
  styleUrls: ['./sociallinks.component.scss']
})
export class SociallinksComponent implements OnInit {

  constructor() { }
  @Input()
  isWhiteAndBlack = false

  ngOnInit(): void {
  }


  socialMedia = [
    {
      name: 'facebook',
      class: 'bi bi-facebook text-primary',
      url : 'www.facebook.com',
      font : ''
    },
    {
      name: 'Youtube',
      class: 'bi bi-youtube text-danger',
      url : 'www.youtube.com',
      font : ''
    },
    {
      name: 'Twitter',
      class: 'bi bi-twitter text-primary',
      url : 'www.facebook.com',
      font : ''
    },
    {
      name: 'Telegram',
      class: 'bi bi-telegram text-primary',
      url : 'www.facebook.com',
      font : ''
    },
    {
      name: 'Whatsapp',
      class: 'bi bi-whatsapp text-success',
      url : 'www.facebook.com',
      font : ''
    },
    {
      name: 'Instagram',
      class: 'bi bi-instagram',
      url : 'www.facebook.com',
      font : ''
    }
  ]

}
