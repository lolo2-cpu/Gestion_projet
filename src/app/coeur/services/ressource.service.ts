import { Injectable } from '@angular/core';
import { DonneesJsonService } from './donnees-json.service';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  ressources: any[] = [];

  constructor(private dataService: DonneesJsonService) {}

  async chargerRessources() {
    this.ressources = await this.dataService.chargerFichier('ressources.json');
  }

  getRessources() {
    return this.ressources;
  }

  ajouterRessource(ressource: any) {
    ressource.id = Date.now();
    this.ressources.push(ressource);
    this.sauvegarder();
  }

  supprimerRessource(id: number) {
    this.ressources = this.ressources.filter(r => r.id !== id);
    this.sauvegarder();
  }

  private sauvegarder() {
    // Logique de sauvegarde si nécessaire
    console.log('Ressources sauvegardées:', this.ressources);
  }
}