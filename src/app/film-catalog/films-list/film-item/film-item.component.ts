import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem;
  @Output() add = new EventEmitter();
  btnColor = 'primary';

  constructor() {}

  ngOnInit() {
  }
  addFavoriteFilm() {
    this.filmItem.isFavorite = !this.filmItem.isFavorite;
    this.add.emit(this.filmItem.isFavorite);
    if (this.filmItem.isFavorite) {
      this.btnColor = 'accent';
    } else {
      this.btnColor = 'primary';
    }
  }

}
