import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterStoreService } from '../../services/character-store.service';
import { CharactersApiRepoService } from '../../services/characters.api.repo.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  characters: Character[];
  store = inject(CharacterStoreService);

  constructor(private repo: CharactersApiRepoService) {
    this.characters = [];
  }
  ngOnInit(): void {
    this.store.loadCharacters();
    this.store.getState().data.subscribe((data) => {
      this.characters = data.slice(0, 10);
    });
  }
}
