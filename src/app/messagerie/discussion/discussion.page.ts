import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonAvatar, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonAvatar, IonInput, IonButton, CommonModule, FormsModule]
})
export class DiscussionPage implements OnInit {

  messages: any[] = [];
  nouveauMessage: string = '';

  constructor() { }

  ngOnInit() {
    // Charger les messages
    this.messages = [
      { auteur: 'Jean', contenu: 'Bonjour à tous !', heure: '10:30', avatar: 'assets/icon/default-avatar.png' },
      { auteur: 'Marie', contenu: 'Salut Jean !', heure: '10:32', avatar: 'assets/icon/default-avatar.png' }
    ];
  }

  envoyerMessage() {
    if (this.nouveauMessage.trim()) {
      this.messages.push({
        auteur: 'Vous',
        contenu: this.nouveauMessage,
        heure: new Date().toLocaleTimeString(),
        avatar: 'assets/icon/default-avatar.png'
      });
      this.nouveauMessage = '';
    }
  }
}
