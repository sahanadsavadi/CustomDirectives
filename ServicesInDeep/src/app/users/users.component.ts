import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interface/app-interface';
import { MyCompanyService } from '../my-company.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MyCompanyService],
})
export class UsersComponent implements OnInit {
  users?: IUser[];

  constructor(private MyCompanyService: MyCompanyService) {}

  ngOnInit(): void {
    this.users = this.MyCompanyService.user;
  }
}
