import { Component, Input } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'trial-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() character!: Character;
}
