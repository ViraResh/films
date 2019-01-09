import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class FavoriteApiService {
  localUrl = "http://localhost:3000/";
  favoriteApiUrl = this.localUrl+'films/favorites';
  // markApiUrl = `${this.localUrl}/films/marks`;

  constructor(private http: HttpClient) {

  }
  getFavor(filmIds: number[]): Observable<any> {
    return this.http.get(`${this.favoriteApiUrl}?filmIds=${filmIds.join(',')}`);
  }
  addFavor(id: number){
    return this.http.post(this.favoriteApiUrl,{filmId: id});
  }
  // dellFavor(id: number){
  //   return this.http.delete(`${this.localUrl}/films/${id}/favorites`);
  // }
}
