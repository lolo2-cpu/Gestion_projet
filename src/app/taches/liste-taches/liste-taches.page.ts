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

  constructor(private tacheService: TacheService) {}

  async ngOnInit() {
    await this.tacheService.chargerTaches();
    this.taches = this.tacheService.taches;
  }
}
