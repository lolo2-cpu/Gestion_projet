import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RapportService } from 'src/app/coeur/services/rapport.service';
@Component({
  selector: 'app-rapports',
   template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Rapports</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      Taux réalisation projet 1 :
      {{ taux }} %
    </ion-content>
  `,
  styleUrls: ['./rapports.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RapportsPage  {

  taux = 0;

  constructor(private rapportService: RapportService) {}

  calculer(projetId: number) {
    this.taux = this.rapportService.calculerTauxRealisation(projetId);
  }
}
