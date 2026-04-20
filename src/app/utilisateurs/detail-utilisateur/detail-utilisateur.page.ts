import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.page.html',
  styleUrls: ['./detail-utilisateur.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailUtilisateurPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
