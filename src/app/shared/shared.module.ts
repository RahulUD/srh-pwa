import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { DashboardsidebarComponent } from './dashboardsidebar/dashboardsidebar.component';


@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    DashboardheaderComponent,
    DashboardsidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports : [
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    DashboardheaderComponent,
    DashboardsidebarComponent
  ]
})
export class SharedModule { }
