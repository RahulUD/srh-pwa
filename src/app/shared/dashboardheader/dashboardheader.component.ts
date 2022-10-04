import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss']
})
export class DashboardheaderComponent implements OnInit {

  constructor(public sharedService : SharedService) { }

  ngOnInit(): void {
  }

}
