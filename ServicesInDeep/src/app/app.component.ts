import { Component, Inject } from '@angular/core';
import { MYCOMPANY_SERVICE_TOKEN } from './app.module';
import { MyCompanyService } from './my-company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {

  constructor(@Inject(MYCOMPANY_SERVICE_TOKEN) private service:MyCompanyService){

  }
  title = 'ServicesInDeep';
}
