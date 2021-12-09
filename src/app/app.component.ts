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



  photosApi: Photo[] = [];

  photos: Photo[] = [
  // photos = [
    {
      url:"https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg",
      description:"lion",
      id:'k'
    },
    {
      url:"https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg",
      description:"lion",
      id:'k'
    }
  ];

  constructor(http: HttpClient){

    http
    .get<Photo[]>('https://api.thecatapi.com/v1/images/search')
    .subscribe(photos =>{
      this.photosApi = photos
    } );


  }

}

