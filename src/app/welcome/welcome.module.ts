import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';
import { ElementModule } from '../element/element.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutComponent, ContactComponent, WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
    ElementModule,
    ReactiveFormsModule,
  ],
})
export class WelcomeModule {}
