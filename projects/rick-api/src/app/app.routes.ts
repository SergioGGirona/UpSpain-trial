import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'summary',
    loadComponent: () =>
      import('./pages/summary/summary.component').then(
        (c) => c.SummaryComponent,
      ),
  },

  { path: '**', redirectTo: 'home' },
];
