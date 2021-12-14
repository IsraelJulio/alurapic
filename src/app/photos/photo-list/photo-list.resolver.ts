import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from 'src/app/models/Photo.model';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
      const parametroqualquer = route.params['parametros'];
      return this.service.SearchPhoto(parametroqualquer);
    }
}
