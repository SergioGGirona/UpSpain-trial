import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  standalone: true,
  imports: [CardsComponent],
  template: `
    <h1>Characters of C-137</h1>
    <trial-cards></trial-cards>
  `,
  styles: `
  :host{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h1 {
      font-size: 3rem;
      font-weight: 200;
      color: white;
      text-shadow: #bfde42 1px 0 10px;
      margin: 2rem;
    }
  }
  `,
})
export class HomeComponent {}
