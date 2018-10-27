import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from '../../film.service';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  @Input() actorItem: any;
  @Input() actorPopularity: any;
  @Input() actorImg: string;

  startPath: any;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.actorPopularity = Math.round(this.actorPopularity);
    this.startPath = this.filmService.midImgPath;
  }

}
