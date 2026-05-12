import { Routes } from '@angular/router';
import { authGuard, roleGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-page/landing-page.component').then((m) => m.LandingPageComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then((m) => m.LoginPageComponent),
  },
  {
    path: 'dashboard/fisioterapeuta',
    canActivate: [authGuard, roleGuard(['fisioterapeuta'])],
    loadComponent: () =>
      import('./pages/fisioterapeuta-dashboard/fisioterapeuta-dashboard.component').then(
        (m) => m.FisioterapeutaDashboardComponent
      ),
  },
  {
    path: 'dashboard/recepcionista',
    canActivate: [authGuard, roleGuard(['recepcionista', 'admin'])],
    loadComponent: () =>
      import('./pages/recepcionista-dashboard/recepcionista-dashboard.component').then(
        (m) => m.RecepcionistaDashboardComponent
      ),
  },
  {
    path: 'dashboard/paciente',
    canActivate: [authGuard, roleGuard(['paciente'])],
    loadComponent: () =>
      import('./pages/paciente-dashboard/paciente-dashboard.component').then(
        (m) => m.PacienteDashboardComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
