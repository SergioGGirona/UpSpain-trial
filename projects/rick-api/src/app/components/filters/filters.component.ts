import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterStoreService } from '../../services/character-store.service';

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
  constructor(private characterStore: CharacterStoreService) {}

  handleFilter() {
    this.characterStore.loadFilteredCharacters('gender', this.selectedGender);
  }
}
