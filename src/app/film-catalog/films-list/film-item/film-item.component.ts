import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem;

  constructor() { }

  ngOnInit() {
    //console.log(this.filmItem);
  }

}
