import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/Photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnChanges {
  @Input() photosApi: Photo[] = [];
  values= '';

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }

  photos: Photo[] = [
    {
      url: 'https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg',
      description: 'k',
      id: 'k',
    },
    {
      url: 'https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg',
      description: 'kd',
      id: 'kd',
    },
    {
      url: 'https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg',
      description: 'kdv',
      id: 'kdv',
    },
    {
      url: 'https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg',
      description: 'kdvc',
      id: 'kdvc',
    },
    {
      url: 'https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg',
      description: 'kkkk',
      id: 'kkkk',
    },
    {
      url: 'https://img.elo7.com.br/product/main/3722582/quadro-mosaico-4-pecas-rosto-do-leao-preto-e-branco-canvas.jpg',
      description: 'o',
      id: 'o',
    },
  ];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['photosApi']) console.log('deubommm');
  }

  ngOnInit(): void {
    const parametros = this.activatedRoute.snapshot.params['seuparametro'];
    for (let i = 0; i < 5; i++) {
      this.photoService
        .SearchPhoto(parametros)
        .subscribe((x) => (this.photosApi = x));
    }
  }
}
