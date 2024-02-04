import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Character } from '../../model/character';
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
  nextUrl: string = '';
  characters: Character[];
  constructor(private repo: CharactersApiRepoService) {
    this.characters = [];
  }
  ngOnInit(): void {
    this.repo.getAll().subscribe((data) => {
      this.characters = data.results;
      if (data.info.next !== null) {
        this.nextUrl = data.info.next;
      }
    });
  }

  onScroll() {
    this.repo.getMoreCharacters(this.nextUrl).subscribe({
      next: (response) => {
        if (response.info.next && response.info.next !== null) {
          this.nextUrl = response.info.next;
          Array.from(response.results).forEach((element) => {
            this.characters = [...this.characters, element];
          });
        }
      },
    });
  }
}
