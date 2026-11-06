import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle, VehicleService } from '../services/vehicle';

@Component({
  selector: 'app-vehicle-detail-modal',
  templateUrl: './vehicle-detail-modal.html',
  styleUrl: './vehicle-detail-modal.css',
})
export class VehicleDetailModalComponent implements OnInit {
  readonly activeModal = inject(NgbActiveModal);
  private readonly vehicleService = inject(VehicleService);

  vehicleId!: string; 

  vehicle = signal<Vehicle | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.vehicleService.getVehicle(this.vehicleId).subscribe({
      next: (v) => {
        this.vehicle.set(v);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load the vehicle details.');
        this.loading.set(false);
      },
    });
  }
}