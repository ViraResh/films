import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule, MatSelectModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { FilmItemComponent } from './films-list/film-item/film-item.component';
import {SearchPipe} from '../pipes/search.pipe';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from "ngx-spinner";
import {FilmsListComponent} from "./films-list/films-list.component";
import {FilmDetailsComponent} from "./films-list/film-item/film-details/film-details.component";
import {RouterModule, Routes} from "@angular/router";
import {ActorDetailsComponent} from "./actor-catalog/actors-list/actor-item/actor-details/actor-details.component";
// import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  { path: "films/:id", component: FilmDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    NgxSpinnerModule
    // NgxPaginationModule
  ],
  declarations: [
    MainComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    FilmItemComponent,
    SearchPipe
  ]
})
export class FilmCatalogModule { }
