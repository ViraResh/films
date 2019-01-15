import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FilmService} from "../../../../film.service";

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

  currentId: number = this.route.snapshot.params["id"];
  nameActor: any;
  descriptionActor: any;
  startPath: any;
  imageActor: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public filmsService: FilmService) { }

  ngOnInit() {
    this.startPath = this.filmsService.bigBackPath;
    this.showActorDetails();
  }

  back() {
    this.router.navigate(['actors']);
  }

  showActorDetails() {
    this.filmsService.showActorDetails(this.currentId).subscribe(
      (actorDetails: any) => {
        this.nameActor = actorDetails.name;
        this.descriptionActor = actorDetails.biography;
        this.imageActor = this.startPath + actorDetails.profile_path;
        //console.log(this.imageActor);
        console.log(actorDetails);
      },
      err => {
        console.log('error');
      }
    );
  }

}
