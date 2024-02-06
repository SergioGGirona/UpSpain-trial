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
  currentFilter: { key: string; value: string } | null;

  constructor(private store: CharacterStoreService) {
    this.currentFilter = null;
  }

  handleFilter() {
    this.store.loadFilteredCharacters('gender', this.selectedGender);
  }
}
