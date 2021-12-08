import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos: Object[] = [];

constructor(http: HttpClient){
  http
  .get<Object[]>('https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/')
  .subscribe(photo => this.photos = photo);

}

}
