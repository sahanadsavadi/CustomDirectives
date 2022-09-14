import { Component, Inject, Optional } from '@angular/core';
import { DIVACE_NAME_TOKEN } from './app.module';

import { MyCompanyService } from './my-company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(DIVACE_NAME_TOKEN) private devaiceName: string,
   @Optional() private myComponentService: MyCompanyService
  ) {
    console.log(devaiceName);
  }
  title = 'ServicesInDeep';
}
