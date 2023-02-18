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
import { DragDropFileUploadDirective } from './directive/drag-drop-file-upload.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { CountCardComponent } from './count-card-group/count-card/count-card.component';
import { CountCardGroupComponent } from './count-card-group/count-card-group.component';
import { CommentComponent } from './comment/comment.component';
import { NewCommentComponent } from './comment/new-comment/new-comment.component';
import { CommentItemComponent } from './comment/comment-item/comment-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';

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
    DragDropFileUploadDirective,
    PaginationComponent,
    CountCardComponent,
    CountCardGroupComponent,
    CommentComponent,
    NewCommentComponent,
    CommentItemComponent,
    LoginPromptComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
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
    IconComponent,
    DragDropFileUploadDirective,
    PaginationComponent,
    CountCardGroupComponent,
    CommentComponent,
    LoginPromptComponent,
    AvatarComponent
  ]
})
export class SharedModule { }
