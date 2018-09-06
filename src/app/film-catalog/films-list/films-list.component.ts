import {Component, OnInit} from '@angular/core';
import { FilmService } from '../film.service';
import {Film} from '../../interfaces/film';
import {Sort} from '../../interfaces/sort';

@Component({
  selector: 'app-film-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {
  counter = 0;
  more = 3;
  films: Film[];
  sortData: Sort[] = [
    {value: 'asc', viewValue: 'ASC'},
    {value: 'desk', viewValue: 'DESC'}
  ];

  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    this.getAllFilms();
    this.addToFavorite(event);
  }

  getAllFilms() {
    this.films = this.filmsService.getFilms();
  }

  addToFavorite(eventParam) {
    this.counter = this.films.filter(bee => bee.isFavorite).length;
  }

  sorting(data) {
    this.films.sort((a: any, b: any) => {
      const one = a.name.toLowerCase();
      const two = b.name.toLowerCase();
      return one < two ? -1 : one > two ? 1 : 0;
    });
    if (data === 'desk') {
      this.films.reverse();
    }
  }

}
