import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { UtilisateurService } from 'src/app/coeur/services/utilisateur.service';
import { sharedImports } from '../../share.imports';
@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.page.html',
  styleUrls: ['./liste-utilisateurs.page.scss'],
  standalone: true,
  imports: sharedImports
})
export class ListeUtilisateursPage implements OnInit {

  utilisateurs: any[] = [];

  constructor(private utilisateurService: UtilisateurService) {}

  async ngOnInit() {
    await this.utilisateurService.chargerUtilisateurs();
    this.utilisateurs = this.utilisateurService.getUtilisateurs();
  }
}
