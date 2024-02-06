import { Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Character } from '../../model/character';
import { CharacterStoreService } from '../../services/character-store.service';
import { CharactersApiRepoService } from '../../services/characters.api.repo.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'trial-cards',
  standalone: true,
  imports: [CardComponent, InfiniteScrollModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  store = inject(CharacterStoreService);
  characters: Character[];

  constructor(private repo: CharactersApiRepoService) {
    this.characters = [];
  }
  ngOnInit(): void {
    this.store.getState().data.subscribe((data) => {
      this.characters = data;
    });
    this.store.loadCharacters();
  }

  onScroll() {
    const currentFilter = this.store.getCurrentFilter();
    if (currentFilter) {
      const { key, value } = currentFilter;
      this.store.loadMoreFilteredCharacters(key, value);
    } else {
      this.store.loadMoreCharacters().subscribe((newCharacters) => {
        this.characters.push(...newCharacters);
      });
    }
  }
}
