import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem;
  @Input() improved;
  @Output() update = new EventEmitter<number>();

  //isFav: boolean = false;
  constructor() {}

  ngOnInit() {
    //console.log(this.improved);
  }
  favoriteFilm(el){
    //console.log(this.improved);
    this.update.emit(el);
  }

  // addFavoriteFilm(el){
  //   this.update.emit(el);
  //   console.log('add' + el);
  //   this.isFav = true;
  // }
  // removeFavoriteFilm(el){
  //   this.update.emit(el);
  //   console.log('rem' + el);
  //   this.isFav = false;
  // }

}
