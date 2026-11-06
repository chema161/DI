import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface VehicleListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Vehicle[];
}

@Injectable({ providedIn: 'root' })
export class VehicleService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://swapi.dev/api/vehicles/';

  getVehicles(page = 1): Observable<VehicleListResponse> {
    return this.http.get<VehicleListResponse>(this.baseUrl, {
      params: { page },
    });
  }

  getVehicle(id: string | number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}${id}/`);
  }

  extractId(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }
}