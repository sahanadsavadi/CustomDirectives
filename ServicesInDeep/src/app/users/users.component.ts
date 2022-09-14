import { Component, OnInit } from '@angular/core';
import { MyCompanyService } from '../my-company.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MyCompanyService],
})
export class UsersComponent implements OnInit {
  constructor(privatae: MyCompanyService) {}

  ngOnInit(): void {}
}
