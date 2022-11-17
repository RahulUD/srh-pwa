import { Component, Input, OnInit } from '@angular/core';
import { isCurrentDate } from 'src/app/util/commonMethods';

@Component({
  selector: 'srh-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  createdDate!: string

  @Input()
  expiringDate!: string

  getIcon(){
    if(isCurrentDate(this.expiringDate)) return 'bi-archive-fill text-danger'
    if(isCurrentDate(this.createdDate)) return 'bi-file-earmark-plus-fill text-success'
    return 'bi-caret-right-fill'
  }
}
