import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,ReactiveFormsModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  providers: [ Title  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
