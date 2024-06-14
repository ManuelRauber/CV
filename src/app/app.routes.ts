import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/resume/resume.component'),
  },
  {
    path: 'publications',
    loadComponent: () => import('./components/publications/publications.component'),
  },
  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component'),
  },
];
