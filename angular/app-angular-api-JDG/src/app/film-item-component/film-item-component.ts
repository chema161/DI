import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film, FilmService } from '../services/film';

@Component({
  selector: 'app-film-item',
  imports: [RouterLink],
  templateUrl: './film-item-component.html',
  styleUrl: './film-item-component.css',
})
export class FilmItemComponent {
  private readonly filmService = inject(FilmService);

  film = input.required<Film>();

  id = computed(() => this.filmService.extractId(this.film().url));
}