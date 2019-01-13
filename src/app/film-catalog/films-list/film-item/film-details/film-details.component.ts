import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../../film.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'film-details-inner',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  currentId: number = this.route.snapshot.params["id"];
  titleFilm: any;
  descriptionFilm: any;
  startPath: any;
  imageFilm: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public filmsService: FilmService) { }

  ngOnInit() {
    this.startPath = this.filmsService.smallImgPath;
    this.showFilmDetails();
  }

  back() {
    this.router.navigate(['films']);
  }

  showFilmDetails() {
    this.filmsService.showFilmDetails(this.currentId).subscribe(
      (filmDetails: any) => {
        this.titleFilm = filmDetails.title;
        this.descriptionFilm = filmDetails.overview;
        this.imageFilm = filmDetails.poster_path;
        console.log(filmDetails);
      },
      err => {
        console.log('error');
      }
    );
  }
}
