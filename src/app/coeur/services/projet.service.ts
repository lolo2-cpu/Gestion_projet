
import { Injectable } from '@angular/core';
import { DonneesJsonService } from './donnees-json.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  projets: any[] = [];

  constructor(private dataService: DonneesJsonService) {}

  async chargerProjets() {
    const stored = localStorage.getItem('projets');
    if (stored) {
      this.projets = JSON.parse(stored);
      return;
    }
    this.projets = await this.dataService.chargerFichier('projets.json');
    this.sauvegarder();
  }

  getProjets() {
    return this.projets;
  }

  getProjetById(id: number) {
    return this.projets.find(p => p.id === id);
  }

  ajouterProjet(projet: any) {
    projet.id = Date.now();
    this.projets.push(projet);
    this.sauvegarder();
  }

  supprimerProjet(id: number) {
    this.projets = this.projets.filter(p => p.id !== id);
    this.sauvegarder();
  }

  sauvegarder() {
    localStorage.setItem('projets', JSON.stringify(this.projets));
  }

  chargerDepuisLocalStorage() {
    const data = localStorage.getItem('projets');
    if (data) {
      this.projets = JSON.parse(data);
    }
  }
}