import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeModal } from './episode-modal';

describe('EpisodeModal', () => {
  let component: EpisodeModal;
  let fixture: ComponentFixture<EpisodeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeModal],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
