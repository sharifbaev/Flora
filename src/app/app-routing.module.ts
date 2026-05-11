import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'categories',
        loadComponent: () => import('./pages/bouquets/bouquets.component').then(m => m.BouquetsComponent)
      },
      {
        path: 'delivery',
        loadComponent: () => import('./pages/bouquets/bouquets.component').then(m => m.BouquetsComponent)
      },
      {
        path: 'flower/:id',
        loadComponent: () => import('./pages/flower-detail/flower-detail.component').then(m => m.FlowerDetailComponent)
      },
      {
        path: 'stores',
        loadComponent: () => import('./pages/bouquets/bouquets.component').then(m => m.BouquetsComponent)
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  { path: '**', redirectTo: 'home' }
];
