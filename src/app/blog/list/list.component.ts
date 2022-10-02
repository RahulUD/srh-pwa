import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  blogType!: any;
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.blogType = data['blogType'];
    });
  }
}
