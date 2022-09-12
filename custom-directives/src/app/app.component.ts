import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = 'yellow';
  urlImage: string[] = ['../assets/img/backe.jpg','../assets/img/images.jpg','../assets/img/download.jpg'];
}
