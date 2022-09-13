import { Component, OnInit } from '@angular/core';
import { logingService } from '../login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[logingService]
})
export class UsersComponent implements OnInit {

  constructor(private logingService: logingService) { }

  ngOnInit(): void {
  }
log(){
  this.logingService.log('hello baby')
}
}
