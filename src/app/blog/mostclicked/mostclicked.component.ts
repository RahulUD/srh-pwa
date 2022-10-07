import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-mostclicked',
  templateUrl: './mostclicked.component.html',
  styleUrls: ['./mostclicked.component.scss']
})
export class MostclickedComponent implements OnInit {

  constructor() { }
  @Input()
  blogs : [] | undefined
  ngOnInit(): void {
  }

}
