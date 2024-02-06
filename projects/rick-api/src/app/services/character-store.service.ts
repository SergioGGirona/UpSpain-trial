import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../model/character';
import { CharactersApiRepoService } from './characters.api.repo.service';

export type CharactersState = {
  data: Observable<Character[]>;
};

@Injectable({
  providedIn: 'root',
})
export class CharacterStoreService {
  private characters$ = new BehaviorSubject<Character[]>([]);
  private actualPage = 1;
  private currentFilter: { key: string; value: string } | null = null;

  constructor(private repo: CharactersApiRepoService) {}

  getState() {
    const state: CharactersState = {
      data: this.characters$.asObservable(),
    };
    return state;
  }

  loadCharacters() {
    this.repo.getAll().subscribe((tasks) => {
      this.characters$.next(tasks);
    });
  }

  loadMoreCharacters() {
    this.actualPage = this.actualPage + 1;
    const characters = this.repo.getMoreCharacters(this.actualPage);
    return characters;
  }

  loadFilteredCharacters(key: string, value: string) {
    this.actualPage = 1;
    this.repo
      .getFilteredCharacters(key, value, this.actualPage)
      .subscribe((filteredCharacters) => {
        this.characters$.next(filteredCharacters.results);
      });
  }
}
