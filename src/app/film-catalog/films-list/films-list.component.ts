import {Component, OnInit} from '@angular/core';
import { FilmService } from '../film.service';
import {Film} from '../../interfaces/film';
import {Sort} from '../../interfaces/sort';
import {Actor} from '../../interfaces/actor';

@Component({
  selector: 'app-film-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsComponent implements OnInit {
  selected = 'films';
  p: number = 1;
  counter = 0;
  more = 3;
  isFilms = true;
  isActors = false;
  changeIndex = 0;
  films: Film[];
  filmsData$: Array<Film>;
  actorsData$: Array<Actor>;
  imagePath$;
  currentPage = '';
  totalPage = '';
  totalResult = '';
  // sortData: Sort[] = [
  //   {value: 'asc', viewValue: 'ASC'},
  //   {value: 'desk', viewValue: 'DESC'}
  // ];
  startPath: any;
  sortData: Sort[] = [
    {value: 'films', viewValue: 'Фільми'},
    {value: 'actors', viewValue: 'Актори'}
  ];

  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    // console.log("Hook Parent, Инициализация родительского компонента")
    this.startPath = this.filmsService.midImgPath;
    this.filmsService.getPopularFilms().subscribe(
      (filmList: any) => {
        this.filmsData$ = filmList.results;
        this.totalResult = filmList.total_results;
        this.imagePath$ = this.filmsService.midImgPath;
        console.log(filmList);
        console.log(this.totalResult);
        // console.log(`${this.filmsService.midImgPath}${filmList.results[2].poster_path}`);
      },
      err => {
        console.log('error');
      }
    );
    this.filmsService.getPopularActors().subscribe(
      (actorList: any) => {
        // console.log(actorList.results);
        this.actorsData$ = actorList.results;
        // console.log(this.actorsData$);
      }
    );

    // this.getAllFilms();
    // this.addToFavorite(event);
  }

  // getAllFilms() {
  //   this.films = this.filmsService.getFilms();
  // }
  changeLayout(event) {
    console.log(event.index);
    this.changeIndex = event.index;
    // this.sortingMethod = 0;
    // this.filmCurrentPage = 1;
    // this.actorCurrentPage = 1;
    // this.qwery = '';
    // this.transform();
    // this.search(this.qwery);
  }

  addToFavorite(eventParam) {
    this.counter = this.films.filter(bee => bee.isFavorite).length;
  }

  sorting(data) {
    if (data === 'films') {
      this.isFilms = true;
      this.isActors = false;
    } else {
      this.isActors = true;
      this.isFilms = false;
    }
    // else {
    console.log(data);
    // }
    // this.films.sort((a: any, b: any) => {
    //   const one = a.name.toLowerCase();
    //   const two = b.name.toLowerCase();
    //   return one < two ? -1 : one > two ? 1 : 0;
    // });
    // if (data === 'desk') {
    //   this.films.reverse();
    // }
  }

}
