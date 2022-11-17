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
import { AvatarComponent } from './avatar/avatar.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { ResponseNotificationComponent } from './response-notification/response-notification.component';
import { IconComponent } from './icon/icon.component';



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
    AvatarComponent,
    UsermenuComponent,
    ResponseNotificationComponent,
    IconComponent,
    

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
    ResponseNotificationComponent,
    IconComponent
  ]
})
export class SharedModule { }
