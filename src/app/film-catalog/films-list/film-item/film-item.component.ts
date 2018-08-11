import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem;
  @Output() update = new EventEmitter<number>();
  value: number;
  constructor() { }

  setToParent(el){
    this.update.emit((el && el.innerHTML) || this.value);
  }
  ngOnInit() {
    //console.log(this.filmItem);
  }

}
