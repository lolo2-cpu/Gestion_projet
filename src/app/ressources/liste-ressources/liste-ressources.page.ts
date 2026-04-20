import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RessourceService } from '../../coeur/services/ressource.service';

@Component({
  selector: 'app-liste-ressources',
  templateUrl: './liste-ressources.page.html',
  styleUrls: ['./liste-ressources.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, CommonModule, FormsModule]
})
export class ListeRessourcesPage implements OnInit {

  ressources: any[] = [];

  constructor(private ressourceService: RessourceService) { }

  async ngOnInit() {
    await this.ressourceService.chargerRessources();
    this.ressources = this.ressourceService.getRessources();
  }
}
