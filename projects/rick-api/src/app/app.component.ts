import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'trial-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Rick & Morty';
}
