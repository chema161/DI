import { Component, input, output } from '@angular/core';
import { Episode } from '../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  host: { class: 'col-3 mb-4' },
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {

  episode = input<Episode>();

  episodeClicked = output<number>();

  emitEpisodeClicked() {
    const id = this.episode()?.id;
    if (id !== undefined) {
      this.episodeClicked.emit(id);
    }
  }
}