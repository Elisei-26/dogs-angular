import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = "https://dog.ceo/api/";

  constructor(private httpClient: HttpClient) { }

  getDogsBreedsList(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'breeds/list/all');
  }

  getDogBreedPhoto(dogBreed: string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + `breed/${dogBreed}/images/random`);
  }
}
