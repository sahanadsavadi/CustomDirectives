import { Component, OnInit } from '@angular/core';
import { logingService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[logingService]
})
export class HomeComponent implements OnInit {
  constructor(private logingService: logingService) {}

  ngOnInit(): void {}

  log(){
    console.log(this.logingService.title);
    this.logingService.log('hello baby')
  }

  onChange(event:Event){
this.logingService.title =(event.target as HTMLInputElement).value
  }
}
