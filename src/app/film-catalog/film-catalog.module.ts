import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmsComponent } from './films-list/films-list.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule, MatSelectModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { FilmItemComponent } from './films-list/film-item/film-item.component';
import {SearchPipe} from '../pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule
  ],
  declarations: [
    MainComponent,
    FilmsComponent,
    DetailsComponent,
    FilmItemComponent,
    SearchPipe
  ]
})
export class FilmCatalogModule { }
