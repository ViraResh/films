import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { FilmService } from '../film.service';

export interface Food {
  value: string;
  viewValue: string;
}

// export interface Favorite {
//   id: number;
// }

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {
  counter : number = 0;
  //aditionalTitle: number;
  favoriteArray: object[] = [];
  films: object[];
  isFav: boolean = false;
  foods: Food[] = [
    {value: 'asc', viewValue: 'ASC'},
    {value: 'desk', viewValue: 'DESC'}
  ];

  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    this.films = this.filmsService.getData();
    //this.default_value = 0;
  }

  setUpdatedValue(eventParam) {
    //this.favoriteArray = [];
    //console.log(this.favoriteArray);
    if (this.favoriteArray.indexOf(eventParam) === -1) {
      // element doesn't exist in array
      this.favoriteArray.push(eventParam);
      this.counter += 1;
      this.isFav = false;
    }
    else if (this.favoriteArray.indexOf(eventParam) > -1) {
      console.log(eventParam + ' already exists in the collection.');
      this.isFav = true;
      return false;
      //this.counter -= 1;
    }

    //console.log(this.favoriteArray);
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
