import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './film-catalog/main/main.component';
import { FilmsListComponent } from "./film-catalog/films-list/films-list.component";
import { ActorItemComponent } from "./film-catalog/actor-catalog/actors-list/actor-item/actor-item.component";
import { ActorsListComponent } from "./film-catalog/actor-catalog/actors-list/actors-list.component";
import {FilmDetailsComponent} from "./film-catalog/films-list/film-item/film-details/film-details.component";

const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "main" },
  { path: "", component: MainComponent },
  { path: "films", component: FilmsListComponent},
  { path: "actors", component: ActorsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
