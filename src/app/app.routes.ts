import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/animation/animation.component').then(
        (m) => m.AnimationComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
