import { Component, computed, inject, input, output } from '@angular/core';
import { Vehicle, VehicleService } from '../services/vehicle';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.html',
  styleUrl: './vehicle-item.css',
})
export class VehicleItemComponent {
  private readonly vehicleService = inject(VehicleService);

  vehicle = input.required<Vehicle>();
  selected = output<string>();

  id = computed(() => this.vehicleService.extractId(this.vehicle().url));

  onSelect(): void {
    this.selected.emit(this.id());
  }
}