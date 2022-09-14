import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const USSER_AGENT = new InjectionToken<string>('USSER_AGENT');
export const SCREEN_WIDTH = new InjectionToken<string>('SCREEN_WIDTH');
export const SCREEN_HEIGHT = new InjectionToken<string>('USSER_AGENT');
export function divaceNameProvaider(
  userAgent: string,
  screenWidth: string,
  screenHeight: string
): string {
  return userAgent + '' + screenWidth + '' + screenHeight;
}
export const DIVACE_NAME_TOKEN = new InjectionToken<string>(
  'DIVACE_NAME_TOKEN'
);
@NgModule({
  declarations: [AppComponent, UserComponent, UsersComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: USSER_AGENT, useValue: window.navigator.userAgent },
    { provide: SCREEN_WIDTH, useValue: window.screen.width },
    { provide: SCREEN_HEIGHT, useValue: window.screen.height },
    {
      provide: DIVACE_NAME_TOKEN,
      useFactory: divaceNameProvaider,
      deps: [USSER_AGENT, SCREEN_HEIGHT, SCREEN_WIDTH],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
