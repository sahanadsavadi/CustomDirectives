import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompanyService } from './my-company.service';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

export function myCompanyServiceProvaider(): MyCompanyService {
  return new MyCompanyService();
}
export const MYCOMPANY_SERVICE_TOKEN = new InjectionToken<MyCompanyService>(
  'MYCOMPANY_SERVICE_TOKEN'
);

@NgModule({
  declarations: [AppComponent, UserComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {provide: MYCOMPANY_SERVICE_TOKEN,useFactory: myCompanyServiceProvaider, },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
