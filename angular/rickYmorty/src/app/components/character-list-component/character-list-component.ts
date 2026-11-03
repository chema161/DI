import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-list-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { CharacterModal } from '../character-modal/character-modal';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {
  characterService = inject(CharacterService);
  private modalService = inject(NgbModal);
  characterList = signal<Character[]>([]);

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(resp => {
      this.characterList.set(resp.results);
    });
  }
  
  openCharacterModal(id: number) {
    this.characterService.getOneCharacter(id).subscribe(resp => {
      const modalRef = this.modalService.open(CharacterModal);
      modalRef.componentInstance.characterDetail = resp;
    });
  }
}