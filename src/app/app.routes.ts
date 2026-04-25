import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full',
  },
  {
    path: 'connexion',
    loadComponent: () => import('./authentification/connexion/connexion.page').then( m => m.ConnexionPage)
  },
  {
    path: 'inscription',
    loadComponent: () => import('./authentification/inscription/inscription.page').then( m => m.InscriptionPage)
  },
  {
    path: 'tableau-de-bord',
    loadComponent: () => import('./tableau-de-bord/tableau-de-bord.page').then( m => m.TableauDeBordPage)
  },
  {
    path: 'liste-projets',
    loadComponent: () => import('./projets/liste-projets/liste-projets.page').then( m => m.ListeProjetsPage)
  },
  {
    path: 'liste-taches',
    loadComponent: () => import('./taches/liste-taches/liste-taches.page').then( m => m.ListeTachesPage)
  },
  {
    path: 'liste-utilisateurs',
    loadComponent: () => import('./utilisateurs/liste-utilisateurs/liste-utilisateurs.page').then( m => m.ListeUtilisateursPage)
  },
  {
    path: 'liste-ressources',
    loadComponent: () => import('./ressources/liste-ressources/liste-ressources.page').then( m => m.ListeRessourcesPage)
  },
  {
    path: 'calendrier',
    loadComponent: () => import('./calendrier/calendrier.page').then( m => m.CalendrierPage)
  },
  {
    path: 'discussion',
    loadComponent: () => import('./messagerie/discussion/discussion.page').then( m => m.DiscussionPage)
  },
  {
    path: 'rapports',
    loadComponent: () => import('./rapports/rapports.page').then( m => m.RapportsPage)
  },
  {
    path: 'detail-projet/:id',
    loadComponent: () => import('./projets/detail-projet/detail-projet.page').then( m => m.DetailProjetPage)
  },
  {
    path: 'creation-projet',
    loadComponent: () => import('./projets/creation-projet/creation-projet.page').then( m => m.CreationProjetPage)
  },
  {
    path: 'detail-tache/:id',
    loadComponent: () => import('./taches/detail-tache/detail-tache.page').then( m => m.DetailTachePage)
  },
  {
    path: 'creation-tache',
    loadComponent: () => import('./taches/creation-tache/creation-tache.page').then( m => m.CreationTachePage)
  },
  {
    path: 'detail-utilisateur',
    loadComponent: () => import('./utilisateurs/detail-utilisateur/detail-utilisateur.page').then( m => m.DetailUtilisateurPage)
  },
  {
    path: 'creation-ressource',
    loadComponent: () => import('./ressources/creation-ressource/creation-ressource.page').then( m => m.CreationRessourcePage)
  },
  {
    path: 'tableau-de-bord',
    loadComponent: () => import('./tableau-de-bord/tableau-de-bord.page').then( m => m.TableauDeBordPage)
  },
];
