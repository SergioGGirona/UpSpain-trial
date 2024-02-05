import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../model/character';
import { CharactersApiRepoService } from '../../services/characters.api.repo.service';

@Component({
  selector: 'trial-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  selectedGender = '';
  @ViewChild('select') select!: ElementRef;
  characters: Character[];
  constructor(private repo: CharactersApiRepoService) {
    this.characters = [];
  }

  handleFilter() {
    this.repo
      .getFilteredCharacters(
        this.select.nativeElement.name,
        this.selectedGender,
      )
      .subscribe((data) => {
        this.characters = data.results;
        console.log(this.characters);
      });
  }
}
