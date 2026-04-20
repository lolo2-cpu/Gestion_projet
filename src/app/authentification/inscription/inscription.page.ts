import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonInput, IonButton, IonItem, IonLabel, IonBackButton } from '@ionic/angular/standalone';
import { UtilisateurService } from '../../coeur/services/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonInput, IonButton, IonItem, IonLabel, IonBackButton]
})
export class InscriptionPage implements OnInit {

  user = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  messageErreur = '';
  messageSucces = '';

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.utilisateurService.chargerUtilisateurs();
  }

  async onSubmit() {
    this.messageErreur = '';
    this.messageSucces = '';

    // Validation des champs
    if (!this.user.nom || !this.user.prenom || !this.user.email || !this.user.password) {
      this.messageErreur = 'Tous les champs sont obligatoires.';
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      this.messageErreur = 'Les mots de passe ne correspondent pas.';
      return;
    }

    if (this.user.password.length < 6) {
      this.messageErreur = 'Le mot de passe doit contenir au moins 6 caractères.';
      return;
    }

    // Tentative d'inscription
    const succes = await this.utilisateurService.inscrireUtilisateur(this.user);

    if (succes) {
      this.messageSucces = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
      // Redirection vers la page de connexion après 2 secondes
      setTimeout(() => {
        this.router.navigate(['/connexion']);
      }, 2000);
    } else {
      this.messageErreur = 'Cet email est déjà utilisé.';
    }
  }
}
