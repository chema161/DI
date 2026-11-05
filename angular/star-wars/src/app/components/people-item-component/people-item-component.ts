import { Component, input, output } from '@angular/core';
import { Person } from '../../interfaces/people-list-response';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  host: { class: 'col-3 mb-4' },
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopleItemComponent {
  person = input<Person>();

  personClicked = output<string>();

  getPersonId(): string | undefined {
    return this.person()?.url.split('/')[5];
  }

  emitPersonClicked() {
    const id = this.getPersonId();
    if (id !== undefined) {
      this.personClicked.emit(id);
    }
  }
}