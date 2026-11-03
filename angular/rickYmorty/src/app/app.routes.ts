import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list-component/character-list-component';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';

export const routes: Routes = [
    {path: 'character-list', component: CharacterListComponent},
    {path: 'episode-list', component: EpisodeListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/episode-list'}
];