import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { totalBlogs } from 'src/app/util/textConstant';
import { dataCardType } from 'src/types/common';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.scss'],
})
export class DashboardhomeComponent implements OnInit {
  constructor(private router : Router) {}
  totalBlogs =totalBlogs
  countCardData: dataCardType[] = [
    {
      cardClass: 'bg-primary text-light rounded',
      iconClasses: 'bi-view-list fs-2',
      title: totalBlogs,
      count: '4005',
    },
    {
      cardClass: 'bg-success text-light rounded',
      iconClasses: 'bi-file-earmark-plus-fill fs-2',
      title: 'New Blogs',
      count: '1',
    },
    {
      cardClass: 'text-fire text-light rounded',
      title: 'Hot Blogs',
      iconClasses: 'bi-fire fs-2',
      count: '45',
    },
   
    {
      cardClass: 'bg-danger text-light rounded',
      iconClasses: 'bi-archive-fill fs-2',
      title: 'Deleted Blog',
      count: '001',
    },
    
  ];

  ngOnInit(): void {}

  cardItemClickHandler($event : any){
    switch ($event.title) {
      case totalBlogs:
        this.router.navigate(['/dashboard/blogs/list'])
        break;
    
      default:
        break;
    }
  }
}
