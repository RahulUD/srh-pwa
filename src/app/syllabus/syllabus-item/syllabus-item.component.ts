import { Component, Input, OnInit } from '@angular/core';
import { responseSyllabus } from 'src/types/syllabus';

@Component({
  selector: 'syllabus-item',
  templateUrl: './syllabus-item.component.html',
  styleUrls: ['./syllabus-item.component.scss']
})
export class SyllabusItemComponent implements OnInit {

  constructor() { }

  @Input() sybbalusData !: responseSyllabus
  ngOnInit(): void {
  }
}
