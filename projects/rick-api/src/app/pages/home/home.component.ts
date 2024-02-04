import { Component, HostListener } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  standalone: true,
  imports: [CardsComponent],
  template: `
    <h1>Characters of C-137</h1>
    <trial-cards onscroll="windowScroll()"></trial-cards>
    <button class="scrollButton" (click)="goTop()">></button>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @HostListener('window:scroll', ['$event'])
  appearButton() {
    if (document.documentElement.scrollTop > 1000) {
      document.querySelector('.scrollButton')?.classList.add('showButton');
    } else {
      document.querySelector('.scrollButton')?.classList.remove('showButton');
    }
  }
  goTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
