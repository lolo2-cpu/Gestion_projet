import { Injectable } from '@angular/core';
import { DonneesJsonService } from './donnees-json.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateurs: any[] = [];

  constructor(private dataService: DonneesJsonService) {}

  async chargerUtilisateurs() {
    this.utilisateurs = await this.dataService.chargerFichier('utilisateurs.json');
  }

  getUtilisateurs() {
    return this.utilisateurs;
  }

  async inscrireUtilisateur(nouvelUtilisateur: any): Promise<boolean> {
  try {
    const utilisateurExistant = this.utilisateurs.find(u => u.email === nouvelUtilisateur.email);
    if (utilisateurExistant) {
      return false; // Email déjà utilisé
    }

    const nouvelId = Math.max(...this.utilisateurs.map(u => u.id), 0) + 1;

    const utilisateur = {
      id: nouvelId,
      nom: nouvelUtilisateur.nom,
      prenom: nouvelUtilisateur.prenom,
      email: nouvelUtilisateur.email,
      password: nouvelUtilisateur.password, // <-- Sauvegarde du mot de passe
      role: 'Utilisateur',
      avatar: 'assets/icon/default-avatar.png'
    };

    this.utilisateurs.push(utilisateur);
    // Sauvegarde dans "utilisateurs.json" simulé avec localStorage
  await this.dataService.sauvegarderFichier('utilisateurs.json', this.utilisateurs);

  return true;

    // Ici tu pourrais appeler ton DonneesJsonService pour persister
    // await this.dataService.sauvegarderFichier('utilisateurs.json', this.utilisateurs);

    console.log('Nouvel utilisateur inscrit:', utilisateur);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    return false;
  }
}

connecterUtilisateur(email: string, password: string): any | null {
  const utilisateur = this.utilisateurs.find(
    u => u.email === email && u.password === password // <-- Vérification du mot de passe
  );

  if (utilisateur) {
    // Compatibilité avec anciens comptes sans mot de passe
    if (!utilisateur.password || utilisateur.password === password) {
      localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateur));
      return utilisateur;
    }
  }
  return null;
}

}
