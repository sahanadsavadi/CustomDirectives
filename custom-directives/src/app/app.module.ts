import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorfulDirective } from './colorful.directive';
import { AppHighlightDirective } from './app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
