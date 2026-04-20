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
      // Vérifier si l'email existe déjà
      const utilisateurExistant = this.utilisateurs.find(u => u.email === nouvelUtilisateur.email);
      if (utilisateurExistant) {
        return false; // Email déjà utilisé
      }

      // Générer un nouvel ID
      const nouvelId = Math.max(...this.utilisateurs.map(u => u.id), 0) + 1;

      // Créer le nouvel utilisateur
      const utilisateur = {
        id: nouvelId,
        nom: nouvelUtilisateur.nom,
        prenom: nouvelUtilisateur.prenom,
        email: nouvelUtilisateur.email,
        role: 'Utilisateur', // Rôle par défaut
        avatar: 'assets/icon/default-avatar.png'
      };

      // Ajouter à la liste
      this.utilisateurs.push(utilisateur);

      // Sauvegarder dans le fichier JSON (simulation)
      console.log('Nouvel utilisateur inscrit:', utilisateur);
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      return false;
    }
  }

  connecterUtilisateur(email: string, password: string): any | null {
    // Pour cette démo, on simule une connexion simple
    // En réalité, il faudrait vérifier le mot de passe hashé
    const utilisateur = this.utilisateurs.find(u => u.email === email);

    if (utilisateur) {
      // Simuler une connexion réussie
      localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateur));
      return utilisateur;
    }

    return null;
  }

  deconnecterUtilisateur() {
    localStorage.removeItem('utilisateurConnecte');
  }

  getUtilisateurConnecte(): any | null {
    const utilisateurStr = localStorage.getItem('utilisateurConnecte');
    return utilisateurStr ? JSON.parse(utilisateurStr) : null;
  }
}
