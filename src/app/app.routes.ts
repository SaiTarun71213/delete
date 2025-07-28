import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  {
    path: 'companies',
    loadComponent: () => import('./companies/companies.component').then(m => m.CompaniesComponent)
  },
  {
    path: 'company-details/:id',
    loadComponent: () => import('./company-details/company-details.component').then(m => m.CompanyDetailsComponent)
  },
  {
    path: 'auditors',
    loadComponent: () => import('./auditors/auditors.component').then(m => m.AuditorsComponent)
  },
  {
    path: 'members',
    loadComponent: () => import('./members/members.component').then(m => m.MembersComponent)
  },
  {
    path: 'share-management',
    loadComponent: () => import('./share-transfer/share-transfer.component').then(m => m.ShareTransferComponent)
  },
  // Legacy route for backward compatibility
  {
    path: 'share-transfer',
    redirectTo: '/share-management',
    pathMatch: 'full'
  }
];
