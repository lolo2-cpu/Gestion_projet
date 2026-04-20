import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, RouterLink],
})
export class HomePage implements OnInit {

  constructor() {
    console.log('HomePage constructor - Composant créé');
  }

  ngOnInit() {
    console.log('HomePage ngOnInit - Page initialisée');
  }
}
