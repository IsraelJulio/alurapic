import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photo } from './models/Photo.model';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  constructor(private photoService: PhotoService){}

  ngOnInit(): void{
    this.photoService.SearchPhoto().subscribe(x => this.photosApi = x)
  }
}

