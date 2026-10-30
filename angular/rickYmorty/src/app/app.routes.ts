import { Routes } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';

export const routes: Routes = [
    {path: 'episode-list', component: EpisodeListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/episode-list'}
];