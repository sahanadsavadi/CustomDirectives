import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = 'yellow';
  images: string[] = ['/assets/backe.jpeg', '/assets/download.jpeg', '/assets/images.jpeg'];
}
