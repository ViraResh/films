import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorItemComponent} from "./actors-list/actor-item/actor-item.component";
import { MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatSelectModule,
  MatTabsModule, MatToolbarModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from "../main/main.component";
import { FilmsListComponent } from "../films-list/films-list.component";
import { ActorDetailsComponent } from './actors-list/actor-item/actor-details/actor-details.component';

const routes: Routes = [
  { path: "actors/:id", component: ActorDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
  ],
  declarations: [
    ActorsListComponent,
    ActorItemComponent,
    ActorDetailsComponent
  ]
})
export class ActorCatalogModule { }
