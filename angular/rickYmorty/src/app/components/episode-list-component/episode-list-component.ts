import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeService } from '../../services/episode-service';
import { Episode } from '../../interfaces/episode-list-response';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';
import { EpisodeModal } from '../episode-modal/episode-modal';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent implements OnInit {
  episodeService = inject(EpisodeService);
  private modalService = inject(NgbModal);
  episodeList = signal<Episode[]>([]);

  ngOnInit(): void {
    this.episodeService.getAllEpisodes().subscribe(resp => {
      this.episodeList.set(resp.results);
    });
  }

  // Recibe el id que emite el componente hijo, pide el detalle y abre el modal
  openEpisodeModal(id: number) {
    this.episodeService.getOneEpisode(id).subscribe(resp => {
      const modalRef = this.modalService.open(EpisodeModal);
      modalRef.componentInstance.episodeDetail = resp;
    });
  }
}