import { Component, OnInit } from '@angular/core';
import {Actor} from "../../../interfaces/actor";
import {FilmService} from "../../film.service";

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  currentPage: number = 1;
  actorsData$: Array<Actor>;

  constructor(public filmsService: FilmService) { }

  ngOnInit() {
    this.getPopularActors();
  }

  getPopularActors() {
    this.filmsService.getPopularActors(this.currentPage).subscribe(
      (actorList: any) => {
        console.log(actorList.results);
        this.actorsData$ = actorList.results;
        // console.log(this.actorsData$);
      }
    );
  }

  getActor() {
    this.currentPage++;
    this.getPopularActors();
  }

}
