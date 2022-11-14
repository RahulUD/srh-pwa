import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'srh-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  ngOnInit(): void {}
  @Input()
  customclass!: string;

  @Input()
  avatar: string | undefined;

  @Input()
  dimension='30x30';

  imgDimension(){
    const [length, width] = this.dimension.split('x')
    return `height : ${length}px; width : ${width}px`
  }
  avatarImage(){
    return this.avatar ?? './../../../assets/img/imagePlaceholder.png'
  }
}
