import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterItemComponent } from './character-item-component';

describe('CharacterItemComponent', () => {
  let component: CharacterItemComponent;
  let fixture: ComponentFixture<CharacterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
