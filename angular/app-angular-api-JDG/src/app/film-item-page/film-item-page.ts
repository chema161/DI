import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Film, FilmService } from '../services/film';

@Component({
  selector: 'app-film-item-page',
  imports: [RouterLink],
  templateUrl: './film-item-page.html',
  styleUrl: './film-item-page.css',
})
export class FilmItemPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly filmService = inject(FilmService);

  film = signal<Film | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadFilm(id);
      }
    });
  }

  private loadFilm(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    this.filmService.getFilm(id).subscribe({
      next: (film) => {
        this.film.set(film);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load the film details.');
        this.loading.set(false);
      },
    });
  }
}