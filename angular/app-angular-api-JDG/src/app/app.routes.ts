import { Routes } from '@angular/router';
import { VehiclesListPage } from './vehicles-list-page/vehicles-list-page';
import { FilmListPage } from './film-list-page/film-list-page';
import { FilmItemPage } from './film-item-page/film-item-page';

export const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesListPage },
  { path: 'films', component: FilmListPage },
  { path: 'films/:id', component: FilmItemPage },
  { path: '**', redirectTo: 'vehicles' },
];