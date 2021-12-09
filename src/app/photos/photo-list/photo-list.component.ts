import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

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
