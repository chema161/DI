import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list-component/character-list-component';

export const routes: Routes = [
    {path: 'character-list', component: CharacterListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/character-list'}
];