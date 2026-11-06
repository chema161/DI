import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface FilmListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}

@Injectable({ providedIn: 'root' })
export class FilmService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://swapi.dev/api/films/';

  getFilms(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>(this.baseUrl);
  }

  getFilm(id: string | number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}${id}/`);
  }

  extractId(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }
}