import { Injectable } from '@angular/core';
import { TacheService } from './tache.service';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private tacheService: TacheService) {}

  calculerTauxRealisation(projetId: number): number {
    const taches = this.tacheService.getTachesParProjet(projetId);
    const total = taches.length;
    const terminees = taches.filter(t => t.statut === 'Terminé').length;

    if (total === 0) return 0;

    return Math.round((terminees / total) * 100);
  }
}
