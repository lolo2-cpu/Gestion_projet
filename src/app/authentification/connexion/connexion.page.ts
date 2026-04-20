import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonItem, IonInput, IonButton, IonBackButton, IonLabel } from '@ionic/angular/standalone';
import { UtilisateurService } from '../../coeur/services/utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonItem, IonInput, IonButton, IonBackButton, IonLabel, CommonModule, FormsModule, RouterLink]
})
export class ConnexionPage implements OnInit {

  loginData = {
    email: '',
    password: ''
  };

  messageErreur = '';

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.utilisateurService.chargerUtilisateurs();
  }

  onLogin() {
    this.messageErreur = '';

    if (!this.loginData.email || !this.loginData.password) {
      this.messageErreur = 'Veuillez saisir votre email et mot de passe.';
      return;
    }

    // Tentative de connexion
    const utilisateur = this.utilisateurService.connecterUtilisateur(this.loginData.email, this.loginData.password);

    if (utilisateur) {
      // Connexion réussie
      console.log('Connexion réussie:', utilisateur);
      this.router.navigate(['/tableau-de-bord']);
    } else {
      this.messageErreur = 'Email ou mot de passe incorrect.';
    }
  }
}
