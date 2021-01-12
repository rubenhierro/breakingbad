import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';
import { ImageComponent } from '../components/image/image.component';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>('https://www.breakingbadapi.com/api/characters');
  }

  getImageById(id: String): Observable<Image> {
    return this.http.get<Image>('https://www.breakingbadapi.com/api/characters/' + id);
  }
}
