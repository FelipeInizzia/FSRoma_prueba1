import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'cnc1',
    loadComponent: () => import('./cnc1/cnc1.page').then( m => m.CNC1Page)
  },
  {
    path: 'cnc2',
    loadComponent: () => import('./cnc2/cnc2.page').then( m => m.CNC2Page)
  },
  {
    path: 'cnc3',
    loadComponent: () => import('./cnc3/cnc3.page').then( m => m.CNC3Page)
  },
  {
    path: 'cnc4',
    loadComponent: () => import('./cnc4/cnc4.page').then( m => m.CNC4Page)
  },
  {
    path: 'customers',
    loadComponent: () => import('./customers/customers.page').then( m => m.CustomersPage)
  },
  {
    path: 'pruebas',
    loadComponent: () => import('./pruebas/pruebas.page').then( m => m.PRUEBASPage)
  },
];
