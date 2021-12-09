import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Photo } from './models/Photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';



  // photos: Object[] = [];
  photos: Photo[] = [
  // photos = [
    {
      url:"https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg",
      description:"lion"
    },
    {
      url:"https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg",
      description:"lion"
    }
  ];
  url: string = "https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg";
  description: string = "lion";
  constructor(http: HttpClient){

    // var o = http
    // .get<Object[]>('https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/')
    // .subscribe(photos =>{

      //   console.log(photos);
      // this.photos = photos
      // } );

      console.log(this.photos);
  }

}
