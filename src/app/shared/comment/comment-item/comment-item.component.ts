import { Component, Input, OnInit } from '@angular/core';
import { humanDate } from 'src/app/util/commonMethods';
@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  humanDate=humanDate
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  comment : any
}
