import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { FilmService } from '../film.service';
import {Film} from '../film';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-film-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {
  counter = 0;
  films: Film[];
  test: Film[];
  foods: Food[] = [
    {value: 'asc', viewValue: 'ASC'},
    {value: 'desk', viewValue: 'DESC'}
  ];

  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    this.getAllFilms();
  }

  getAllFilms() {
    this.films = this.filmsService.getFilms();
  }

  addToFavorite(eventParam) {
    this.test = this.films;
    this.counter = this.test.filter(bee => bee.isFavorite).length;
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
