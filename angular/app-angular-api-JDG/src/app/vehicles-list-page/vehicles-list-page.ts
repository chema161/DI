import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle, VehicleService } from '../services/vehicle';
import { VehicleItemComponent } from '../vehicle-item/vehicle-item';
import { VehicleDetailModalComponent } from '../vehicle-detail-modal/vehicle-detail-modal';

@Component({
  selector: 'app-vehicles-list-page',
  imports: [VehicleItemComponent],
  templateUrl: './vehicles-list-page.html',
  styleUrl: './vehicles-list-page.css',
})
export class VehiclesListPage implements OnInit {
  private readonly vehicleService = inject(VehicleService);
  private readonly modalService = inject(NgbModal);

  vehicles = signal<Vehicle[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);
  page = signal(1);
  hasNext = signal(false);

  ngOnInit(): void {
    this.loadPage(1);
  }

  loadPage(page: number): void {
    this.loading.set(true);
    this.error.set(null);

    this.vehicleService.getVehicles(page).subscribe({
      next: (res) => {
        this.vehicles.set(res.results);
        this.page.set(page);
        this.hasNext.set(!!res.next);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load the vehicles list.');
        this.loading.set(false);
      },
    });
  }

  openDetail(id: string): void {
    const modalRef = this.modalService.open(VehicleDetailModalComponent, {
      centered: true,
      scrollable: true,
    });
    modalRef.componentInstance.vehicleId = id;
  }
}