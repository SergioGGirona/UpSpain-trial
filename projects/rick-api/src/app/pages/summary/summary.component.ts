import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharactersApiRepoService } from '../../services/characters.api.repo.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  characters: Character[];
  constructor(private repo: CharactersApiRepoService) {
    this.characters = [];
  }
  ngOnInit(): void {
    this.repo.getAll().subscribe((data) => {
      this.characters = data.results.slice(0, 10);
    });
  }
}
