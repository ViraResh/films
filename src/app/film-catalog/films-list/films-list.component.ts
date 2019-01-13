import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FilmService } from '../film.service';
import {Film} from '../../interfaces/film';
// import {Sort} from '../../interfaces/sort';
// import {Actor} from '../../interfaces/actor';
import { NgxSpinnerService } from 'ngx-spinner';
import {FavoriteApiService} from "../favorite.api.service";

@Component({
  selector: 'app-film-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  selected = 'films';
  currentPage: number = 1;
  counter = 0;
  more = 3;
  isFilms = true;
  isActors = false;
  changeIndex = 0;
  films: Film[];
  filmsData$: Array<Film>;

  imagePath$;
  // currentPage = '';
  totalPage = '';
  totalResult = '';
  // sortData: Sort[] = [
  //   {value: 'asc', viewValue: 'ASC'},
  //   {value: 'desk', viewValue: 'DESC'}
  // ];
  total: '';
  startPath: any;
  // showSpinner: boolean = true;
  // sortData: Sort[] = [
  //   {value: 'films', viewValue: 'Фільми'},
  //   {value: 'actors', viewValue: 'Актори'}
  // ];

  constructor(private favService: FavoriteApiService, public filmsService: FilmService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.startPath = this.filmsService.midImgPath;
    this.getPopularFilms();

    // this.filmsService.subscribe(()=> this.showSpinner = false);
    // this.spinner.hide();
    // this.addToFavorite(event);
  }

  getPopularFilms() {
    this.filmsService.getPopularFilms(this.currentPage).subscribe(
      (filmList: any) => {
        this.filmsData$ = filmList.results;
        this.imagePath$ = this.filmsService.midImgPath;

        this.totalPage = filmList.total_pages;
        // this.totalResult = filmList.total_results;
        // this.currentPage = filmList.page;

        // console.log(this.filmsData$);
        // console.log(this.totalResult, this.totalPage, this.currentPage);
        // console.log(this.total);
        // console.log(`${this.filmsService.midImgPath}${filmList.results[2].poster_path}`);
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      },
      err => {
        console.log('error');
      }
    );
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
    // this.spinner.hide();
    // this.spinner.hide();
  }
  // getAllFilms() {
  //   this.films = this.filmsService.getFilms();
  // }
  changeLayout(event) {
    // console.log(event.index);
    this.changeIndex = event.index;
    // this.sortingMethod = 0;
    // this.filmCurrentPage = 1;
    // this.actorCurrentPage = 1;
    // this.qwery = '';
    // this.transform();
    // this.search(this.qwery);
  }
  getPage() {
    this.currentPage++;
    this.getPopularFilms();
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
