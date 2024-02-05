import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.character = {
      id: '1',
      name: 'Test',
      status: 'Alive',
      species: 'Test',
      type: 'Test',
      gender: 'Female',
      origin: {
        name: 'Test',
      },
      location: {
        name: 'Test',
      },
      image: 'Test',
      created: 'Test',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
