import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/coeur/services/projet.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem , IonSelectOption} from '@ionic/angular/standalone';

@Component({
  selector: 'app-creation-projet',
  templateUrl: './creation-projet.page.html',
  styleUrls: ['./creation-projet.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonSelectOption, CommonModule, FormsModule]
})
export class CreationProjetPage {

  projet: any = {};

  constructor(
    private projetService: ProjetService,
    private router: Router
  ) {}

  ajouter() {
    this.projetService.ajouterProjet(this.projet);
    this.router.navigate(['/projets/liste-projets']);
  }
}
