import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { FilmService } from '../film.service';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {
  films: object[];
  foods: Food[] = [
    {value: 'asc', viewValue: 'ASC'},
    {value: 'desk', viewValue: 'DESC'}
  ];

  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    this.films = this.filmsService.getData();
  }

  changeClient(data) {
    this.films.sort((a: any, b: any) => {
      let one = a.name.toLowerCase();
      let two = b.name.toLowerCase();
      return one < two ? -1 : one > two ? 1 : 0;
    });
    if (data === 'desk') {
      this.films.reverse();
    }
  }

}
