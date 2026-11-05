import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleService } from '../../services/people-service';
import { Person } from '../../interfaces/people-list-response';
import { PeopleItemComponent } from '../people-item-component/people-item-component';
import { PeopleModal } from '../people-modal/people-modal';

@Component({
  imports: [PeopleItemComponent],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent implements OnInit {
  peopleService = inject(PeopleService);
  private modalService = inject(NgbModal);
  peopleList = signal<Person[]>([]);

  ngOnInit(): void {
    this.peopleService.getAll().subscribe(resp => {
      this.peopleList.set(resp.results);
    });
  }

  openPeopleModal(id: string) {
    this.peopleService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(PeopleModal);
      modalRef.componentInstance.personDetail = resp;
    });
  }
}