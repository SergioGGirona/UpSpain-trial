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
    this.currentFilter = { key: key, value: value };
    this.handleFilterChange(this.currentFilter.key, this.currentFilter.value);
  }
  handleFilterChange(key: string, value: string) {
    if (key && value) {
      this.currentFilter = { key, value };
      return this.currentFilter;
    } else {
      this.currentFilter = null;
      return;
    }
  }

  getCurrentFilter() {
    console.log(this.currentFilter);
    return this.currentFilter;
  }

  loadMoreFilteredCharacters(key: string, value: string) {
    this.actualPage = this.actualPage + 1;
    if (key === this.currentFilter!.key && value === this.currentFilter?.value)
      this.repo
        .getFilteredCharacters(key, value, this.actualPage)
        .subscribe((filteredCharacters) => {
          const currentCharacters = this.characters$.getValue();
          const newCharacters = filteredCharacters.results;
          const updatedCharacters = [...currentCharacters, ...newCharacters];
          this.characters$.next(updatedCharacters);
        });
  }
}
