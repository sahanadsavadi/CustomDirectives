import { Component, OnInit, Self } from '@angular/core';
import { MyCompanyService } from '../my-company.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
})
export class UserComponent implements OnInit {

  constructor(@Self() private  myComponentService:MyCompanyService) { }

  ngOnInit(): void {
  }

}
