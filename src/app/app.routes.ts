import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./pages/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'produit',
    loadComponent: () => import('./pages/produit/produit.page').then( m => m.ProduitPage)
  },
  {
    path: 'modal-commande',
    loadComponent: () => import('./pages/modal-commande/modal-commande.page').then( m => m.ModalCommandePage)
  },

];
