import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  standalone: true,
  imports: [CardsComponent],
  template: `
    <h1>Characters of C-137</h1>
    <trial-cards></trial-cards>
  `,
  styles: ``,
})
export class HomeComponent {}
