import { Component, inject, OnInit, signal } from '@angular/core';
import { Film, FilmService } from '../services/film';
import { FilmItemComponent } from '../film-item-component/film-item-component';

@Component({
  selector: 'app-film-list-page',
  imports: [FilmItemComponent],
  templateUrl: './film-list-page.html',
  styleUrl: './film-list-page.css',
})
export class FilmListPage implements OnInit {
  private readonly filmService = inject(FilmService);

  films = signal<Film[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.filmService.getFilms().subscribe({
      next: (res) => {
        this.films.set(res.results);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load the films list.');
        this.loading.set(false);
      },
    });
  }
}