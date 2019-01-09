import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilmService} from '../../film.service';
import {FavoriteApiService} from "../../favorite.api.service";
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem;
  // @Input() filmImg: any;
  @Output() add = new EventEmitter();
  btnColor = 'primary';
  startPath: any;
  // size = '/w500';

  constructor(private filmService: FilmService, private favService: FavoriteApiService) {}

  ngOnInit() {
    // console.log(this.filmService.midImgPath);
    this.startPath = this.filmService.midImgPath;
  }

  addFavoriteFilm() {
    this.filmItem.isFavorite = !this.filmItem.isFavorite;
    //this.add.emit(this.filmItem.isFavorite);

      //this.filmItem.favorite ?
      this.favService.addFavor(this.filmItem.id)
        .subscribe(() => this.filmItem.favorite = true);
      // this.favService.dellFavor(this.filmItem.id)
      //   .subscribe(() => this.filmItem.favorite = false);
    // this.favService.addFavor(this.filmItem.id)
    //   .subscribe(() => this.filmItem.favorite = true)
    // if (this.filmItem.isFavorite) {
    //   this.btnColor = 'accent';
    // } else {
    //   this.btnColor = 'primary';
    // }
  }

}
