import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Photo } from "src/app/models/Photo.model";

@Injectable({providedIn: 'root'})

export class PhotoService{


SearchPhoto() {
  return this.http
    .get<Photo[]>('https://api.thecatapi.com/v1/images/search');

}



  constructor(private http: HttpClient){}

}
