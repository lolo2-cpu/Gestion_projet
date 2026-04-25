import { Injectable } from '@angular/core';
import { DonneesJsonService } from './donnees-json.service';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  taches: any[] = [];

  constructor(private dataService: DonneesJsonService) {}

  async chargerTaches() {
    this.taches = await this.dataService.chargerFichier('taches.json');
  }

  getTachesParProjet(projetId: number) {
    return this.taches.filter(t => t.projetId === projetId);
  }

  getTacheById(id: number) {
    return this.taches.find(t => t.id === id);
  }

  ajouterTache(tache: any) {
    tache.id = Date.now();
    this.taches.push(tache);
    this.sauvegarder();
  }

  sauvegarder() {
    localStorage.setItem('taches', JSON.stringify(this.taches));
  }
}
