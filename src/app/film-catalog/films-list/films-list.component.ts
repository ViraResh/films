import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {

  description: string = 'Middle card description';

  films: object;

  constructor(public filmsService: FilmService) {

  }

  ngOnInit() {
    this.films = this.filmsService.getData();
  }

}
