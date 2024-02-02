import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharactersApiRepoService } from '../../services/characters.api.repo.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'trial-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  characters: Character[];
  constructor(private repo: CharactersApiRepoService) {
    this.characters = [];
  }
  ngOnInit(): void {
    this.repo.getAll().subscribe((data) => {
      this.characters = data;
    });
  }
}
