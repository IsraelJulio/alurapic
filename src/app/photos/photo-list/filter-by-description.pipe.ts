import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from 'src/app/models/Photo.model';

@Pipe({name: 'filterByDescription'})
export class FilterByDescripition implements PipeTransform{

  transform(photos: Photo[], query: string): Photo[] {
    query = query
            .trim()
            .toLowerCase();
        if(query) {
          const retorno = photos.filter(photo =>
            photo.description.toLowerCase().includes(query)
        );
            return retorno;
        } else {
            return photos;
        }
    }
  }


