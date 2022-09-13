import { Component, OnInit } from '@angular/core';
import { logingService } from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[logingService]
})
export class UserComponent implements OnInit {

  constructor(private logingService: logingService) { }

  ngOnInit(): void {
  }
  log(){
    this.logingService.log('hello baby')
  }
}
