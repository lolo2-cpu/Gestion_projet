import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TacheService } from 'src/app/coeur/services/tache.service';
import { sharedImports } from '../../share.imports';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.page.html',
  styleUrls: ['./liste-taches.page.scss'],
  standalone: true,
  imports: sharedImports
})
export class ListeTachesPage implements OnInit {

  taches: any[] = [];
  currentFilter = 'Toutes';

  constructor(private tacheService: TacheService) {}

  async ngOnInit() {
    await this.tacheService.chargerTaches();
    this.taches = this.tacheService.taches;
    this.applyFilter(this.currentFilter);
  }

  applyFilter(filter: string) {
    this.currentFilter = filter;

    if (filter === 'Toutes') {
      this.taches = this.tacheService.taches;
      return;
    }

    const statut = filter === 'En cours' ? 'En cours' : 'Terminée';
    this.taches = this.tacheService.taches.filter(t => t.statut === statut);
  }

  supprimer(id: number) {
    this.tacheService.taches = this.tacheService.taches.filter(t => t.id !== id);
    this.applyFilter(this.currentFilter);
    this.tacheService.sauvegarder();
  }
}
