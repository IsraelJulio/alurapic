import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] =[];
  rows: any[] =[];


  ngOnInit(): void {
    this.rows = this.groupColums(this.photos);
  }

  groupColums(photos: Photo[]){
    const newRows = [];
    for (let i = 0; i < photos.length; i+=2) {
      newRows.push(photos.slice(i, i + 2));
    }
    return newRows;
  }




  constructor() { }
}
