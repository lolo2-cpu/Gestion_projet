import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/coeur/services/projet.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem , IonSelectOption} from '@ionic/angular/standalone';
import { sharedImports } from '../../share.imports';

@Component({
  selector: 'app-creation-projet',
  templateUrl: './creation-projet.page.html',
  styleUrls: ['./creation-projet.page.scss'],
  standalone: true,
 imports: sharedImports,
})
export class CreationProjetPage {

  projet: any = {};

  constructor(
    private projetService: ProjetService,
    private router: Router
  ) {}

  sanitizeBudget(event: any) {
    const value = event?.detail?.value ?? event?.target?.value ?? '';
    const normalized = String(value).replace(/[^0-9.]/g, '');
    const parts = normalized.split('.');
    this.projet.budget = parts.length > 1
      ? `${parts[0]}.${parts.slice(1).join('').slice(0, 2)}`
      : parts[0];
  }

  isBudgetValid(): boolean {
    const budget = String(this.projet.budget ?? '').trim();
    return budget !== '' && /^\d+(?:\.\d+)?$/.test(budget) && Number(budget) >= 0;
  }

  isFormValid(): boolean {
    return !!this.projet.nom?.toString().trim() && this.isBudgetValid();
  }

  ajouter() {
    if (!this.isFormValid()) {
      return;
    }

    this.projet.budget = Number(this.projet.budget);
    if (!this.projet.statut) {
      this.projet.statut = 'En cours';
    }

    this.projetService.ajouterProjet(this.projet);
    this.router.navigate(['/liste-projets']);
  }
}
