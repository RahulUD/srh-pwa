import { Component, Input, OnInit } from '@angular/core';
import * as colors from '../../../util/colors'
@Component({
  selector: 'blog-mostclickeditem',
  templateUrl: './mostclickeditem.component.html',
  styleUrls: ['./mostclickeditem.component.scss']
})
export class MostclickeditemComponent implements OnInit {

  colorArr: string[]
  color: string
  @Input()
  blog!: { title: string; description: string; _id: string };
  constructor() {
    this.colorArr = colors.darkColors
    this.color = this.colorArr[Math.floor(Math.random()* this.colorArr.length)]
   }

  ngOnInit(): void {
  }
}
