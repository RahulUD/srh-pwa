import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { DashboardsidebarComponent } from './dashboardsidebar/dashboardsidebar.component';
import { ModelComponent } from './model/model.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ToastComponent } from './toast/toast.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { SociallinksComponent } from './sociallinks/sociallinks.component';
import { SocialItemComponent } from './sociallinks/social-item/social-item.component';
import { DialogueComponent } from './core/dialogue/dialogue.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    DashboardheaderComponent,
    DashboardsidebarComponent,
    ModelComponent,
    ToasterComponent,
    ToastComponent,
    MarqueeComponent,
    SociallinksComponent,
    SocialItemComponent,
    DialogueComponent,
    PaginationComponent,
    

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
    DashboardsidebarComponent,
    ModelComponent,
    ToasterComponent,
    MarqueeComponent,
    SociallinksComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
