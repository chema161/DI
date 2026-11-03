import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  host: { class: 'col-3 mb-4' },
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  character = input<Character>();

  characterClicked = output<number>();

  emitCharacterClicked() {
    const id = this.character()?.id;
    if (id !== undefined) {
      this.characterClicked.emit(id);
    }
  }
}