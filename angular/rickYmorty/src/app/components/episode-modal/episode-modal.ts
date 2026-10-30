import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';

@Component({
  imports: [],
  selector: 'app-episode-modal',
  styleUrl: './episode-modal.css',
  templateUrl: './episode-modal.html',
})
export class EpisodeModal {
  // Clase de ng-bootstrap que controla el modal (para poder cerrarlo)
  activeModal = inject(NgbActiveModal);

  // Parámetro de entrada: el padre lo rellena con modalRef.componentInstance.episodeDetail
  @Input() episodeDetail: EpisodeDetailResponse | undefined;
}