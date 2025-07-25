import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  {
    path: 'companies',
    loadComponent: () => import('./companies/companies.component').then(m => m.CompaniesComponent)
  },
  {
    path: 'auditors',
    loadComponent: () => import('./auditors/auditors.component').then(m => m.AuditorsComponent)
  },
  {
    path: 'members',
    loadComponent: () => import('./members/members.component').then(m => m.MembersComponent)
  }
];
